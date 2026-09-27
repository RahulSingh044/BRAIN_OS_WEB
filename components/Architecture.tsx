"use client";
import { Zap, Network, Layers } from 'lucide-react';

export default function CognitiveArchitecture() {
  return (
    <section id="architecture" className="w-full min-h-screen bg-[#F6F5F0] text-neutral-900 font-sans px-6 py-20 md:px-16 lg:px-24 flex flex-col justify-center selection:bg-neutral-900 selection:text-[#F6F5F0]">
      
      {/* Top Header & Intro Grid */}
      <div className="max-w-7xl mx-auto w-full mb-16">
        <div className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase font-semibold mb-4">
          COGNITIVE ARCHITECTURE
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          {/* Main Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950 max-w-3xl leading-[1.05]">
            Capture, compute, recall.
          </h2>

          {/* Description Paragraph */}
          <p className="text-sm sm:text-base text-neutral-600 max-w-sm leading-relaxed font-normal">
            Three layers working together — multichannel capture, model-agnostic processing, and local vector storage — to give you instant recall over everything you do.
          </p>
        </div>
      </div>

      {/* 3-Column Memory Cards Container */}
      <div className="max-w-7xl mx-auto w-full border-t border-b border-neutral-300 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-300">
        
        {/* Card 1: Capture Layer */}
        <div className="p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#F0EEE6] transition-colors duration-300">
          <div>
            {/* Card Top Label Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-500 mb-12">
              <span>01 / CAPTURE</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 animate-pulse"></span>
                <span className="uppercase text-[10px] tracking-widest text-neutral-800 font-medium">ELECTRON DAEMON</span>
              </div>
            </div>

            {/* Icon */}
            <div className="mb-8 text-neutral-900">
              <Zap className="w-8 h-8 stroke-[1.75]" />
            </div>

            {/* Card Title */}
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 mb-3">
              Multi-Channel Ingestion
            </h3>

            {/* Card Description */}
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              A background daemon silently monitors four channels — file system changes, terminal commands, browser activity via extension, and active application focus — building a continuous stream of context.
            </p>
          </div>
        </div>

        {/* Card 2: Compute Layer */}
        <div className="p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#F0EEE6] transition-colors duration-300">
          <div>
            {/* Card Top Label Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-500 mb-12">
              <span>02 / COMPUTE</span>
              <span className="uppercase text-[10px] tracking-widest text-neutral-500">MODEL-AGNOSTIC</span>
            </div>

            {/* Icon */}
            <div className="mb-8 text-neutral-900">
              <Network className="w-8 h-8 stroke-[1.75]" />
            </div>

            {/* Card Title */}
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 mb-3">
              Semantic Processing
            </h3>

            {/* Card Description */}
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              Automatically parses and summarizes data using natural language processing. A decoupled, model-agnostic layer handles embeddings and entity extraction, so you can swap LLM providers without vendor lock-in.
            </p>
          </div>
        </div>

        {/* Card 3: Storage Layer */}
        <div className="p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#F0EEE6] transition-colors duration-300">
          <div>
            {/* Card Top Label Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-500 mb-12">
              <span>03 / STORAGE</span>
              <span className="uppercase text-[10px] tracking-widest text-neutral-500">SQLITE + VEC</span>
            </div>

            {/* Icon */}
            <div className="mb-8 text-neutral-900">
              <Layers className="w-8 h-8 stroke-[1.75]" />
            </div>

            {/* Card Title */}
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 mb-3">
              Vector + Full-Text Index
            </h3>

            {/* Card Description */}
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              All data lives in local SQLite databases with vector search via sqlite-vec. Keyword, semantic, and structural search strategies run in parallel and are intelligently fused for precise recall.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}