import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight, Sparkles, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { soundFx } from '../../utils/audio';
import confetti from 'canvas-confetti';

export const ContactAndFooter: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    soundFx.playBlip(950);
    setCopiedEmail(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.85 },
    });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFx.playBlip(950);
    setIsSubmitting(true);

    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Project / Collaboration Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
    }, 600);
  };

  return (
    <footer id="contact" className="relative pt-28 sm:pt-36 pb-12 border-t border-white/10 overflow-hidden bg-[#06070a] w-full">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-brand-blue/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 space-y-24 relative z-10">
        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-brand-electric font-semibold tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>LET'S COLLABORATE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              HAVE A PROBLEM<br />
              <span className="text-brand-electric">WORTH BUILDING?</span>
            </h2>

            <p className="text-base sm:text-lg text-editorial-muted font-sans font-light leading-relaxed">
              "Let's turn interesting problems into working systems."
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-4 font-mono text-xs">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0a0c14] border border-white/10 flex items-center justify-between group">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onClick={() => soundFx.playClick(700)}
                  className="flex items-center gap-3.5 flex-1"
                >
                  <div className="p-2.5 rounded-xl bg-brand-blue/10 text-brand-electric">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-editorial-dim block">DIRECT INQUIRIES</span>
                    <span className="text-white font-bold group-hover:text-brand-electric transition-colors text-sm">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-editorial-muted hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span className="hidden sm:inline">{copiedEmail ? 'COPIED' : 'COPY'}</span>
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-2 text-editorial-dim hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                onClick={() => soundFx.playClick(700)}
                className="p-4 sm:p-5 rounded-2xl bg-[#0a0c14] border border-white/10 hover:border-brand-blue/40 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-brand-blue/10 text-brand-electric">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-editorial-dim block">PHONE / WHATSAPP</span>
                    <span className="text-white font-bold group-hover:text-brand-electric transition-colors text-sm">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-editorial-dim group-hover:text-white transition-colors" />
              </a>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#0a0c14] border border-white/10 flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-white/5 text-editorial-dim">
                  <MapPin className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <span className="text-[10px] text-editorial-dim block">LOCATION</span>
                  <span className="text-white font-bold text-sm">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2 font-mono text-xs">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="external"
                onClick={() => soundFx.playClick(700)}
                className="px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white flex items-center gap-2 transition-colors font-medium"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB ↗</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="external"
                onClick={() => soundFx.playClick(700)}
                className="px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white flex items-center gap-2 transition-colors font-medium"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-brand-electric" />
                <span>LINKEDIN ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Minimal Contact Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#090b12] border border-white/10 shadow-2xl space-y-6">
              <div className="border-b border-white/10 pb-4 font-mono text-xs flex items-center justify-between">
                <span className="text-brand-electric font-bold">TRANSMIT A MESSAGE</span>
                <span className="text-editorial-dim">DIRECT DISPATCH</span>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-center space-y-3 font-mono">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h3 className="text-lg font-bold text-white">MESSAGE DISPATCHED</h3>
                  <p className="text-xs text-editorial-muted font-sans leading-relaxed">
                    Thank you. Mail client launched for direct delivery to {PERSONAL_INFO.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div>
                    <label className="text-[10px] text-editorial-dim uppercase tracking-wider block mb-1">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full bg-[#05060a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-editorial-dim focus:outline-none focus:border-brand-electric transition-colors text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-editorial-dim uppercase tracking-wider block mb-1">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-[#05060a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-editorial-dim focus:outline-none focus:border-brand-electric transition-colors text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-editorial-dim uppercase tracking-wider block mb-1">
                      PROJECT OR INQUIRY MESSAGE
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, role, or collaboration idea..."
                      className="w-full bg-[#05060a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-editorial-dim focus:outline-none focus:border-brand-electric transition-colors resize-none font-sans text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-brand-blue hover:bg-brand-cobalt text-white font-bold tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 text-xs font-mono"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE →'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Global Footer */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-editorial-dim">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-display font-bold text-white text-sm">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[11px] text-editorial-muted">
              AI · SOFTWARE · RESEARCH · {PERSONAL_INFO.location}
            </div>
          </div>

          <div className="text-[11px] text-center italic text-editorial-dim">
            Designed, engineered & continuously evolving.
          </div>

          <div className="flex items-center gap-4 text-editorial-muted">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <span>/</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <span>/</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
              Email
            </a>
            <span>/</span>
            <span className="text-brand-electric">© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
