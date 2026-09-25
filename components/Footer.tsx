import React from "react";
import {
  ArrowRight,
  Crosshair,
  Shield,
  Terminal,
  Cpu,
  Database,
  HelpCircle,
  Key,
  FileText,
  Lock,
} from "lucide-react";

export default function BrainOSFooter() {
  return (
    <footer className="w-full bg-[#e6ff6a] text-black font-sans selection:bg-black selection:text-[white] overflow-hidden pt-16 px-6 md:px-16 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        {/* Left Column: Brand & Description */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* <div className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center bg-[#c5f000]">
              <Crosshair className="w-5 h-5 text-black stroke-[2.5]" />
            </div> */}
            <span className="text-xl font-bold tracking-tight text-black">
              Brain OS
            </span>
          </div>

          {/* Description */}
          <p className="text-black/80 text-base md:text-lg max-w-md font-normal leading-relaxed">
            The air-gapped personal cognitive assistant running 100% locally. No
            telemetry.
          </p>

          {/* Download Link */}
          <a
            href="#download"
            className="inline-flex items-center space-x-2 text-black font-semibold text-base group hover:opacity-75 transition-opacity pt-2"
          >
            <span>Download Brain OS</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Right Navigation Columns */}
        <div className="lg:col-span-6 grid grid-cols-3 gap-6 pt-2">
          {/* PRODUCT Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[11px] font-bold tracking-widest text-black/60 uppercase">
              PRODUCT
            </h4>
            <ul className="flex flex-col space-y-3 text-sm font-medium">
              <li>
                <a
                  href="#features"
                  className="hover:underline hover:opacity-100 opacity-90 transition-opacity"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#core-cli"
                  className="hover:underline hover:opacity-100 opacity-90 transition-opacity"
                >
                  Core CLI
                </a>
              </li>
              <li>
                <a
                  href="#air-gapped"
                  className="hover:underline hover:opacity-100 opacity-90 transition-opacity"
                >
                  Air-gapped ops
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:underline hover:opacity-100 opacity-90 transition-opacity"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* RESOURCES Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[11px] font-bold tracking-widest text-black/60 uppercase">
              RESOURCES
            </h4>
            <ul className="flex flex-col space-y-3 text-sm font-medium">
              <li>
                <a
                  href="#cli-docs"
                  className="hover:underline hover:opacity-100 opacity-90 transition-opacity"
                >
                  CLI Docs
                </a>
              </li>
              <li>
                <a
                  href="#gguf-setup"
                  className="hover:underline hover:opacity-100 opacity-90 transition-opacity"
                >
                  Local GGUF setup
                </a>
              </li>
              <li>
                <a
                  href="#sqlite-schema"
                  className="hover:underline hover:opacity-100 opacity-90 transition-opacity"
                >
                  SQLite schema
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:underline hover:opacity-100 opacity-90 transition-opacity"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* SECURITY Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[11px] font-bold tracking-widest text-black/60 uppercase">
              SECURITY
            </h4>
            <ul className="flex flex-col space-y-3 text-sm font-medium">
              <li>
                <a
                  href="#pgp"
                  className="hover:underline hover:opacity-100 opacity-90 transition-opacity"
                >
                  PGP public key
                </a>
              </li>
              <li>
                <a
                  href="#checksums"
                  className="hover:underline hover:opacity-100 opacity-90 transition-opacity"
                >
                  Checksums
                </a>
              </li>
              <li>
                <a
                  href="#builds"
                  className="hover:underline hover:opacity-100 opacity-90 transition-opacity"
                >
                  Builds
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:underline hover:opacity-100 opacity-90 transition-opacity"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="w-full h-px bg-black/15 mb-6"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-black/70 mb-12 gap-4">
          <p>© {new Date().getFullYear()} Brain OS</p>
          <div className="flex items-center space-x-6">
            <a
              href="#privacy-policy"
              className="hover:underline hover:text-black transition-colors"
            >
              Privacy policy
            </a>
            <a
              href="#terms"
              className="hover:underline hover:text-black transition-colors"
            >
              Terms of use
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-[8vw] lg:h-[11.5vw] overflow-hidden text-center select-none pt-4">
        <h1 className="text-[15vw] lg:text-[14.5vw] font-black tracking-tighter leading-none text-black opacity-95 uppercase whitespace-nowrap">
          Brain OS
        </h1>
      </div>
    </footer>
  );
}
