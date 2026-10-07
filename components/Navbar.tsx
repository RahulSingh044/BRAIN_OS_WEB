"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Download, MoreHorizontal, X } from "lucide-react";
import Link from "next/link";

const navigationLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#security", label: "Security" },
  { href: "/#architecture", label: "Architecture" },
  { href: "/contact", label: "Contact Us" },
  { href: "/about", label: "About Us" },
];

export default function BrainOSNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const closeOnWideScreen = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };
    const wideScreenQuery = window.matchMedia("(min-width: 900px)");

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    wideScreenQuery.addEventListener("change", closeOnWideScreen);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
      wideScreenQuery.removeEventListener("change", closeOnWideScreen);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed z-50 flex w-full select-none items-center justify-between border-b border-[#222222] bg-[#0d0d0d] px-4 py-4 font-sans text-white sm:px-6 md:px-12">
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

        <nav className="hidden min-[900px]:flex items-center space-x-5 text-sm font-medium text-white/70">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <Link
            href="/pre-register"
            className="hidden min-[900px]:inline-flex items-center justify-center gap-2 rounded-lg bg-[#e6ff6a] px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-lime-400/20 transition-all hover:bg-lime-300 active:scale-95 cursor-pointer"
          >
            <Download aria-hidden="true" className="h-4 w-4" />
            Pre-register
          </Link>
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="compact-navigation"
            onClick={() => setIsMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e6ff6a] min-[900px]:hidden"
          >
            <MoreHorizontal aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] min-[900px]:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => setIsMenuOpen(false)}
          className={`absolute inset-0 h-full w-full bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 motion-reduce:transition-none ${
            isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />
        <aside
          id="compact-navigation"
          role="dialog"
          aria-modal={isMenuOpen}
          aria-hidden={!isMenuOpen}
          aria-labelledby="compact-navigation-title"
          inert={!isMenuOpen}
          className={`absolute right-0 top-0 z-10 flex h-full w-[min(20rem,calc(100vw-2rem))] flex-col border-l border-white/10 bg-zinc-800 p-6 text-white shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none sm:p-8 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
            <div className="mb-10 flex items-center justify-between">
              <h2
                id="compact-navigation-title"
                className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300"
              >
                Brain OS
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e6ff6a]"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Main navigation" className="flex flex-col">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-white/10 py-4 text-lg font-medium text-zinc-200 transition-colors hover:text-lime-400"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/pre-register"
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#e6ff6a] px-5 py-3.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-lime-300"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              Pre-register
            </Link>
        </aside>
      </div>
    </>
  );
}
