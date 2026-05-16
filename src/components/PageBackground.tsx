"use client";

interface PageBackgroundProps {
  image: string;
  children: React.ReactNode;
}

export function PageBackground({ image, children }: PageBackgroundProps) {
  return (
    <div className="relative min-h-dvh">
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>
      <div className="relative z-10 px-4 pt-6 pb-8">
        {children}
      </div>
    </div>
  );
}
