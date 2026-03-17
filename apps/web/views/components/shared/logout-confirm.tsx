"use client"

import React from "react"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@workspace/ui/components/alert-dialog"
import { Button } from "@workspace/ui/components/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

type ButtonVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "destructive"
  | "warning"
  | "dim"
  | "field"
type ButtonAppearance = "solid" | "ghost" | "outline" | "fade"

export interface LogoutConfirmProps {
  /**
   * Redirect path after logout
   * @default "/"
   */
  redirectPath?: string
  /**
   * Logout button text
   * @default "Logout"
   */
  logoutButtonText?: string
  /**
   * Dialog title
   * @default "Are you sure you want to logout?"
   */
  title?: string
  /**
   * Dialog description
   * @default "You will be redirected to the home page."
   */
  description?: string
  /**
   * Additional function to run on logout (e.g., clear cookies, call API)
   */
  onLogout?: () => void | Promise<void>
  /**
   * Button variant
   * @default "destructive"
   */
  variant?: ButtonVariant
  /**
   * Button appearance
   * @default "outline"
   */
  appearance?: ButtonAppearance
  /**
   * Show logout icon
   * @default true
   */
  showIcon?: boolean
  /**
   * Custom button content
   */
  children?: React.ReactNode
}

export function LogoutConfirm({
  redirectPath = "/",
  logoutButtonText = "Logout",
  title = "Are you sure you want to logout?",
  description = "You will be redirected to the home page.",
  onLogout,
  variant = "destructive",
  appearance = "outline",
  showIcon = true,
  children,
}: LogoutConfirmProps) {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)

  const handleLogout = async () => {
    // Run custom logout function if provided
    if (onLogout) {
      await onLogout()
    }

    // Redirect to specified path
    router.push(redirectPath)
    setIsOpen(false)
  }

  return (
    <>
      <Button
        variant={variant}
        appearance={appearance}
        onClick={() => setIsOpen(true)}
      >
        {showIcon && <LogOut className="size-4" />}
        <span className="hidden sm:block"> {children || logoutButtonText}</span>
      </Button>

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              variant="destructive"
              appearance="solid"
              onClick={handleLogout}
            >
              {logoutButtonText}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
