import { IERC20 } from '../typechain-types';
import { USED_CONTRACTS } from './contracts';

export async function getUSDC(recipient: string, amount: bigint) {
    // Get USDC contract instance
    const usdc = (await ethers.getContractAt('@openzeppelin/contracts/token/ERC20/IERC20.sol:IERC20', USED_CONTRACTS.USDC)) as unknown as IERC20;

    // Impersonate the whale account
    await network.provider.request({
        method: 'hardhat_impersonateAccount',
        params: [USED_CONTRACTS.USDC_WHALE],
    });

    // Get the whale signer
    const whaleSigner = await ethers.getSigner(USED_CONTRACTS.USDC_WHALE);

    // Fund the whale with ETH to pay for gas
    await network.provider.send('hardhat_setBalance', [
        USED_CONTRACTS.USDC_WHALE,
        '0x' + (1n * 10n ** 18n).toString(16), // 1 ETH
    ]);

    // Transfer USDC from whale to recipient
    await usdc.connect(whaleSigner).transfer(recipient, amount);

    // Stop impersonating the whale
    await network.provider.request({
        method: 'hardhat_stopImpersonatingAccount',
        params: [USED_CONTRACTS.USDC_WHALE],
    });
}
