"use client";

import { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
        type: null,
        message: "",
    });

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        setStatus({ type: null, message: "" });

        const result = await sendEmail(formData);

        if (result.error) {
            setStatus({ type: "error", message: result.error });
        } else {
            setStatus({ type: "success", message: "Message sent! We will get back to you soon." });
            // Reset form on success if needed via a ref or by resetting state, 
            // but since we are using uncontrolled inputs via FormData, we would need a ref.
        }

        setIsSubmitting(false);
    }

    return (
        <form action={handleSubmit} className="w-full max-w-lg mt-8 flex flex-col gap-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-500 dark:text-slate-400 pl-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-950/50 px-4 py-3 text-sm text-slate-800 dark:text-slate-200 outline-none transition-standard focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-slate-500 dark:text-slate-400 pl-1">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+94 77 000 0000"
                        className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-950/50 px-4 py-3 text-sm text-slate-800 dark:text-slate-200 outline-none transition-standard focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-slate-500 dark:text-slate-400 pl-1">Email (Optional)</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-950/50 px-4 py-3 text-sm text-slate-800 dark:text-slate-200 outline-none transition-standard focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400 pl-1">Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project or requirements..."
                    className="w-full resize-none rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-950/50 px-4 py-3 text-sm text-slate-800 dark:text-slate-200 outline-none transition-standard focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                ></textarea>
            </div>

            {status.message && (
                <div className={`text-sm font-medium ${status.type === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                    {status.message}
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full rounded-xl bg-sky-600 dark:bg-sky-500 px-8 py-4 text-sm font-bold text-white dark:text-slate-950 transition-standard hover:bg-sky-500 dark:hover:bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
            >
                {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white dark:text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : (
                    "Send Message"
                )}
            </button>
        </form>
    );
}
