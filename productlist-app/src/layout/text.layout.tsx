import { cn } from "@/lib/utils";

interface TextProps {
  variant?: "default" | "muted" | "error";
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export default function Text({ 
  variant = "default",
  align = "left", 
  size = "md", 
  children,
  className
}: TextProps) {
  const variantStyles = {
    default: "text-gray-800",
    muted: "text-gray-600",
    error: "text-red-600",
  }[variant];

  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  const sizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }[size];

  return (
    <p className={cn(variantStyles, alignStyles, sizeStyles, className)}>
      {children}
    </p>
  );
}
