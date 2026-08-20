import React from 'react';
import { ArrowRight, Sparkles, MapPin, MessageSquare, Calendar } from 'lucide-react';
import { CHAPTER_INFO } from '../data/chapterData';
import { LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-end pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image Container - Highly visible on both mobile and desktop */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jfif"
          alt="Bangalore Architecture Background"
          className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.08] saturate-[0.9]"
        />
        {/* Balanced Vignette & Gradient Overlays preserving high background visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-slate-950/40 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/35 to-slate-950/75" />
      </div>

      {/* Hero Content - Right Aligned matching SF reference */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="max-w-2xl ml-auto space-y-5 text-right">
          
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/70 border border-yellow-500/30 text-yellow-400 text-xs font-semibold backdrop-blur-md animate-fade-in shadow-lg">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-yellow-500"></span>
            </span>
            <MapPin className="w-3 h-3" />
            <span>Bengaluru Node &bull; Open Agentic Web</span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight animate-fade-in-up drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            Project NANDA <br />
            <span className="text-gold-gradient">
              Bangalore Chapter
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-100/90 max-w-xl ml-auto leading-relaxed animate-fade-in font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-slate-950/40 sm:bg-transparent p-3 sm:p-0 rounded-xl backdrop-blur-sm sm:backdrop-blur-none">
            {CHAPTER_INFO.heroDescription}
          </p>

          {/* Social Quick Bar */}
          <div className="flex items-center justify-end gap-2.5 pt-1">
            <a
              href={CHAPTER_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-white/15 hover:border-emerald-500/40 text-xs text-slate-200 hover:text-emerald-400 transition-all backdrop-blur-md shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Group</span>
            </a>
            <a
              href={CHAPTER_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-white/15 hover:border-blue-500/40 text-xs text-slate-200 hover:text-blue-400 transition-all backdrop-blur-md shadow-md"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href={CHAPTER_INFO.socials.luma}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-white/15 hover:border-yellow-500/40 text-xs text-slate-200 hover:text-yellow-400 transition-all backdrop-blur-md shadow-md"
            >
              <Calendar className="w-3.5 h-3.5 text-yellow-400" />
              <span>Events</span>
            </a>
          </div>

          {/* Call to Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 animate-fade-in">
            <a
              href={CHAPTER_INFO.socials.mainSite}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-slate-950/80 hover:bg-slate-900 text-slate-200 text-xs sm:text-sm font-semibold border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 group shadow-md"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={CHAPTER_INFO.socials.joinForm}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-primary hover:bg-yellow-400 text-black text-xs sm:text-sm font-bold shadow-lg shadow-yellow-500/25 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Join Bangalore Chapter</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
