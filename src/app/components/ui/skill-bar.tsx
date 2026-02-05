import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  name: string;
  level: number;
  className?: string;
}

const SkillBar = ({ name, level, className }: SkillBarProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;