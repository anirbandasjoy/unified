"use client"

import React from "react"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"
import { Separator } from "@workspace/ui/components/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { usePathname } from "next/navigation"
import { Button } from "@workspace/ui/components/button"
import { IterationCcw, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { CommandPalette } from "@/views/layout/dashboard/components/command-palette"
import Link from "next/link"
import { LogoutConfirm } from "@/views/components/shared/logout-confirm"

export function DashboardHeader() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const getBreadcrumbItems = () => {
    const segments = pathname.split("/").filter(Boolean)
    return segments.map((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/")
      const isLast = index === segments.length - 1
      const label = segment.charAt(0).toUpperCase() + segment.slice(1)

      return { href, label, isLast }
    })
  }

  const breadcrumbItems = getBreadcrumbItems()

  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbItems.map((item, index) => (
              <div key={item.href} className="flex items-center gap-2">
                {index > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {item.isLast ? (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={item.href}>
                      {item.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-2">
        <CommandPalette />
        {mounted && (
          <Button
            variant="default"
            appearance="ghost"
            size="icon-sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        )}

        <LogoutConfirm />
        <Link href="/" className="hidden sm:block">
          <Button appearance="fade" variant="secondary">
            <IterationCcw size={28} strokeWidth={3} />
            <span>Go Home</span>
          </Button>
        </Link>
      </div>
    </header>
  )
}
