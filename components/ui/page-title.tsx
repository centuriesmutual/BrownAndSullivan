import { toRoman } from "@/lib/utils";

export interface PageTitleProps {
  volume: number;
  chapter: number;
  eyebrow: string;
  title: string;
  subtitle?: string;
  meta?: string[];
}

export function PageTitle({
  volume,
  chapter,
  eyebrow,
  title,
  subtitle,
  meta,
}: PageTitleProps) {
  return (
    <section className="border-b border-ink bg-paper">
      <div className="container-grid grid grid-cols-12 gap-x-6 gap-y-6 py-12 lg:py-16">
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-3 ledger-sm">
          <span>VOL · {toRoman(volume)} · CH · {toRoman(chapter)}</span>
          <span>{eyebrow}</span>
          {meta?.map((m) => (
            <span key={m} className="opacity-70">
              {m}
            </span>
          ))}
        </div>
        <div className="col-span-12 lg:col-span-9">
          <h1 className="display-headline break-words font-display tracking-tight">
            {title}
          </h1>
          {subtitle ? (
            <p className="font-body text-lg text-ink-wash mt-5 leading-relaxed max-w-3xl">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
