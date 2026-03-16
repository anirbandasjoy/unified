import { Card, CardContent } from "@workspace/ui/components/card"

export function MetricsSection() {
  return (
    <Card className="col-span-1 md:col-span-2 lg:col-span-4">
      <CardContent className="space-y-4 pt-6">
        <MetricBar
          label="Revenue Growth"
          value="+12.5%"
          width="w-3/4"
          color="bg-primary"
        />
        <MetricBar
          label="User Engagement"
          value="+8.2%"
          width="w-2/3"
          color="bg-chart-1"
        />
        <MetricBar
          label="Conversion Rate"
          value="+3.2%"
          width="w-1/2"
          color="bg-chart-2"
        />
      </CardContent>
    </Card>
  )
}

function MetricBar({
  label,
  value,
  width,
  color,
}: {
  label: string
  value: string
  width: string
  color: string
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm text-muted-foreground">{value}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div className={`h-full ${width} rounded-full ${color}`} />
      </div>
    </div>
  )
}
