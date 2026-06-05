export default function SectionTitle({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-4">
        <span className="h-px w-10 bg-gradient-to-r from-emerald-400 to-amber-400" />
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white font-[var(--font-playfair)]">
          {title}
        </h2>
      </div>
      {subtitle ? <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{subtitle}</p> : null}
    </div>
  );
}
