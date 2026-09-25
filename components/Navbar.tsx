import React from 'react';
import { Crosshair, ArrowDown, GitBranch } from 'lucide-react';

export default function BrainOSNavbar() {
  return (
    <header className="fixed z-50 w-full bg-[#0d0d0d] text-white border-b border-[#222222] px-6 md:px-12 py-4 flex items-center justify-between font-sans select-none">
      {/* Left: Brand Logo & Title */}
      <div className="flex items-center space-x-3 cursor-pointer group">
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-[#161616] group-hover:border-white/50 transition-colors">
          <Crosshair className="w-4 h-4 text-white stroke-2" />
        </div>
        <span className="text-lg font-bold tracking-tight text-white">Brain OS</span>
      </div>

      {/* Center: Navigation Links */}
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/70">
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
        <a href="#security" className="hover:text-white transition-colors">Security</a>
        <a href="#cli-docs" className="hover:text-white transition-colors">CLI Docs</a>
        <a href="#changelog" className="hover:text-white transition-colors">Changelog</a>
      </nav>

      {/* Right: Counter & Download Button */}
      <div className="flex items-center space-x-6">
        {/* Download Button */}
        <a
          href="#download"
          className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-[#e6ff6a]/90 transition-colors shadow-sm"
        >
          <span>Download</span>
          <ArrowDown className="w-4 h-4 stroke-[2.5]" />
        </a>
      </div>
    </header>
  );
}