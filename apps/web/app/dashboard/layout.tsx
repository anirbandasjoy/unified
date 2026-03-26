import { TopLoader } from "@/components/top-loader"
import { DashboardLayout } from "@/views/layout/dashboard/dashboard-layout.view"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your application",
}

export default function DashboardLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DashboardLayout>
      <TopLoader />
      {children}
    </DashboardLayout>
  )
}
