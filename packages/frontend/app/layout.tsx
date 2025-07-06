import type { Metadata } from 'next';
import './globals.css';
import { Web3Provider } from '@/components/providers/Web3Provider';
import Link from 'next/link';
import { ConnectButton } from '@/components/ConnectButton';
import { Toaster } from '@/components/ui/sonner';

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
                <Web3Provider>
                    <div className="min-h-screen p-6 bg-[rgba(248,241,230,1)]">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <img src="/doctor-delta-logo.png" alt="Doctor Delta Logo" className="w-20 h-20 object-contain" />
                                    <h1 className="text-4xl font-bold text-gray-900">Doctor Delta</h1>
                                </div>

                                <nav className="flex items-center gap-8">
                                    <Link href="/" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                                        Home
                                    </Link>
                                    {/* <Link href="/portfolio" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                            Portfolio
                        </Link> */}
                                    <Link
                                        href="/strategy-simulation"
                                        className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                                    >
                                        Strategy Simulation
                                    </Link>
                                    <ConnectButton />
                                </nav>
                            </div>
                            {children}
                        </div>
                    </div>
                    <Toaster />
                </Web3Provider>
            </body>
        </html>
    );
}
