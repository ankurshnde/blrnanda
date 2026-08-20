import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, MessageSquare, Send } from 'lucide-react';
import { CHAPTER_INFO } from '../data/chapterData';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'join' | 'submit' | 'speak';
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  defaultMode = 'join',
}) => {
  const [mode, setMode] = useState<'join' | 'submit' | 'speak'>(defaultMode);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Developer / Engineer',
    organization: '',
    projectDetails: '',
    socialLink: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      role: 'Developer / Engineer',
      organization: '',
      projectDetails: '',
      socialLink: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-yellow-500/25 p-6 sm:p-8 shadow-2xl shadow-black/80 text-foreground overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-yellow-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header Tabs */}
            <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-3">
              <button
                type="button"
                onClick={() => setMode('join')}
                className={`text-xs sm:text-sm font-semibold pb-1 transition-all ${
                  mode === 'join'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Join Chapter
              </button>
              <button
                type="button"
                onClick={() => setMode('submit')}
                className={`text-xs sm:text-sm font-semibold pb-1 transition-all ${
                  mode === 'submit'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Submit Project
              </button>
              <button
                type="button"
                onClick={() => setMode('speak')}
                className={`text-xs sm:text-sm font-semibold pb-1 transition-all ${
                  mode === 'speak'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Propose Talk
              </button>
            </div>

            <div className="mb-5 space-y-1">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                {mode === 'join' && 'Join Project NANDA Bangalore'}
                {mode === 'submit' && 'Submit Your Agentic Startup / Project'}
                {mode === 'speak' && 'Propose a Talk or Workshop'}
              </h3>
              <p className="text-xs text-slate-400">
                {mode === 'join' && 'Connect with local AI researchers, engineers, and founders.'}
                {mode === 'submit' && 'Get highlighted across our ecosystem, investor, and community channels.'}
                {mode === 'speak' && 'Share your insights on multi-agent architectures at our next meetup.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aditi Rao"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="aditi@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Role / Persona</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-primary"
                  >
                    <option>Developer / Engineer</option>
                    <option>AI / ML Researcher</option>
                    <option>Startup Founder</option>
                    <option>Product Architect</option>
                    <option>Student / Fellow</option>
                    <option>Investor / Ecosystem Partner</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">LinkedIn / GitHub Profile</label>
                  <input
                    type="text"
                    placeholder="https://..."
                    value={formData.socialLink}
                    onChange={(e) => setFormData({ ...formData, socialLink: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  {mode === 'join' && 'What are you building or interested in exploring?'}
                  {mode === 'submit' && 'Project Summary & Demo / Repo Link'}
                  {mode === 'speak' && 'Proposed Talk Title & Short Abstract'}
                </label>
                <textarea
                  rows={3}
                  placeholder={
                    mode === 'join'
                      ? 'e.g. Interested in agent-to-agent protocol standards and multi-agent coordination swarms.'
                      : 'Provide a brief overview...'
                  }
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-primary resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <a
                  href={CHAPTER_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Join WhatsApp Group</span>
                </a>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-primary text-black font-bold text-xs sm:text-sm hover:bg-yellow-400 transition-all flex items-center gap-1.5 shadow-md shadow-yellow-500/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Welcome to the Chapter!</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you for connecting, <strong className="text-white">{formData.name || 'Friend'}</strong>! We have received your submission.
            </p>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-2">
              <p>Make sure to join our official Bengaluru WhatsApp community and Lu.ma calendar for instant updates on meetups and hackathons.</p>
              <div className="flex justify-center gap-3 pt-2">
                <a
                  href={CHAPTER_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold"
                >
                  WhatsApp Group
                </a>
                <a
                  href={CHAPTER_INFO.socials.luma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-semibold"
                >
                  Lu.ma Calendar
                </a>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
