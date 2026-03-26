import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"

export function PerformanceMetricsSection() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>Detailed performance analysis</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="default" appearance="outline" size="sm">
              Export
            </Button>
            <Button variant="default" size="sm">
              Refresh
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <MetricBox
              title="Total Page Views"
              value="1.2M"
              trend="+18.2% from last month"
            />
            <MetricBox
              title="Avg. Time on Page"
              value="4m 32s"
              trend="+8.5% from last month"
            />
            <MetricBox
              title="Pages per Session"
              value="5.8"
              trend="+3.1% from last month"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function MetricBox({
  title,
  value,
  trend,
}: {
  title: string
  value: string
  trend: string
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="mb-2 text-sm font-medium text-muted-foreground">
        {title}
      </div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="mt-2 text-xs text-chart-2">{trend}</div>
    </div>
  )
}
