type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <header className="mb-10 border-b border-border pb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated: {lastUpdated}</p>
      </header>
      <div className="prose-legal space-y-6 text-sm leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-charcoal [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-charcoal [&_li]:ml-5 [&_li]:list-disc [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:space-y-1.5">
        {children}
      </div>
    </article>
  );
}
