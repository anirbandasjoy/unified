"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"
import { dashboardRoutes } from "@/lib/dashboard/routes"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <>
      <SidebarHeader>
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip="User Profile"
            size="lg"
            className="transition-all duration-300 hover:bg-accent/50"
          >
            <Avatar className="size-8 rounded-sm ring-2 ring-border transition-all duration-300 hover:ring-primary/50">
              <AvatarFallback className="rounded-sm bg-linear-to-br from-primary to-primary/80 font-semibold text-primary-foreground shadow-none">
                DD
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold text-foreground transition-opacity duration-300 group-data-[collapsible=icon]:hidden">
                Dashboard
              </span>
              <span className="truncate text-xs text-muted-foreground transition-opacity duration-300 group-data-[collapsible=icon]:hidden">
                Manage your system
              </span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarHeader>

      <SidebarContent className="bg-background/30">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboardRoutes.map((route) => {
                const isActive = pathname === route.href
                const Icon = route.icon

                return (
                  <SidebarMenuItem key={route.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={route.label}
                      className="rounded-sm transition-all duration-300 hover:bg-accent/50 data-[active=true]:bg-primary/5 data-[active=true]:text-primary"
                    >
                      <Link href={route.href} className="gap-3 rounded-sm">
                        <Icon className="size-4 transition-transform duration-300 group-hover:scale-110" />
                        <span className="transition-opacity duration-300">
                          {route.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-r border-border bg-background/50 backdrop-blur-sm">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="User Profile"
              size="lg"
              className="cursor-pointer transition-all duration-300 hover:bg-accent/50"
            >
              <Avatar className="size-8 rounded-lg ring-2 ring-border transition-all duration-300 hover:ring-primary/50">
                <AvatarFallback className="rounded-lg bg-linear-to-br from-primary to-primary/80 font-semibold text-primary-foreground">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold text-foreground transition-opacity duration-300 group-data-[collapsible=icon]:hidden">
                  John Doe
                </span>
                <span className="truncate text-xs text-muted-foreground transition-opacity duration-300 group-data-[collapsible=icon]:hidden">
                  john@example.com
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  )
}
