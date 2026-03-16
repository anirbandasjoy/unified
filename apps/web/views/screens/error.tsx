"use client"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Copy,
  Fingerprint,
  Home,
  RotateCcw,
  ShieldAlert,
  Terminal,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ErrorView({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [showDebug, setShowDebug] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    console.error(error)
  }, [error])

  const handleCopy = () => {
    navigator.clipboard.writeText(`${error.message}\nID: ${error.digest}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative flex min-h-dvh w-full items-center justify-center bg-white selection:bg-red-100 dark:bg-[#080808] dark:selection:bg-red-500/30">
      {/* --- Optimized Ambient Glow (Centrally Aligned) --- */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div className="h-125 w-125 rounded-full bg-red-500/5 blur-[120px] dark:bg-red-500/3" />
      </div>

      <div className="relative z-10 w-full max-w-130 px-6">
        <div className="space-y-12">
          {/* --- Branding & Icon --- */}
          <div className="flex flex-col items-center gap-6">
            <div className="group relative">
              <div className="absolute -inset-4 rounded-full bg-red-500/10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative flex size-20 rotate-3 items-center justify-center rounded-3xl border border-zinc-200 bg-white transition-transform duration-500 group-hover:rotate-0 dark:border-zinc-800 dark:bg-zinc-900">
                <ShieldAlert
                  className="size-10 text-red-500"
                  strokeWidth={1.2}
                />
              </div>
            </div>

            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Application Error
              </h1>
              <p className="max-w-90 text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                The application encountered an unexpected state. Our monitoring
                tools have been notified automatically.
              </p>
            </div>
          </div>

          {/* --- Navigation Card --- */}
          <div className="">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={reset}
                className="h-11 flex-1 rounded-lg bg-zinc-900 font-semibold text-white transition-all hover:opacity-90 active:scale-[0.97] dark:bg-zinc-50 dark:text-zinc-950"
              >
                <RotateCcw className="mr-2 size-4" />
                Retry Request
              </Button>
              <Button
                asChild
                appearance="outline"
                className="h-11 flex-1 rounded-lg border-zinc-200 bg-white font-semibold active:scale-[0.97] dark:border-zinc-800 dark:bg-transparent"
              >
                <Link href="/">
                  <Home className="mr-2 size-4" />
                  Home
                </Link>
              </Button>
            </div>
          </div>

          {/* --- Professional Debugger Button --- */}
          <div className="space-y-4">
            {process.env.NODE_ENV === "development" && (
              <button
                onClick={() => setShowDebug(!showDebug)}
                className="group flex w-full items-center justify-between rounded-lg border border-zinc-200 bg-white px-5 py-4 transition-all hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-600"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    <Terminal className="size-4 text-zinc-500 transition-colors group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                      Debug Console
                    </p>
                    <p className="text-[11px] font-medium tracking-widest text-zinc-500 uppercase">
                      Stack & Digest
                    </p>
                  </div>
                </div>
                <ChevronRight
                  className={cn(
                    "size-4 text-zinc-400 transition-transform duration-300",
                    showDebug && "rotate-90"
                  )}
                />
              </button>
            )}

            {showDebug && (
              <div className="animate-in duration-500 fade-in slide-in-from-top-4">
                <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-none dark:border-zinc-800 dark:bg-black">
                  {/* CLI Header */}
                  <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <div className="flex items-center gap-2">
                      <Fingerprint className="size-3.5 text-zinc-400" />
                      <span className="font-mono text-[11px] tracking-tighter text-zinc-500 uppercase">
                        Diagnostic Data
                      </span>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                    >
                      {copied ? (
                        <Check className="size-3 text-green-500" />
                      ) : (
                        <Copy className="size-3" />
                      )}
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                  {/* CLI Content */}
                  <div className="scrollbar-thin max-h-55 overflow-y-auto p-5 font-mono text-[13px] leading-relaxed">
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <span className="shrink-0 font-bold text-red-500">
                          error:
                        </span>
                        <span className="text-zinc-700 italic dark:text-zinc-300">
                          {error.message}
                        </span>
                      </div>
                      {error.digest && (
                        <div className="flex gap-3">
                          <span className="shrink-0 font-bold text-zinc-400">
                            digest:
                          </span>
                          <span className="text-zinc-600 dark:text-zinc-400">
                            {error.digest}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 border-t border-zinc-100 pt-2 text-emerald-600 dark:border-zinc-900 dark:text-emerald-500">
                        <span className="animate-pulse text-[10px]">●</span>
                        <span className="text-[11px]">
                          Monitoring agent active. Logs reported.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* --- Support Footer --- */}
          <footer className="pt-4 text-center">
            <Link
              href="/support"
              className="inline-flex items-center gap-1 text-[13px] font-medium text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Need more help? Contact Support
              <ArrowUpRight className="size-3" />
            </Link>
          </footer>
        </div>
      </div>
    </div>
  )
}
