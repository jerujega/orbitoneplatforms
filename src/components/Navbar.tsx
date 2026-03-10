"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-slate-200/50 dark:border-white/5 bg-white/40 dark:bg-slate-950/20 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div className="flex items-center gap-8">
                    <Logo />
                    <ThemeToggle />
                </div>

                <nav className="hidden items-center gap-10 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
                    <Link href="/#services" className="transition-standard hover:text-sky-400">
                        Services
                    </Link>
                    <Link href="/#industries" className="transition-standard hover:text-sky-400">
                        Solutions
                    </Link>
                    <Link href="/#about" className="transition-standard hover:text-sky-400">
                        About
                    </Link>
                </nav>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-slate-600 dark:text-slate-300 md:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200/50 dark:border-white/5 shadow-lg">
                    <nav className="flex flex-col p-6 gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                        <Link href="/#services" onClick={closeMenu} className="transition-standard hover:text-sky-400">
                            Services
                        </Link>
                        <Link href="/#industries" onClick={closeMenu} className="transition-standard hover:text-sky-400">
                            Solutions
                        </Link>
                        <Link href="/#about" onClick={closeMenu} className="transition-standard hover:text-sky-400">
                            About
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
