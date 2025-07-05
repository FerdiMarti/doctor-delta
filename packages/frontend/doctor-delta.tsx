import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowDown, DollarSign, TrendingUp, RotateCcw } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-gray-200">
            <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Doctor Delta</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Vault Section */}
          <Card className="p-6">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Vault</h2>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Value Locked</p>
                  <p className="text-2xl font-bold text-gray-900">$ 1,234,567</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Estimated APY</p>
                  <p className="text-2xl font-bold text-gray-900">8,2% est.</p>
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
                Delta-neutral strategy: no directional ETH exposure - Rebalances every 30 days or if volatility s-
              </p>
            </CardContent>
          </Card>

          {/* Vault Simulation Section */}
          <Card className="p-6">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Vault Simulation</h2>

              <div className="flex flex-col items-center space-y-6">
                {/* Step 1: Euler Finance */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mb-2">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-blue-500" />
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Euler Finance</p>
                  </div>

                  <ArrowRight className="w-6 h-6 text-gray-400" />

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-2 relative">
                      <div className="w-8 h-8 bg-blue-400 rounded"></div>
                      <div className="w-6 h-6 bg-orange-400 rounded-full absolute -top-1 -right-1 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white transform rotate-45"></div>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Borrow ETH</p>
                  </div>
                </div>

                <ArrowDown className="w-6 h-6 text-gray-400" />

                {/* Step 2: Shorts ETH */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-2 relative">
                      <TrendingUp className="w-8 h-8 text-white" />
                      <div className="w-4 h-4 bg-orange-400 rounded-full absolute -bottom-1 -right-1"></div>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Shorts ETH</p>
                    <p className="text-xs text-gray-600">on GMX</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-24 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center relative">
                      <RotateCcw className="w-5 h-5 text-gray-600" />
                      <div className="absolute -top-2 -right-2 text-xs text-gray-600">Rebalances</div>
                      <div className="absolute -bottom-2 -right-2 text-xs text-gray-600">every 30d</div>
                    </div>
                  </div>
                </div>

                <ArrowDown className="w-6 h-6 text-gray-400" />

                {/* Step 3: Result */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mb-2">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-gray-900">All delta-neutral!!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
