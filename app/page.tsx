import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wheat, Users, TrendingUp, Calculator, Cloud } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Suspense } from "react"
import WeatherHome from "./weatherHome"

export default function HomePage() {
  // For now, keeping as server component and will add client wrapper
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-secondary/30">
      {/* Header */}
      <header className="safe-area-top p-4 bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <Wheat className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold text-foreground">FarmConnect</h1>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="p-4 max-w-md mx-auto">
        <Suspense fallback={null}>
          <WeatherHome />
        </Suspense>
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold text-balance mb-4">Connect Farmers with Markets</h2>
          <p className="text-muted-foreground text-balance mb-6">
            Get real-time market prices, connect with buyers, and manage your agricultural business efficiently.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="w-full max-w-xs">
              Get Started Free
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Card className="text-center">
            <CardHeader className="pb-2">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-sm">Market Prices</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-xs">Real-time pricing from nearby markets</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-2">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-sm">Find Buyers</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-xs">Connect with verified buyers</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-2">
              <Calculator className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-sm">Cost Calculator</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-xs">Transport & logistics planning</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-2">
              <Wheat className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-sm">AI Assistant</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-xs">Smart farming recommendations</CardDescription>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
