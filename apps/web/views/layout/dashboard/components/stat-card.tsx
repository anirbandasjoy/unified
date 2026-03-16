import { cn } from "@workspace/ui/lib/utils"
import { type LucideIcon } from "lucide-react"

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  trend?: { value: number; isPositive: boolean }
  icon?: LucideIcon
  size?: "default" | "sm" | "lg"
}

export function StatCard({
  title,
  value,
  trend,
  icon: Icon,
  size = "default",
  className,
  ...props
}: StatCardProps) {
  const sizeClasses = {
    default: "p-6",
    sm: "p-4",
    lg: "p-8",
  }

  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card shadow-sm",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {trend && (
            <p
              className={cn(
                "text-xs font-medium",
                trend.isPositive ? "text-chart-2" : "text-destructive"
              )}
            >
              {trend.isPositive ? "+" : ""}
              {trend.value}%
            </p>
          )}
        </div>
        {Icon && <Icon className="size-8 text-muted-foreground opacity-50" />}
      </div>
    </div>
  )
}
