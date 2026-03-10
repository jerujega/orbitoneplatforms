import Link from "next/link";

export default function AdminHome() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="flex items-end justify-between border-b border-white/5 pb-8">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">System Overview</h1>
          <p className="mt-2 text-slate-400">Monitoring Orbit One Platforms performance and engagement.</p>
        </div>
        <div className="flex gap-3">
          <div className="h-10 w-10 animate-pulse rounded-full bg-sky-500/20" />
          <div className="h-10 w-10 rounded-full bg-slate-800" />
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-4">
        {[
          { label: "Site Traffic", value: "12,840", trend: "+14%", color: "text-emerald-400" },
          { label: "Active Project", value: "2", trend: "On Track", color: "text-sky-400" },
          { label: "Leads", value: "48", trend: "+8", color: "text-amber-400" },
          { label: "System Uptime", value: "99.9%", trend: "Stable", color: "text-indigo-400" },
        ].map((metric, i) => (
          <div key={i} className="glass p-6 transition-standard hover:border-sky-500/30">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{metric.label}</p>
            <div className="mt-4 flex items-end justify-between">
              <h2 className="text-2xl font-bold">{metric.value}</h2>
              <span className={`text-[10px] font-bold ${metric.color}`}>{metric.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Content Management Summary */}
      <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
        <div className="glass overflow-hidden">
          <div className="border-b border-white/5 bg-white/3 p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-sky-400">Content Pipeline</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium">New Service Landing: "Blockchain Solutions"</p>
                    <p className="text-xs text-slate-500">Scheduled for March 12, 2026</p>
                  </div>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-standard">
                    Edit
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass p-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-sky-400">Quick Actions</h3>
          <div className="mt-8 space-y-4">
            <button className="w-full rounded-xl bg-sky-500 px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-950 transition-standard hover:bg-sky-400">
              Create New Page
            </button>
            <button className="w-full rounded-xl border border-white/5 bg-slate-900 px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-400 transition-standard hover:border-sky-500/30 hover:text-white">
              Export Lead Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

