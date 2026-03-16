"use client"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { FileQuestion, Home, ArrowLeft } from "lucide-react"
import Link from "next/link"

export function DashboardNotFound() {
  return (
    <div className="flex min-h-100 items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="space-y-4">
          <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-primary/10">
            <FileQuestion className="size-10 text-primary" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold">Page Not Found</CardTitle>
            <CardDescription className="text-base">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Please check the URL or navigate back to the dashboard.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="default" asChild className="gap-2">
              <Link href="/dashboard">
                <Home className="size-4" />
                Go to Dashboard
              </Link>
            </Button>
            <Button
              variant="default"
              appearance="outline"
              asChild
              className="gap-2"
              onClick={() => window.history.back()}
            >
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  window.history.back()
                }}
              >
                <ArrowLeft className="size-4" />
                Go Back
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
