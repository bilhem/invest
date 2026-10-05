import type { MapMarker } from '@/lib/data/neighborhood-types';

/**
 * Reference points drawn over a location map. The overlay shares the image's exact box (ZoomImage), so `x` / `y` in % stay true
 * at every size, and every dimension is in container units (`cqw`) so labels scale with the map. Decorative for assistive tech:
 * the image's alt text carries the same information.
 */
const GAP = 'clamp(5px, 0.7cqw, 10px)';

const LABEL_SIDE: Record<NonNullable<MapMarker['side']>, React.CSSProperties> = {
  right: { left: '100%', top: '50%', transform: `translate(${GAP}, -50%)` },
  left: { right: '100%', top: '50%', transform: `translate(calc(${GAP} * -1), -50%)` },
  top: { bottom: '100%', left: '50%', transform: `translate(-50%, calc(${GAP} * -1))` },
  bottom: { top: '100%', left: '50%', transform: `translate(-50%, ${GAP})` },
};

function Marker({ m }: { m: MapMarker }) {
  const kind = m.kind ?? 'poi';
  const sec = m.secondary ? 'map-secondary' : '';
  const at: React.CSSProperties = { left: `${m.x}%`, top: `${m.y}%` };

  if (kind === 'zone') {
    return (
      <span
        className={`absolute whitespace-nowrap font-serif italic uppercase tracking-[0.3em] text-charcoal/55 ${sec}`}
        style={{ ...at, transform: 'translate(-50%, -50%)', fontSize: 'clamp(9px, 1.15cqw, 17px)' }}
      >
        {m.label}
      </span>
    );
  }

  const focus = kind === 'focus';
  const size = focus ? 'clamp(14px, 2cqw, 30px)' : 'clamp(7px, 0.9cqw, 13px)';
  return (
    <span className={`absolute ${sec}`} style={{ ...at, width: size, height: size, transform: 'translate(-50%, -50%)', zIndex: focus ? 3 : 2 }}>
      <span
        className="absolute inset-0 rounded-full"
        style={
          focus
            ? { background: '#B8935A', border: '2px solid #F7F3EB', boxShadow: '0 0 0 clamp(4px, 0.6cqw, 9px) rgba(184,147,90,0.35)' }
            : { background: '#1B1A18', border: '1.5px solid #F7F3EB' }
        }
      />
      <span
        className={`absolute whitespace-nowrap font-sans font-medium ${m.flipNarrow ? 'map-flip-narrow' : ''} ${focus ? 'uppercase tracking-[0.18em] text-ivory' : 'tracking-[0.02em] text-charcoal'}`}
        style={{
          ...LABEL_SIDE[m.side ?? 'right'],
          fontSize: focus ? 'clamp(10px, 1.3cqw, 18px)' : 'clamp(9px, 1.15cqw, 16px)',
          padding: focus ? '0.4em 0.9em' : '0.28em 0.7em',
          background: focus ? '#1B1A18' : 'rgba(247,243,235,0.94)',
          border: focus ? '1px solid #B8935A' : '1px solid rgba(27,26,24,0.18)',
          boxShadow: '0 1px 6px rgba(0,0,0,0.12)',
        }}
      >
        {m.label}
      </span>
    </span>
  );
}

export default function MapMarkers({ markers }: { markers: MapMarker[] }) {
  const focus = markers.find((m) => m.kind === 'focus');
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0 block">
      {focus && (
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          {markers.filter((m) => m.link).map((m) => (
            <line
              key={m.label}
              x1={focus.x} y1={focus.y} x2={m.x} y2={m.y}
              stroke="#9A7A47" strokeWidth={1.6} strokeDasharray="7 6" vectorEffect="non-scaling-stroke"
              className={m.secondary ? 'map-secondary' : undefined}
            />
          ))}
        </svg>
      )}
      {markers.map((m) => <Marker key={m.label} m={m} />)}
    </span>
  );
}
