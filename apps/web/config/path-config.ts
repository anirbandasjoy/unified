export const routes = {
  root: "/",

  dashboard: {
    root: "/dashboard",
    users: "/dashboard/users",
    analytics: "/dashboard/analytics",
    settings: "/dashboard/settings",
    roles: "/dashboard/roles",
  },

  notFound: "/not-found",
  error: "/error",
} as const
