"use client"

import { ButtonProps } from "@/components/button"
import { InputProps } from "@/components/input"
import * as React from "react"
import {
  useController,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"
import { SearchField, type SearchScope } from "../fields/search-field"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RHFSearchFieldProps<T extends FieldValues = FieldValues> {
  /** The `control` object from `useForm()`. */
  control: Control<T>
  /** Field name path for the search query (type-safe when `T` is provided). */
  queryName: FieldPath<T>
  /** Field name path for the search scope (type-safe when `T` is provided). */
  scopeName: FieldPath<T>
  /** Label text displayed above the input (optional). */
  label?: string
  /** Available search scopes. */
  scopes: SearchScope[]
  /** Placeholder text for the input. */
  placeholder?: string
  /** Helper / description text shown below the input (hidden when `error` is set). */
  description?: React.ReactNode
  /** Callback when search is triggered (Enter key, search icon, or submit button). */
  onSearch?: (query: string, scopes: string[], fieldValues: T) => void
  /** Submit button text. */
  submitText?: string
  /** Whether to show the submit button. */
  showSubmitButton?: boolean
  /** Submit button variant. */
  submitButtonVariant?: ButtonProps["variant"]
  /** Size of the search field. */
  size?: InputProps["size"]
  /** Variant of the search field. */
  variant?: InputProps["variant"]
  /** Appearance of the field */
  appearance?: InputProps["appearance"]
  /** Additional class names merged onto the outer wrapper. */
  className?: string
  /** Additional class names merged onto the `<Input>`. */
  inputClassName?: string
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * React Hook Form `Controller`-based wrapper around `SearchField`.
 *
 * @example
 * ```tsx
 * <RHFSearchField
 *   control={control}
 *   id="userSearch"
 *   queryName="searchQuery"
 *   scopeName="searchScope"
 *   label="Search Users"
 *   size="md"
 *   scopes={[
 *     { value: "all", label: "All Fields" },
 *     { value: "name", label: "Name" },
 *     { value: "email", label: "Email" },
 *   ]}
 *   placeholder="Search by name, email..."
 *   description="Search by name, email, or other fields"
 *   onSearch={(query, scope, fieldValues) => {
 *     console.log('Searching:', query, 'in scope:', scope);
 *     console.log('Current form values:', fieldValues);
 *   }}
 *   showSubmitButton
 * />
 * ```
 */
function RHFSearchFieldInner<T extends FieldValues = FieldValues>(
  {
    control,
    queryName,
    scopeName,
    label,
    scopes,
    placeholder,
    description,
    onSearch,
    submitText,
    showSubmitButton,
    submitButtonVariant,
    size,
    className,
    inputClassName,
    variant,
    appearance,
    ...rest
  }: RHFSearchFieldProps<T>,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  // Controller for the search query field
  const {
    field: {
      ref: queryFieldRef,
      onChange: onQueryChange,
      value: queryValue,
      ...queryFieldProps
    },
    fieldState: { error: queryError },
  } = useController({ control, name: queryName })

  // Controller for the search scope field
  const {
    field: { onChange: onScopeChange, value: scopeValue },
    fieldState: { error: scopeError },
  } = useController({ control, name: scopeName })

  // Determine if there are any errors

  const errorMessage = queryError?.message || scopeError?.message

  return (
    <SearchField
      id={`${queryName}-${scopeName}`}
      label={label}
      ref={(node) => {
        queryFieldRef(node)
        if (typeof ref === "function") ref(node)
        else if (ref) ref.current = node
      }}
      scopes={scopes}
      defaultScope={scopeValue}
      placeholder={placeholder}
      value={queryValue || ""}
      onSearch={(query, scopes) => {
        // Update both the search query and scope in form state
        onQueryChange(query || undefined)
        onScopeChange(scopes || undefined)

        // Trigger the onSearch callback with current form values
        if (onSearch) {
          const formValues = control._formValues
          onSearch(query, scopes, formValues as T)
        }
      }}
      error={errorMessage}
      description={description}
      submitText={submitText}
      showSubmitButton={showSubmitButton}
      submitButtonVariant={submitButtonVariant}
      size={size}
      variant={variant ?? undefined}
      className={className}
      inputClassName={inputClassName}
      appearance={appearance}
      {...queryFieldProps}
      {...rest}
    />
  )
}

const RHFSearchField = React.forwardRef(RHFSearchFieldInner) as <
  T extends FieldValues = FieldValues,
>(
  props: RHFSearchFieldProps<T> & React.RefAttributes<HTMLInputElement>
) => React.ReactElement

export { RHFSearchField }
