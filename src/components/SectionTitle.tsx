export default function SectionTitle({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold tracking-tight text-neutral-900">{title}</h2>
      {subtitle ? <p className="mt-1 text-sm text-neutral-600">{subtitle}</p> : null}
    </div>
  );
}
