import { format } from 'date-fns';

import type { IProjectFrontmatter } from '@/types/IProjectFrontMatter';

type IProjectHeaderProps = {
  content: IProjectFrontmatter;
};

export const ProjectHeader = (props: IProjectHeaderProps) => (
  <>
    <h1 className="text-center text-3xl font-bold">{props.content.name}</h1>
    <div className="mt-2 text-center text-sm text-gray-400">
      {format(new Date(props.content.pubDate), 'LLLL yyyy')}
    </div>
  </>
);
