import React from 'react';
import { Network, Cpu, ShieldCheck } from 'lucide-react';
import { CHAPTER_INFO } from '../data/chapterData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-5 mb-14">
          <div className="text-xs uppercase tracking-widest text-primary font-bold">
            Foundational Infrastructure
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            {CHAPTER_INFO.aboutTitle}
          </h2>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-left sm:text-center">
            <p>
              {CHAPTER_INFO.aboutText1}
            </p>
            <p className="text-slate-400">
              {CHAPTER_INFO.aboutText2}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl glass-card-hover space-y-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-primary">
              <Network className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Autonomous Discovery</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Standardizing open registry and identity layers allowing millions of AI agents to discover complementary agents and form swarms.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl glass-card-hover space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Cross-Platform Bridges</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Enabling protocol interoperability across A2A, Model Context Protocol (MCP), and standard web APIs without vendor lock-in.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl glass-card-hover space-y-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Verifiable Trust & Commerce</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cryptographic state verification, privacy-preserving queries, and economic primitives for agent-to-agent transactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
