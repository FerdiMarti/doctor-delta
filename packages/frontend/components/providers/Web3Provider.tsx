'use client';

import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fallback, injected, unstable_connector, WagmiProvider } from 'wagmi';
import { base } from 'wagmi/chains';
import { metaMaskWallet, phantomWallet } from '@rainbow-me/rainbowkit/wallets';
import '@rainbow-me/rainbowkit/styles.css';
import { ReactNode } from 'react';

const config = getDefaultConfig({
    chains: [base],
    ssr: true,
    appName: 'Doctor Delta',
    projectId: 'NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID',
    wallets: [
        {
            groupName: 'Wallets',
            wallets: [metaMaskWallet, phantomWallet],
        },
    ],
    transports: {
        [base.id]: fallback([unstable_connector(injected)]),
    },
});

const queryClient = new QueryClient();

export function Web3Provider({ children }: { children: ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>{children}</RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
