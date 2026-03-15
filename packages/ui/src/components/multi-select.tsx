"use client"

import { ChevronsUpDown, X } from "lucide-react"
import * as React from "react"

import { Badge } from "@/components/badge"
import { Button } from "@/components/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover"
import { cn } from "@/lib/utils"
import { Checkbox } from "./checkbox"
import { SelectTriggerProps } from "./select"

export interface Option {
  label: string
  value: string
  disabled?: boolean
}

export interface MultiSelectProps {
  ref?: React.ForwardedRef<HTMLButtonElement>
  options: Option[]
  selected: string[]
  onChange: (values: string[]) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  disabled?: boolean
  className?: string
  maxDisplay?: number
  variant?: SelectTriggerProps["variant"]
  size?: SelectTriggerProps["size"]
  appearance?: SelectTriggerProps["appearance"]
  required?: boolean
  name?: string
}

export function MultiSelect({
  ref,
  options,
  selected,
  onChange,
  placeholder = "Select items...",
  searchPlaceholder = "Search...",
  emptyMessage = "No items found.",
  disabled = false,
  className,
  variant,
  appearance,
  size,
  maxDisplay = 3,
  required,
  name,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")

  const selectedOptions = options.filter((option) =>
    selected.includes(option.value)
  )

  const filteredOptions = options.filter((option) => {
    if (option.disabled) return false
    if (search === "") return true
    return option.label.toLowerCase().includes(search.toLowerCase())
  })

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value))
    } else {
      onChange([...selected, value])
    }
  }

  const handleRemove = (value: string, e: React.MouseEvent) => {
    e.stopPropagation()
    onChange(selected.filter((v) => v !== value))
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    onChange([])
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={ref}
          type="button"
          disabled={disabled}
          onClick={() => setOpen(!open)}
          variant={variant}
          size={size}
          appearance={appearance}
          name={name}
          aria-required={required}
          className={cn(className)}
          autoHeight
        >
          <div className="flex flex-1 flex-wrap gap-1.5">
            {selected.length === 0 ? (
              <span className="text-muted-foreground">{placeholder}</span>
            ) : (
              <>
                {selectedOptions.slice(0, maxDisplay).map((option) => (
                  <Badge
                    key={option.value}
                    variant="secondary"
                    className="gap-1 pr-1"
                  >
                    {option.label}
                    {!disabled && (
                      <X
                        className="h-3 w-3 cursor-pointer hover:text-destructive"
                        onClick={(e) => handleRemove(option.value, e)}
                      />
                    )}
                  </Badge>
                ))}
                {selectedOptions.length > maxDisplay && (
                  <Badge variant="secondary" className="px-2">
                    +{selectedOptions.length - maxDisplay} more
                  </Badge>
                )}
              </>
            )}
          </div>
          <div className="flex items-center gap-1">
            {selected.length > 0 && !disabled && (
              <X
                className="h-4 w-4 cursor-pointer text-muted-foreground hover:text-foreground"
                onClick={handleClear}
              />
            )}
            <ChevronsUpDown className="h-4 w-4 opacity-50" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-(--radix-popover-trigger-width) p-0"
        align="start"
      >
        <Command shouldFilter={false}>
          <CommandInput
            placeholder={searchPlaceholder}
            value={search}
            onValueChange={setSearch}
          />
          <CommandList>
            <div className="max-h-50 overflow-y-auto">
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup>
                {filteredOptions.map((option) => {
                  const isSelected = selected.includes(option.value)
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={() => handleSelect(option.value)}
                      disabled={option.disabled}
                    >
                      <Checkbox
                        checked={isSelected}
                        className="border border-border"
                      />
                      <span className="flex-1 truncate">{option.label}</span>
                      {option.disabled && (
                        <span className="text-xs text-muted-foreground">
                          (disabled)
                        </span>
                      )}
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </div>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
