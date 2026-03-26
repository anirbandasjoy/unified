import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  type LucideIcon,
} from "lucide-react"
import { routes } from "@/config/path-config"

export interface DashboardRoute {
  href: string
  label: string
  icon: LucideIcon
}

export const dashboardRoutes: DashboardRoute[] = [
  { href: routes.dashboard.root, label: "Overview", icon: LayoutDashboard },
  { href: routes.dashboard.users, label: "Users", icon: Users },
  { href: routes.dashboard.analytics, label: "Analytics", icon: BarChart3 },
  { href: routes.dashboard.settings, label: "Settings", icon: Settings },
  { href: routes.dashboard.roles, label: "Roles", icon: Users },
] as const
