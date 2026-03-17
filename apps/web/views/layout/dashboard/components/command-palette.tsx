"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { dashboardRoutes } from "@/lib/dashboard/routes"
import { Search } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import { Dialog, DialogContent } from "@workspace/ui/components/dialog"
import { Button } from "@workspace/ui/components/button"

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSelect = (href: string) => {
    setOpen(false)
    router.push(href)
  }

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted lg:w-64"
      >
        <Search className="size-4 shrink-0" />
        <span className="hidden flex-1 text-left sm:inline">Search...</span>
        <kbd className="pointer-events-none hidden h-5 items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 select-none sm:inline-flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0">
          <Command className="**:data-cmdk-group:px-2 **:data-cmdk-group-heading:px-3 **:data-cmdk-group-heading:font-medium **:data-cmdk-group-heading:text-muted-foreground">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList className="custom-scrollbar max-h-75 overflow-y-auto">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                {dashboardRoutes.map((route) => {
                  const Icon = route.icon
                  return (
                    <CommandItem
                      key={route.href}
                      onSelect={() => handleSelect(route.href)}
                      className="gap-3"
                    >
                      <Icon className="size-4" />
                      <span>{route.label}</span>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  )
}
