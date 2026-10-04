/**
 * Map-ready block. Uses a keyless OpenStreetMap embed centred on indicative coordinates.
 * Swap for Mapbox / Google Maps later by replacing this component only.
 */
export default function MapSlot({ name, lat, lng, aspect = 'aspect-[16/10]' }: { name: string; lat: number; lng: number; aspect?: string }) {
  const d = 0.03;
  const bbox = [lng - d, lat - d, lng + d, lat + d].join('%2C');
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
  return (
    <figure>
      <div className={`relative ${aspect} w-full overflow-hidden border border-stone-light/70 bg-ivory-200`}>
        <iframe title={`Carte indicative : ${name}`} src={src} loading="lazy" className="absolute inset-0 h-full w-full grayscale-[40%]" referrerPolicy="no-referrer" />
      </div>
      <figcaption className="mt-2 text-xs text-stone">Localisation indicative. © contributeurs OpenStreetMap.</figcaption>
    </figure>
  );
}
