import React from 'react';
import { MessageSquare, Calendar, Mail } from 'lucide-react';
import { CHAPTER_INFO } from '../data/chapterData';
import { LinkedinIcon, GithubIcon, TwitterIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-12 pb-10 px-4 sm:px-6 lg:px-8 relative z-10 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        
        {/* Col 1: Brand & Chapter Info */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center gap-3">
            <img
              src="/NANDA Golden Transparent.svg"
              alt="Project NANDA Logo"
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Project NANDA (Network of AI Agents in Decentralized Architecture) &bull; <strong>Bangalore Chapter</strong>.
          </p>
          <p className="text-[11px] text-slate-500">
            Convening builders, researchers, and institutions across India's Silicon Valley to build the Open Agentic Web.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2.5 pt-2 text-slate-400">
            <a
              href={CHAPTER_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-900 border border-white/5 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
              title="WhatsApp Group"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href={CHAPTER_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-900 border border-white/5 hover:text-blue-400 hover:border-blue-500/30 transition-all"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={CHAPTER_INFO.socials.luma}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-900 border border-white/5 hover:text-yellow-400 hover:border-yellow-500/30 transition-all"
              title="Events Calendar"
            >
              <Calendar className="w-4 h-4" />
            </a>
            <a
              href={CHAPTER_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-900 border border-white/5 hover:text-white hover:border-white/20 transition-all"
              title="GitHub Repo"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={CHAPTER_INFO.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-900 border border-white/5 hover:text-sky-400 hover:border-sky-500/30 transition-all"
              title="X / Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-xs uppercase tracking-wider">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#about" className="hover:text-primary transition-colors">
                About Project NANDA
              </a>
            </li>
            <li>
              <a href="#leaders" className="hover:text-primary transition-colors">
                Chapter Leaders
              </a>
            </li>
            <li>
              <a href="#why-join" className="hover:text-primary transition-colors">
                Why Join Project NANDA
              </a>
            </li>
            <li>
              <a href="#doot" className="hover:text-primary transition-colors">
                Featured: Doot
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-primary transition-colors">
                Frequently Asked Questions
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-xs uppercase tracking-wider">
            Get in Touch
          </h4>
          <p className="text-xs text-slate-400">
            For partnerships, chapter collaborations, or contributions:
          </p>
          <a
            href={`mailto:${CHAPTER_INFO.socials.email}`}
            className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-mono font-medium"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{CHAPTER_INFO.socials.email}</span>
          </a>
          <div className="pt-1 text-[11px] text-slate-500">
            Regional Node &bull; Bengaluru, India
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-5xl mx-auto pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div>
          &copy; {new Date().getFullYear()} Project NANDA &bull; Bangalore Chapter.
        </div>
        <div className="flex items-center gap-5">
          <a href="#about" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#about" className="hover:text-slate-400 transition-colors">Code of Conduct</a>
          <a href="https://github.com/ankurshnde/blrnanda" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};
