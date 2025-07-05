import { ethers } from 'ethers';
import * as dotenv from 'dotenv';
import { fundingFeeAmountPerSizeKey } from './utils';
import { datastoreAbi } from './abis/datastore.ts';
import { doctorDeltaAbi } from './abis/doctor-delta.ts';
import { eulerUtilsLensAbi } from './abis/UtilsLens.ts';

dotenv.config();

interface OracleConfig {
    intervalSeconds: number;
    alchemyApiKey: string;
    contractAddress: string;
    privateKey: string;
    gmxDataStoreAddress: string;
    eulerWethVaultAddress: string;
    eulerUsdcVaultAddress: string;
    eulerUtilsLens: string;
    gmxMarket: string;
    wethToken: string;
    usdcToken: string;
}

enum Strategy {
    SUPPLY = 'SUPPLY',
    SUPPLY_BORROW_HEDGE = 'SUPPLY_BORROW_HEDGE',
}

class BlockchainOracle {
    private provider: ethers.Provider;
    private wallet: ethers.Wallet;
    private contract: ethers.Contract;
    private config: OracleConfig;

    constructor(config: OracleConfig) {
        this.config = config;

        // Initialize Ethereum provider via Alchemy
        this.provider = new ethers.AlchemyProvider(42161, config.alchemyApiKey);

        // Initialize wallet
        this.wallet = new ethers.Wallet(config.privateKey, this.provider);

        // Initialize contract
        this.contract = new ethers.Contract(config.contractAddress, doctorDeltaAbi.abi, this.wallet);
    }

    private async fetchGmxFundingRate() {
        const dataStore = new ethers.Contract(datastoreAbi.address, datastoreAbi.abi, this.provider);
        const key = fundingFeeAmountPerSizeKey(this.config.gmxMarket, this.config.wethToken, true);
        const fundingFeeAmountPerSize = await dataStore.getUint(key);

        return fundingFeeAmountPerSize;
    }

    private async fetchEulerApys() {
        const eulerUtilsLens = new ethers.Contract(this.config.eulerUtilsLens, eulerUtilsLensAbi, this.provider);
        const wethApys = await eulerUtilsLens.getAPYs(this.config.eulerWethVaultAddress);
        const usdcApys = await eulerUtilsLens.getAPYs(this.config.eulerUsdcVaultAddress);

        return {
            supplyAPY: usdcApys.supplyAPY,
            borrowAPY: wethApys.borrowAPY,
        };
    }

    /**
     * Compare the data from two exchanges and make a decision
     */
    private analyzeData(supplyAPY: bigint, borrowAPY: bigint, fundingRate: bigint): Strategy {
        const apyDiff = supplyAPY - borrowAPY;

        console.log(`\nAnalyzing data:`);
        console.log(`APY diff: ${apyDiff / 10n ** 25n}%`);

        // // Decision logic (customize based on your strategy)
        // if (apyDiff > 2.0 && fundingRateDiff < -0.5) {
        //     action = 'buy';
        //     reason = `${exchange1.name} offers significantly higher APY (${apyDiff}%) with lower funding costs`;
        // } else if (apyDiff < -2.0 && fundingRateDiff > 0.5) {
        //     action = 'sell';
        //     reason = `${exchange2.name} offers significantly higher APY with ${exchange1.name} having higher funding costs`;
        // } else if (Math.abs(apyDiff) > 1.5) {
        //     action = Math.abs(apyDiff) > 3.0 ? 'buy' : 'hold';
        //     reason = `Moderate APY difference (${apyDiff}%) detected`;
        // } else {
        //     action = 'hold';
        //     reason = 'No significant arbitrage opportunity detected';
        // }

        return Strategy.SUPPLY;
    }

    /**
     * Execute the smart contract function based on the decision
     */
    private async executeContractAction(action: Strategy): Promise<ethers.ContractTransactionResponse | null> {
        try {
            console.log(`\nExecuting action: ${action}`);

            let transaction: ethers.ContractTransactionResponse;

            switch (action) {
                case Strategy.SUPPLY:
                    transaction = await this.contract.executeSupplyStrategy();
                    break;

                case Strategy.SUPPLY_BORROW_HEDGE:
                    transaction = await this.contract.executeSupplyStrategy();
                    break;

                default:
                    console.log('No action required');
                    return null;
            }

            console.log(`Transaction sent: ${transaction.hash}`);

            // Wait for transaction confirmation
            const receipt = await transaction.wait();
            console.log(`Transaction confirmed in block ${receipt?.blockNumber}`);

            return transaction;
        } catch (error) {
            console.error('Error executing contract action:', error);
            throw error;
        }
    }

