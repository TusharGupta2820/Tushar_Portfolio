import React from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

// ─────────────────────────────────────────────────────────
// SHARED EASING CURVES & PHYSICS
// ─────────────────────────────────────────────────────────
export const ease = {
  out: [0.16, 1, 0.3, 1] as [number, number, number, number],
  inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
  spring: { type: 'spring', damping: 24, stiffness: 200, mass: 0.8 } as const,
  springLight: { type: 'spring', damping: 28, stiffness: 260, mass: 0.5 } as const,
};

// ─────────────────────────────────────────────────────────
// SCROLL PROGRESS BAR — 3D Top Line
// ─────────────────────────────────────────────────────────
export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-brand-electric via-brand-blue to-violet-500 z-50 origin-left pointer-events-none shadow-[0_0_8px_rgba(59,130,246,0.5)]"
    />
  );
};

// ─────────────────────────────────────────────────────────
// SCROLL 3D REVEAL — Guaranteed visible + 3D entrance
// ─────────────────────────────────────────────────────────
interface Scroll3DRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
  tiltAngle?: number;
}

export const Scroll3DReveal: React.FC<Scroll3DRevealProps> = ({
  children,
  delay = 0,
  className = '',
  distance = 30,
  tiltAngle = 5,
}) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
      initial={{
        opacity: 0,
        y: prefersReduced ? 0 : distance,
        rotateX: prefersReduced ? 0 : tiltAngle,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
      }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{
        duration: 0.65,
        delay,
        ease: ease.out,
      }}
    >
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────
// FADE UP — Smooth upward reveal (always renders visibly)
// ─────────────────────────────────────────────────────────
interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
  duration?: number;
}

export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  delay = 0,
  className = '',
  distance = 25,
  duration = 0.55,
}) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: prefersReduced ? 0 : distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration, delay, ease: ease.out }}
    >
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────
// FADE IN (Opacity only)
// ─────────────────────────────────────────────────────────
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = '', duration = 0.5 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration, delay, ease: ease.out }}
    >
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────
// STAGGER CONTAINER — Reliable sequenced reveal for cards
// ─────────────────────────────────────────────────────────
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  containerDelay?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.05,
  containerDelay = 0.02,
}) => {
  const prefersReduced = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: containerDelay,
        staggerChildren: prefersReduced ? 0 : staggerDelay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────
// STAGGER ITEM — Used inside StaggerContainer
// ─────────────────────────────────────────────────────────
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({ children, className = '' }) => {
  const prefersReduced = useReducedMotion();
  const item = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: ease.out },
    },
  };

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────
// SLIDE IN FROM SIDE
// ─────────────────────────────────────────────────────────
interface SlideInProps {
  children: React.ReactNode;
  from?: 'left' | 'right';
  delay?: number;
  className?: string;
}

export const SlideIn: React.FC<SlideInProps> = ({ children, from = 'left', delay = 0, className = '' }) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: prefersReduced ? 0 : (from === 'left' ? -30 : 30) }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.55, delay, ease: ease.out }}
    >
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────
// SCALE UP (Pop in)
// ─────────────────────────────────────────────────────────
interface ScaleUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ScaleUp: React.FC<ScaleUpProps> = ({ children, delay = 0, className = '' }) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.45, delay, ease: ease.out }}
    >
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────
// FLOAT CARD — 3D perspective tilt & specular glare spotlight on hover
// ─────────────────────────────────────────────────────────
interface FloatCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const FloatCard: React.FC<FloatCardProps> = ({ children, className = '', intensity = 6 }) => {
  const prefersReduced = useReducedMotion();
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = React.useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width;
    const yPct = (e.clientY - rect.top) / rect.height;

    const x = (xPct - 0.5) * intensity;
    const y = (yPct - 0.5) * -intensity;

    setTilt({ x, y });
    setGlarePos({ x: xPct * 100, y: yPct * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      className={`relative rounded-[inherit] ${className}`}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      animate={{
        rotateX: tilt.y,
        rotateY: tilt.x,
        scale: isHovered ? 1.015 : 1,
      }}
      transition={ease.springLight}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      {/* Dynamic Specular Spotlight Glare Overlay */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-30 rounded-[inherit]"
        style={{
          opacity: isHovered ? 0.4 : 0,
          background: `radial-gradient(600px circle at ${glarePos.x}% ${glarePos.y}%, rgba(59, 130, 246, 0.28), transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────
// SECTION TRANSITION — 3D spatial flip/fade spring page wrapper
// ─────────────────────────────────────────────────────────
interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({ children, className = '' }) => {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
      initial={{
        opacity: 0,
        y: prefersReduced ? 0 : 25,
        rotateX: prefersReduced ? 0 : 4,
        scale: prefersReduced ? 1 : 0.985,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: prefersReduced ? 0 : -15,
        rotateX: prefersReduced ? 0 : -3,
        scale: prefersReduced ? 1 : 0.985,
      }}
      transition={{ duration: 0.42, ease: ease.out }}
    >
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────
// COUNTER — Animated counter on scroll
// ─────────────────────────────────────────────────────────
interface CounterProps {
  value: string;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({ value, className = '' }) => {
  const [inView, setInView] = React.useState(false);
  const isRange = value.includes('-') || value.includes('—') || value.includes('–');
  const num = isRange ? NaN : parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = isRange ? '' : value.replace(/[0-9.]/g, '');
  const [display, setDisplay] = React.useState(value);

  React.useEffect(() => {
    if (!inView || isNaN(num)) {
      setDisplay(value);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    const isDecimal = value.includes('.');

    const tick = (now: number) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      const current = isDecimal
        ? (num * eased).toFixed(1)
        : Math.round(num * eased).toString();
      setDisplay(current + (elapsed < 1 ? '' : suffix));
      if (elapsed < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, num, suffix, value]);

  return (
    <motion.span
      className={className}
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
    >
      {display}
    </motion.span>
  );
};

// ─────────────────────────────────────────────────────────
// TRANSITION WIPE — 3-Layer Colored Slide Page Transition
// ─────────────────────────────────────────────────────────
export const TransitionWipe: React.FC = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-[#1e1b4b]"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-[#2563eb]"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ delay: 0.08, duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#3b82f6]"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ delay: 0.16, duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
      />
    </>
  );
};
