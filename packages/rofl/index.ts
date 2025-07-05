import { ethers } from 'ethers';
import * as dotenv from 'dotenv';
import { fundingFeeAmountPerSizeKey } from './utils';
import { datastoreAbi } from './abis/datastore.ts';
import { doctorDeltaAbi } from './abis/doctor-delta.ts';

dotenv.config();

interface OracleConfig {
    intervalSeconds: number;
    alchemyApiKey: string;
    contractAddress: string;
    privateKey: string;
    gmxDataStoreAddress: string;
    eulerLabsVaultAddress: string;
    gmxMarket: string;
    gmxCollateralToken: string;
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

    // /**
    //  * Fetch APY and funding rates from Solidity contracts
    //  */
    // private async fetchWeb3Data(contractAddress: string, exchangeName: string): Promise<ExchangeData> {
    //     try {
    //         console.log(`Fetching data from ${exchangeName} contract: ${contractAddress}`);

    //         // Generic contract ABI for fetching APY and funding rate
    //         const contractAbi = ['function getAPY() external view returns (uint256)', 'function getFundingRate() external view returns (int256)'];

    //         const exchangeContract = new ethers.Contract(contractAddress, contractAbi, this.provider);

    //         // Fetch data from contract
    //         const [apy, fundingRate] = await Promise.all([exchangeContract.getAPY(), exchangeContract.getFundingRate()]);

    //         return {
    //             name: exchangeName,
    //             apy: parseFloat(ethers.formatEther(apy)),
    //             fundingRate: parseFloat(ethers.formatEther(fundingRate)),
    //         };
    //     } catch (error) {
    //         console.error(`Error fetching data from ${exchangeName} contract:`, error);
    //         throw new Error(`Failed to fetch data from ${exchangeName} contract: ${error}`);
    //     }
    // }

    private async fetchGmxFundingRate() {
        const dataStore = new ethers.Contract(datastoreAbi.address, datastoreAbi.abi, this.provider);
        const key = fundingFeeAmountPerSizeKey(this.config.gmxMarket, this.config.gmxCollateralToken, true);
        const fundingFeeAmountPerSize = await dataStore.getUint(key);

        return fundingFeeAmountPerSize;
    }

    /**
     * Compare the data from two exchanges and make a decision
     */
    // private analyzeData(exchange1: ExchangeData, exchange2: ExchangeData): Strategy {
    //     const apyDiff = exchange1.apy - exchange2.apy;
    //     const fundingRateDiff = exchange1.fundingRate - exchange2.fundingRate;

    //     console.log(`\nAnalyzing data:`);
    //     console.log(`${exchange1.name} - APY: ${exchange1.apy}%, Funding Rate: ${exchange1.fundingRate}%`);
    //     console.log(`${exchange2.name} - APY: ${exchange2.apy}%, Funding Rate: ${exchange2.fundingRate}%`);
    //     console.log(`APY Difference: ${apyDiff}%`);
    //     console.log(`Funding Rate Difference: ${fundingRateDiff}%`);

    //     // Decision logic (customize based on your strategy)
    //     if (apyDiff > 2.0 && fundingRateDiff < -0.5) {
    //         action = 'buy';
    //         reason = `${exchange1.name} offers significantly higher APY (${apyDiff}%) with lower funding costs`;
    //     } else if (apyDiff < -2.0 && fundingRateDiff > 0.5) {
    //         action = 'sell';
    //         reason = `${exchange2.name} offers significantly higher APY with ${exchange1.name} having higher funding costs`;
    //     } else if (Math.abs(apyDiff) > 1.5) {
    //         action = Math.abs(apyDiff) > 3.0 ? 'buy' : 'hold';
    //         reason = `Moderate APY difference (${apyDiff}%) detected`;
    //     } else {
    //         action = 'hold';
    //         reason = 'No significant arbitrage opportunity detected';
    //     }

    //     return {
    //         action,
    //         reason,
    //         data: {
    //             exchange1,
    //             exchange2,
    //             apyDiff,
    //             fundingRateDiff,
    //         },
    //     };
    // }

    /**
     * Execute the smart contract function based on the decision
     */
    private async executeContractAction(action: 'buy' | 'sell' | 'hold', data: any): Promise<ethers.ContractTransactionResponse | null> {
        try {
            console.log(`\nExecuting action: ${action}`);

            let transaction: ethers.ContractTransactionResponse;

            switch (action) {
                case 'buy':
                    // Call the buy function in your smart contract
                    // Adjust function name and parameters based on your contract
                    transaction = await this.contract.executeBuyStrategy(
                        ethers.parseEther(data.apyDiff.toString()),
                        ethers.parseEther(data.fundingRateDiff.toString()),
                    );
                    break;

                case 'sell':
                    // Call the sell function in your smart contract
                    transaction = await this.contract.executeSellStrategy(
                        ethers.parseEther(data.apyDiff.toString()),
                        ethers.parseEther(data.fundingRateDiff.toString()),
                    );
                    break;

                case 'hold':
                    // Call the hold/update function in your smart contract
                    transaction = await this.contract.updatePriceData(
                        ethers.parseEther(data.exchange1.apy.toString()),
                        ethers.parseEther(data.exchange2.apy.toString()),
                        ethers.parseEther(data.exchange1.fundingRate.toString()),
                        ethers.parseEther(data.exchange2.fundingRate.toString()),
                    );
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
            const fundingRate = await this.fetchGmxFundingRate();
            console.log(`Funding rate: ${fundingRate}`);
            // Analyze the data and determine action
            // const analysis = this.analyzeData(web2Data, web3Data);

            // console.log(`\nDecision: ${analysis.action.toUpperCase()}`);
            // console.log(`Reason: ${analysis.reason}`);

            // // Execute the action on the smart contract
            // const transaction = await this.executeContractAction(analysis.action, analysis.data);

            // if (transaction) {
            //     console.log(`✅ Oracle run completed successfully`);
            // } else {
            //     console.log(`ℹ️  Oracle run completed - no transaction required`);
            // }
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
    eulerLabsVaultAddress: process.env.EULER_LABS_VAULT_ADDRESS || '',
    gmxMarket: '0x70d95587d40A2caf56bd97485aB3Eec10Bee6336',
    gmxCollateralToken: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    //gmxUsdcToken: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
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
