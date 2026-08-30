import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'project' | 'external'>('default');
  const [cursorText, setCursorText] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  useEffect(() => {
    // Detect touch device
    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Determine element under cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, [data-cursor]');
      if (interactive) {
        const customType = interactive.getAttribute('data-cursor');
        if (customType === 'project') {
          setCursorState('project');
          setCursorText('VIEW');
        } else if (customType === 'explore') {
          setCursorState('project');
          setCursorText('EXPLORE');
        } else if (interactive.tagName.toLowerCase() === 'a' && interactive.getAttribute('target') === '_blank') {
          setCursorState('external');
          setCursorText('OPEN ↗');
        } else {
          setCursorState('hover');
          setCursorText('');
        }
      } else {
        setCursorState('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Precision Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 -ml-1.25 -mt-1.25 rounded-full bg-brand-electric shadow-[0_0_8px_#3b82f6]"
        animate={{
          x: position.x,
          y: position.y,
          scale: cursorState === 'default' ? 1 : 0.4,
          opacity: cursorState === 'default' ? 1 : 0.6,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 600, mass: 0.1 }}
      />

      {/* Dynamic Outer Halo / Label Container */}
      <motion.div
        className="fixed top-0 left-0 -ml-5 -mt-5 flex items-center justify-center rounded-full border border-brand-electric/50 text-white font-mono text-[9px] font-bold tracking-wider backdrop-blur-xs"
        animate={{
          x: position.x,
          y: position.y,
          width: cursorState === 'project' || cursorState === 'external' ? 64 : cursorState === 'hover' ? 36 : 24,
          height: cursorState === 'project' || cursorState === 'external' ? 64 : cursorState === 'hover' ? 36 : 24,
          marginLeft: cursorState === 'project' || cursorState === 'external' ? -32 : cursorState === 'hover' ? -18 : -12,
          marginTop: cursorState === 'project' || cursorState === 'external' ? -32 : cursorState === 'hover' ? -18 : -12,
          backgroundColor: cursorState === 'project' || cursorState === 'external' ? 'rgba(37, 99, 235, 0.85)' : 'rgba(59, 130, 246, 0.08)',
          borderColor: cursorState === 'hover' ? '#60a5fa' : 'rgba(255, 255, 255, 0.2)',
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.2 }}
      >
        {cursorText && <span className="select-none">{cursorText}</span>}
      </motion.div>
    </div>
  );
};
