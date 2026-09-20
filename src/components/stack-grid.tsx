'use client';

import {
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  Network,
  PieChart,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { STACK_GROUPS, type StackIconKey } from '@/lib/stack';
import { cn } from '@/lib/utils';

const CATEGORY_ICONS: Record<StackIconKey, LucideIcon> = {
  languages: Code2,
  llm: BrainCircuit,
  semantic: Network,
  ml: BarChart3,
  devops: Wrench,
  databases: Database,
  bi: PieChart,
};

/** First 1-2 letters of a skill name, used as the compact label on its tile. */
function getInitials(name: string): string {
  const clean = name.replace(/[^a-zA-Z0-9]/g, '');
  return (clean.slice(0, 2) || name.slice(0, 2)).toUpperCase();
}

interface StackGridProps {
  title?: string;
  className?: string;
}

export function StackGrid({
  title = 'Compétences',
  className,
}: StackGridProps) {
  return (
    <section
      id="skills"
      className={cn('section-padding bigger-container space-y-12', className)}
    >
      <h2 className="container text-2xl leading-none">{title}</h2>

      <div className="container grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {STACK_GROUPS.map((group) => {
          const Icon = CATEGORY_ICONS[group.icon];
          return (
            <div key={group.category} className="space-y-4">
              <div className="flex items-center gap-2.5">
                <Icon
                  className="size-4"
                  style={{ color: group.color }}
                  aria-hidden="true"
                />
                <h3 className="text-muted-foreground text-sm leading-none tracking-wide uppercase">
                  {group.category}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <Tooltip key={item}>
                    <TooltipTrigger asChild>
                      <li
                        className="border-border flex size-14 shrink-0 items-center justify-center rounded-2xl border text-sm font-semibold"
                        style={{ backgroundColor: `${group.color}26` }}
                      >
                        {getInitials(item)}
                      </li>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">{item}</TooltipContent>
                  </Tooltip>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
