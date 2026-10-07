import Image from "next/image";
import { Download } from "lucide-react";
import Link from "next/link";

export default function BrainOSNavbar() {
  return (
    <header className="fixed z-50 w-full bg-[#0d0d0d] text-white border-b border-[#222222] px-6 md:px-12 py-4 flex items-center justify-between font-sans select-none">
      <Link
        href="/"
        className="brand-link flex items-center space-x-3 cursor-pointer"
      >
        <span className="brand-logo relative inline-flex h-10 w-10 shrink-0">
          <Image
            src="/brainos-logo-lime.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <Image
            src="/brainos-logo-lime.png"
            alt=""
            aria-hidden="true"
            width={40}
            height={40}
            className="brand-logo-white h-10 w-10 object-contain"
            priority
          />
        </span>
        <span className="brand-name relative text-xl font-bold tracking-tight text-white">
          Brain OS
          <span aria-hidden="true" className="brand-name-lime">
            Brain OS
          </span>
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
        <Link
          href="/pre-register"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#e6ff6a] px-7 py-3.5 text-sm font-semibold text-neutral-950 transition-all hover:bg-lime-300 active:scale-95 cursor-pointer shadow-lg shadow-lime-400/20"
        >
          <Download className="h-4 w-4" />
          Pre-register
        </Link>
      </div>
    </header>
  );
}
