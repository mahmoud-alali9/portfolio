'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { getStackItems, STACK_GROUPS } from '@/lib/stack';
import { cn } from '@/lib/utils';

interface StackGridProps {
  /**
   * Optional flat list of stack keys (e.g. a project's `frontmatter.stack`).
   * When provided, renders a flat row of tiles — used on project pages.
   * When omitted, renders the full stack grouped by category.
   */
  stack?: string[];
  title?: string;
  className?: string;
}

export function StackGrid({ stack, title = 'My stack', className }: StackGridProps) {
  if (stack) {
    const stackItems = getStackItems(stack);

    return (
      <section
        className={cn('section-padding bigger-container space-y-10', className)}
      >
        <h2 className="container text-2xl leading-none">{title}</h2>
        <ul
          className={cn(
            'flex flex-wrap items-center gap-4.25 lg:justify-between',
          )}
        >
          {stackItems.map((item) => (
            <Tooltip key={item.name}>
              <TooltipTrigger asChild>
                <li
                  className={cn(
                    'group bg-muted flex size-25 shrink-0 items-center justify-center rounded-3xl',
                  )}
                  style={{ '--brand-color': item.color } as React.CSSProperties}
                >
                  <item.Icon
                    className={cn(
                      'text-muted-foreground size-9 transition-colors group-hover:text-[var(--brand-color)]',
                    )}
                  />
                </li>
              </TooltipTrigger>
              <TooltipContent side="bottom">{item.name}</TooltipContent>
            </Tooltip>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section
      className={cn('section-padding bigger-container space-y-10', className)}
    >
      <h2 className="container text-2xl leading-none">{title}</h2>
      <div className="space-y-10 md:space-y-13">
        {STACK_GROUPS.map((group) => (
          <div key={group.category} className="container space-y-5">
            <div className="flex items-center gap-3">
              <span
                className="flex size-9 shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: `${group.color}1a`,
                  color: group.color,
                }}
              >
                <group.Icon className="size-4.5" />
              </span>
              <h3 className="text-lg leading-none">{group.category}</h3>
            </div>
            <ul className="flex flex-wrap gap-3">
              {group.items.map((name) => (
                <li
                  key={name}
                  className="bg-muted flex items-center gap-2.5 rounded-full py-2 pr-4.5 pl-2.5"
                >
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: `${group.color}26`,
                      color: group.color,
                    }}
                  >
                    <group.Icon className="size-4" />
                  </span>
                  <span className="text-sm leading-none">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
