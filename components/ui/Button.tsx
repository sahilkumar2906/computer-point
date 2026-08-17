import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";

type Variant = "primary" | "outline" | "white" | "outlineWhite" | "ghost";
type Size = "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  href?: string;
  external?: boolean;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue-dark)] shadow-sm hover:shadow-md",
  outline:
    "border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/5",
  white: "bg-white text-[var(--brand-blue)] hover:bg-slate-50 shadow-sm",
  outlineWhite: "border-2 border-white/50 text-white hover:bg-white/10",
  ghost: "text-slate-700 hover:text-[var(--brand-blue)] hover:bg-slate-100",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  className = "",
  href,
  external,
  children,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
