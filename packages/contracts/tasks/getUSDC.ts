import { task, types } from 'hardhat/config';
import { getUSDC } from '../scripts/getUSDC';

task('get-usdc', 'Get USDC tokens for testing')
    .addOptionalParam('address', 'The address to receive USDC (defaults to Account #0)', undefined, types.string)
    .addParam('amount', 'Amount of USDC to get (in USDC units, not wei)', undefined, types.int)
    .setAction(async taskArgs => {
        const { amount } = taskArgs;

        // Get Account #0 if no address is provided
        const signers = await ethers.getSigners();
        const recipient = taskArgs.address || signers[0].address;

        // Convert amount to bigint (USDC has 6 decimals)
        const usdcAmount = BigInt(amount) * 10n ** 6n;

        await getUSDC(recipient, usdcAmount);

        console.log(`Successfully transferred ${amount} USDC to ${recipient}${!taskArgs.address ? ' (Account #0)' : ''}`);
    });
