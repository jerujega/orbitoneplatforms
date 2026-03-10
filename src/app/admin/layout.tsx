import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Orbit One Admin",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-50">
      {/* Admin Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 w-72 border-r border-white/5 bg-slate-900/40 backdrop-blur-xl">
        <div className="flex h-full flex-col p-6">
          <div className="mb-12">
            <Logo />
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-400">
              Control Panel
            </div>
          </div>

          <nav className="flex-1 space-y-2">
            {[
              { label: "Dashboard", icon: "📊", href: "/admin" },
              { label: "Pages", icon: "📄", href: "#" },
              { label: "Products", icon: "📦", href: "#" },
              { label: "Leads", icon: "📧", href: "#" },
              { label: "Settings", icon: "⚙️", href: "#" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition-standard hover:bg-white/5 hover:text-white"
              >
                <span className="text-lg opacity-60 group-hover:opacity-100">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <footer className="mt-auto border-t border-white/5 pt-6">
            <Link
              href="/"
              className="flex items-center justify-center rounded-xl border border-white/5 bg-slate-900 px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-400 transition-standard hover:bg-slate-800 hover:text-white"
            >
              Exit to Site
            </Link>
          </footer>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-72 flex-1 overflow-x-hidden p-10">
        <div className="mx-auto max-w-5xl">
          {children}
        </div>
      </main>
    </div>
  );
}
