import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingSequenceProps {
  onComplete: () => void;
}

const SYSTEMS_KEYWORDS = [
  'SYSTEMS',
  'AI',
  'VISION',
  'CLOUD',
  'REAL-TIME'
];

export const LoadingSequence: React.FC<LoadingSequenceProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    // Progressive rapid sequence under 1.2 seconds total
    const timers = [
      setTimeout(() => setCurrentStep(1), 180),  // SYSTEMS
      setTimeout(() => setCurrentStep(2), 340),  // AI
      setTimeout(() => setCurrentStep(3), 500),  // VISION
      setTimeout(() => setCurrentStep(4), 660),  // CLOUD
      setTimeout(() => setCurrentStep(5), 820),  // REAL-TIME
      setTimeout(() => setCurrentStep(6), 1020), // TUSHAR GUPTA
      setTimeout(() => {
        setIsFinished(true);
        setTimeout(onComplete, 250);
      }, 1250)
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 bg-[#06070a] flex flex-col items-center justify-center font-mono text-white select-none px-6"
        >
          {/* Subtle Background Scanline Grid */}
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

          <div className="relative flex flex-col items-center max-w-md w-full">
            {/* Initializing Header */}
            <div className="text-[11px] text-editorial-dim tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-electric animate-ping" />
              <span>INITIALIZING / TUSHAR.GUPTA</span>
            </div>

            {/* Keyword Pipeline Sequence */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 my-4 min-h-[36px]">
              {SYSTEMS_KEYWORDS.map((keyword, index) => {
                const isPassed = currentStep > index;
                const isCurrent = currentStep === index + 1;

                return (
                  <span
                    key={keyword}
                    className={`text-xs tracking-wider font-mono transition-all duration-150 px-2 py-0.5 rounded ${
                      isCurrent
                        ? 'text-brand-electric bg-brand-blue/20 border border-brand-blue/40 scale-105 shadow-[0_0_10px_rgba(59,130,246,0.3)]'
                        : isPassed
                        ? 'text-editorial-muted opacity-80'
                        : 'text-editorial-dim/30'
                    }`}
                  >
                    {keyword}
                  </span>
                );
              })}
            </div>

            {/* Final Name Reveal */}
            <div className="h-10 flex items-center justify-center mt-2">
              {currentStep >= 6 && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg sm:text-xl font-display font-bold tracking-widest text-white flex items-center gap-2"
                >
                  <span className="text-brand-electric">/</span> TUSHAR GUPTA
                </motion.div>
              )}
            </div>

            {/* Precision Micro Progress Bar */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full mt-6 overflow-hidden">
              <div
                className="h-full bg-brand-blue transition-all duration-150 ease-out"
                style={{ width: `${Math.min((currentStep / 6) * 100, 100)}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
