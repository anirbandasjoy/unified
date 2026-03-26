import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { BarChart3, PieChart } from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"

export function AnalyticsChartsSection() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <ChartCard
        title="Traffic Overview"
        description="Monthly traffic statistics"
        badge="Last 30 days"
        icon={BarChart3}
        label="Chart visualization placeholder"
      />
      <ChartCard
        title="User Demographics"
        description="User distribution by region"
        badge="Current"
        icon={PieChart}
        label="Pie chart placeholder"
      />
    </div>
  )
}

function ChartCard({
  title,
  description,
  badge,
  icon: Icon,
  label,
}: {
  title: string
  description: string
  badge: string
  icon: React.ElementType
  label: string
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Badge variant="outline">{badge}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex h-75 items-center justify-center">
          <div className="text-center">
            <Icon className="mx-auto mb-4 size-12 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-xs text-muted-foreground">
              Integrate with recharts for full charts
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
