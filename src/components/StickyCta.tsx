import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type Props = { href: string; label: string; secondary?: { href: string; label: string } };

/** The bar only earns its place once the hero CTA has scrolled away —
 *  while both are on screen it is pure duplication. It arrives on a
 *  spring because it is a surface sliding in from an edge, not a fade. */
export default function StickyCta({ href, label, secondary }: Props) {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();
  const armed = useRef(false);

  useEffect(() => {
    const anchor = document.querySelector('[data-cta-anchor]');
    if (!anchor) { setVisible(true); return; }

    const io = new IntersectionObserver(
      ([entry]) => { armed.current = true; setVisible(!entry.isIntersecting); },
      { threshold: 0 }
    );
    io.observe(anchor);
    return () => io.disconnect();
  }, []);

  return (
    <motion.div
      className="fixed inset-x-0 bottom-0 z-10 flex gap-2.5 px-6 pt-2.5 sm:hidden"
      style={{
        background: 'var(--paper)',
        borderTop: '1px solid var(--rule-strong)',
        paddingBottom: 'calc(10px + env(safe-area-inset-bottom, 0px))',
      }}
      initial={false}
      animate={{ y: visible ? 0 : '110%', opacity: visible ? 1 : 0 }}
      transition={
        reduced
          ? { duration: 0 }
          : visible
            ? { type: 'spring', stiffness: 420, damping: 38, mass: 0.9 }
            : { duration: 0.2, ease: [0.4, 0, 1, 1] }
      }
      aria-hidden={!visible}
    >
      <a href={href} className="btn btn-primary flex-1 min-h-[46px] px-3.5 text-sm">{label}</a>
      {secondary && (
        <a href={secondary.href} className="btn btn-quiet flex-1 min-h-[46px] px-3.5 text-sm">
          {secondary.label}
        </a>
      )}
    </motion.div>
  );
}
