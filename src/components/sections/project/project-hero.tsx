import { GitHubIcon } from '@/components/icons';
import { Card } from '@/components/ui/card';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { cn } from '@/lib/utils';

interface ProjectHeroProps {
  name: string;
  liveUrl?: string;
  sourceUrl?: string;
  coverImage?: string;
  placeholderIcon?: string;
  placeholderColor?: string;
  longDescription: string;
  wrapperClassName?: string;
  imageClassName?: string;
}

const ProjectHero = ({
  name,
  liveUrl,
  sourceUrl,
  coverImage,
  placeholderIcon,
  placeholderColor,
  longDescription,
  wrapperClassName,
  imageClassName,
}: ProjectHeroProps) => {
  return (
    <section className="hero-padding">
      <div className="container space-y-8 md:space-y-10">
        <h1 className="text-3xl md:text-4xl">{name}</h1>

        {(liveUrl || sourceUrl) && (
          <div className="flex items-center gap-4">
            {liveUrl && (
              <a
                href={liveUrl}
                className="link-underline text-lg leading-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir la démo
              </a>
            )}
            {liveUrl && sourceUrl && <div className="bg-border h-4 w-px" />}
            {sourceUrl && (
              <a
                href={sourceUrl}
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-lg leading-none transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir le code source sur GitHub"
                title="Voir sur GitHub"
              >
                <GitHubIcon className="size-5" />
                <span className="link-underline">GitHub</span>
              </a>
            )}
          </div>
        )}
      </div>
      <div className="bigger-container my-15 md:my-18">
        <Card className="flex aspect-video items-center justify-center overflow-hidden p-0">
          <div className={cn('relative size-full', wrapperClassName)}>
            {coverImage ? (
              <img
                src={coverImage}
                alt={name}
                className={cn('size-full object-cover', imageClassName)}
              />
            ) : (
              <ImagePlaceholder
                icon={placeholderIcon ?? 'Sparkles'}
                color={placeholderColor ?? '#3f3f46'}
                label={name}
                className={imageClassName}
              />
            )}
          </div>
        </Card>
      </div>

      <p className="text-muted-foreground container text-lg leading-7">
        {longDescription}
      </p>
    </section>
  );
};

export default ProjectHero;
