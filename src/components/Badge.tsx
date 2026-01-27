export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border px-3 py-1 text-xs">
      {children}
    </span>
  );
}
