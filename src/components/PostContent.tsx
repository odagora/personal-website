import type { PropsWithChildren } from 'react';

import type { IBlogFrontmatter } from '@/types/IBlogFrontMatter';

interface IPostContentProps extends PropsWithChildren {
  content: IBlogFrontmatter;
}

export const PostContent = (props: IPostContentProps) => (
  <div className="mx-auto mt-5 max-w-prose">
    <div className="aspect-h-2 aspect-w-3">
      <img
        className="h-full w-full rounded-lg object-cover object-center hover:translate-y-1"
        src={props.content.imgSrc}
        alt={props.content.imgAlt}
        loading="lazy"
      />
    </div>

    <div className="prose prose-invert mt-8 prose-img:rounded-lg">
      {props.children}
    </div>
  </div>
);
