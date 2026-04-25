import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-3 select-none",
    "font-mono uppercase tracking-stamp text-[0.6875rem]",
    "border-2 border-ink",
    "transition-[background-color,color,transform] duration-150 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
    "disabled:opacity-50 disabled:pointer-events-none",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-paper-cream hover:bg-paper-cream hover:text-ink",
        ghost:
          "bg-transparent text-ink hover:bg-ink hover:text-paper-cream",
        cream:
          "bg-paper-cream text-ink hover:bg-ink hover:text-paper-cream",
        plate:
          "bg-paper text-ink hover:bg-ink hover:text-paper",
      },
      size: {
        default: "h-12 px-6",
        lg: "h-14 px-8 text-[0.75rem]",
        sm: "h-10 px-4",
        xl: "h-16 px-10 text-[0.8125rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
}

export function LinkButton({
  className,
  variant,
  size,
  href,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Link>
  );
}

export { buttonVariants };
