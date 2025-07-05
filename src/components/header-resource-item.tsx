"use client";

import type { LucideIcon } from "lucide-react";

interface HeaderResourceItemProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  isNew?: boolean;
  onClick?: () => void;
}

export default function HeaderResourceItem({
  icon: Icon,
  title,
  subtitle,
  isNew,
  onClick,
}: HeaderResourceItemProps) {
  return (
    <div
      className="flex items-start gap-3 p-3 hover:bg-muted rounded-md cursor-pointer transition-colors"
      onClick={onClick}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 mt-0.5">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm">{title}</span>
          {isNew && (
            <span className="bg-primary text-primary-foreground px-1.5 py-0.5 rounded text-xs font-mono">
              New
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
