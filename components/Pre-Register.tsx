"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Send, Sparkles } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function PreRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/pre-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          typeof result.message === "string"
            ? result.message
            : "Registration failed. Please try again.",
        );
      }

      const wasAlreadyRegistered =
        typeof result === "object" &&
        result !== null &&
        "duplicate" in result &&
        result.duplicate === true;

      setStatus({
        type: "success",
        message: wasAlreadyRegistered
          ? "This email is already registered for early access."
          : "Thanks! You’re on the early access list.",
      });
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Pre-registration submission failed:", error);
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Could not submit your registration. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
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
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e6ff6a]">
              <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
              EARLY ACCESS / BRAIN OS
            </p>
            <h1 className="max-w-xl text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl">
              Think clearly.
              <br />
              <span className="text-zinc-500">Remember everything.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
              Join the Brain OS private beta and be among the first to explore a
              calmer, faster way to manage your digital knowledge.
            </p>

            <div className="mt-12 border-t border-zinc-800 pt-7">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500">
                YOUR KNOWLEDGE, CONNECTED
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
                Get updates about early access and the tools we’re building for
                better personal knowledge and computing.
              </p>
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
                    Request early access
                  </h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    Leave your details and we’ll keep you in the loop.
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e6ff6a]/20 bg-[#e6ff6a]/10 text-[#e6ff6a]">
                  <Send aria-hidden="true" className="h-4 w-4" />
                </div>
              </div>

              <div className="grid gap-5">
                <div>
                  <label
                    htmlFor="pre-register-name"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Name
                  </label>
                  <input
                    id="pre-register-name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-zinc-700 bg-[#0a0a08] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#e6ff6a]/70 focus:ring-2 focus:ring-[#e6ff6a]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="pre-register-email"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Email
                  </label>
                  <input
                    id="pre-register-email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-zinc-700 bg-[#0a0a08] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#e6ff6a]/70 focus:ring-2 focus:ring-[#e6ff6a]/10"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#e6ff6a] px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300 focus:outline-none focus:ring-2 focus:ring-[#e6ff6a]/50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Pre-register now"}
                {!isSubmitting && <ArrowRight className="h-4 w-4" />}
              </button>

              {status && (
                <p
                  role={status.type === "error" ? "alert" : "status"}
                  className={`mt-4 text-sm ${
                    status.type === "success"
                      ? "text-[#e6ff6a]"
                      : "text-red-400"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}