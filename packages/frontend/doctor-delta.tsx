import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowDown, DollarSign } from "lucide-react"
import Link from "next/link"

export default function Component() {
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
            <Link
              href="/portfolio"
              className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/strategy-simulation"
              className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              Strategy Simulation
            </Link>
          </nav>
        </div>

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
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg font-semibold">
                  Deposit
                </Button>
                <Button variant="outline" className="w-full py-3 text-lg font-semibold bg-transparent">
                  Withdraw
                </Button>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {
                  "Delta-neutral strategy: no directional ETH exposure - rebalances automatically when supply & borrow / funding rates change. Set & forget!"
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
                    <span className="text-sm font-bold text-red-600">12.2%</span>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Vault Strategy Overview</h2>

              <div className="flex flex-col items-center space-y-6">
                {/* Step 1: Euler Finance */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center mb-2">
                      <img src="/euler-finance-logo.png" alt="Euler Finance" className="w-12 h-12 object-contain" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Deposit USDC on Euler </p>
                  </div>

                  <ArrowRight className="w-6 h-6 text-black" />

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-2 relative">
                      <div className="w-8 h-8 bg-blue-400 rounded"></div>
                      <div className="w-6 h-6 bg-orange-400 rounded-full absolute -top-1 -right-1 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white transform rotate-45"></div>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Borrow WETH against USDC</p>
                  </div>
                </div>

                <ArrowDown className="w-6 h-6 text-black" />

                {/* Step 2: Shorts ETH */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-2 relative border border-gray-200">
                      <img src="/gmx-logo.png" alt="GMX" className="w-10 h-10 object-contain" />
                      <div className="w-4 h-4 bg-orange-400 rounded-full absolute -bottom-1 -right-1"></div>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Long ETH to collect funding </p>
                  </div>

                  <div className="flex flex-col items-center"></div>
                </div>

                <ArrowDown className="w-6 h-6 text-black" />

                {/* Step 3: Result */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 flex items-center justify-center mb-2">
                    <img src="/relaxed-penguin.png" alt="Relaxed Penguin Doctor" className="w-32 h-32 object-contain" />
                  </div>
                  <p className="text-lg font-bold text-gray-900">Earn dual-yield all delta-neutral</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
