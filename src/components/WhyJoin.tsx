import React from 'react';
import { Code2, Globe2, Sparkles, Rocket, ArrowRight } from 'lucide-react';
import { VALUE_PILLARS, CHAPTER_INFO } from '../data/chapterData';

interface WhyJoinProps {
  onOpenJoinModal: () => void;
}

export const WhyJoin: React.FC<WhyJoinProps> = ({ onOpenJoinModal }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-yellow-400" />;
      case 'Globe2':
        return <Globe2 className="w-6 h-6 text-yellow-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-yellow-400" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-yellow-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-yellow-400" />;
    }
  };

  return (
    <section id="why-join" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-950/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="text-xs uppercase tracking-widest text-primary font-bold">
            Community Value
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Why Join Project NANDA
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Project NANDA brings together builders, researchers, and innovators building the foundation for decentralized AI agent autonomy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VALUE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-2xl glass-card-hover flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {getIcon(pillar.iconName)}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-300/80 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-yellow-400/90 group-hover:text-yellow-300">
                <span>Explore Initiative</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-yellow-500/15 via-amber-500/10 to-yellow-500/15 border border-yellow-500/25 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div>
            <h4 className="text-lg font-bold text-white">
              Ready to build the Open Agentic Web in Bangalore?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Connect with fellow developers, get access to research groups, and attend exclusive chapter build-days.
            </p>
          </div>
          <a
            href={CHAPTER_INFO.socials.joinForm}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-2.5 rounded-full bg-primary text-black font-bold text-sm hover:bg-yellow-400 transition-all shadow-md shadow-yellow-500/20"
          >
            Join Chapter Now
          </a>
        </div>
      </div>
    </section>
  );
};
