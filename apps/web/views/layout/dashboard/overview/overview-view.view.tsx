import { StatCard } from "@/views/layout/dashboard/components/stat-card"
import { statCardData } from "@/lib/dashboard/constants"
import { Activity, ArrowUpRight, DollarSign, Users } from "lucide-react"
import { MetricsSection } from "@/views/layout/dashboard/components/metrics-section"
import { ActivitySection } from "@/views/layout/dashboard/components/activity-section"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export function OverviewView() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCardData.map((stat, index) => {
          const icons = [Activity, Users, DollarSign, ArrowUpRight]
          const Icon = icons[index % icons.length]

          return (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              trend={stat.trend}
              icon={Icon}
            />
          )
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-1 md:col-span-2 lg:col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              Key metrics and performance indicators
            </CardDescription>
          </CardHeader>
          <MetricsSection />
        </Card>

        <ActivitySection />
      </div>
    </div>
  )
}
