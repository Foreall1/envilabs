import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

/**
 * Centreert content binnen max 1320px met buitenmarge 20px mobiel / 56px desktop.
 */
export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-content px-[20px] lg:px-[56px]", className)}>
      {children}
    </Tag>
  );
}
