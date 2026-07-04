import type { Service } from "@/lib/services";

type ServiceCardProps = {
  service: Service;
  index?: number;
};

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-md sm:p-7">
      <span className="text-xs font-semibold uppercase tracking-widest text-accent-teal">
        {number}
      </span>
      <h3 className="mt-3 text-lg font-semibold text-charcoal">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
    </article>
  );
}
