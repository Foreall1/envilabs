import { cn } from "@/lib/cn";

type LogoProps = {
  /** Reversed-variant voor donkere achtergrond: wit vierkant, navy balken, teal pixels. */
  reversed?: boolean;
  /** Toon alleen het merkteken zonder wordmark. */
  markOnly?: boolean;
  className?: string;
};

/**
 * EnviLabs-logo — merkteken "Percelen" + wordmark.
 * Afgerond vierkant met drie balken; de middelste balk bestaat uit drie
 * teal pixels (lees als pixel én perceel).
 */
export function Logo({ reversed = false, markOnly = false, className }: LogoProps) {
  const squareFill = reversed ? "#FFFFFF" : "#0B1F3A";
  const barFill = reversed ? "#0B1F3A" : "#FFFFFF";
  const pixelFill = "#00C9A7";

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 240 240"
        role="img"
        aria-label="EnviLabs"
        className="h-8 w-8 shrink-0"
      >
        <rect width="240" height="240" rx="52" fill={squareFill} />
        <rect x="48" y="54" width="144" height="28" rx="2" fill={barFill} />
        <rect x="48" y="106" width="28" height="28" rx="2" fill={pixelFill} />
        <rect x="84" y="106" width="28" height="28" rx="2" fill={pixelFill} />
        <rect x="120" y="106" width="28" height="28" rx="2" fill={pixelFill} />
        <rect x="48" y="158" width="115.2" height="28" rx="2" fill={barFill} />
      </svg>
      {!markOnly && (
        <span
          aria-hidden="true"
          className="font-display text-[1.35rem] font-bold tracking-tightest"
        >
          <span className={reversed ? "text-paper" : "text-navy"}>Envi</span>
          <span className="text-teal">Labs</span>
        </span>
      )}
    </span>
  );
}
