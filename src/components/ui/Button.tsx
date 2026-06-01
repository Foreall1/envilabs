import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium rounded-md " +
  "transition-colors duration-200 select-none " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // Teal accent met navy tekst — wit nooit op teal (a11y).
  primary: "bg-teal text-navy hover:bg-[#00B597] active:bg-[#00A085]",
  // Navy vlak voor secundaire acties.
  secondary: "bg-navy text-paper hover:bg-[#13294a] active:bg-[#0a1a31]",
  // Subtiel, met rand.
  ghost:
    "bg-transparent text-navy border border-line hover:border-slate-300 hover:bg-slate-50",
};

const sizes: Record<Size, string> = {
  // Hit-target ≥ 44px mobiel.
  md: "min-h-[44px] px-4 text-ui",
  lg: "min-h-[52px] px-6 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">;

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
