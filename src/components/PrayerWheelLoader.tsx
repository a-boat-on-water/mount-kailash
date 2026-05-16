"use client";

export default function PrayerWheelLoader({ text }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-12 h-full">
      {/* Prayer wheel */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-[3px] border-primary animate-prayer-wheel">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 rounded-full bg-secondary" />
        </div>
        <div className="absolute inset-2 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-primary text-base font-bold">{"\u0F00"}</span>
        </div>
      </div>
      {text && (
        <p className="text-muted-foreground text-sm">{text}</p>
      )}
    </div>
  );
}
