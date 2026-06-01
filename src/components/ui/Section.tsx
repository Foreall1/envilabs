import { cn } from "@/lib/cn";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  /** Achtergrondvariant. */
  tone?: "paper" | "bg" | "navy";
  id?: string;
  as?: "section" | "div" | "header" | "footer";
  "aria-labelledby"?: string;
};

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  paper: "bg-paper text-slate-800",
  bg: "bg-bg text-slate-800",
  navy: "bg-navy text-slate-200",
};

/**
 * Verticale sectie met consistente verticale ritmiek (64px mobiel / 96px desktop).
 */
export function Section({
  children,
  className,
  tone = "paper",
  id,
  as: Tag = "section",
  ...rest
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn("py-16 lg:py-24", tones[tone], className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
