import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { FileX, Home, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFoundView() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="space-y-4">
          <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-destructive/10">
            <FileX className="size-10 text-destructive" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold">
              404 - Page Not Found
            </CardTitle>
            <CardDescription className="text-base">
              The page you're looking for doesn't exist or has been moved.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Please check the URL or navigate back to home.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="default" asChild className="gap-2">
              <Link href="/">
                <Home className="size-4" />
                Go Home
              </Link>
            </Button>
            <Button
              variant="default"
              appearance="outline"
              className="gap-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="size-4" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
