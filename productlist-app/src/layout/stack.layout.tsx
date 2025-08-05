import { cn } from "@/lib/utils";

interface StackProps {
  gap?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Stack({ gap = "4", children, className }: StackProps) {
  return <div className={cn(`flex flex-col gap-${gap}`, className)}>{children}</div>;
}
