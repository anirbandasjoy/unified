"use client"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { AlertTriangle, Home, RefreshCcw } from "lucide-react"
import Link from "next/link"

export default function GlobalErrorView({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 p-4 dark:from-gray-950 dark:to-gray-900">
          <Card className="w-full max-w-2xl shadow-lg">
            <CardHeader className="space-y-1 text-center">
              <div className="mb-4 flex justify-center">
                <div className="relative">
                  <div className="text-9xl font-bold text-red-500/10 select-none">
                    500
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <AlertTriangle className="h-20 w-20 text-red-500/50" />
                  </div>
                </div>
              </div>
              <CardTitle className="text-3xl font-bold">
                Critical Error
              </CardTitle>
              <CardDescription className="text-base">
                A critical error occurred in the application.
                <br />
                Please try refreshing the page or contact support if the issue
                persists.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button onClick={reset} appearance="outline">
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
                <Button asChild>
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </body>
    </html>
  )
}
