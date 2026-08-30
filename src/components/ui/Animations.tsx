import React from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

// ─────────────────────────────────────────────────────────
// SHARED EASING CURVES
// ─────────────────────────────────────────────────────────
export const ease = {
  out: [0.16, 1, 0.3, 1] as [number, number, number, number],
  inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
  spring: { type: 'spring', damping: 24, stiffness: 200, mass: 0.8 } as const,
  springLight: { type: 'spring', damping: 30, stiffness: 300, mass: 0.5 } as const,
};

// ─────────────────────────────────────────────────────────
// FADE UP — Most common scroll reveal
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
  distance = 32,
  duration = 0.65,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: prefersReduced ? 0 : distance }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: ease.out }}
    >
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────
// FADE IN (no vertical shift)
// ─────────────────────────────────────────────────────────
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = '', duration = 0.5 }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration, delay, ease: ease.out }}
    >
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────
// STAGGER CONTAINER — animates children in sequence
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
  staggerDelay = 0.07,
  containerDelay = 0,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReduced = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: containerDelay,
        staggerChildren: prefersReduced ? 0 : staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────
// STAGGER ITEM — used inside StaggerContainer
// ─────────────────────────────────────────────────────────
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({ children, className = '' }) => {
  const prefersReduced = useReducedMotion();
  const item = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: ease.out },
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
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: prefersReduced ? 0 : (from === 'left' ? -40 : 40) }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: ease.out }}
    >
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────
// SCALE UP (pop in)
// ─────────────────────────────────────────────────────────
interface ScaleUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ScaleUp: React.FC<ScaleUpProps> = ({ children, delay = 0, className = '' }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.88 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.55, delay, ease: ease.out }}
    >
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────
// FLOAT CARD — 3D perspective tilt on hover
// ─────────────────────────────────────────────────────────
interface FloatCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const FloatCard: React.FC<FloatCardProps> = ({ children, className = '', intensity = 8 }) => {
  const prefersReduced = useReducedMotion();
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * intensity;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -intensity;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      className={className}
      style={{ transformStyle: 'preserve-3d', perspective: 800 }}
      animate={{
        rotateX: tilt.y,
        rotateY: tilt.x,
        scale: isHovered ? 1.025 : 1,
      }}
      transition={ease.springLight}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────
// SECTION TRANSITION — full-page cinematic entrance
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
      initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: prefersReduced ? 0 : -10 }}
      transition={{ duration: 0.45, ease: ease.out }}
    >
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────
// COUNTER — animated number counter on scroll
// ─────────────────────────────────────────────────────────
interface CounterProps {
  value: string;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({ value, className = '' }) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  // Extract numeric suffix (e.g. "16" → 16, "8.9" → 8.9, "15+" → 15)
  const num = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  const [display, setDisplay] = React.useState('0');

  React.useEffect(() => {
    if (!isInView || isNaN(num)) {
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
  }, [isInView, num, suffix, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};
