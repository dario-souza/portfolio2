import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  name: string;
  level: number;
  className?: string;
}

const getLevelLabel = (level: number): string => {
  if (level >= 80) return 'Avançado';
  if (level >= 60) return 'Intermediário';
  return 'Básico';
};

const getLevelColor = (level: number): string => {
  if (level >= 80) return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
  if (level >= 60) return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
  return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
};

const SkillBar = ({ name, level, className }: SkillBarProps) => {
  return (
    <div className={cn("flex items-center justify-between py-2", className)}>
      <span className="font-medium text-foreground">{name}</span>
      <span className={cn(
        "text-xs font-semibold px-2.5 py-1 rounded-full",
        getLevelColor(level)
      )}>
        {getLevelLabel(level)}
      </span>
    </div>
  );
};

export default SkillBar;