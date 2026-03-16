"use client"

import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
  SidebarRail,
} from "@workspace/ui/components/sidebar"
import { DashboardNav } from "./dashboard-nav.view"
import { DashboardHeader } from "./dashboard-header.view"
import { TooltipProvider } from "@workspace/ui/components/tooltip"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider delayDuration={0}>
      <SidebarProvider defaultOpen={true}>
        <Sidebar collapsible="icon">
          <DashboardNav />
        </Sidebar>
        <SidebarInset>
          <DashboardHeader />
          <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
        </SidebarInset>
        <SidebarRail />
      </SidebarProvider>
    </TooltipProvider>
  )
}
