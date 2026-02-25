'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate?: Date;
  variant: 'dark' | 'light';
  label?: string;
}

export default function CountdownTimer({ targetDate, variant, label }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Default to 15 days from now if no target
    const target = targetDate || new Date(Date.now() + 15 * 24 * 60 * 60 * 1000);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = target.getTime() - now;
      
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) return null;

  const isDark = variant === 'dark';
  
  const digitBoxClass = isDark
    ? 'bg-dark-400/80 border border-gold-500/20 text-gold-400'
    : 'bg-white/80 border border-sage-200 text-sage-700 shadow-sm';
  
  const labelClass = isDark ? 'text-gray-500' : 'text-gray-400';

  return (
    <div className="text-center">
      {label && (
        <p className={`text-sm font-medium mb-3 uppercase tracking-wider ${isDark ? 'text-gold-500/70' : 'text-sage-500'}`}>
          {label}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 md:gap-3">
        {[
          { value: timeLeft.days, label: 'Dias' },
          { value: timeLeft.hours, label: 'Horas' },
          { value: timeLeft.minutes, label: 'Min' },
          { value: timeLeft.seconds, label: 'Seg' },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className={`countdown-digit w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-xl md:text-2xl font-bold ${digitBoxClass}`}>
              {String(item.value).padStart(2, '0')}
            </div>
            <span className={`text-[10px] mt-1 uppercase tracking-wider ${labelClass}`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
