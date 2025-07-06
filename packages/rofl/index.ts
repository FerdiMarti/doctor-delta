import { ethers } from 'ethers';
import * as dotenv from 'dotenv';
import { fundingFeeAmountPerSizeKey } from './utils';
import { datastoreAbi } from './abis/datastore.ts';
import { doctorDeltaAbi } from './abis/DoctorDeltaVault.ts';
import { eulerUtilsLensAbi } from './abis/UtilsLens.ts';

dotenv.config();

const GMC_FUNDING_RATE_DECIMALS = 32;
const EULER_APY_DECIMALS = 25;
const PERC_PRECISION = 5;

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
    useLocalHardhatNode: boolean;
    localRpcUrl?: string;
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

        // Initialize Ethereum provider - use local hardhat node if flag is set, otherwise use Alchemy
        if (config.useLocalHardhatNode) {
            const rpcUrl = config.localRpcUrl || 'http://localhost:8545';
            this.provider = new ethers.JsonRpcProvider(rpcUrl);
            console.log(`🔧 Using local hardhat node at: ${rpcUrl}`);
        } else {
            this.provider = new ethers.AlchemyProvider(42161, config.alchemyApiKey);
            console.log(`🔧 Using Alchemy provider for Arbitrum`);
        }

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
        const apyDiffPercentage = Number(apyDiff / 10n ** BigInt(EULER_APY_DECIMALS - PERC_PRECISION)) / 10 ** PERC_PRECISION;
        const normalizedFundingRate = fundingRate / 10n ** BigInt(GMC_FUNDING_RATE_DECIMALS - EULER_APY_DECIMALS);
        const normalizedFundingRatePercentage =
            Number(normalizedFundingRate / 10n ** BigInt(EULER_APY_DECIMALS - PERC_PRECISION)) / 10 ** PERC_PRECISION;

        console.log(`\nAnalyzing data:`);
        console.log(`APY diff: ${apyDiffPercentage}%`);
        console.log(`Normalized funding rate: ${normalizedFundingRate}`);
        console.log(`Normalized funding rate percentage: ${normalizedFundingRatePercentage}%`);

        if (apyDiff + normalizedFundingRate > supplyAPY) {
            return Strategy.SUPPLY_BORROW_HEDGE;
        } else {
            return Strategy.SUPPLY;
        }
    }

    /**
     * Execute the smart contract function based on the decision
     */
    private async executeContractAction(action: Strategy): Promise<ethers.ContractTransactionResponse | null> {
        try {
            console.log(`\nExecuting action: ${action}`);

            let transaction: ethers.ContractTransactionResponse;

            const currentState = await this.contract.strategyState();

            switch (action) {
                case Strategy.SUPPLY:
                    if (currentState == 0) return null;
                    transaction = await this.contract.rebalanceToNeutral();
                    break;

                case Strategy.SUPPLY_BORROW_HEDGE:
                    if (currentState == 1) return null;
                    transaction = await this.contract.executeLeveragedStrategy();
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
    contractAddress: process.env.DOCTOR_DELTA_VAULT_ADDRESS || '',
    privateKey: process.env.PRIVATE_KEY || '',
    gmxDataStoreAddress: datastoreAbi.address,
    eulerWethVaultAddress: '0x78E3E051D32157AACD550fBB78458762d8f7edFF', //WETH
    eulerUsdcVaultAddress: '0x0a1eCC5Fe8C9be3C809844fcBe615B46A869b899', //USDC
    eulerUtilsLens: '0x2a99a89d820D50b4Ec947679A2d55Dc39600FdB5',
    gmxMarket: '0x70d95587d40A2caf56bd97485aB3Eec10Bee6336', //WETH/USDC
    wethToken: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', //WETH
    usdcToken: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    useLocalHardhatNode: process.env.USE_LOCAL_HARDHAT_NODE === 'true',
    localRpcUrl: process.env.LOCAL_RPC_URL || 'http://localhost:8545',
};

// Validate configuration
function validateConfig(config: OracleConfig): void {
    const required = ['contractAddress', 'privateKey'];

    // Only require alchemyApiKey if not using local hardhat node
    if (!config.useLocalHardhatNode) {
        required.push('alchemyApiKey');
    }

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

        validateConfig(oracleConfig);

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
