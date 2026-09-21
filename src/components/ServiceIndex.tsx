import { motion, useReducedMotion } from 'motion/react';

type Item = { slug: string; short: string };

/** An editorial index, not a card grid. The arrow is the affordance and
 *  it is the only thing that moves — the row itself never shifts, so
 *  hovering cannot trigger a layout pass. */
export default function ServiceIndex({ items, base }: { items: Item[]; base: string }) {
  const reduced = useReducedMotion();

  return (
    <nav className="flex flex-col">
      {items.map((item, i) => (
        <motion.a
          key={item.slug}
          href={`${base}/massage/${item.slug}`}
          className="group grid grid-cols-[34px_1fr_auto] items-center gap-4 py-5 pr-2 border-b border-[var(--rule)] last:border-b-0"
          initial={reduced ? false : { opacity: 0, y: 8 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.34, ease: [0.32, 0.72, 0, 1], delay: Math.min(i * 0.04, 0.2) }}
          whileTap={reduced ? undefined : { scale: 0.995 }}
        >
          <span
            className="display text-[13px] font-semibold tabular-nums"
            style={{ color: 'var(--ink-faint)' }}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <span
            className="display text-[21px] font-semibold tracking-[-0.01em] transition-colors duration-150 group-hover:text-[var(--accent)]"
          >
            {item.short}
          </span>
          <span
            aria-hidden="true"
            className="text-[17px] opacity-0 -translate-x-1.5 transition-all duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 [@media(hover:none)]:opacity-50 [@media(hover:none)]:translate-x-0"
            style={{ color: 'var(--accent)' }}
          >
            →
          </span>
        </motion.a>
      ))}
    </nav>
  );
}
