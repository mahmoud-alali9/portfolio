import { Card, CardContent } from '@/components/ui/card';
import type { ProjectImage } from '@/lib/types';
import { cn } from '@/lib/utils';

const ProjectDetails = ({
  images,
  additionalDescription,
  highlights,
}: ProjectDetailsProps) => {
  // `images` is optional — none of the real projects have a screenshot
  // gallery yet. Rather than show a lone "coming soon" placeholder tile
  // (the hero section above already carries a placeholder visual for the
  // project), we simply omit the gallery blocks entirely when empty and
  // fall straight through to the description + highlights.
  const hasImages = Boolean(images && images.length > 0);
  const topImages = hasImages ? images!.slice(0, 2) : [];
  const middleImages = hasImages ? images!.slice(2, 5) : [];

  return (
    <section className="section-padding bigger-container pt-0!">
      {/* Top 2 images */}
      {topImages.length > 0 && (
        <div className="space-y-15 md:space-y-18">
          {topImages.map((image, index) => (
            <ImageCard key={index} image={image} />
          ))}
        </div>
      )}

      {/* Additional Description */}
      <p className="text-muted-foreground hero-padding container text-lg">
        {additionalDescription}
      </p>

      {/* Middle 3 images - grid layout */}
      {middleImages.length > 0 && (
        <div className="hero-padding space-y-15 pt-0! md:space-y-18">
          {/* First row: 2 columns */}
          {middleImages.slice(0, 2).length > 0 && (
            <div className="grid gap-10 md:grid-cols-2">
              {middleImages.slice(0, 2).map((image, index) => (
                <ImageCard key={index + 2} image={image} />
              ))}
            </div>
          )}
          {/* Second row: full width */}
          {middleImages[2] && <ImageCard image={middleImages[2]} />}
        </div>
      )}

      {/* Highlights */}
      <div className="container space-y-10">
        <h2 className="text-2xl leading-none">Points clés</h2>
        <ul className="text-muted-foreground ms-7 space-y-2 text-lg">
          {highlights.map((highlight, index) => (
            <li key={index} className="list-disc">
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectDetails;

interface ProjectDetailsProps {
  images?: ProjectImage[];
  additionalDescription: string;
  highlights: string[];
}

const ImageCard = ({ image }: { image: ProjectImage }) => (
  <div className="flex flex-col gap-5">
    <Card
      className={cn(
        'flex items-center justify-end overflow-clip md:h-80 md:justify-center',
        image.wrapperClassName,
      )}
    >
      <CardContent className="relative">
        <img
          src={image.src}
          alt={image.caption || ''}
          width={image.width}
          height={image.height}
        />
      </CardContent>
    </Card>
    {image.caption && (
      <p className="text-muted-foreground text-center text-base">
        {image.caption}
      </p>
    )}
  </div>
);
