"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

const inputOTPGroupVariants = cva("flex items-center", {
  variants: {
    spacing: {
      default: "",
      spaced: "gap-2 sm:gap-3",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
})

function InputOTPGroup({
  className,
  spacing,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputOTPGroupVariants>) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn(inputOTPGroupVariants({ spacing }), className)}
      {...props}
    />
  )
}

const inputOTPSlotVariants = cva(
  "relative flex items-center justify-center transition-all outline-none data-[active=true]:z-10",
  {
    variants: {
      variant: {
        default: [
          "border-y border-r border-input shadow-xs first:rounded-l-md first:border-l last:rounded-r-md dark:bg-input/30",
          "data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50",
          "aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive",
          "data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40",
        ],
        field: [
          "rounded-lg border border-slate-200 bg-slate-50 font-bold text-slate-900 shadow-none",
          "data-[active=true]:border-slate-900 data-[active=true]:bg-white data-[active=true]:ring-4 data-[active=true]:ring-slate-900/5",
          "aria-invalid:border-red-500 aria-invalid:bg-red-50/30 data-[active=true]:aria-invalid:ring-red-100",
        ],
      },
      size: {
        sm: "h-9 w-9 text-sm",
        lg: "h-12 w-14 text-lg sm:h-14 sm:text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
)

function InputOTPSlot({
  index,
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof inputOTPSlotVariants> & { index: number }) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(inputOTPSlotVariants({ variant, size }), className)}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  )
}

export {
  InputOTP,
  InputOTPGroup,
  inputOTPGroupVariants,
  InputOTPSeparator,
  InputOTPSlot,
  inputOTPSlotVariants,
}