    /**
     * Main oracle loop - fetch data, analyze, and execute
     */
    public async runOracle(): Promise<void> {
        try {
            console.log(`\n=== Oracle Run - ${new Date().toISOString()} ===`);

            // Fetch data from both exchanges
            const [fundingRate, apys] = await Promise.all([this.fetchGmxFundingRate(), this.fetchEulerApys()]);

            console.log(`Funding rate: ${fundingRate}`);
            console.log(`USDC/WETH Lend APY: ${apys.supplyAPY}`);
            console.log(`WETH/USDC Borrow APY: ${apys.borrowAPY}`);

            //Analyze the data and determine action
            const action = this.analyzeData(apys.supplyAPY, apys.borrowAPY, fundingRate);

            console.log(`\nDecision: ${action.toUpperCase()}`);

            // Execute the action on the smart contract
            const transaction = await this.executeContractAction(action);

            if (transaction) {
                console.log(`✅ Oracle run completed successfully`);
            } else {
                console.log(`ℹ️  Oracle run completed - no transaction required`);
            }
        } catch (error) {
            console.error('❌ Oracle run failed:', error);
            throw error;
        }
    }

    /**
     * Start the oracle with configurable intervals
     */
    public startOracle(): void {
        console.log(`🚀 Starting Oracle with ${this.config.intervalSeconds} second intervals`);

        // Run immediately
        this.runOracle().catch(console.error);

        // Set up recurring execution
        setInterval(async () => {
            try {
                await this.runOracle();
            } catch (error) {
                console.error('Oracle iteration failed:', error);
            }
        }, this.config.intervalSeconds * 1000);
    }
}

const oracleConfig: OracleConfig = {
    intervalSeconds: parseInt(process.env.ORACLE_INTERVAL_SECONDS || '10'),
    alchemyApiKey: process.env.ALCHEMY_API_KEY || '',
    contractAddress: doctorDeltaAbi.address,
    privateKey: process.env.PRIVATE_KEY || '',
    gmxDataStoreAddress: datastoreAbi.address,
    eulerWethVaultAddress: '0x78E3E051D32157AACD550fBB78458762d8f7edFF', //WETH
    eulerUsdcVaultAddress: '0x0a1eCC5Fe8C9be3C809844fcBe615B46A869b899', //USDC
    eulerUtilsLens: '0x2a99a89d820D50b4Ec947679A2d55Dc39600FdB5',
    gmxMarket: '0x70d95587d40A2caf56bd97485aB3Eec10Bee6336', //WETH/USDC
    wethToken: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', //WETH
    usdcToken: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
};

// Validate configuration
function validateConfig(config: OracleConfig): void {
    const required = ['alchemyApiKey', 'contractAddress', 'privateKey'];
    const missing = required.filter(key => !config[key as keyof OracleConfig]);

    if (missing.length > 0) {
        console.error(`❌ Missing required configuration: ${missing.join(', ')}`);
        process.exit(1);
    }
}

// Main execution
async function main(): Promise<void> {
    try {
        console.log('🔧 Initializing Doctor Delta Oracle...');

        //validateConfig(oracleConfig);

        const oracle = new BlockchainOracle(oracleConfig);

        // Handle graceful shutdown
        process.on('SIGINT', () => {
            console.log('\n🛑 Received SIGINT. Shutting down gracefully...');
            process.exit(0);
        });

        process.on('SIGTERM', () => {
            console.log('\n🛑 Received SIGTERM. Shutting down gracefully...');
            process.exit(0);
        });

        // Start the oracle
        oracle.startOracle();
    } catch (error) {
        console.error('❌ Failed to start oracle:', error);
        process.exit(1);
    }
}

// Run the oracle if this file is executed directly
if (require.main === module) {
    main();
}
