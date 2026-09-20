'use client';

import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import type { ProjectFrontmatter } from '@/lib/types';
import { cn } from '@/lib/utils';

type ProjectCardProps = {
  project: ProjectFrontmatter;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <li className="border-border border-t py-10 first:border-t-0 md:py-12">
      <div className="grid gap-6 md:grid-cols-[2.5rem_1fr_10rem] md:items-start md:gap-8">
        <span className="text-muted-foreground text-sm leading-none tabular-nums md:pt-1">
          {project.id.padStart(2, '0')}
        </span>

        <div className="space-y-3">
          <h3 className="text-lg leading-none font-semibold md:text-xl">
            {project.name}
          </h3>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
            {project.description}
          </p>
          <p className="text-muted-foreground/70 text-sm">
            {project.stack.join(' · ')}
          </p>
          <div className="flex items-center gap-4 pt-1">
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm"
              >
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm"
              >
                Demo
              </a>
            )}
          </div>
        </div>

        <div className={cn('w-full shrink-0 md:w-40', project.wrapperClassName)}>
          <div className="aspect-video md:aspect-square">
            <ImagePlaceholder
              icon={project.placeholderIcon ?? 'Sparkles'}
              color={project.placeholderColor ?? '#3f3f46'}
              label={project.name}
              className={project.imageClassName}
            />
          </div>
        </div>
      </div>
    </li>
  );
};
