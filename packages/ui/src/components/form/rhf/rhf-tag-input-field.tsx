"use client"

import { Badge } from "@/components/badge"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import * as React from "react"
import {
  useController,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RHFTagInputFieldProps<T extends FieldValues = FieldValues> {
  /** The `control` object from `useForm()`. */
  control: Control<T>
  /** Field name path — must point to a `string[]` field. */
  name: FieldPath<T>
  /** Label text displayed above the tag input. */
  label?: string
  /** Placeholder for the text input. */
  placeholder?: string
  /** Helper / description text. */
  description?: React.ReactNode
  /** Whether the field is required. */
  required?: boolean
  /** Additional class names for the wrapper. */
  className?: string
  /** Whether the field is disabled. */
  disabled?: boolean
  /** Maximum number of tags allowed. */
  maxTags?: number
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * React Hook Form tag/chip input. Stores `string[]` in form state.
 *
 * @example
 * ```tsx
 * <RHFTagInputField
 *   control={control}
 *   name="wordBank"
 *   label="Word Bank"
 *   placeholder="Type a word and press Enter..."
 * />
 * ```
 */
export function RHFTagInputField<T extends FieldValues = FieldValues>({
  control,
  name,
  label,
  placeholder = "Type and press Enter…",
  description,
  required,
  className,
  disabled,
  maxTags,
}: RHFTagInputFieldProps<T>) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ control, name })

  const [inputValue, setInputValue] = React.useState("")
  const tags: string[] = Array.isArray(value) ? value : []

  const addTag = () => {
    const trimmed = inputValue.trim()
    if (!trimmed) return
    if (tags.includes(trimmed)) return
    if (maxTags && tags.length >= maxTags) return
    onChange([...tags, trimmed])
    setInputValue("")
  }

  const removeTag = (index: number) => {
    onChange(tags.filter((_, i) => i !== index))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addTag()
    }
    if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      removeTag(tags.length - 1)
    }
  }

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <Label variant="field" weight="semibold" required={required}>
          {label}
        </Label>
      )}

      <div className="flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          size="sm"
          className="flex-1"
        />
        <Button
          type="button"
          size="sm"
          appearance="outline"
          onClick={addTag}
          disabled={disabled || !inputValue.trim()}
        >
          Add
        </Button>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, index) => (
            <Badge
              key={`${tag}-${index}`}
              variant="secondary"
              className="gap-1 pr-1"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(index)}
                disabled={disabled}
                className="cursor-pointer rounded-full p-0.5 hover:bg-foreground/10"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}

      {error?.message ? (
        <p className="ml-1 text-xs font-medium text-red-500">{error.message}</p>
      ) : (
        description && (
          <p className="text-input-foreground/60 ml-1 text-[10px]">
            {description}
          </p>
        )
      )}
    </div>
  )
}
