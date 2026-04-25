import * as React from "react";
import { cn } from "@/lib/utils";

export interface LibraryCardProps {
  code: string;
  title: string;
  summary: string;
  metadata?: string[];
  reviewed?: string;
  cornerSquare?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function LibraryCard({
  code,
  title,
  summary,
  metadata,
  reviewed,
  cornerSquare = true,
  className,
  children,
}: LibraryCardProps) {
  return (
    <article
      className={cn(
        "relative flex flex-col h-full bg-paper-cream",
        "border border-ink p-6 pb-10",
        "transition-colors duration-150",
        "hover:bg-ink hover:text-paper-cream group",
        className
      )}
    >
      <div className="ledger-sm mb-3 opacity-80 group-hover:opacity-100">
        {code}
      </div>
      <h3 className="font-display text-2xl leading-tight mb-3 group-hover:text-paper-cream">
        {title}
      </h3>
      <p className="font-body text-sm leading-relaxed mb-4 group-hover:text-paper-cream">
        {summary}
      </p>
      {metadata && metadata.length ? (
        <ul className="ledger-sm space-y-1 mt-auto opacity-80 group-hover:opacity-100">
          {metadata.map((m) => (
            <li key={m} className="flex items-start gap-2">
              <span aria-hidden="true">·</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {children}
      {reviewed ? (
        <div className="mt-4 pt-3 border-t border-current ledger-sm opacity-70 group-hover:opacity-100">
          REVIEWED · {reviewed}
        </div>
      ) : null}
      {cornerSquare ? (
        <span
          className="absolute bottom-3 right-3 h-2.5 w-2.5 bg-ink group-hover:bg-paper-cream"
          aria-hidden="true"
        />
      ) : null}
    </article>
  );
}
