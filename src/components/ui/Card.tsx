import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  /** Subtiele hover-lift voor interactieve kaarten. */
  interactive?: boolean;
  as?: "div" | "article" | "li";
};

/**
 * Card: 1px line-rand, radius-md, subtiele schaduw (merkboek-specificatie).
 */
export function Card({ children, className, interactive = false, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-md border border-line bg-paper p-6 shadow-card",
        interactive &&
          "transition-shadow duration-200 hover:shadow-card-hover motion-reduce:transition-none",
        className
      )}
    >
      {children}
    </Tag>
  );
}
