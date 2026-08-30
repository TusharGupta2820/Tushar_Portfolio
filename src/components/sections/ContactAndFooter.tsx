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
            <p className="text-xs text-editorial-dim uppercase tracking-widest font-mono">
              Get in touch
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Have a problem<br />
              <span className="text-brand-electric">worth solving?</span>
            </h2>

            <p className="text-base text-editorial-muted leading-relaxed font-light">
              Always open to discussing new opportunities, engineering challenges, AI systems, and open-source collaborations.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-2.5 pt-2 text-sm">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/6 flex items-center justify-between group">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onClick={() => soundFx.playClick(700)}
                  className="flex items-center gap-3 flex-1"
                >
                  <div className="p-2 rounded-lg bg-brand-blue/10 text-brand-electric">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-editorial-dim block">Email</span>
                    <span className="text-white font-medium group-hover:text-brand-electric transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-1">
                  <button
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-editorial-muted hover:text-white transition-colors flex items-center gap-1 text-xs"
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
                    className="p-1.5 text-editorial-dim hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                onClick={() => soundFx.playClick(700)}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/6 hover:border-brand-blue/30 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-brand-blue/10 text-brand-electric">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-editorial-dim block">Phone / WhatsApp</span>
                    <span className="text-white font-medium group-hover:text-brand-electric transition-colors">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-editorial-dim group-hover:text-white transition-colors" />
              </a>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-editorial-dim">
                  <MapPin className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <span className="text-xs text-editorial-dim block">Location</span>
                  <span className="text-white font-medium">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-1 text-xs font-medium">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playClick(700)}
                className="px-3.5 py-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/8 text-white flex items-center gap-2 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub ↗</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playClick(700)}
                className="px-3.5 py-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/8 text-white flex items-center gap-2 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-brand-electric" />
                <span>LinkedIn ↗</span>
              </a>
            </div>
          </SlideIn>

          {/* Right Column: Clean Minimal Contact Form */}
          <FadeUp delay={0.1} className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/8 space-y-6">
              <div className="border-b border-white/6 pb-3 text-xs flex items-center justify-between text-editorial-dim">
                <span className="text-white font-medium">Send a direct message</span>
                <span>Replies within 24h</span>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-center space-y-2">
                  <CheckCircle2 className="w-7 h-7 text-emerald-400 mx-auto" />
                  <h3 className="text-base font-semibold text-white">Message dispatched</h3>
                  <p className="text-xs text-editorial-muted leading-relaxed">
                    Thank you. Your email client has been opened for direct delivery to {PERSONAL_INFO.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="text-editorial-dim block mb-1.5 font-medium">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full bg-white/[0.02] border border-white/8 rounded-lg px-3.5 py-2.5 text-white placeholder:text-editorial-dim focus:outline-none focus:border-brand-electric transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-editorial-dim block mb-1.5 font-medium">
                      Your email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-white/[0.02] border border-white/8 rounded-lg px-3.5 py-2.5 text-white placeholder:text-editorial-dim focus:outline-none focus:border-brand-electric transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-editorial-dim block mb-1.5 font-medium">
                      Project or message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you'd like to discuss or collaborate on..."
                      className="w-full bg-white/[0.02] border border-white/8 rounded-lg px-3.5 py-2.5 text-white placeholder:text-editorial-dim focus:outline-none focus:border-brand-electric transition-colors resize-none text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 rounded-lg bg-brand-blue hover:bg-brand-cobalt text-white font-medium transition-all flex items-center justify-center gap-2 shadow-md shadow-brand-blue/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 text-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
                  </button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>

        {/* Global Footer */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-editorial-dim">
          <div className="space-y-0.5 text-center md:text-left">
            <div className="font-semibold text-white text-sm">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-editorial-dim">
              Software Engineer & AI Researcher · {PERSONAL_INFO.location}
            </div>
          </div>

          <div className="flex items-center gap-3 text-editorial-dim">
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
            <span>© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
