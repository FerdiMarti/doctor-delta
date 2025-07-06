'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ArrowDown, DollarSign } from 'lucide-react';
import { Input } from './ui/input';
import { useState } from 'react';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { erc20Abi, formatUnits, parseUnits } from 'viem';
import { CONTRACTS } from '../lib/utils';
import { toast } from 'sonner';

export default function Component() {
    const [usdcAmount, setUsdcAmount] = useState('0');
    const { address } = useAccount();
    const [isLoading, setIsLoading] = useState<number | null>(null);

    // Transfer transaction
    const { writeContractAsync: transfer } = useWriteContract();
    const { data: balance } = useReadContract({
        abi: erc20Abi,
        address: CONTRACTS.USDC as `0x${string}`,
        functionName: 'balanceOf',
        args: [address as `0x${string}`],
    });

    const handleDeposit = async () => {
        if (!address || Number(usdcAmount) <= 0) return;

        setIsLoading(0);

        try {
            await transfer({
                abi: erc20Abi,
                address: CONTRACTS.USDC as `0x${string}`,
                functionName: 'transfer',
                args: [address as `0x${string}`, parseUnits(usdcAmount, 6)],
            });
            toast.success('Deposit successful');
        } catch (error) {
            toast.error('Deposit failed');
            console.error(error);
        } finally {
            setIsLoading(null);
        }
    };

    const handleWithdraw = async () => {
        if (!address || Number(usdcAmount) <= 0) return;

        setIsLoading(1);

        try {
            await transfer({
                abi: erc20Abi,
                address: CONTRACTS.USDC as `0x${string}`,
                functionName: 'transfer',
                args: [address as `0x${string}`, parseUnits(usdcAmount, 6)],
            });
            toast.success('Withdraw successful');
        } catch (error) {
            toast.error('Withdraw failed');
            console.error(error);
        } finally {
            setIsLoading(null);
        }
    };

    return (
        <div className="grid lg:grid-cols-2 gap-8">
            {/* Vault Section */}
            <Card className="p-6">
                <CardContent className="p-0">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Vault</h2>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Total Value Locked</p>
                            <p className="text-2xl font-bold text-gray-900">$ 4,200,069</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Estimated APY</p>
                            <p className="text-2xl font-bold text-gray-900">24,2% est.</p>
                        </div>
                    </div>

                    {/* USDC Selector */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg bg-gray-50">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-semibold text-gray-900">USDC</span>
                            <Input type="number" className="flex-1" value={usdcAmount} onChange={e => setUsdcAmount(e.target.value)} />
                        </div>
                        <p className="text-sm text-gray-600">Balance: {formatUnits(balance ?? 0n, 6)}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 mb-6">
                        <Button
                            onClick={handleDeposit}
                            disabled={isLoading !== null}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg font-semibold"
                        >
                            {isLoading === 0 ? 'Depositing...' : 'Deposit'}
                        </Button>
                        <Button
                            onClick={handleWithdraw}
                            disabled={isLoading !== null}
                            variant="outline"
                            className="w-full py-3 text-lg font-semibold bg-transparent"
                        >
                            {isLoading === 1 ? 'Withdrawing...' : 'Withdraw'}
                        </Button>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                        {
                            'Delta-neutral strategy: no directional ETH exposure - rebalances automatically when supply & borrow / funding rates change. Set & forget!'
                        }
                    </p>

                    {/* Current Strategy Rates */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Strategy Rates</h3>
                        <div className="grid grid-cols-1 gap-3">
                            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <img src="/euler-finance-logo.png" alt="Euler" className="w-5 h-5 object-contain" />
                                    <span className="text-sm font-medium text-gray-700">USDC Supply APY</span>
                                </div>
                                <span className="text-sm font-bold text-green-600">8.5%</span>
                            </div>

                            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <img src="/euler-finance-logo.png" alt="Euler" className="w-5 h-5 object-contain" />
                                    <span className="text-sm font-medium text-gray-700">WETH Borrow APY</span>
                                </div>
                                <span className="text-sm font-bold text-red-600">2.2%</span>
                            </div>

                            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <img src="/gmx-logo.png" alt="GMX" className="w-5 h-5 object-contain" />
                                    <span className="text-sm font-medium text-gray-700">ETH Funding Rate</span>
                                </div>
                                <span className="text-sm font-bold text-blue-600">15.8%</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Vault Simulation Section */}
            <Card className="p-6">
                <CardContent className="p-0">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Doctor Delta Overview</h2>

                    <div className="flex flex-col items-center space-y-2">
                        {/* Step 0: User Deposits into Vault */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 flex items-center justify-center mb-1">
                                <img src="/penguin-deposit.png" alt="Penguin Depositing USDC" className="w-20 h-20 object-contain" />
                            </div>
                            <p className="text-sm font-semibold text-gray-900 text-center mb-0">You deposit USDC</p>
                            <p className="text-xs text-gray-600 mb-0">into Doctor Delta Vault</p>
                        </div>

                        <ArrowDown className="w-3 h-3 text-black" />

                        {/* Oracle Step - Lateral to main flow */}
                        <div className="flex items-center gap-4 w-full justify-center">
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 flex items-center justify-center mb-1">
                                    <img src="/oracle-penguin.png" alt="Oracle Penguin" className="w-24 h-24 object-contain" />
                                </div>
                                <p className="text-xs font-semibold text-gray-900 text-center mb-0">Oracle gathers data</p>
                                <p className="text-xs text-gray-600 mb-0">triggers strategy</p>
                            </div>

                            <div className="flex flex-col items-center"></div>
                        </div>

                        {/* Step 1: Euler Finance */}
                        <div className="flex items-center gap-2 w-full justify-center">
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 flex items-center justify-center mb-1">
                                    <img src="/euler-finance-logo.png" alt="Euler Finance" className="w-12 h-12 object-contain" />
                                </div>
                                <p className="text-xs font-semibold text-gray-900 text-center mb-0">Deposit USDC on Euler</p>
                                <div className="mt-1 px-2 py-0.5 bg-green-100 rounded-full">
                                    <span className="text-xs font-bold text-green-700">+8.5% APY</span>
                                </div>
                            </div>

                            <ArrowRight className="w-4 h-4 text-black" />

                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-1 relative">
                                    <div className="w-8 h-8 bg-blue-400 rounded"></div>
                                    <div className="w-6 h-6 bg-orange-400 rounded-full absolute -top-1 -right-1 flex items-center justify-center">
                                        <div className="w-3 h-3 bg-white transform rotate-45"></div>
                                    </div>
                                </div>
                                <p className="text-xs font-semibold text-gray-900 text-center mb-0">Borrow WETH against USDC</p>
                                <div className="mt-1 px-2 py-0.5 bg-red-100 rounded-full">
                                    <span className="text-xs font-bold text-red-700">-2.2% APY</span>
                                </div>
                            </div>
                        </div>

                        <ArrowDown className="w-3 h-3 text-black" />

                        {/* Step 2: GMX */}
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-1 relative border border-gray-200">
                                <img src="/gmx-logo.png" alt="GMX" className="w-10 h-10 object-contain" />
                                <div className="w-4 h-4 bg-orange-400 rounded-full absolute -bottom-1 -right-1"></div>
                            </div>
                            <p className="text-xs font-semibold text-gray-900 text-center mb-0">Long ETH to collect funding</p>
                            <div className="mt-1 px-2 py-0.5 bg-blue-100 rounded-full">
                                <span className="text-xs font-bold text-blue-700">+15.8% APY</span>
                            </div>
                        </div>

                        <ArrowDown className="w-3 h-3 text-black" />

                        {/* Step 3: Result */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 flex items-center justify-center mb-1">
                                <img src="/relaxed-penguin.png" alt="Relaxed Penguin Doctor" className="w-24 h-24 object-contain" />
                            </div>
                            <p className="text-sm font-bold text-gray-900 text-center mb-0">Earn dual-yield all delta-neutral</p>
                            <div className="mt-2 px-3 py-1 bg-green-200 rounded-lg">
                                <span className="text-sm font-bold text-green-800">+13.45% Net APY</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
