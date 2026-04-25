import { cn } from "@/lib/utils";
import { toRoman } from "@/lib/utils";

export interface SectionHeaderProps {
  index: number;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "split";
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  const roman = toRoman(index);
  return (
    <header
      className={cn(
        "container-grid grid grid-cols-12 gap-x-6 gap-y-3",
        "py-10 border-t border-ink",
        className
      )}
    >
      <div className="col-span-12 md:col-span-3 flex items-baseline gap-3">
        <span className="font-block text-[2.25rem] leading-none">{roman}</span>
        <span className="ledger-sm">{eyebrow}</span>
      </div>
      <div
        className={cn(
          "col-span-12 md:col-span-9",
          align === "split"
            ? "grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-4"
            : ""
        )}
      >
        <h2
          className={cn(
            "display-headline-sm",
            align === "split" ? "lg:col-span-7" : ""
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "body-serif text-ink-wash max-w-2xl",
              align === "split" ? "lg:col-span-5 mt-2 lg:mt-0" : "mt-3"
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
