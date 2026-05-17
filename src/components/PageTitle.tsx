import { cn } from "@/lib/utils";

interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTitle({ children, className }: PageTitleProps) {
  return (
    <h1 className={cn("text-xl font-semibold text-white tracking-tight mb-5", className)}>
      {children}
    </h1>
  );
}
