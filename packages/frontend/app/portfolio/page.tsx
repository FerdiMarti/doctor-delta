import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, TrendingUp, DollarSign } from "lucide-react"

export default function Portfolio() {
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
            <Link href="/portfolio" className="text-lg font-semibold text-blue-600 border-b-2 border-blue-600">
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

        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Vault
        </Link>

        {/* Portfolio Overview */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                Total Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-gray-900">$12,450.67</p>
              <p className="text-sm text-green-600 mt-1">+$234.56 (1.92%) today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Total Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-gray-900">$1,450.67</p>
              <p className="text-sm text-blue-600 mt-1">13.2% APY</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Positions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-gray-900">1</p>
              <p className="text-sm text-gray-600 mt-1">Delta-neutral strategy</p>
            </CardContent>
          </Card>
        </div>

        {/* Active Positions */}
        <Card>
          <CardHeader>
            <CardTitle>Your Positions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-4">
                  <img src="/doctor-delta-logo.png" alt="Doctor Delta" className="w-10 h-10" />
                  <div>
                    <h3 className="font-semibold">Delta Neutral Vault #1</h3>
                    <p className="text-sm text-gray-600">USDC → Euler Finance → GMX</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">$8,200.34</p>
                  <p className="text-sm text-green-600">+$156.78 (1.95%)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
