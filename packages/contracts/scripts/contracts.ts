type AddressTypes = {
    USDC: string;
    USDC_WHALE: string;
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
        },
    },
};

export const USED_CONTRACTS = CONTRACT_ADDRESSES.ARBITRUM.mainnet;
