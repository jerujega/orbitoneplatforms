import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-slate-200 dark:border-white/5 px-6 py-12">
            <div className="mx-auto flex max-w-7xl items-center flex-col sm:flex-row justify-between gap-6 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 text-center sm:text-left">
                <p>© {new Date().getFullYear()} OrbitOne Platforms (PVT) LTD</p>

                <div className="flex gap-8 justify-center">
                    <Link href="/privacy" className="hover:text-sky-400 transition-standard">Privacy</Link>
                    <Link href="/terms" className="hover:text-sky-400 transition-standard">Terms</Link>
                </div>
            </div>
        </footer>
    );
}
