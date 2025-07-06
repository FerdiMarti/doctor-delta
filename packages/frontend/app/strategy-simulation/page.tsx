'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function StrategySimulation() {
    const [usdcSupplyAPY, setUsdcSupplyAPY] = useState(8.5);
    const [wethBorrowAPY, setWethBorrowAPY] = useState(12.2);
    const [ethFundingRate, setEthFundingRate] = useState(15.8);

    // Calculate if strategy is profitable with proper leverage
    const supplyYield = 1.0 * usdcSupplyAPY; // 100% of deposit earns supply yield
    const borrowCost = 0.5 * wethBorrowAPY; // Only 50% is borrowed due to collateral requirements
    const fundingYield = 0.5 * ethFundingRate; // 50% position size for funding
    const netAPY = supplyYield + fundingYield - borrowCost;
    const isProfitable = netAPY > usdcSupplyAPY; // Strategy must beat simple USDC supply

    return (
        <div className="min-h-screen p-6 bg-[rgba(248,241,230,1)]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <img src="/doctor-delta-logo.png" alt="Doctor Delta Logo" className="w-20 h-20 object-contain" />
                        <h1 className="text-4xl font-bold text-gray-900">Doctor Delta</h1>
                    </div>

                    <nav className="flex items-center gap-8">
                        <Link href="/" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                            Home
                        </Link>
                        <Link href="/portfolio" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                            Portfolio
                        </Link>
                        <Link href="/strategy-simulation" className="text-lg font-semibold text-blue-600 border-b-2 border-blue-600">
                            Strategy Simulation
                        </Link>
                    </nav>
                </div>

                {/* Back Button */}
                <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Vault
                </Link>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Controls Section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Strategy Parameters</h2>

                        {/* USDC Supply APY */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <img src="/euler-finance-logo.png" alt="Euler Finance" className="w-8 h-8 object-contain" />
                                    USDC Supply APY on Euler
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">-30%</span>
                                        <span className="text-2xl font-bold text-green-600">{usdcSupplyAPY.toFixed(1)}%</span>
                                        <span className="text-sm text-gray-600">30%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="-30"
                                        max="30"
                                        step="0.1"
                                        value={usdcSupplyAPY}
                                        onChange={e => setUsdcSupplyAPY(Number.parseFloat(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* WETH Borrow APY */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <img src="/euler-finance-logo.png" alt="Euler Finance" className="w-8 h-8 object-contain" />
                                    WETH Borrow APY on Euler
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">-30%</span>
                                        <span className="text-2xl font-bold text-red-600">{wethBorrowAPY.toFixed(1)}%</span>
                                        <span className="text-sm text-gray-600">30%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="-30"
                                        max="30"
                                        step="0.1"
                                        value={wethBorrowAPY}
                                        onChange={e => setWethBorrowAPY(Number.parseFloat(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* ETH Funding Rate */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <img src="/gmx-logo.png" alt="GMX" className="w-8 h-8 object-contain" />
                                    ETH/USD Funding Rate on GMX
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">-30%</span>
                                        <span className="text-2xl font-bold text-blue-600">{ethFundingRate.toFixed(1)}%</span>
                                        <span className="text-sm text-gray-600">30%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="-30"
                                        max="30"
                                        step="0.1"
                                        value={ethFundingRate}
                                        onChange={e => setEthFundingRate(Number.parseFloat(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Results Section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Strategy Analysis</h2>

                        {/* Calculation Breakdown */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Yield Calculation</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">USDC Supply Yield (1.0x):</span>
                                    <span className="font-semibold text-green-600">+{(1.0 * usdcSupplyAPY).toFixed(1)}%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">ETH Funding Rate (0.5x):</span>
                                    <span className="font-semibold text-blue-600">+{(0.5 * ethFundingRate).toFixed(1)}%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">WETH Borrow Cost (0.5x):</span>
                                    <span className="font-semibold text-red-600">-{(0.5 * wethBorrowAPY).toFixed(1)}%</span>
                                </div>
                                <hr className="border-gray-200" />
                                <div className="flex justify-between items-center text-lg font-bold">
                                    <span>Net APY:</span>
                                    <span className={netAPY >= 0 ? 'text-green-600' : 'text-red-600'}>
                                        {netAPY >= 0 ? '+' : ''}
                                        {netAPY.toFixed(1)}%
                                    </span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Strategy Status */}
                        <Card className={`border-2 ${isProfitable ? 'border-green-500 bg-green-50' : 'border-blue-500 bg-blue-50'}`}>
                            <CardContent className="p-8 text-center">
                                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                                    <img
                                        src={isProfitable ? '/relaxed-penguin.png' : '/doctor-delta-logo.png'}
                                        alt="Strategy Status"
                                        className="w-32 h-32 object-contain"
                                    />
                                </div>

                                <h3 className={`text-2xl font-bold mb-4 ${isProfitable ? 'text-green-800' : 'text-blue-800'}`}>
                                    {isProfitable ? 'Doctor Delta at Work!' : 'Supplying USDC'}
                                </h3>

                                <p className={`text-lg ${isProfitable ? 'text-green-700' : 'text-blue-700'}`}>
                                    {isProfitable
                                        ? `The delta-neutral strategy is profitable with ${netAPY.toFixed(1)}% net APY. Time to relax!`
                                        : `The strategy isn't profitable right now. Better to just supply USDC and wait for better rates.`}
                                </p>

                                {isProfitable && (
                                    <div className="mt-6 p-4 bg-green-100 rounded-lg">
                                        <h4 className="font-semibold text-green-800 mb-2">Strategy Active:</h4>
                                        <ul className="text-sm text-green-700 space-y-1">
                                            <li>✓ Supply USDC to Euler Finance</li>
                                            <li>✓ Borrow WETH against USDC</li>
                                            <li>✓ Long ETH on GMX to hedge delta</li>
                                            <li>✓ Collect dual yield risk-free</li>
                                        </ul>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Market Conditions */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Market Conditions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Strategy Profitability:</span>
                                        <span className={`font-semibold ${isProfitable ? 'text-green-600' : 'text-red-600'}`}>
                                            {isProfitable ? 'Profitable' : 'Not Profitable'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Risk Level:</span>
                                        <span className="font-semibold text-blue-600">Delta Neutral</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Rebalancing:</span>
                                        <span className="font-semibold text-gray-600">Dynamic</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <style jsx>{`
                    .slider::-webkit-slider-thumb {
                        appearance: none;
                        height: 20px;
                        width: 20px;
                        border-radius: 50%;
                        background: #3b82f6;
                        cursor: pointer;
                        border: 2px solid #ffffff;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    }

                    .slider::-moz-range-thumb {
                        height: 20px;
                        width: 20px;
                        border-radius: 50%;
                        background: #3b82f6;
                        cursor: pointer;
                        border: 2px solid #ffffff;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    }
                `}</style>
            </div>
        </div>
    );
}
