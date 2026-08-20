import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Calendar } from 'lucide-react';
import { CHAPTER_INFO } from '../data/chapterData';
import { LinkedinIcon, GithubIcon } from './Icons';

interface NavbarProps {
  onOpenJoinModal: (initialRole?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Chapter Leaders', href: '#leaders' },
    { label: 'Why Join', href: '#why-join' },
    { label: 'Doot', href: '#doot' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo only */}
          <a href="#" className="flex items-center group">
            <img
              src="/NANDA Golden Transparent.svg"
              alt="Project NANDA"
              className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:opacity-90"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-slate-300 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons & Join Button (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 text-slate-400 border-r border-slate-800 pr-3">
              <a
                href={CHAPTER_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                title="WhatsApp Group"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={CHAPTER_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
                title="LinkedIn Community"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={CHAPTER_INFO.socials.luma}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:text-yellow-400 hover:bg-yellow-500/10 transition-colors"
                title="Lu.ma Events"
              >
                <Calendar className="w-4 h-4" />
              </a>
              <a
                href={CHAPTER_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

            <a
              href={CHAPTER_INFO.socials.joinForm}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-xs font-semibold rounded-full bg-primary text-black hover:bg-yellow-400 hover:shadow-md hover:shadow-yellow-500/20 active:scale-[0.98] transition-all duration-200"
            >
              Join Chapter
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={CHAPTER_INFO.socials.joinForm}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-3 py-1 text-xs font-semibold rounded-full bg-primary text-black"
            >
              Join
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-primary hover:bg-slate-900/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-3 border-t border-slate-800 flex items-center justify-around text-slate-400">
              <a
                href={CHAPTER_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-emerald-400"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={CHAPTER_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-blue-400"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={CHAPTER_INFO.socials.luma}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-yellow-400"
                title="Events"
              >
                <Calendar className="w-4 h-4" />
              </a>
              <a
                href={CHAPTER_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-white"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

            <a
              href={CHAPTER_INFO.socials.joinForm}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full mt-2 py-2 text-xs font-semibold rounded-lg bg-primary text-black text-center block"
            >
              Join Chapter
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
