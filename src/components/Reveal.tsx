import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  as?: 'div' | 'section';
  className?: string;
};

/** Entrance settle: opacity and transform only, capped short, once per
 *  element. Reduced motion drops straight to the resting state. */
export default function Reveal({ children, delay = 0, className }: Props) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
