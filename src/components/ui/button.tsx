import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "default" | "outline" | "ghost";
export type ButtonSize = "default" | "lg" | "icon";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors " +
  "disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-ring focus-visible:ring-offset-2";

const variants: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-border bg-transparent hover:bg-muted",
  ghost: "bg-transparent hover:bg-muted",
};

const sizes: Record<ButtonSize, string> = {
  default: "h-10 px-5",
  lg: "h-12 px-8 text-base",
  icon: "h-9 w-9 shrink-0",
};

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export function buttonClasses({ variant = "default", size = "default", className }: ButtonBaseProps = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return <button className={buttonClasses({ variant, size, className })} {...props} />;
}

type ButtonLinkProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export function ButtonLink({ variant, size, className, href, ...props }: ButtonLinkProps) {
  return <Link href={href} className={buttonClasses({ variant, size, className })} {...props} />;
}
