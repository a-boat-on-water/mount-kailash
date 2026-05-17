interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTitle({ children, className = "mb-5" }: PageTitleProps) {
  return (
    <h1 className={`text-xl font-semibold text-white tracking-tight ${className}`}>
      {children}
    </h1>
  );
}
