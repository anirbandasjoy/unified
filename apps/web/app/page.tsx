"use client"

import { useState } from "react"
import {
  Moon,
  Sun,
  Rocket,
  Zap,
  Code2,
  Box,
  Terminal,
  Layers,
  ChevronRight,
  Menu,
  X,
  Github as GitHubIcon,
  Heart,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@workspace/ui/components/button"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full p-2 transition-colors hover:bg-muted"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Layers className="size-6 text-primary" />
          <span className="text-xl font-bold">MonoRepo</span>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#tech"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Tech Stack
          </a>
          <a
            href="#setup"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Quick Start
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="default" appearance="ghost" size="sm" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="mr-2 size-4" />
              Star on GitHub
            </a>
          </Button>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 transition-colors hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t md:hidden">
          <div className="container mx-auto space-y-4 px-4 py-4">
            <a
              href="#features"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#tech"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Tech Stack
            </a>
            <a
              href="#setup"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Quick Start
            </a>
            <Button
              variant="default"
              appearance="ghost"
              size="sm"
              className="w-full"
              asChild
            >
              <a
                href="https://github.com/anirbandasjoy/unified"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="mr-2 size-4" />
                Star on GitHub
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
          <Rocket className="mr-2 size-4" />
          Production-Ready MonoRepo Template
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Build Faster with{" "}
          <span className="bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Modern MonoRepo
          </span>
        </h1>
        <p className="mb-8 text-lg text-muted-foreground sm:text-xl md:text-2xl">
          A complete mono repo setup with Next.js 16, React 19, Tailwind CSS v4,
          and Turborepo. Everything pre-configured and ready to ship.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="primary"
            appearance="solid"
            size="lg"
            className="min-w-40"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="mr-2 size-4" />
              Get Started
              <ChevronRight className="ml-2 size-4" />
            </a>
          </Button>
          <Button
            variant="default"
            appearance="outline"
            size="lg"
            className="min-w-40"
            asChild
          >
            <a href="#setup">View Docs</a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          <Heart className="mr-1 inline size-4 fill-red-500 text-red-500" />
          Made with love by developers, for developers
        </p>
      </div>
    </section>
  )
}

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Next.js 16 with React 19, powered by Turborepo for blazing fast builds",
  },
  {
    icon: Layers,
    title: "MonoRepo Architecture",
    description:
      "Share code between apps with workspace packages. Scale effortlessly",
  },
  {
    icon: Box,
    title: "UI Components",
    description: "50+ pre-built components with Radix UI and Tailwind CSS v4",
  },
  {
    icon: Code2,
    title: "Type Safe",
    description:
      "Full TypeScript support with shared configs across all packages",
  },
  {
    icon: Terminal,
    title: "Developer Experience",
    description: "ESLint, Prettier, Husky, and commitlint pre-configured",
  },
  {
    icon: Rocket,
    title: "Production Ready",
    description: "Best practices baked in. Deploy to Vercel in seconds",
  },
]

function Features() {
  return (
    <section id="features" className="border-y bg-muted/30 px-4 py-24">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground">
            Packed with features to help you build better apps, faster
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const techStack = [
  { category: "Framework", items: ["Next.js 16", "React 19", "Turborepo"] },
  {
    category: "Styling",
    items: ["Tailwind CSS v4", "Radix UI", "Lucide Icons"],
  },
  { category: "Tooling", items: ["TypeScript", "ESLint", "Prettier", "Husky"] },
  { category: "Package Manager", items: ["pnpm", "Workspace Protocol"] },
]

function TechStack() {
  return (
    <section id="tech" className="px-4 py-24">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Tech Stack</h2>
          <p className="text-lg text-muted-foreground">
            Modern tools for modern development
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <h3 className="mb-4 text-lg font-semibold">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function QuickStart() {
  return (
    <section id="setup" className="border-y bg-muted/30 px-4 py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Quick Start</h2>
            <p className="text-lg text-muted-foreground">
              Get up and running in under 5 minutes
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  1
                </span>
                <h3 className="font-semibold">Clone the repository</h3>
              </div>
              <div className="overflow-hidden rounded-lg bg-muted p-4">
                <code className="text-sm text-foreground">
                  git clone
                  https://github.com/yourusername/mono-repo-template.git
                </code>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  2
                </span>
                <h3 className="font-semibold">Install dependencies</h3>
              </div>
              <div className="overflow-hidden rounded-lg bg-muted p-4">
                <code className="text-sm text-foreground">pnpm install</code>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  3
                </span>
                <h3 className="font-semibold">Start development server</h3>
              </div>
              <div className="overflow-hidden rounded-lg bg-muted p-4">
                <code className="text-sm text-foreground">pnpm dev</code>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  4
                </span>
                <h3 className="font-semibold">Open your browser</h3>
              </div>
              <div className="overflow-hidden rounded-lg bg-muted p-4">
                <code className="text-sm text-foreground">
                  http://localhost:3000
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FolderStructure() {
  return (
    <section className="px-4 py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Folder Structure
            </h2>
            <p className="text-lg text-muted-foreground">
              Clean and organized structure for better scalability
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border bg-card p-6 shadow-sm">
            <pre className="text-sm">
              <code>{`mono-repo-template/
├── apps/
│   └── web/              # Next.js application
│       ├── app/
│       ├── components/
│       └── lib/
├── packages/
│   └── ui/               # Shared UI components
│       ├── src/
│       │   └── components/
│       └── styles/
├── tooling/
│   ├── eslint-config/    # Shared ESLint config
│   └── typescript-config/ # Shared TypeScript config
├── turbo.json            # Turborepo configuration
├── pnpm-workspace.yaml   # Workspace configuration
└── package.json          # Root package.json`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t px-4 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <Layers className="size-6 text-primary" />
            <span className="text-xl font-bold">MonoRepo Template</span>
          </div>
          <p className="text-sm text-muted-foreground">
            A modern mono repo starter template for building amazing products
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Twitter
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Documentation
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            <Heart className="mr-1 inline size-4 fill-red-500 text-red-500" />
            Made with love • MIT License • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TechStack />
        <FolderStructure />
        <QuickStart />
      </main>
      <Footer />
    </div>
  )
}
