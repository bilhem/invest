export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className="font-serif text-[1.9rem] leading-none tracking-tight">BF</span>
      <span className="text-[0.6rem] uppercase tracking-[0.3em] opacity-80">Properties</span>
    </span>
  );
}
