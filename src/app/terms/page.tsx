import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-sky-500/20">
            <Navbar />

            <main className="relative pt-32 pb-24">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="glass p-8 md:p-12">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-500 bg-clip-text text-transparent mb-8">
                            Terms of Service
                        </h1>

                        <div className="space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed">
                            <section>
                                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">1. Agreement to Terms</h2>
                                <p>
                                    By accessing or using the services provided by OrbitOne Platforms (PVT) LTD, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">2. Services</h2>
                                <p>
                                    We provide software development, mobile app development, web design, and business automation services. The specific scope of work for each project will be outlined in a separate agreement.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">3. Intellectual Property</h2>
                                <p>
                                    Unless otherwise agreed upon in writing, all intellectual property rights for the custom software and designs created by OrbitOne Platforms (PVT) LTD remain our property until full payment is received.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">4. Limitation of Liability</h2>
                                <p>
                                    OrbitOne Platforms (PVT) LTD shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">5. Governing Law</h2>
                                <p>
                                    These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which OrbitOne Platforms (PVT) LTD operates.
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
