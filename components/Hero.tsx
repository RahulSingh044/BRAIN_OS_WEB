"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Download,
  ArrowRight,
  Search,
  Command,
  Terminal,
  Cpu,
  Database,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function BrainOSLanding() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number | undefined;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Create nodes
    const nodeCount = Math.floor((width * height) / 25000);
    const nodes = Array.from(
      { length: Math.max(15, Math.min(nodeCount, 45)) },
      () => ({
        x: Math.random() * width,
        y: Math.random() * height + height * 0.3, // Bias towards bottom/middle
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.5,
        alpha: Math.random() * 0.5 + 0.3,
      }),
    );

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const opacity = (1 - dist / 180) * 0.22;
            ctx.strokeStyle = `rgba(163, 230, 53, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < height * 0.2 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(163, 230, 53, ${node.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(163, 230, 53, 0.6)";
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0c0c0c] text-white font-sans overflow-x-hidden selection:bg-lime-500 selection:text-black">
      {/* Subtle Grid Background Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Interactive Node Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-80"
      />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-4 py-8 md:py-12 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center my-auto py-6 max-w-4xl">
          {/* Badge pulled tightly close */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-[#141d11] border border-lime-500/30 text-lime-400 text-xs font-mono tracking-widest uppercase shadow-lg shadow-lime-950/20">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
            100% OFFLINE PERSONAL MEMORY ENGINE
          </div>

          {/* Main Title - Scaled up larger */}
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tight text-white mb-6 drop-shadow-sm">
            Brain OS
          </h1>

          {/* Subheading */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-neutral-200 tracking-tight mb-6 max-w-2xl">
            Your computer, equipped with seamless memory.
          </p>

          {/* Descriptive Paragraph */}
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed mb-10 font-normal">
            Brain OS runs silently on your machine, turning browser sessions,
            terminal output, and document edits into an instantly searchable
            local knowledge graph.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg cursor-pointer bg-[#e6ff6a] hover:bg-lime-300 text-neutral-950 font-semibold text-sm transition-all shadow-lg shadow-lime-400/20 active:scale-95">
              Download for free
              <Download className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-transparent hover:bg-white/5 text-white font-medium text-sm border border-neutral-800 hover:border-neutral-700 transition-all active:scale-95">
              See how it works
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Floating Search Component (Brain OS Recall) */}
        <div className="w-full max-w-3xl mt-8 mb-4">
          <div
            className={`rounded-xl bg-[#111111]/90 backdrop-blur-md border transition-all duration-300 shadow-2xl ${isFocused ? "border-lime-500/50 shadow-lime-500/10" : "border-neutral-800"}`}
          >
            {/* Top Bar inside Search Box */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-neutral-800/80 text-[11px] font-mono tracking-wider text-neutral-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-lime-400" />
                <span className="text-neutral-300 font-semibold">
                  BRAIN OS RECALL
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse"></span>
                <span className="text-[10px] tracking-widest text-neutral-400">
                  LOCAL INDEX / READY
                </span>
              </div>
            </div>

            {/* Search Input Body */}
            <div className="relative flex items-center px-4 py-3.5">
              <Search className="w-4 h-4 text-neutral-500 mr-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="What was that database config I used on Tuesday?"
                className="w-full bg-transparent text-sm sm:text-base text-neutral-200 placeholder-neutral-600 focus:outline-none"
              />
              <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-mono shrink-0 ml-2">
                <Command className="w-3 h-3" />
                <span>Space</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
