export const DASHBOARD_TITLE = "Dashboard"

export const USERS_PER_PAGE = 10

export const statCardData = [
  {
    title: "Total Users",
    value: "12,345",
    trend: { value: 12, isPositive: true },
  },
  {
    title: "Active Sessions",
    value: "1,234",
    trend: { value: 8, isPositive: true },
  },
  {
    title: "Revenue",
    value: "$45,678",
    trend: { value: -3, isPositive: false },
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    trend: { value: 5, isPositive: true },
  },
] as const

export const analyticsData = [
  {
    title: "Page Views",
    value: "45,678",
    trend: { value: 18, isPositive: true },
  },
  {
    title: "Unique Visitors",
    value: "12,345",
    trend: { value: 14, isPositive: true },
  },
  {
    title: "Bounce Rate",
    value: "32.5%",
    trend: { value: -5, isPositive: true },
  },
  {
    title: "Avg. Session Duration",
    value: "4m 32s",
    trend: { value: 8, isPositive: true },
  },
] as const

type User = {
  id: string
  name: string
  email: string
  role: "Admin" | "User" | "Editor"
  status: "active" | "inactive"
}

const roles = ["Admin", "User", "Editor"] as const
const statuses = ["active", "inactive"] as const

export const mockUsers: User[] = Array.from({ length: 100 }, (_, i) => ({
  id: String(i + 1),
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: roles[i % roles.length]!,
  status: statuses[i % statuses.length]!,
}))
