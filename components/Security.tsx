"use client";
import React, { useState } from 'react';
import { Shield, Cpu, Database, Server, Lock, Fingerprint, ArrowUpRight, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function App() {
  const [activeMetric, setActiveMetric] = useState(3); // Default third party servers highlighted

  const securityMetrics = [
    {
      id: 0,
      icon: <Fingerprint className="w-5 h-5 text-zinc-400" />,
      title: "OS level captures",
      status: "ACTIVE",
      highlight: false,
    },
    {
      id: 1,
      icon: <Cpu className="w-5 h-5 text-zinc-400" />,
      title: "Apple / Intel neural engine",
      status: "HARDWARE ACCEL",
      highlight: false,
    },
    {
      id: 2,
      icon: <Database className="w-5 h-5 text-zinc-400" />,
      title: "AES-256 SQLite database",
      status: "LOCAL DISK ONLY",
      highlight: false,
    },
    {
      id: 3,
      icon: <Server className="w-5 h-5 text-[#b8ff33]" />,
      title: "Third party servers",
      status: "BLOCKED BY SYSTEM",
      highlight: true,
    },
  ];

  const bottomFeatures = [
    {
      icon: <Fingerprint className="w-6 h-6 text-[#b8ff33]" />,
      title: "No cloud synchronization",
      description: "No telemetry endpoints or remote cloud vectors. Everything is stored in an encrypted local database."
    },
    {
      icon: <Lock className="w-6 h-6 text-[#b8ff33]" />,
      title: "Air-gapped operation",
      description: "Full indexing and semantic search remain available when completely disconnected from the internet."
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#b8ff33]" />,
      title: "Open-weight models",
      description: "Local quantized GGUF and BERT architectures run with acceleration on your device's neural engine."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a08] text-zinc-100 font-sans selection:bg-[#b8ff33] selection:text-black py-16 px-4 sm:px-8 lg:px-16 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-20">
          
          {/* Left Column: Headings & description */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-white leading-[1.05]">
              Your memory <br className="hidden sm:inline" />
              stays on your <br className="hidden sm:inline" />
              drive. Period.
            </h1>
            
            <p className="text-zinc-400 text-base sm:text-lg max-w-lg leading-relaxed">
              Unlike cloud AI tools that transmit every keystroke to third-party servers, Brain OS maintains a strict local-first security boundary. Your data never leaves your physical storage.
            </p>

            <div>
              <a 
                href="#whitepaper" 
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 text-white font-medium hover:text-[#b8ff33] transition-colors group pt-2"
              >
                <span>Read the security whitepaper</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Security Boundary Dashboard Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#11110f] border border-zinc-800/80 rounded-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
              
              {/* Subtle ambient glow behind card */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#b8ff33]/5 rounded-full blur-3xl pointer-events-none"></div>

              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 mb-4 border-b border-zinc-800/80">
                <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                  LOCAL MACHINE SECURITY BOUNDARY
                </span>
                <div className="flex items-center gap-1.5 text-[#b8ff33] bg-[#b8ff33]/10 px-2.5 py-1 rounded text-xs font-mono">
                  <Shield className="w-3.5 h-3.5" />
                  <span>SECURE</span>
                </div>
              </div>

              {/* Metrics List */}
              <div className="space-y-3">
                {securityMetrics.map((metric) => {
                  const isActive = activeMetric === metric.id;
                  return (
                    <div 
                      key={metric.id}
                      onClick={() => setActiveMetric(metric.id)}
                      className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-200 border ${
                        metric.highlight
                          ? isActive 
                            ? 'bg-[#b8ff33] text-black border-[#b8ff33] shadow-lg shadow-[#b8ff33]/20' 
                            : 'bg-[#b8ff33]/10 text-[#b8ff33] border-[#b8ff33]/40 hover:bg-[#b8ff33]/20'
                          : isActive
                            ? 'bg-zinc-800/60 border-zinc-700 text-white'
                            : 'bg-zinc-900/40 border-zinc-800/50 text-zinc-300 hover:bg-zinc-800/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`${metric.highlight && isActive ? 'text-black' : metric.highlight ? 'text-[#b8ff33]' : 'text-zinc-400'}`}>
                          {metric.icon}
                        </div>
                        <span className="font-medium text-sm sm:text-base">
                          {metric.title}
                        </span>
                      </div>

                      <span className={`text-xs font-mono tracking-wider font-semibold px-2 py-1 rounded ${
                        metric.highlight 
                          ? isActive ? 'bg-black/10 text-black' : 'bg-[#b8ff33]/20 text-[#b8ff33]'
                          : 'bg-zinc-800/80 text-zinc-400'
                      }`}>
                        {metric.status}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Interactive hint */}
              <div className="mt-6 pt-4 border-t border-zinc-800/50 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>Click items to inspect boundary status</span>
                <span className="text-[#b8ff33] animate-pulse">● Live Shield Active</span>
              </div>

            </div>
          </div>

        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-zinc-800/60">
          {bottomFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#11110f]/60 hover:bg-[#11110f] border border-zinc-800/60 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:border-zinc-700 group flex flex-col justify-between"
            >
              <div>
                <div className="mb-5 inline-block p-3 rounded-lg bg-[#b8ff33]/10 border border-[#b8ff33]/20 group-hover:scale-105 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}