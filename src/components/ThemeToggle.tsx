"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                <div className="h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
            </div>
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-standard hover:border-sky-500/50 hover:bg-white dark:hover:bg-slate-900 shadow-sm"
            aria-label="Toggle theme"
        >
            <div className="relative h-5 w-5 transition-standard group-hover:scale-110">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
                <Moon className="absolute inset-0 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-sky-400" />
            </div>
        </button>
    )
}
