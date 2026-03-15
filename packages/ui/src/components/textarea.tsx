"use client"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

const textareaVariants = cva(
  "w-full min-w-0 rounded-md border shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        primary: "",
        secondary: "",
        success: "",
        destructive: "",
        warning: "",
        mono: "",
        field: "",
      },
      appearance: {
        solid: "",
        outline: "",
        inline: "",
      },
      size: {
        xs: "px-2.5 py-1.5 text-xs",
        sm: "px-3 py-1.5 text-sm",
        md: "px-3 py-2 text-sm",
        lg: "px-3.5 py-2 text-base",
        xl: "px-4 py-2 text-base",
      },
    },
    compoundVariants: [
      // ============ DEFAULT VARIANT ============
      {
        variant: "default",
        appearance: "solid",
        className:
          "border-input bg-transparent text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
      },
      {
        variant: "default",
        appearance: "outline",
        className:
          "border-input bg-background text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
      },
      {
        variant: "default",
        appearance: "inline",
        className:
          "rounded-none border-0 border-b border-input bg-transparent px-0 text-foreground focus-visible:border-b-2 focus-visible:border-ring focus-visible:ring-0",
      },

      // ============ PRIMARY VARIANT ============
      {
        variant: "primary",
        appearance: "solid",
        className:
          "border-primary/20 bg-primary/5 text-foreground placeholder:text-primary/60 focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-primary/20 dark:bg-primary/10",
      },
      {
        variant: "primary",
        appearance: "outline",
        className:
          "border-primary/50 bg-background text-foreground placeholder:text-primary/60 focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-primary/20",
      },
      {
        variant: "primary",
        appearance: "inline",
        className:
          "rounded-none border-0 border-b border-primary/30 bg-transparent px-0 text-foreground placeholder:text-primary/60 focus-visible:border-b-2 focus-visible:border-primary focus-visible:ring-0",
      },

      // ============ SECONDARY VARIANT ============
      {
        variant: "secondary",
        appearance: "solid",
        className:
          "border-secondary bg-secondary text-secondary-foreground focus-visible:border-secondary focus-visible:ring-[3px] focus-visible:ring-secondary/20",
      },
      {
        variant: "secondary",
        appearance: "outline",
        className:
          "border-secondary bg-background text-foreground focus-visible:border-secondary focus-visible:ring-[3px] focus-visible:ring-secondary/20",
      },
      {
        variant: "secondary",
        appearance: "inline",
        className:
          "rounded-none border-0 border-b border-secondary/30 bg-transparent px-0 text-foreground focus-visible:border-b-2 focus-visible:border-secondary focus-visible:ring-0",
      },

      // ============ SUCCESS VARIANT ============
      {
        variant: "success",
        appearance: "solid",
        className:
          "bg-success/5 dark:bg-success/10 border-success/20 placeholder:text-success/60 focus-visible:border-success focus-visible:ring-success/20 text-foreground focus-visible:ring-[3px]",
      },
      {
        variant: "success",
        appearance: "outline",
        className:
          "border-success placeholder:text-success/60 focus-visible:border-success focus-visible:ring-success/20 bg-background text-foreground focus-visible:ring-[3px]",
      },
      {
        variant: "success",
        appearance: "inline",
        className:
          "border-success/30 placeholder:text-success/60 focus-visible:border-success rounded-none border-0 border-b bg-transparent px-0 text-foreground focus-visible:border-b-2 focus-visible:ring-0",
      },

      // ============ DESTRUCTIVE VARIANT ============
      {
        variant: "destructive",
        appearance: "solid",
        className:
          "border-destructive/20 bg-destructive/5 text-foreground placeholder:text-destructive/60 focus-visible:border-destructive focus-visible:ring-[3px] focus-visible:ring-destructive/20 dark:bg-destructive/10",
      },
      {
        variant: "destructive",
        appearance: "outline",
        className:
          "border-destructive bg-background text-foreground placeholder:text-destructive/60 focus-visible:border-destructive focus-visible:ring-[3px] focus-visible:ring-destructive/20",
      },
      {
        variant: "destructive",
        appearance: "inline",
        className:
          "rounded-none border-0 border-b border-destructive/30 bg-transparent px-0 text-foreground placeholder:text-destructive/60 focus-visible:border-b-2 focus-visible:border-destructive focus-visible:ring-0",
      },

      // ============ WARNING VARIANT ============
      {
        variant: "warning",
        appearance: "solid",
        className:
          "bg-warning/5 dark:bg-warning/10 border-warning/20 placeholder:text-warning/60 focus-visible:border-warning focus-visible:ring-warning/20 text-foreground focus-visible:ring-[3px]",
      },
      {
        variant: "warning",
        appearance: "outline",
        className:
          "border-warning placeholder:text-warning/60 focus-visible:border-warning focus-visible:ring-warning/20 bg-background text-foreground focus-visible:ring-[3px]",
      },
      {
        variant: "warning",
        appearance: "inline",
        className:
          "border-warning/30 placeholder:text-warning/60 focus-visible:border-warning rounded-none border-0 border-b bg-transparent px-0 text-foreground focus-visible:border-b-2 focus-visible:ring-0",
      },

      // ============ MONO VARIANT ============
      {
        variant: "mono",
        appearance: "solid",
        className:
          "border-zinc-950/20 bg-zinc-950/5 text-foreground focus-visible:border-zinc-950 focus-visible:ring-[3px] focus-visible:ring-zinc-950/20 dark:border-zinc-300/20 dark:bg-zinc-300/5 dark:focus-visible:border-zinc-300 dark:focus-visible:ring-zinc-300/20",
      },
      {
        variant: "mono",
        appearance: "outline",
        className:
          "border-zinc-950/30 bg-background text-foreground focus-visible:border-zinc-950 focus-visible:ring-[3px] focus-visible:ring-zinc-950/20 dark:border-zinc-300/30 dark:focus-visible:border-zinc-300 dark:focus-visible:ring-zinc-300/20",
      },
      {
        variant: "mono",
        appearance: "inline",
        className:
          "rounded-none border-0 border-b border-zinc-950/20 bg-transparent px-0 text-foreground focus-visible:border-b-2 focus-visible:border-zinc-950 focus-visible:ring-0 dark:border-zinc-300/20 dark:focus-visible:border-zinc-300",
      },

      // ============ FIELD VARIANT (TextField Style) ============
      {
        variant: "field",
        appearance: "solid",
        className:
          "border-field-foreground/20 text-input-foreground placeholder:text-input-foreground/60 focus-visible:border-field-foreground focus-visible:ring-input-foreground/5 rounded-sm bg-input shadow-none focus-visible:bg-background focus-visible:ring-4",
      },
      {
        variant: "field",
        appearance: "outline",
        className:
          "border-field-foreground/20 text-input-foreground placeholder:text-input-foreground/60 focus-visible:border-field-foreground focus-visible:ring-input-foreground/5 rounded-sm bg-background shadow-none focus-visible:ring-4",
      },
      {
        variant: "field",
        appearance: "inline",
        className:
          "border-field-foreground/20 text-input-foreground placeholder:text-input-foreground/60 focus-visible:border-field-foreground rounded-none border-0 border-b bg-transparent px-0 shadow-none focus-visible:border-b-2 focus-visible:ring-0",
      },
    ],
    defaultVariants: {
      variant: "default",
      appearance: "solid",
      size: "lg",
    },
  }
)

function Textarea({
  className,
  size,
  variant,
  appearance,
  ...props
}: Omit<React.ComponentProps<"textarea">, "size"> &
  VariantProps<typeof textareaVariants>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ size, variant, appearance }), className)}
      {...props}
    />
  )
}

export { Textarea, textareaVariants }
