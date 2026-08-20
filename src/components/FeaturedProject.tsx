import React from 'react';
import { FileText, ExternalLink, Sparkles, Languages, ShieldCheck, Cpu, Mic, ArrowUpRight } from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  const capabilities = [
    {
      title: "Voice-First Multilingual",
      description: "Supports 22+ Indian languages with natural voice interaction across literacy barriers.",
      icon: <Mic className="w-5 h-5" />,
      color: "yellow",
      tag: "22+ Languages",
    },
    {
      title: "Agent One Architecture",
      description: "Modular 6-layer agent framework connecting public MCP servers and existing DPI rails.",
      icon: <Cpu className="w-5 h-5" />,
      color: "amber",
      tag: "6-Layer Stack",
    },
    {
      title: "Intent to Action",
      description: "Citizens express needs in natural speech; Doot translates intent directly into service execution.",
      icon: <Languages className="w-5 h-5" />,
      color: "cyan",
      tag: "Autonomous",
    },
    {
      title: "Privacy & Sovereignty",
      description: "User-controlled, explainable decisions with auditable reasoning and verifiable privacy rails.",
      icon: <ShieldCheck className="w-5 h-5" />,
      color: "emerald",
      tag: "Zero-Trust",
    },
  ];

  return (
    <section id="doot" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Glow ambient layer */}
        <div className="relative rounded-3xl p-8 sm:p-12 glass-card border border-yellow-500/25 overflow-hidden shadow-2xl shadow-black/60 bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-950">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            {/* Header Badge & Title */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold backdrop-blur-md shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Project Spotlight</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Doot
              </h2>

              <p className="text-base sm:text-xl font-semibold text-gold-gradient">
                A Personal AI Agent for Every Indian Citizen
              </p>

              <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-normal">
                Citizen-centric agentic AI built on India's Digital Public Infrastructure (DPI) — Aadhaar, UPI, DigiLocker — empowering 1.4 billion people with their own intelligent digital representative. Not just a chatbot, but an autonomous representative that acts on the citizen's behalf with explicit consent.
              </p>
            </div>

            {/* Key Capabilities Grid with dynamic interactive hover states */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="group relative p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-yellow-500/40 hover:bg-slate-900/95 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-yellow-500/10 flex flex-col justify-between cursor-default overflow-hidden"
                >
                  {/* Subtle hover gradient glow inside card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-sm">
                        {cap.icon}
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800/80 border border-white/10 text-slate-300 group-hover:border-yellow-500/30 group-hover:text-yellow-300 transition-colors">
                        {cap.tag}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                      {cap.title}
                    </h4>

                    <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 group-hover:text-yellow-400 font-semibold transition-colors">
                    <span>Explore Capability</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              ))}
            </div>

            {/* 2 CTAs: Read Whitepaper & Learn More */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://digidoot.in/Doot_WhitePaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-black font-bold text-xs sm:text-sm hover:bg-yellow-400 shadow-lg shadow-yellow-500/20 active:scale-[0.98] transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-black" />
                <span>Read Whitepaper</span>
              </a>

              <a
                href="https://digidoot.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm border border-white/15 hover:border-yellow-500/40 backdrop-blur-md active:scale-[0.98] transition-all duration-200"
              >
                <span>Learn More</span>
                <ExternalLink className="w-4 h-4 text-yellow-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
