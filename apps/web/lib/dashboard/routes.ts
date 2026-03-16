import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  type LucideIcon,
} from "lucide-react"

export interface DashboardRoute {
  href: string
  label: string
  icon: LucideIcon
}

export const dashboardRoutes: DashboardRoute[] = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/users", label: "Users", icon: Users },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
  { href: "/dashboard/roles", label: "Roles", icon: Users },
] as const
