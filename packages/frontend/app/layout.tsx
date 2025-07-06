import type { Metadata } from 'next';
import './globals.css';
import { Web3Provider } from '@/components/providers/Web3Provider';

export const metadata: Metadata = {
    title: 'Doctor Delta',
    description: 'Doctor Delta',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Web3Provider>{children}</Web3Provider>
            </body>
        </html>
    );
}
