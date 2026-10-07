"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Download,
  ArrowRight,
  Search,
  Terminal,
  Command,
} from "lucide-react";
import { toggleComingSoonBtn } from "@/lib/DownloadToggle";

const sampleQuestions = [
  "What was that database config I used on Tuesday?",
  "Which article had the PostgreSQL SSL fix?",
  "What was I working on before lunch?",
  "Where did I save the project notes?",
  "Where is my graph code file?",
  "Where is my study material for 4th semester?",
];

export default function BrainOSLanding() {
  const [searchQuery, setSearchQuery] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDisabled = toggleComingSoonBtn();

  useEffect(() => {
    let promptIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;
    let timeoutId: number;

    const animatePrompt = () => {
      const prompt = sampleQuestions[promptIndex];

      if (!isDeleting) {
        characterIndex += 1;
        setSearchQuery(prompt.slice(0, characterIndex));

        if (characterIndex === prompt.length) {
          isDeleting = true;
          timeoutId = window.setTimeout(animatePrompt, 300);
          return;
        }

        timeoutId = window.setTimeout(animatePrompt, 30);
        return;
      }

      characterIndex -= 1;
      setSearchQuery(prompt.slice(0, characterIndex));

      if (characterIndex === 0) {
        isDeleting = false;
        promptIndex = (promptIndex + 1) % sampleQuestions.length;
        timeoutId = window.setTimeout(animatePrompt, 350);
        return;
      }

      timeoutId = window.setTimeout(animatePrompt, 24);
    };

    timeoutId = window.setTimeout(animatePrompt, 500);
    return () => window.clearTimeout(timeoutId);
  }, []);

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

    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    observer.observe(canvas);

    const render = () => {
      if (isVisible) {
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
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      id="hero"
      className="relative min-h-screen bg-[#0c0c0c] text-white font-sans overflow-x-hidden selection:bg-lime-500 selection:text-black"
    >
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
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-4 py-8 md:py-12 mx-auto">
        <div className="w-full flex flex-col items-center text-center my-auto py-6">
          {/* Main Title - Scaled up larger */}
          <h1 className="text-7xl sm:text-8xl md:text-[16vh] font-black tracking-tight text-white drop-shadow-sm">
            Brain OS
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-3xl md:text-3xl text-white/70 tracking-tight mb-6 max-w-2xl">
            Talk to your digital knowledge like an intelligent assistant.
          </p>

          {/* Descriptive Paragraph */}
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed mb-10 font-normal">
            Brain OS turns your files, browser activity, terminal history, and
            digital work into a searchable personal knowledge base. Ask questions
            in natural language, recall past work, and discover connections across
            your data — privately and locally.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <button
              disabled={isDisabled}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all text-neutral-950
              ${isDisabled
                  ? "bg-[#e6ff6a] hover:bg-lime-300 cursor-not-allowed opacity-60"
                  : "bg-[#e6ff6a] hover:bg-lime-300 active:scale-95 cursor-pointer shadow-lg shadow-lime-400/20"
                }`}
            >
              {isDisabled
                ? "Coming Soon"
                : `Download For Free${(<Download className="w-4 h-4" />)}`}
            </button>
            <a href="#architecture" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-transparent hover:bg-white/5 text-white font-medium text-sm border border-neutral-800 hover:border-neutral-700 transition-all active:scale-95">
                See how it works
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>

        {/* Bottom Floating Search Component (Brain OS Recall) */}
        <div className="w-full max-w-3xl mt-8 mb-4">
          <div
            className="rounded-xl bg-[#111111]/90 backdrop-blur-md border border-neutral-800 shadow-2xl"
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
                  EXAMPLE PROMPTS
                </span>
              </div>
            </div>

            {/* Search Input Body */}
            <div className="relative flex items-center px-4 py-3.5">
              <Search className="w-4 h-4 text-neutral-500 mr-3 shrink-0" />
              <input
                type="text"
                aria-label="Example questions Brain OS can help answer"
                aria-live="off"
                value={searchQuery}
                readOnly
                placeholder="Explore the kinds of questions Brain OS can help answer..."
                className="w-full cursor-default bg-transparent text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none sm:text-base"
              />
              <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-mono shrink-0 ml-2">
                <Command className="w-3 h-3" />
                <span>Enter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
