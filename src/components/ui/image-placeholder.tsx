import {
  Activity,
  Boxes,
  BrainCircuit,
  ChefHat,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  type LucideIcon,
  MessageSquareText,
  Network,
  Server,
  Sparkles,
  Users,
  Workflow,
} from 'lucide-react';

import { cn } from '@/lib/utils';

/**
 * Curated set of icons that can be referenced by name from MDX frontmatter
 * (`placeholderIcon`). Used as a temporary, easily-swappable stand-in for a
 * real project cover image/screenshot.
 */
const PLACEHOLDER_ICONS: Record<string, LucideIcon> = {
  Network,
  GitBranch,
  MessageSquareText,
  ChefHat,
  Users,
  Server,
  Database,
  BrainCircuit,
  Code2,
  Workflow,
  Cpu,
  Boxes,
  Activity,
  Sparkles,
  Layers,
};

interface ImagePlaceholderProps {
  /** Icon name, looked up in PLACEHOLDER_ICONS. Falls back to Sparkles. */
  icon: string;
  /** Background color (arbitrary hex from MDX frontmatter). */
  color: string;
  className?: string;
  label?: string;
}

export const ImagePlaceholder = ({
  icon,
  color,
  className,
  label,
}: ImagePlaceholderProps) => {
  const Icon = PLACEHOLDER_ICONS[icon] ?? Sparkles;

  return (
    <div
      role="img"
      aria-label={label ?? 'Project cover placeholder'}
      className={cn(
        'border-border flex size-full items-center justify-center overflow-hidden rounded-md border',
        className,
      )}
      style={{ backgroundColor: color }}
    >
      <Icon
        className="size-1/4 min-h-10 min-w-10 text-white/90"
        strokeWidth={1.5}
      />
    </div>
  );
};
