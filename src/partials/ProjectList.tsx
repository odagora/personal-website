import { Project } from '@/components';
import type { MarkdownInstance } from '@/types';
import type { IProjectFrontmatter } from '@/types/IProjectFrontMatter';

type IProjectListProps = {
  projects: MarkdownInstance<IProjectFrontmatter>[];
};

export const ProjectList = (props: IProjectListProps) => {
  return (
    <div className="flex flex-col gap-6">
      {props.projects.map((project) => (
        <Project key={project.url} instance={project} />
      ))}
    </div>
  );
};
