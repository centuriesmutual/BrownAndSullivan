import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BlockTileProps {
  letter: string;
  label: string;
  caption?: string;
  href?: string;
  variant?: "ink" | "cream" | "paper" | "outline";
  size?: "sm" | "md" | "lg";
  active?: boolean;
  className?: string;
}

const sizeMap = {
  sm: {
    container: "min-h-[88px]",
    letter: "text-[2.5rem]",
    caption: "text-[0.55rem]",
  },
  md: {
    container: "min-h-[120px]",
    letter: "text-[3.5rem]",
    caption: "text-[0.625rem]",
  },
  lg: {
    container: "min-h-[160px]",
    letter: "text-[5rem]",
    caption: "text-[0.6875rem]",
  },
};

export function BlockTile({
  letter,
  label,
  caption,
  href,
  variant = "outline",
  size = "md",
  active = false,
  className,
}: BlockTileProps) {
  const variants = {
    ink: "bg-ink text-paper-cream border-ink",
    cream: "bg-paper-cream text-ink border-ink",
    paper: "bg-paper text-ink border-ink",
    outline: "bg-transparent text-ink border-ink",
  } as const;

  const hoverVariants = {
    ink: "hover:bg-paper-cream hover:text-ink",
    cream: "hover:bg-ink hover:text-paper-cream",
    paper: "hover:bg-ink hover:text-paper-cream",
    outline: "hover:bg-ink hover:text-paper-cream",
  } as const;

  const sz = sizeMap[size];

  const content = (
    <>
      <span
        className={cn("block-letter font-block", sz.letter)}
        aria-hidden="true"
      >
        {letter}
      </span>
      <span
        className={cn(
          "absolute bottom-2 left-2 right-2 font-body italic leading-tight",
          sz.caption
        )}
      >
        {label}
      </span>
      {caption ? (
        <span className="absolute top-1.5 left-2 stamp-label opacity-80">
          {caption}
        </span>
      ) : null}
      {active ? (
        <span
          className="absolute bottom-2 right-2 h-2 w-2 bg-ink"
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  const classes = cn(
    "relative flex flex-col items-start justify-center",
    "aspect-square w-full overflow-hidden",
    "border-2 px-3 py-2",
    "block-press",
    variants[variant],
    hoverVariants[variant],
    sz.container,
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
}
