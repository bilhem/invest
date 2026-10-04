'use client';
import { useEffect, useRef } from 'react';
import { track, type BFEvent } from '@/lib/analytics';

/** Fires an analytics event on mount, or the first time the element scrolls into view. */
export default function TrackEvent({ event, params, when = 'mount' }: { event: BFEvent; params?: Record<string, unknown>; when?: 'mount' | 'visible' }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (when === 'mount') {
      track(event, params);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        track(event, params);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return when === 'visible' ? <span ref={ref} aria-hidden className="block h-px" /> : null;
}
