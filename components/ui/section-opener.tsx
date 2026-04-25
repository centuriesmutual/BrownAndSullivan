import { cn, toRoman } from "@/lib/utils";

export interface SectionOpenerProps {
  index: number;
  title: string;
  description?: string;
  filingLabel?: string;
  className?: string;
  align?: "split" | "stacked";
}

export function SectionOpener({
  index,
  title,
  description,
  filingLabel,
  className,
  align = "split",
}: SectionOpenerProps) {
  const roman = toRoman(index);
  return (
    <div
      className={cn(
        "container-grid grid grid-cols-12 gap-x-6 gap-y-6",
        className
      )}
    >
      <div className="col-span-12 lg:col-span-3 flex flex-col gap-2">
        <span className="filing-index">
          {roman}. {filingLabel ? `${filingLabel}` : null}
        </span>
      </div>
      {align === "split" ? (
        <div className="col-span-12 lg:col-span-9 grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-4">
          <h2 className="display-section lg:col-span-7">{title}</h2>
          {description ? (
            <p className="body-prose body-prose-wash lg:col-span-5 max-w-xl">
              {description}
            </p>
          ) : null}
        </div>
      ) : (
        <div className="col-span-12 lg:col-span-9 flex flex-col gap-3">
          <h2 className="display-section">{title}</h2>
          {description ? (
            <p className="body-prose body-prose-wash max-w-3xl">{description}</p>
          ) : null}
        </div>
      )}
    </div>
  );
}
