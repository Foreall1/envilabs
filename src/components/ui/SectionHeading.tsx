import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Consistente sectiekop: mono-eyebrow + display-titel + optionele body.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("label-mono", tone === "dark" ? "text-teal" : "text-navy")}>
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "mt-3 text-h2 font-display tracking-tight md:text-[2rem]",
          tone === "dark" ? "text-paper" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-body",
            tone === "dark" ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
