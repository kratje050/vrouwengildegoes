import type { LucideIcon } from "lucide-react";

type ActivityCardProps = {
  title: string;
  date: string;
  description: string;
  category: string;
  icon: LucideIcon;
};

export function ActivityCard({
  title,
  date,
  description,
  category,
  icon: Icon
}: ActivityCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-rose-deep/10 bg-white p-6 shadow-sm shadow-rose-deep/5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cream text-rose-deep">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </div>
        <span className="rounded-full bg-sage/12 px-3 py-1 text-sm font-semibold text-sage">
          {category}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm font-semibold text-mulberry">{date}</p>
      <p className="mt-4 leading-7 text-ink/72">{description}</p>
    </article>
  );
}
