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

export const mockUsers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "active" as const,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "active" as const,
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    status: "inactive" as const,
  },
  {
    id: "4",
    name: "Alice Williams",
    email: "alice@example.com",
    role: "Editor",
    status: "active" as const,
  },
  {
    id: "5",
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "User",
    status: "inactive" as const,
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
