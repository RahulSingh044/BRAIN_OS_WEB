"use client";

import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowUpRight, Mail, Send } from "lucide-react";
import { sendEmail } from "@/lib/sendEmail";
import Link from "next/link";

const email = "rahulsingh.dev.36@gmail.com";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const { data, error } = await sendEmail({
        name: (formData.get("name") as string) || "",
        email: (formData.get("email") as string) || "",
        subject: (formData.get("subject") as string) || "",
        message: (formData.get("message") as string) || "",
      });

      if (error) {
        console.error("Resend error:", error);
        setStatusMessage({
          type: "error",
          text: "Failed to send email. Please try again or email us directly.",
        });
      } else if (data) {
        setStatusMessage({
          type: "success",
          text: "Email sent successfully! We'll get back to you soon.",
        });
        form.reset();
      }
    } catch (err) {
      console.error("Send error:", err);
      setStatusMessage({
        type: "error",
        text: "An error occurred while sending your message.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a08] px-6 pb-20 pt-32 font-sans text-zinc-100 selection:bg-[#e6ff6a] selection:text-black md:px-12 md:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#e6ff6a]/[0.06] blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to Brain OS
        </Link>

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <section className="lg:col-span-5">
            <p className="mb-5 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e6ff6a]">
              CONTACT / TEAM RND
            </p>
            <h1 className="max-w-xl text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl">
              Get in touch.
              <br />
              <span className="text-zinc-500">We’re listening.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
              Have a question about Brain OS? Found a bug or have an idea?
              Send a note to the team.
            </p>

            <div className="mt-12 border-t border-zinc-800 pt-7">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500">
                BUILDING INDEPENDENTLY
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
                Team RND is building tools for better personal knowledge and
                computing.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-start gap-4">
              <a
                href="https://github.com/RahulSingh044/BRAIN_OS_WEB"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-[#e6ff6a]"
              >
                GitHub
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-[#e6ff6a]"
              >
                <Mail aria-hidden="true" className="h-4 w-4" />
                {email}
              </a>
            </div>
          </section>

          <section className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-zinc-800 bg-[#11110f] p-6 shadow-2xl sm:p-9"
            >
              <div className="mb-8 flex items-center justify-between border-b border-zinc-800 pb-5">
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Send a message
                  </h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    We’d love to hear from you.
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e6ff6a]/20 bg-[#e6ff6a]/10 text-[#e6ff6a]">
                  <Send aria-hidden="true" className="h-4 w-4" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-zinc-700 bg-[#0a0a08] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#e6ff6a]/70 focus:ring-2 focus:ring-[#e6ff6a]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-zinc-700 bg-[#0a0a08] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#e6ff6a]/70 focus:ring-2 focus:ring-[#e6ff6a]/10"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What would you like to talk about?"
                    className="w-full rounded-lg border border-zinc-700 bg-[#0a0a08] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#e6ff6a]/70 focus:ring-2 focus:ring-[#e6ff6a]/10"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us what's on your mind..."
                    className="w-full resize-y rounded-lg border border-zinc-700 bg-[#0a0a08] px-4 py-3 text-sm leading-relaxed text-white outline-none transition placeholder:text-zinc-600 focus:border-[#e6ff6a]/70 focus:ring-2 focus:ring-[#e6ff6a]/10"
                  />
                </div>
              </div>

              {statusMessage && (
                <div
                  className={`mt-6 rounded-lg px-4 py-3 text-sm ${statusMessage.type === "success"
                      ? "border border-[#e6ff6a]/30 bg-[#e6ff6a]/10 text-[#e6ff6a]"
                      : "border border-red-500/30 bg-red-500/10 text-red-400"
                    }`}
                >
                  {statusMessage.text}
                </div>
              )}

              <div className="mt-7 flex flex-col items-start justify-between gap-4 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center">
                <p className="max-w-sm text-xs leading-relaxed text-zinc-500">
                  Send a message directly to our team inbox.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#e6ff6a] px-5 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
