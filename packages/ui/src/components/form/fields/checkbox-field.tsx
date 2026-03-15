"use client"

import { Checkbox } from "@/components/checkbox"
import { cn } from "@/lib/utils"
import * as React from "react"
import RenderWrapper from "./shared"

// ---------------------------------------------------------------------------
// Style constants
// ---------------------------------------------------------------------------

const checkboxBaseClasses =
  "mt-0.5 border-slate-300 data-[state=checked]:bg-slate-900 data-[state=checked]:border-slate-900 rounded-[4px] h-4 w-4"

const labelClasses =
  "text-sm text-slate-600 leading-relaxed cursor-pointer select-none"

const errorTextClasses =
  "text-xs text-red-500 font-medium ml-1 animate-in slide-in-from-left-1"

const descriptionTextClasses = "text-[10px] text-slate-400 ml-1"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CheckboxFieldProps extends Omit<
  React.ComponentProps<typeof Checkbox>,
  "id"
> {
  /** Unique field id — also wires up `<label htmlFor>`. */
  id: string
  /** Label content displayed to the right of the checkbox. Supports ReactNode for rich content (e.g. links). */
  label: React.ReactNode
  /** Error message string. When present, error styling is applied. */
  error?: string
  /** Helper / description text shown below the checkbox (hidden when `error` is set). */
  description?: string
  /** Additional class names merged onto the `<label>`. */
  labelClassName?: string
  /** Additional class names merged onto the `<Checkbox>`. */
  checkboxClassName?: string
  /** Additional class names merged onto the outer wrapper `<div>`. */
  wrapperClassName?: string
  /** Layout direction: 'row' (default) or 'column'. */
  direction?: "row" | "column"
  /** Custom render function to wrap the field content. */
  render?: (children: React.ReactNode) => React.ReactNode
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const CheckboxField = React.forwardRef<
  React.ComponentRef<typeof Checkbox>,
  CheckboxFieldProps
>(
  (
    {
      id,
      label,
      error,
      description,
      className,
      labelClassName,
      checkboxClassName,
      wrapperClassName,
      direction = "row",
      render,
      ...checkboxProps
    },
    ref
  ) => {
    const hasError = !!error

    return (
      <div className={cn("space-y-2", wrapperClassName)}>
        <RenderWrapper render={render}>
          <div
            className={cn(
              "flex",
              direction === "column"
                ? "flex-col-reverse items-start space-y-1"
                : "flex-row items-start space-x-3"
            )}
          >
            <Checkbox
              ref={ref}
              id={id}
              className={cn(
                checkboxBaseClasses,
                hasError && "border-destructive",
                checkboxClassName
              )}
              {...checkboxProps}
            />
            <label
              htmlFor={id}
              className={cn(labelClasses, labelClassName, className)}
            >
              {label}
            </label>
          </div>
        </RenderWrapper>

        {/* Error message */}
        {hasError ? (
          <p className={errorTextClasses}>{error}</p>
        ) : (
          description && <p className={descriptionTextClasses}>{description}</p>
        )}
      </div>
    )
  }
)

CheckboxField.displayName = "CheckboxField"

export { CheckboxField }
