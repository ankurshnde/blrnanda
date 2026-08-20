import React from 'react';
import { Shield } from 'lucide-react';
import { CHAPTER_LEADERS } from '../data/chapterData';
import { LinkedinIcon } from './Icons';

export const ChapterLeaders: React.FC = () => {
  return (
    <section id="leaders" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-950/40 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 text-primary text-xs font-semibold">
            <Shield className="w-3.5 h-3.5" />
            <span>Chapter Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Chapter Leaders
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Driving chapter initiatives, organizing technical build-days, and fostering the agentic ecosystem across Bengaluru.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {CHAPTER_LEADERS.map((leader) => (
            <div
              key={leader.id}
              className="glass-card rounded-2xl p-6 flex flex-col items-center text-center glass-card-hover group relative overflow-hidden border border-white/5 hover:border-yellow-500/40"
            >
              {/* Leader Photo */}
              <div className="mb-4 relative w-28 h-28 rounded-full overflow-hidden border-2 border-yellow-500/30 group-hover:border-yellow-400 group-hover:scale-105 transition-all duration-300 shadow-lg shadow-black/50 bg-slate-900">
                {leader.imageUrl ? (
                  <img
                    src={leader.imageUrl}
                    alt={leader.name}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-bold text-yellow-400 text-xl">
                    {leader.name.slice(0, 2).toUpperCase()}
                  </div>
                )}
              </div>

              {/* Leader Name & Role */}
              <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors flex items-center gap-1.5">
                {leader.name}
              </h3>
              
              <div className="text-xs font-semibold text-yellow-400/90 mt-1">
                {leader.role}
              </div>

              {/* LinkedIn Connect */}
              <div className="mt-4 pt-4 border-t border-white/5 w-full flex items-center justify-center">
                {leader.linkedIn && (
                  <a
                    href={leader.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all text-xs flex items-center gap-1.5 font-medium shadow-sm"
                    title={`${leader.name}'s LinkedIn`}
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
