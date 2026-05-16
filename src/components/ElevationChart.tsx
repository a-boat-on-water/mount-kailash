"use client";

import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  coordinates: [number, number, number][]; // [lng, lat, elevation]
}

export function ElevationChart({ coordinates }: Props) {
  const { lang } = useLanguage();
  const elevations = coordinates.map((c) => c[2]);
  const minElev = Math.min(...elevations);
  const maxElev = Math.max(...elevations);
  const range = maxElev - minElev;

  const width = 340;
  const height = 120;
  const padding = { top: 10, bottom: 20, left: 0, right: 0 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const points = elevations.map((elev, i) => {
    const x = padding.left + (i / (elevations.length - 1)) * chartW;
    const y = padding.top + chartH - ((elev - minElev) / range) * chartH;
    return `${x},${y}`;
  });

  const pathD = `M ${points.join(" L ")}`;
  const areaD = `${pathD} L ${padding.left + chartW},${padding.top + chartH} L ${padding.left},${padding.top + chartH} Z`;

  // Find the highest point index
  const maxIdx = elevations.indexOf(maxElev);
  const maxX = padding.left + (maxIdx / (elevations.length - 1)) * chartW;
  const maxY = padding.top + chartH - ((maxElev - minElev) / range) * chartH;

  return (
    <div className="w-full overflow-hidden">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Gradient fill */}
        <defs>
          <linearGradient id="elev-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C2714F" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#C2714F" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Area fill */}
        <path d={areaD} fill="url(#elev-gradient)" />

        {/* Line */}
        <path d={pathD} fill="none" stroke="#C2714F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Highest point marker */}
        <circle cx={maxX} cy={maxY} r="3.5" fill="#C2714F" stroke="white" strokeWidth="1.5" />
        <text x={maxX} y={maxY - 8} textAnchor="middle" className="text-[9px]" fill="#C2714F" fontWeight="600">
          {maxElev}m
        </text>

        {/* Labels */}
        <text x={padding.left + 2} y={height - 4} className="text-[9px]" fill="#9C9590">
          {lang === 'en' ? 'Darchen' : '塔钦'} {minElev}m
        </text>
        <text x={width - 2} y={height - 4} textAnchor="end" className="text-[9px]" fill="#9C9590">
          {lang === 'en' ? 'Darchen' : '塔钦'} {minElev}m
        </text>
      </svg>
    </div>
  );
}
