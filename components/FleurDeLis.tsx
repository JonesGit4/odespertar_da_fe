'use client';

interface FleurDeLisProps {
  className?: string;
  size?: number;
  color?: string;
  opacity?: number;
}

// Ornate classical fleur-de-lis - closer to the traditional gold style
export default function FleurDeLis({ className = '', size = 60, color = '#D4A012', opacity = 0.22 }: FleurDeLisProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      {/* Center petal (flame/leaf shape) */}
      <path
        d="M100 10C100 10 92 40 92 60C92 72 95 82 100 90C105 82 108 72 108 60C108 40 100 10 100 10Z"
        fill={color}
      />
      {/* Center petal inner detail */}
      <path
        d="M100 18C100 18 96 42 96 58C96 68 98 76 100 82C102 76 104 68 104 58C104 42 100 18 100 18Z"
        fill={color}
        opacity="0.6"
      />
      
      {/* Left petal (curved outward) */}
      <path
        d="M92 90C92 90 80 78 65 74C50 70 35 74 30 80C30 80 40 88 55 90C65 91 78 88 88 94L92 90Z"
        fill={color}
      />
      <path
        d="M30 80C30 80 28 68 35 55C42 42 55 38 55 38C55 38 48 50 45 62C42 72 35 78 30 80Z"
        fill={color}
      />
      
      {/* Right petal (curved outward) */}
      <path
        d="M108 90C108 90 120 78 135 74C150 70 165 74 170 80C170 80 160 88 145 90C135 91 122 88 112 94L108 90Z"
        fill={color}
      />
      <path
        d="M170 80C170 80 172 68 165 55C158 42 145 38 145 38C145 38 152 50 155 62C158 72 165 78 170 80Z"
        fill={color}
      />
      
      {/* Center band / belt */}
      <rect x="90" y="92" width="20" height="12" rx="2" fill={color} />
      
      {/* Stem */}
      <rect x="96" y="104" width="8" height="40" rx="2" fill={color} />
      
      {/* Base cross-bar */}
      <rect x="82" y="136" width="36" height="8" rx="3" fill={color} />
      
      {/* Base ornament */}
      <path
        d="M93 144L100 158L107 144"
        fill={color}
      />
      <circle cx="100" cy="162" r="5" fill={color} />
      
      {/* Small decorative dots */}
      <circle cx="75" cy="82" r="2.5" fill={color} opacity="0.5" />
      <circle cx="125" cy="82" r="2.5" fill={color} opacity="0.5" />
    </svg>
  );
}

export function FleurDeLisDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold-500/30" />
      <FleurDeLis size={36} opacity={0.4} />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold-500/30" />
    </div>
  );
}
