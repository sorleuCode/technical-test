import { cn } from "@/lib/utils";

export default function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(
      "min-h-screen w-full bg-gray-50 flex justify-center p-6",
      className
    )}>
      <div className="max-w-2xl w-full">{children}</div>
    </div>
  );
}
