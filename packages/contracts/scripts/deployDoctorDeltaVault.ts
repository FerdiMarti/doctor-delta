import { ethers } from 'hardhat';
import { USED_CONTRACTS } from './contracts';

async function main() {
    console.log('Starting DoctorDeltaVault deployment...');

    // Get the contract factory
    const DoctorDeltaVault = await ethers.getContractFactory('DoctorDeltaVault');

    // Get the deployer account
    const [deployer] = await ethers.getSigners();

    // Constructor parameters
    const constructorArgs: [string, string, string, string, string, string] = [
        USED_CONTRACTS.USDC, // _usdc
        USED_CONTRACTS.WETH, // _weth
        USED_CONTRACTS.EULER_ETOKEN_USDC, // _eTokenUSDC
        USED_CONTRACTS.EULER_DTOKEN_WETH, // _dTokenWETH
        USED_CONTRACTS.GMX_VAULT, // _gmx
        USED_CONTRACTS.ORACLE, // _oracle
    ];

    console.log('Constructor arguments:');
    console.log('  USDC:', USED_CONTRACTS.USDC);
    console.log('  WETH:', USED_CONTRACTS.WETH);
    console.log('  Euler eToken USDC:', USED_CONTRACTS.EULER_ETOKEN_USDC);
    console.log('  Euler dToken WETH:', USED_CONTRACTS.EULER_DTOKEN_WETH);
    console.log('  GMX Vault:', USED_CONTRACTS.GMX_VAULT);
    console.log('  Oracle:', USED_CONTRACTS.ORACLE);

    // Deploy the contract
    console.log('\nDeploying DoctorDeltaVault...');
    const doctorDeltaVault = await DoctorDeltaVault.deploy(...constructorArgs);

    // Wait for deployment
    await doctorDeltaVault.waitForDeployment();

    const vaultAddress = await doctorDeltaVault.getAddress();
    console.log('DoctorDeltaVault deployed to:', vaultAddress);

    // Log deployment info
    console.log('\n=== Deployment Summary ===');
    console.log('Contract Name: DoctorDeltaVault');
    console.log('Contract Address:', vaultAddress);
    console.log('Deployer:', deployer.address);
    console.log('Network:', await ethers.provider.getNetwork());
    console.log('Block Number:', await ethers.provider.getBlockNumber());

    // Verify initial state
    console.log('\n=== Initial Contract State ===');
    console.log('Asset (USDC):', await doctorDeltaVault.asset());
    console.log('Name:', await doctorDeltaVault.name());
    console.log('Symbol:', await doctorDeltaVault.symbol());
    console.log('Owner:', await doctorDeltaVault.owner());
    console.log('Strategy State:', await doctorDeltaVault.strategyState());
    console.log('Total Assets:', await doctorDeltaVault.totalAssets());
    console.log('Total Supply:', await doctorDeltaVault.totalSupply());

    return {
        vaultAddress,
        constructorArgs,
        deployer: deployer.address,
    };
}

// Execute the deployment
if (require.main === module) {
    main()
        .then(() => process.exit(0))
        .catch(error => {
            console.error('Deployment failed:', error);
            process.exit(1);
        });
}

export default main;
