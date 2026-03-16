import { StatCard } from "@/views/layout/dashboard/components/stat-card"
import { analyticsData } from "@/lib/dashboard/constants"
import { BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react"
import { AnalyticsChartsSection } from "@/views/layout/dashboard/components/analytics-charts-section"
import { PerformanceMetricsSection } from "@/views/layout/dashboard/components/performance-metrics-section"

export function AnalyticsView() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {analyticsData.map((stat, index) => {
          const icons = [BarChart3, TrendingUp, PieChart, LineChart]
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

      <AnalyticsChartsSection />
      <PerformanceMetricsSection />
    </div>
  )
}
