import { cn } from "@/lib/utils";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: "default" | "white";
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}

export default function Heading({ 
  level = 1, 
  color = "default", 
  align = "left", 
  children 
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const baseStyles = "font-bold";
  const sizeStyles = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-base",
  }[level];

  const colorStyles = color === "white" ? "text-white" : "text-gray-800";
  const alignStyles = align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";

  return <Tag className={cn(baseStyles, sizeStyles, colorStyles, alignStyles)}>{children}</Tag>;
}
