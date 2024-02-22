import type { PropsWithChildren } from 'react';

import { ProjectContent, ProjectHeader, Section } from '@/components';
import type { IProjectFrontmatter } from '@/types/IProjectFrontMatter';

interface IProjectDetailsProps extends PropsWithChildren {
  frontmatter: IProjectFrontmatter;
}

export const ProjectDetails = (props: IProjectDetailsProps) => (
  <Section>
    <ProjectHeader content={props.frontmatter} />
    <ProjectContent content={props.frontmatter}>
      {props.children}
    </ProjectContent>
  </Section>
);
