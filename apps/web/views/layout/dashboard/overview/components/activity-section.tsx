import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Activity, DollarSign, Users, type LucideIcon } from "lucide-react"
import { Button } from "@workspace/ui/components/button"

export function ActivitySection() {
  return (
    <Card className="col-span-1 md:col-span-2 lg:col-span-3">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions and updates</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ActivityItem
          icon={Users}
          title="New user registered"
          time="2 minutes ago"
          color="text-primary"
          bg="bg-primary/10"
        />
        <ActivityItem
          icon={DollarSign}
          title="Payment received"
          time="15 minutes ago"
          color="text-chart-1"
          bg="bg-chart-1/10"
        />
        <ActivityItem
          icon={Activity}
          title="System update completed"
          time="1 hour ago"
          color="text-chart-2"
          bg="bg-chart-2/10"
        />
        <Button variant="default" appearance="outline" className="w-full">
          View All Activity
        </Button>
      </CardContent>
    </Card>
  )
}

function ActivityItem({
  icon: Icon,
  title,
  time,
  color,
  bg,
}: {
  icon: LucideIcon
  title: string
  time: string
  color: string
  bg: string
}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`flex size-8 items-center justify-center rounded-full ${bg} ${color}`}
      >
        <Icon className="size-4" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  )
}
