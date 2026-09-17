import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-150 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed";

const SIZES: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-[52px] px-8 text-base",
};

const VARIANTS: Record<Variant, string> = {
  primary: "bg-bg-brand text-white hover:bg-bg-brand-hover",
  secondary: "bg-bg-accent text-text-on-accent hover:bg-state-success",
  outline: "border border-border-focus text-text-brand hover:bg-bg-brand-soft",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  style,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
      style={{ ...style }}
      {...props}
    />
  );
}
