import { cn } from "@/lib/utils";

interface FlexProps {
  direction?: "row" | "col";
  gap?: string;
  justify?: "start" | "center" | "between" | "end";
  align?: "start" | "center" | "end" | "stretch";
  wrap?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Flex({
  direction = "row",
  gap = "2",
  justify = "start",
  align = "center",
  wrap = false,
  children,
  className,
}: FlexProps) {
  const dir = direction === "row" ? "flex-row" : "flex-col";
  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    between: "justify-between",
    end: "justify-end",
  }[justify];
  const alignClass = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  }[align];

  return (
    <div
      className={cn(
        "flex",
        dir,
        justifyClass,
        alignClass,
        wrap && "flex-wrap",
        `gap-${gap}`,
        className
      )}
    >
      {children}
    </div>
  );
}
