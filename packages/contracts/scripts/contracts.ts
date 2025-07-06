type AddressTypes = {
    USDC: string;
    USDC_WHALE: string;
    WETH: string;
    EULER_ETOKEN_USDC: string;
    EULER_DTOKEN_WETH: string;
    GMX_VAULT: string;
    ORACLE: string;
};

export const CONTRACT_ADDRESSES: {
    [chain: string]: {
        mainnet: AddressTypes;
        testnet?: AddressTypes;
    };
} = {
    ARBITRUM: {
        mainnet: {
            USDC: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
            USDC_WHALE: '0x2Df1c51E09aECF9cacB7bc98cB1742757f163dF7',
            WETH: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
            EULER_ETOKEN_USDC: '0x797DD80692c3b2dAdabCe8e30C07fDE5307D48a9', // Euler eUSDC on Arbitrum
            EULER_DTOKEN_WETH: '0x68d9b4C6ea7d4b8B13e93C7c3B6f1e2B8c0b8C0D', // Placeholder - update with actual address
            GMX_VAULT: '0x489ee077994B6658eAfA855C308275EAd8097C4A', // GMX Vault on Arbitrum
            ORACLE: '0x0000000000000000000000000000000000000000', // Placeholder - update with actual oracle address
        },
    },
};

export const USED_CONTRACTS = CONTRACT_ADDRESSES.ARBITRUM.mainnet;
