import React from 'react';
import { cn } from '@/lib/utils';
import { NavLinkProps } from '@/types/portfolio';

const NavLink = ({ href, children, active = false }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
        active ? "text-primary" : "text-muted-foreground"
      )}
    >
      {children}
      {active && (
        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full" />
      )}
    </a>
  );
};

export default NavLink;