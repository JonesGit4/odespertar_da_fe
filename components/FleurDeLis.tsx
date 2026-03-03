'use client';

interface FleurDeLisProps {
  className?: string;
  size?: number;
  color?: string;
  opacity?: number;
}

export default function FleurDeLis({ className = '', size = 60, color = '#D4A012', opacity = 0.12 }: FleurDeLisProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      <path
        d="M50 5C50 5 45 20 45 30C40 20 25 15 25 15C25 15 30 30 35 35C25 32 10 35 10 35C10 35 25 45 35 45C30 48 25 55 25 55C25 55 35 52 40 48C38 55 35 65 35 65L42 58L45 70L50 80L55 70L58 58L65 65C65 65 62 55 60 48C65 52 75 55 75 55C75 55 70 48 65 45C75 45 90 35 90 35C90 35 75 32 65 35C70 30 75 15 75 15C75 15 60 20 55 30C55 20 50 5 50 5Z"
        fill={color}
      />
      <circle cx="50" cy="85" r="4" fill={color} />
      <path d="M44 88L50 95L56 88" fill={color} />
    </svg>
  );
}

export function FleurDeLisDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold-500/25" />
      <FleurDeLis size={32} opacity={0.3} />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold-500/25" />
    </div>
  );
}
