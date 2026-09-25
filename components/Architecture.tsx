"use client";
import React from 'react';
import { Zap, Network, Layers } from 'lucide-react';

export default function CognitiveArchitecture() {
  return (
    <section className="w-full min-h-screen bg-[#F6F5F0] text-neutral-900 font-sans px-6 py-20 md:px-16 lg:px-24 flex flex-col justify-center selection:bg-neutral-900 selection:text-[#F6F5F0]">
      
      {/* Top Header & Intro Grid */}
      <div className="max-w-7xl mx-auto w-full mb-16">
        <div className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase font-semibold mb-4">
          COGNITIVE ARCHITECTURE
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          {/* Main Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950 max-w-3xl leading-[1.05]">
            Engineered to recall like you do.
          </h2>

          {/* Description Paragraph */}
          <p className="text-sm sm:text-base text-neutral-600 max-w-sm leading-relaxed font-normal">
            Instead of a flat search index, Brain OS organizes context across three cognitive levels, enabling rapid short-term recall and deep historical associations.
          </p>
        </div>
      </div>

      {/* 3-Column Memory Cards Container */}
      <div className="max-w-7xl mx-auto w-full border-t border-b border-neutral-300 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-300">
        
        {/* Card 1: Working Memory */}
        <div className="p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#F0EEE6] transition-colors duration-300">
          <div>
            {/* Card Top Label Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-500 mb-12">
              <span>01 / MEMORY LAYER</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 animate-pulse"></span>
                <span className="uppercase text-[10px] tracking-widest text-neutral-800 font-medium">ACTIVE</span>
              </div>
            </div>

            {/* Icon */}
            <div className="mb-8 text-neutral-900">
              <Zap className="w-8 h-8 stroke-[1.75]" />
            </div>

            {/* Card Title */}
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 mb-3">
              Working Memory
            </h3>

            {/* Card Description */}
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              Tracks active windows, current shell output, and recent copy-paste events. Automatically clears after 60 minutes for high-speed RAM indexing.
            </p>
          </div>
        </div>

        {/* Card 2: Semantic Memory */}
        <div className="p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#F0EEE6] transition-colors duration-300">
          <div>
            {/* Card Top Label Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-500 mb-12">
              <span>02 / MEMORY LAYER</span>
              <span className="uppercase text-[10px] tracking-widest text-neutral-500">INDEXED</span>
            </div>

            {/* Icon */}
            <div className="mb-8 text-neutral-900">
              <Network className="w-8 h-8 stroke-[1.75]" />
            </div>

            {/* Card Title */}
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 mb-3">
              Semantic Memory
            </h3>

            {/* Card Description */}
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              Extracts concepts, structural definitions, and documentation patterns, linking them through a local multi-dimensional vector graph.
            </p>
          </div>
        </div>

        {/* Card 3: Episodic Memory */}
        <div className="p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#F0EEE6] transition-colors duration-300">
          <div>
            {/* Card Top Label Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-500 mb-12">
              <span>03 / MEMORY LAYER</span>
              <span className="uppercase text-[10px] tracking-widest text-neutral-500">TIMELINE</span>
            </div>

            {/* Icon */}
            <div className="mb-8 text-neutral-900">
              <Layers className="w-8 h-8 stroke-[1.75]" />
            </div>

            {/* Card Title */}
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 mb-3">
              Episodic Memory
            </h3>

            {/* Card Description */}
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              Reconstructs the sequence of your week so you can return to the exact state your environment was in at any minute.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}