import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { soundFx } from '../../utils/audio';
import confetti from 'canvas-confetti';
import { SlideIn, FadeUp } from '../ui/Animations';

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
      particleCount: 40,
      spread: 50,
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
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Project / Collaboration Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
    }, 600);
  };

  return (
    <footer id="contact" className="relative pt-24 sm:pt-32 pb-12 border-t border-white/8 bg-[#07080c] w-full">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 space-y-20 relative z-10">
        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Details */}
          <SlideIn from="left" className="lg:col-span-6 space-y-6">
            <p className="text-xs text-slate-200 font-bold uppercase tracking-widest font-mono">
              Get in touch
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Have a problem<br />
              <span className="text-brand-electric">worth solving?</span>
            </h2>

            <p className="text-base text-slate-100 font-medium leading-relaxed">
              Always open to discussing new opportunities, engineering challenges, AI systems, and open-source collaborations.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-2.5 pt-2 text-sm font-mono">
              <div className="p-4 rounded-xl bg-[#0b0e1b] border border-white/15 flex items-center justify-between group shadow-lg">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onClick={() => soundFx.playClick(700)}
                  className="flex items-center gap-3 flex-1"
                >
                  <div className="p-2 rounded-lg bg-brand-blue/20 text-brand-electric border border-brand-blue/30">
                    <Mail className="w-4 h-4 text-sky-300" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-200 font-bold block">Email</span>
                    <span className="text-white font-bold group-hover:text-brand-electric transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-1">
                  <button
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white font-bold border border-white/15 transition-colors flex items-center gap-1 text-xs"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span className="hidden sm:inline">{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-1.5 text-white hover:text-brand-electric transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                onClick={() => soundFx.playClick(700)}
                className="p-4 rounded-xl bg-[#0b0e1b] border border-white/15 hover:border-brand-blue/40 flex items-center justify-between group transition-colors shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-brand-blue/20 text-brand-electric border border-brand-blue/30">
                    <Phone className="w-4 h-4 text-sky-300" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-200 font-bold block">Phone / WhatsApp</span>
                    <span className="text-white font-bold group-hover:text-brand-electric transition-colors">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-200 group-hover:text-white transition-colors" />
              </a>

              <div className="p-4 rounded-xl bg-[#0b0e1b] border border-white/15 flex items-center gap-3 shadow-lg">
                <div className="p-2 rounded-lg bg-white/10 text-white border border-white/15">
                  <MapPin className="w-4 h-4 text-brand-electric" />
                </div>
                <div>
                  <span className="text-xs text-slate-200 font-bold block">Location</span>
                  <span className="text-white font-bold">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-1 text-xs font-bold font-mono">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playClick(700)}
                className="px-4 py-2 rounded-lg bg-[#0b0e1b] hover:bg-white/10 border border-white/15 text-white flex items-center gap-2 transition-colors shadow-md"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub ↗</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playClick(700)}
                className="px-4 py-2 rounded-lg bg-[#0b0e1b] hover:bg-white/10 border border-white/15 text-white flex items-center gap-2 transition-colors shadow-md"
              >
                <LinkedinIcon className="w-4 h-4 text-brand-electric" />
                <span>LinkedIn ↗</span>
              </a>
            </div>
          </SlideIn>

          {/* Right Column: Clean Minimal Contact Form */}
          <FadeUp delay={0.1} className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0e1b] border border-white/15 space-y-6 shadow-xl">
              <div className="border-b border-white/12 pb-3 text-xs flex items-center justify-between text-slate-200 font-bold font-mono uppercase tracking-wider">
                <span className="text-white font-bold">Send a direct message</span>
                <span className="text-emerald-400">Replies within 24h</span>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h3 className="text-base font-bold text-white">Message dispatched</h3>
                  <p className="text-xs text-slate-100 font-medium leading-relaxed">
                    Thank you. Your email client has been opened for direct delivery to {PERSONAL_INFO.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="text-slate-200 block mb-1.5 font-bold uppercase tracking-wider font-mono">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full bg-[#080a14] border border-white/20 rounded-lg px-3.5 py-2.5 text-white font-medium placeholder:text-slate-300 focus:outline-none focus:border-brand-electric transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-slate-200 block mb-1.5 font-bold uppercase tracking-wider font-mono">
                      Your email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-[#080a14] border border-white/20 rounded-lg px-3.5 py-2.5 text-white font-medium placeholder:text-slate-300 focus:outline-none focus:border-brand-electric transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-slate-200 block mb-1.5 font-bold uppercase tracking-wider font-mono">
                      Project or message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you'd like to discuss or collaborate on..."
                      className="w-full bg-[#080a14] border border-white/20 rounded-lg px-3.5 py-2.5 text-white font-medium placeholder:text-slate-300 focus:outline-none focus:border-brand-electric transition-colors resize-none text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 rounded-lg bg-brand-blue hover:bg-brand-cobalt text-white font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
                  </button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>

        {/* Global Footer */}
        <div className="border-t border-white/12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-200">
          <div className="space-y-0.5 text-center md:text-left">
            <div className="font-bold text-white text-sm">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-slate-200 font-medium">
              Software Engineer & AI Researcher · {PERSONAL_INFO.location}
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-200 font-bold">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <span>·</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <span>·</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
              Email
            </a>
            <span>·</span>
            <span className="text-white">© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
