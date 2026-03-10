import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-sky-500/20">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      <Navbar />

      <main className="relative pt-32">
        {/* Hero Section */}
        <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 md:pb-32 md:pt-20">
          <div className="grid gap-16 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/10 dark:border-sky-500/20 bg-sky-50/50 dark:bg-sky-500/5 px-4 py-1.5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
                </span>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600">
                  Leading Software Innovation
                </p>
              </div>

              <h1 className="text-balance text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-7xl">
                Code that <span className="bg-gradient-to-r from-sky-600 via-blue-500 to-indigo-600 dark:from-sky-400 dark:via-cyan-300 dark:to-blue-500 bg-clip-text text-transparent">Powers</span> your Vision.
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                We deliver tailor-made software solutions designed to align with your business goals, improve efficiency, and drive seamless digital transformation.
              </p>

              <div className="flex flex-wrap gap-5">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-4 text-sm font-bold text-white transition-standard hover:bg-sky-500 hover:scale-105 active:scale-95 shadow-lg shadow-sky-500/20"
                >
                  Start Your Project
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 px-8 py-4 text-sm font-bold text-slate-900 dark:text-slate-100 backdrop-blur-sm transition-standard hover:border-sky-500/30 dark:hover:border-sky-500/50 hover:bg-white dark:hover:bg-slate-900"
                >
                  View Services
                </a>
              </div>

              <div className="grid gap-8 border-t border-slate-200 dark:border-white/5 pt-10 sm:grid-cols-3">
                {[
                  { label: "Engineering Excellence", value: "Modern Stack" },
                  { label: "Architecture", value: "Cloud Native" },
                  { label: "Deployment", value: "Global Scale" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-500 uppercase tracking-widest">{stat.label}</p>
                    <p className="text-sm font-bold text-sky-600 dark:text-sky-300">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Orbital Graphic */}
            <div className="relative aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Orbital Rings */}
                <div className="absolute h-full w-full animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-sky-500/20 dark:border-sky-500/20" />
                <div className="absolute h-[80%] w-[80%] animate-[spin_15s_linear_infinite_reverse] rounded-full border border-sky-500/5 dark:border-sky-500/10" />
                <div className="absolute h-[60%] w-[60%] rounded-full border border-slate-200 dark:border-white/5 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl shadow-xl dark:shadow-2xl" />

                {/* Glass Card in Hero */}
                <div className="glass group relative z-10 w-[80%] p-8 transition-standard hover:scale-105">
                  <div className="absolute -top-4 -right-4 h-24 w-24 bg-sky-500/20 blur-2xl group-hover:bg-sky-500/40" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600">Phase 01: Discovery</p>
                  <h3 className="mt-4 text-xl font-bold">Architecture First</h3>
                  <div className="mt-6 space-y-3">
                    {[70, 45, 85].map((percent, index) => (
                      <div key={index} className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800">
                        <div className="h-full rounded-full bg-sky-500 dark:bg-sky-500" style={{ width: `${percent}%` }} />
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-sky-600 dark:text-sky-400 border border-sky-500/10 dark:border-sky-500/20">
                      JS
                    </div>
                    <div className="h-8 w-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-sky-600 dark:text-sky-400 border border-sky-500/10 dark:border-sky-500/20">
                      TS
                    </div>
                    <div className="h-8 w-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-sky-600 dark:text-sky-400 border border-sky-500/10 dark:border-sky-500/20">
                      GO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mb-16 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-sky-400">Professional Engineering</p>
            <h2 className="mt-4 text-4xl font-bold">Comprehensive Digital Solutions</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Custom Software",
                desc: "Tailor-made solutions designed to align with your unique business goals and high-performance requirements.",
                icon: "💻"
              },
              {
                title: "Mobile App Development",
                desc: "Native and cross-platform mobile experiences for Android & iOS that engage users effectively.",
                icon: "📱"
              },
              {
                title: "Website Development",
                desc: "Modern, responsive, and high-performance web platforms crafted with the latest technologies.",
                icon: "🌐"
              },
              {
                title: "POS System",
                desc: "Intelligent Point of Sale systems designed for retail and hospitality with seamless integration.",
                icon: "🛒"
              },
              {
                title: "Business Automation",
                desc: "Transform your operations with intelligent management systems that improve efficiency and scale.",
                icon: "⚙️"
              },
              {
                title: "Internet of Things (IoT)",
                desc: "Connect and manage devices to collect real-time data, automate processes, and build smart environments.",
                icon: "📡"
              }
            ].map((service, i) => (
              <div key={i} className="glass group p-10 transition-standard hover:-translate-y-2 hover:border-sky-500/50 dark:hover:border-sky-500/50">
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-6 text-xl font-bold transition-standard group-hover:text-sky-600 dark:group-hover:text-sky-400">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{service.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 opacity-0 transition-standard group-hover:opacity-100">
                  Explore Solution <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 border-t border-slate-200 dark:border-white/5">
          <div className="mb-16 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-sky-400">Core Advantages</p>
            <h2 className="mt-4 text-4xl font-bold">Why OrbitOne Platforms?</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Access to latest technology",
              "Flexible & scalable solutions",
              "Reliable ongoing support",
              "Secure, high-performance systems",
              "Built to grow with your business"
            ].map((item, i) => (
              <div key={i} className="glass flex flex-col items-center justify-center p-6 text-center transition-standard hover:bg-slate-50/50 dark:hover:bg-white/5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-500/10 text-sky-400 dark:text-sky-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-black dark:text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/10 py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6">
            <div className="glass p-12 md:p-20 text-center">
              <h2 className="text-4xl font-extrabold tracking-tight">Let&apos;s build together</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400">
                Ready to move your business forward with smart digital solutions? Contact OrbitOne Platforms (PVT) LTD today.
              </p>

              <div className="mt-12 flex flex-col items-center gap-8">
                <div className="flex flex-wrap justify-center gap-8 text-slate-600 dark:text-slate-300">
                  <a href="tel:0774936456" className="flex items-center gap-3 transition-standard hover:text-sky-600 dark:hover:text-sky-400">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-500/10 dark:border-sky-500/20 bg-sky-50 dark:bg-sky-500/5">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="font-bold">0774936456</span>
                  </a>
                  <a href="mailto:admin@orbitoneplatforms.com" className="flex items-center gap-3 transition-standard hover:text-sky-600 dark:hover:text-sky-400">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-500/10 dark:border-sky-500/20 bg-sky-50 dark:bg-sky-500/5">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-bold">admin@orbitoneplatforms.com</span>
                  </a>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
