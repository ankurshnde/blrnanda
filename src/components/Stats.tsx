import React from 'react';
import { CHAPTER_INFO } from '../data/chapterData';

export const Stats: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-slate-950/70 backdrop-blur-md relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CHAPTER_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card border border-white/5 hover:border-yellow-500/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-primary transition-colors tracking-tight">
                {stat.value}
              </div>
              <div className="mt-3 space-y-0.5">
                <div className="text-xs font-bold tracking-wider text-slate-200 uppercase">
                  {stat.title}
                </div>
                <div className="text-xs text-slate-400 font-normal">
                  {stat.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
