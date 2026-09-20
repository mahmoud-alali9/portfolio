'use client';

import { Code, Heart, Layers, type LucideIcon, Star } from 'lucide-react';
import { AnimatePresence, LayoutGroup } from 'motion/react';
import { useState } from 'react';

import { ProjectCard } from '@/components/project-card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { ProjectFrontmatter } from '@/lib/types';

type ProjectsTabsProps = {
  projects: ProjectFrontmatter[];
};

const tabIcons: Record<string, LucideIcon> = {
  all: Layers,
  featured: Star,
  'open-source': Code,
  personal: Heart,
};

const ProjectsTabs = ({ projects }: ProjectsTabsProps) => {
  const [activeTab, setActiveTab] = useState('all');

  // Only show category tabs when the projects actually span more than one
  // category — with a single category in play, a tab bar just adds empty
  // tabs and noise, so we skip it and show the full grid instead.
  const hasMultipleCategories =
    new Set(projects.map((project) => project.category)).size > 1;

  const filteredProjects =
    !hasMultipleCategories || activeTab === 'all'
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const currentIcon = tabIcons[activeTab] || Layers;

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="bigger-container"
    >
      <div className="mt-15 mb-14 md:container md:mt-18 md:mb-17">
        {hasMultipleCategories && (
          <TabsList>
            <TabsTrigger value="all">
              <Layers className="size-4" />
              Tout
            </TabsTrigger>
            <TabsTrigger value="featured">
              <Star className="size-4" />
              À la une
            </TabsTrigger>
            <TabsTrigger value="open-source">
              <Code className="size-4" />
              Open source
            </TabsTrigger>
            <TabsTrigger value="personal">
              <Heart className="size-4" />
              Personnel
            </TabsTrigger>
          </TabsList>
        )}
      </div>

      <LayoutGroup>
        <ul className="grid gap-x-5 gap-y-10 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                icon={currentIcon}
              />
            ))}
          </AnimatePresence>
        </ul>
      </LayoutGroup>
    </Tabs>
  );
};

export default ProjectsTabs;
