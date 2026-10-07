import { ArrowUpRight, Laptop, Monitor, Terminal } from "lucide-react";

const platforms = [
  {
    name: "Windows",
    detail: "Desktop app",
    icon: Monitor,
  },
  {
    name: "macOS",
    detail: "Desktop app",
    icon: Laptop,
  },
  {
    name: "Linux",
    detail: "Desktop app",
    icon: Terminal,
  },
];

export default function Download() {
  return (
    <section
      id="download"
      className="w-full bg-[#0a0a08] px-6 py-20 font-sans text-zinc-100 selection:bg-[#e6ff6a] selection:text-black md:px-16 lg:px-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14">
          <div className="mb-4 text-[11px] font-mono font-semibold uppercase tracking-widest text-[#e6ff6a]">
            04 / DOWNLOAD
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
              Your memory. Your machine.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400 sm:text-base">
              Brain OS desktop installers are in the works. We’ll publish
              verified builds for each platform here when they’re ready.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 divide-y divide-zinc-800 border-y border-zinc-800 md:grid-cols-3 md:divide-x md:divide-y-0">
          {platforms.map(({ name, detail, icon: Icon }) => (
            <article
              key={name}
              className="group flex min-h-64 flex-col justify-between p-7 transition-colors duration-300 hover:bg-[#11110f] sm:p-9"
            >
              <div className="flex items-start justify-between">
                <Icon
                  aria-hidden="true"
                  className="h-7 w-7 text-zinc-300 transition-colors group-hover:text-[#e6ff6a]"
                  strokeWidth={1.6}
                />
                <span className="rounded border border-zinc-700 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  Coming soon
                </span>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
            No installers have been published yet. Check back soon for release
            notes and verified downloads.
          </p>
        </div>
      </div>
    </section>
  );
}
