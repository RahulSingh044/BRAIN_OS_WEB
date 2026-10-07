import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowUpRight } from "lucide-react";

const beliefs = [
  "Your data should belong to you.",
  "Context matters more than isolated information.",
  "AI should help you work with your knowledge, not take ownership of it.",
  "Useful intelligence should be practical, transparent, and controllable.",
];

export default function About() {
  return (
    <main className="bg-[#0a0a08] font-sans text-zinc-100 selection:bg-[#e6ff6a] selection:text-black">
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 md:px-12 md:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-16 h-96 w-96 rounded-full bg-[#e6ff6a]/[0.06] blur-[100px]"
        />
        <div className="relative mx-auto w-full max-w-7xl">
          <Link
            href="/"
            className="mb-16 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to Brain OS
          </Link>

          <p className="mb-5 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e6ff6a]">
            ABOUT / TEAM RND
          </p>
          <h1 className="max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl">
            We build tools that{" "}
            <span className="text-zinc-500">
              understand your digital world.
            </span>
          </h1>
          <div className="mt-10 grid gap-6 border-t border-zinc-800 pt-7 sm:grid-cols-2">
            <p className="max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Team RND is a research and development team exploring practical
              ways to make computing more personal, contextual, and useful.
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-500 sm:justify-self-end sm:text-base">
              Brain OS is one of those experiments—a personal knowledge system
              designed to help you remember, search, and connect the information
              you create every day.
            </p>
          </div>
          <a
            href="#why-brain-os"
            aria-label="Learn why we are building Brain OS"
            className="mt-14 inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 text-[#e6ff6a] transition-colors hover:border-[#e6ff6a]/60 hover:bg-[#e6ff6a]/10"
          >
            <ArrowDown aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section
        id="why-brain-os"
        className="scroll-mt-24 border-t border-zinc-800 bg-[#11110f] px-6 py-20 md:px-12 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-5 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e6ff6a]">
              01 / THE PROBLEM
            </p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Your digital life is scattered.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
              Files. Notes. Browser activity. Terminal commands. Documents.
              Finding something you worked on weeks ago shouldn’t depend on
              remembering where you saved it.
            </p>
          </div>
          <div className="lg:col-span-7 lg:border-l lg:border-zinc-800 lg:pl-12">
            <div className="grid gap-3 sm:grid-cols-2">
              {["Files", "Notes", "Browser activity", "Terminal commands", "Documents", "Projects"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-zinc-800/80 py-4"
                  >
                    <span className="text-xs font-mono text-zinc-600">
                      0{index + 1}
                    </span>
                    <span className="text-sm text-zinc-300">{item}</span>
                  </div>
                ),
              )}
            </div>
            <p className="mt-8 max-w-xl text-xl font-medium leading-relaxed text-zinc-200 sm:text-2xl">
              Brain OS brings these pieces together into a searchable personal
              knowledge space.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-5 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e6ff6a]">
              02 / WHAT WE BELIEVE
            </p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Useful technology should earn your trust.
            </h2>
          </div>
          <ol className="divide-y divide-zinc-800 border-y border-zinc-800 lg:col-span-7">
            {beliefs.map((belief, index) => (
              <li
                key={belief}
                className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr] sm:items-start"
              >
                <span className="text-xs font-mono tracking-widest text-[#e6ff6a]">
                  0{index + 1}
                </span>
                <p className="max-w-xl text-lg leading-relaxed text-zinc-200">
                  {belief}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-[#11110f] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-5 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e6ff6a]">
              03 / TEAM RND
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Research.
              <br />
              Experimentation.
              <br />
              Engineering.
            </h2>
          </div>
          <div>
            <p className="max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
              We’re building Brain OS as an ongoing exploration into personal
              computing, knowledge retrieval, and local AI systems.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#e6ff6a] px-5 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-lime-300"
            >
              Contact Team RND
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
