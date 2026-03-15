"use client"

import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

const labelVariants = cva(
  "flex items-center leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-foreground",
        primary: "text-primary",
        secondary: "text-secondary-foreground",
        success: "text-success",
        destructive: "text-destructive",
        warning: "text-warning",
        field: "text-input-foreground",
        muted: "text-muted-foreground",
      },
      size: {
        xs: "gap-1.5 text-xs",
        sm: "gap-1.5 text-xs",
        md: "gap-2 text-sm",
        lg: "gap-2 text-sm",
        xl: "gap-2 text-base",
        icon: "gap-1.5 text-xs",
        "icon-sm": "gap-1.5 text-xs",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      weight: "medium",
    },
  }
)

export type LabelProps = React.ComponentProps<"label"> &
  VariantProps<typeof labelVariants> & {
    required?: boolean
    icon?: React.ReactNode
  }

function Label({
  className,
  variant,
  size,
  weight,
  required,
  icon,
  children,
  ...props
}: LabelProps) {
  return (
    <label
      data-slot="label"
      className={cn(labelVariants({ variant, size, weight }), className)}
      {...props}
    >
      {icon}
      {children}
      {required && <span className="text-destructive">*</span>}
    </label>
  )
}

export { Label, labelVariants }
