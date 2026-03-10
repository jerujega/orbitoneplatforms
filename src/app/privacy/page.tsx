import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-sky-500/20">
            <Navbar />

            <main className="relative pt-32 pb-24">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="glass p-8 md:p-12">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-500 bg-clip-text text-transparent mb-8">
                            Privacy Policy
                        </h1>

                        <div className="space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed">
                            <section>
                                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">1. Introduction</h2>
                                <p>
                                    At OrbitOne Platforms (PVT) LTD, we respect your privacy and are committed to protecting it. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">2. Information We Collect</h2>
                                <p>
                                    We may collect personal information such as your name, email address, and phone number when you contact us or request a consultation. We also collect usage data to improve our website performance.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">3. How We Use Your Information</h2>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>To provide and maintain our services.</li>
                                    <li>To notify you about changes to our services.</li>
                                    <li>To provide customer support.</li>
                                    <li>To gather analysis or valuable information so that we can improve our services.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">4. Data Security</h2>
                                <p>
                                    The security of your data is important to us. We use industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">5. Contact Us</h2>
                                <p>
                                    If you have any questions about this Privacy Policy, please contact us at:
                                    <br />
                                    Email: <a href="mailto:admin@orbitoneplatforms.com" className="text-sky-400 hover:underline">admin@orbitoneplatforms.com</a>
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
