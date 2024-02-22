import { GradientText, Section } from '@/components';
import type { MarkdownInstance } from '@/types';
import type { IProjectFrontmatter } from '@/types/IProjectFrontMatter';

import { ProjectList } from './ProjectList';

export type IRecentProjectsProps = {
  projects: MarkdownInstance<IProjectFrontmatter>[];
};

export const RecentProjects = (props: IRecentProjectsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Projects</GradientText>
        </div>
        <div className="text-sm">
          <a href="/projects/">View all Projects →</a>
        </div>
      </div>
    }
  >
    <ProjectList projects={props.projects} />
  </Section>
);
