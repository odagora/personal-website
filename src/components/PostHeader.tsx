import { format } from 'date-fns';

import type { IBlogFrontmatter } from '@/types/IBlogFrontMatter';

type IPostHeaderProps = {
  content: IBlogFrontmatter;
  author: string;
};

export const PostHeader = (props: IPostHeaderProps) => (
  <>
    <h1 className="text-center text-3xl font-bold">{props.content.title}</h1>
    <div className="mt-2 text-center text-sm text-gray-400">
      By {props.author} on{' '}
      {format(new Date(props.content.pubDate), 'LLL d, yyyy')}
    </div>
  </>
);
