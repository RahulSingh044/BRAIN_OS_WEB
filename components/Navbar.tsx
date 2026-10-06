import { Crosshair, ArrowDown } from "lucide-react";
import Link from "next/link";

export default function BrainOSNavbar() {
  return (
    <header className="fixed z-50 w-full bg-[#0d0d0d] text-white border-b border-[#222222] px-6 md:px-12 py-4 flex items-center justify-between font-sans select-none">
      <Link
        href="/"
        className="flex items-center space-x-3 cursor-pointer group"
      >
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-[#161616] group-hover:border-white/50 transition-colors">
          <Crosshair className="w-4 h-4 text-white stroke-2" />
        </div>
        <span className="text-lg font-bold tracking-tight text-white">
          Brain OS
        </span>
      </Link>

      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/70">
        <Link href="/#features" className="hover:text-white transition-colors">
          Features
        </Link>
        <Link href="/#security" className="hover:text-white transition-colors">
          Security
        </Link>
        <Link href="/#architecture" className="hover:text-white transition-colors">
          Architecture
        </Link>
        <Link href="/contact" className="hover:text-white transition-colors">
          Contact US
        </Link>
        <Link href="/about" className="hover:text-white transition-colors">
          About Us
        </Link>
      </nav>

      <div className="flex items-center space-x-6">
        {/* Download Button */}
        <Link
          href="/#download"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#e6ff6a] px-5 py-3 text-sm font-semibold text-neutral-950 transition-all hover:bg-lime-300 active:scale-95 sm:px-7 sm:py-3.5"
        >
          Download
          <ArrowDown aria-hidden="true" className="h-4 w-4 stroke-[2.5]" />
        </Link>
      </div>
    </header>
  );
}
