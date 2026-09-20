'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { getGroupedStackItems, getStackItems, type StackItem } from '@/lib/stack';
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

/** Renders a real brand logo (raw inline SVG, colored via `currentColor`). */
function BrandGlyph({ svg, className }: { svg: string; className?: string }) {
  return (
    <span
      className={cn('[&>svg]:block [&>svg]:size-full', className)}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

/** Icon for a stack item: its real logo when available, else the category's generic icon. */
function ItemGlyph({ item, className }: { item: StackItem; className?: string }) {
  if (item.brand) {
    return <BrandGlyph svg={item.brand.svg} className={className} />;
  }
  return <item.Icon className={className} />;
}

export function StackGrid({ stack, title = 'Compétences techniques', className }: StackGridProps) {
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
                  style={
                    {
                      '--brand-color': item.brand?.color ?? item.color,
                    } as React.CSSProperties
                  }
                >
                  <ItemGlyph
                    item={item}
                    className="text-muted-foreground size-9 transition-colors group-hover:text-[var(--brand-color)]"
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

  const groups = getGroupedStackItems();

  return (
    <section
      className={cn('section-padding bigger-container space-y-10', className)}
    >
      <h2 className="container text-2xl leading-none">{title}</h2>
      <div className="space-y-10 md:space-y-13">
        {groups.map((group) => (
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
              {group.items.map((item) => {
                const itemColor = item.brand?.color ?? item.color;
                return (
                  <li
                    key={item.name}
                    className="bg-muted flex items-center gap-2.5 rounded-full py-2 pr-4.5 pl-2.5"
                  >
                    <span
                      className="flex size-8 shrink-0 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: `${itemColor}26`,
                        color: itemColor,
                      }}
                    >
                      <ItemGlyph item={item} className="size-4" />
                    </span>
                    <span className="text-sm leading-none">{item.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
