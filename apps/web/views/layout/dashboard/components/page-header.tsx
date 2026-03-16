import { cn } from "@workspace/ui/lib/utils"

import { ArrowLeft } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import Link from "next/link"

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  backButton?: boolean
  backHref?: string
  actions?: React.ReactNode
}

export function PageHeader({
  title,
  subtitle,
  backButton = false,
  backHref = "..",
  actions,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <div
      className={cn("flex items-center justify-between gap-4 pb-4", className)}
      {...props}
    >
      <div className="flex items-center gap-4">
        {backButton && (
          <Button appearance="ghost" size="icon-sm" asChild>
            <Link href={backHref}>
              <ArrowLeft className="size-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
        )}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  )
}
