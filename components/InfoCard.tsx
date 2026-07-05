import type { LucideIcon } from "lucide-react";

type InfoCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function InfoCard({ title, description, icon: Icon }: InfoCardProps) {
  return (
    <article className="rounded-lg border border-rose-deep/10 bg-white p-6 shadow-sm shadow-rose-deep/5">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-linen text-rose-deep">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-ink/72">{description}</p>
    </article>
  );
}
