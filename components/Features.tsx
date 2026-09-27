"use client";
import React, { useState } from 'react';
import { Search, Terminal, Clock, Copy, Check, ExternalLink } from 'lucide-react';
// Helper for Typewriter effect
const TypewriterText = ({ text, show, speed = 20, isStatic = false }: { text: string, show: boolean, speed?: number, isStatic?: boolean }) => {
  const [displayed, setDisplayed] = useState(isStatic ? text : '');
  React.useEffect(() => {
    if (isStatic) { setDisplayed(text); return; }
    if (!show) { setDisplayed(''); return; }
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.substring(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [show, text, speed, isStatic]);
  return <span>{displayed}</span>;
};

// Helper for Terminal Spinner
const TerminalSpinner = () => {
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  const [frame, setFrame] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % frames.length);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return <span className="mr-3 text-lime-500">{frames[frame]}</span>;
};

export default function InstantRecallSection() {
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('What was that local database config string I had in the terminal on Tuesday?');
  const [searchStep, setSearchStep] = useState(0);
  const [loadingText, setLoadingText] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText('DATABASE_URL="postgres://postgres:root_pass_air_99@127.0.0.1:5432/brainos_db?sslmode=disable"');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSearch = () => {
    if (searchStep > 0) return;
    setSearchStep(1);
    setLoadingText("Understanding query...");
    
    setTimeout(() => {
      setLoadingText("Searching across all channels...");
    }, 800);

    setTimeout(() => {
      setLoadingText("Ranking results...");
    }, 1600);

    setTimeout(() => {
      setSearchStep(2); // Show first typewriter AND fade up static blocks
    }, 2400);

    setTimeout(() => {
      setSearchStep(4); // Show second typewriter (after step 2 finishes typing and fading in)
    }, 3600);
    
    setTimeout(() => {
      setSearchStep(0); // Reset after done so they can play again
    }, 9000);
  };

  return (
    <div id="features" className="relative min-h-screen bg-[#e6ff6a] text-neutral-950 font-sans px-4 py-16 md:px-12 lg:px-20 flex flex-col justify-center selection:bg-neutral-950 selection:text-[#ccff00]">
      
      {/* Top Header & Intro Grid */}
      <div className="max-w-7xl mx-auto w-full mb-12">
        <div className="text-xs font-mono tracking-widest text-neutral-900 uppercase font-semibold mb-3">
          01 / INSTANT RECALL
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          {/* Main Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950 max-w-4xl leading-[1.05]">
            Retrieve anything you have seen, typed, or built.
          </h2>

          {/* Description Paragraph */}
          <p className="text-base sm:text-lg text-neutral-900 max-w-sm leading-relaxed font-normal">
            Search by idea rather than date or filename. Brain OS understands meaning rather than just matching keywords, answering conceptual questions grounded in your actual files.
          </p>
        </div>
      </div>

      {/* Main Terminal / Search Console Card */}
      <div className="max-w-7xl mx-auto w-full bg-[#111111] text-white rounded-xl shadow-2xl border border-neutral-900 overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-neutral-800 text-xs font-mono tracking-wider text-neutral-400 bg-[#161616]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
            <span className="text-neutral-300 font-semibold tracking-widest">LOCAL SEMANTIC KNOWLEDGE</span>
          </div>
          <div className="text-neutral-500 tracking-wider text-[11px]">
            14,802 ITEMS INDEXED
          </div>
        </div>

        {/* Search Query Input Bar */}
        <div className="px-6 py-5 border-b border-neutral-800 flex items-center justify-between gap-4 bg-[#111111]">
          <div className="flex items-center gap-3 w-full">
            <Search className={`w-5 h-5 shrink-0 ${searchStep === 1 ? 'text-lime-400 animate-spin' : 'text-neutral-400'}`} />
            <input
              type="text"
              value={searchQuery}
              readOnly
              placeholder="Ask a question about your files..."
              onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
              className="w-full bg-transparent text-sm sm:text-base text-neutral-100 placeholder-neutral-600 focus:outline-none cursor-default"
            />
          </div>
          <button 
            onClick={handleSearch}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-mono tracking-wider transition-all border border-neutral-700 shrink-0"
          >
            <span className="text-lime-400 font-bold">⌘</span> ENTER
          </button>
        </div>

        {/* Results Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#0e0e0e]">
          
          {/* Left Side: Retrieved Terminal Capture */}
          <div className="relative lg:col-span-9 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-neutral-800/80 flex flex-col justify-between min-h-75">
            
            {/* Loading State Overlay */}
            <div className={`absolute inset-0 flex flex-col items-start justify-start p-6 sm:p-8 bg-[#0e0e0e] z-10 transition-opacity duration-300 ${searchStep === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <div className="flex items-center text-lime-400 font-mono text-sm">
                <TerminalSpinner />
                <span>{loadingText}</span>
              </div>
            </div>

            <div className={`relative z-0 flex-1 flex flex-col justify-between ${searchStep === 1 ? 'invisible' : 'visible'}`}>
              <div>
                {/* Result Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono tracking-wider text-lime-400 font-semibold uppercase min-h-4">
                    <TypewriterText text="RETRIEVED FROM TERMINAL CAPTURE" show={searchStep >= 2} speed={30} isStatic={searchStep === 0} />
                  </span>
                  <span className={`text-[11px] font-mono tracking-widest text-neutral-500 bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800 transition-all duration-700 ease-out ${searchStep === 0 || searchStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    98% MATCH
                  </span>
                </div>

                {/* AI Response Snippet */}
                <div className={`mb-6 text-sm text-neutral-300 leading-relaxed font-sans transition-all duration-700 ease-out delay-150 ${searchStep === 0 || searchStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  I found a PostgreSQL connection string in your terminal history from Tuesday at 2:44 PM.
                </div>

                {/* Session Info */}
                <div className={`mb-4 transition-all duration-700 ease-out delay-300 ${searchStep === 0 || searchStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="text-sm font-mono text-neutral-200 font-medium">
                    zsh session - ~/.config/postgres/dev.env
                  </div>
                  <div className="text-xs text-neutral-500 font-mono mt-0.5">
                    Tuesday, 2:44 PM
                  </div>
                </div>

                {/* Code Snippet Box */}
                <div className={`relative group bg-[#161616] rounded-lg p-4 sm:p-5 border border-neutral-800/80 font-mono text-xs sm:text-sm text-neutral-300 overflow-x-auto my-4 shadow-inner transition-all duration-700 ease-out delay-500 ${searchStep === 0 || searchStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-lime-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <div className="leading-relaxed">
                    <span className="text-purple-400">DATABASE_URL</span>
                    <span className="text-neutral-400">=</span>
                    <span className="text-lime-300">"postgres://postgres:root_pass_air_99@127.0.0.1:5432/brainos_db?sslmode=disable"</span>
                  </div>
                </div>
              </div>

              {/* Footer Context Link */}
              <div className={`mt-6 pt-4 border-t border-neutral-900 flex items-center gap-2 text-xs text-neutral-400 font-mono min-h-10 transition-all duration-500 ${searchStep === 0 || searchStep >= 4 ? 'opacity-100' : 'opacity-0'}`}>
                <div className={searchStep === 0 || searchStep >= 4 ? 'opacity-100' : 'opacity-0'}>
                  <Terminal className="w-3.5 h-3.5 text-lime-400 shrink-0 inline mr-2" />
                  <TypewriterText text="Related: Brave tab - PostgreSQL SSL connection parameters reference, Tuesday at 2:40 PM." show={searchStep >= 4} speed={25} isStatic={searchStep === 0} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Capture Timeline */}
          <div className="lg:col-span-3 p-6 sm:p-8 bg-[#111111] flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono tracking-widest text-neutral-400 font-semibold uppercase mb-6 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-lime-400" />
                CAPTURE TIMELINE
              </div>

              {/* Timeline Items */}
              <div className="relative pl-5 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-neutral-800">
                
                {/* Timeline Item 1 */}
                <div className="relative">
                  <div className="absolute -left-5.75 top-1.5 w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#111111]"></div>
                  <div className="text-[11px] font-mono text-neutral-500">2:39 / Browser</div>
                  <div className="text-xs text-neutral-300 font-medium mt-0.5">SSL reference</div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative">
                  <div className="absolute -left-5.75 top-1.5 w-2 h-2 rounded-full bg-neutral-600 ring-4 ring-[#111111]"></div>
                  <div className="text-[11px] font-mono text-neutral-500">2:42 / File System</div>
                  <div className="text-xs text-neutral-300 font-medium mt-0.5">dev.env modified</div>
                </div>

                {/* Timeline Item 3 (Active) */}
                <div className="relative">
                  <div className="absolute -left-5.75 top-1.5 w-2.5 h-2.5 rounded-full bg-lime-400 ring-4 ring-lime-950/50 animate-pulse"></div>
                  <div className="text-[11px] font-mono text-lime-400 font-semibold">2:44 / Terminal</div>
                  <div className="text-xs text-white font-medium mt-0.5">Connection tested</div>
                </div>

              </div>
            </div>

            {/* Bottom mini status badge */}
            <div className="mt-8 pt-4 border-t border-neutral-900/60 text-[10px] font-mono text-neutral-500">
              CONTEXTUAL INDEX ACTIVE
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}