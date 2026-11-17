export function DocsSection({ title, children }: { title: string; children: React.ReactNode }) {
  const id = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <section aria-labelledby={id} className="flex flex-col gap-4">
      <h2 id={id} className="scroll-mt-8 text-2xl font-semibold">
        {title}
      </h2>
      {children}
    </section>
  );
}
