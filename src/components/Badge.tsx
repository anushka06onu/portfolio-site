export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-700 shadow-sm">
      {children}
    </span>
  );
}
