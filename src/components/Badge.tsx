export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-100 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}
