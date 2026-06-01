import { cn } from "@/lib/cn";
import {
  IconCheck,
  IconAlertTriangle,
  IconInfo,
} from "@/components/ui/icons";

type Tone = "neutral" | "success" | "warning" | "error" | "info";

type BadgeProps = {
  children: React.ReactNode;
  tone?: Tone;
  /** Toon het status-icoon. Status mag nooit met kleur alleen — daarom standaard aan. */
  withIcon?: boolean;
  className?: string;
};

// Signaalkleuren met voldoende contrast; tekst is altijd donker leesbaar.
const tones: Record<Tone, { wrap: string; Icon: React.ComponentType<{ className?: string }> }> = {
  neutral: { wrap: "bg-slate-100 text-slate-700 border-slate-200", Icon: IconInfo },
  success: { wrap: "bg-[#E5F6F0] text-[#0A6B4E] border-[#B8E6D5]", Icon: IconCheck },
  warning: { wrap: "bg-[#FBF1DC] text-[#8A5D00] border-[#F0DCA8]", Icon: IconAlertTriangle },
  error: { wrap: "bg-[#FBE7E5] text-[#A32820] border-[#F2C4BF]", Icon: IconAlertTriangle },
  info: { wrap: "bg-[#E6EEFB] text-[#1B4DA0] border-[#C2D5F4]", Icon: IconInfo },
};

/**
 * Badge/Pill voor statussen. Combineert kleur + icoon + tekst (WCAG: nooit kleur alleen).
 */
export function Badge({ children, tone = "neutral", withIcon = true, className }: BadgeProps) {
  const { wrap, Icon } = tones[tone];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-3 py-px",
        "label-mono",
        wrap,
        className
      )}
    >
      {withIcon && <Icon className="h-[14px] w-[14px]" />}
      {children}
    </span>
  );
}
