import type { PropsWithChildren } from 'react';

import type { IProjectFrontmatter } from '@/types/IProjectFrontMatter';

interface IProjectContentProps extends PropsWithChildren {
  content: IProjectFrontmatter;
}

export const ProjectContent = (props: IProjectContentProps) => (
  <div className="mx-auto mt-5 max-w-prose">
    <a href={props.content.link}>
      <div className="aspect-h-2 aspect-w-3">
        <figure>
          <img
            className="h-full w-full rounded-lg object-contain object-center hover:translate-y-1"
            src={props.content.coverImgSrc}
            alt={props.content.coverImgAlt}
            loading="lazy"
          />
          <figcaption className="my-2 text-center text-[12px] italic">
            Click on the image for more details
          </figcaption>
        </figure>
      </div>
    </a>
    <div className="prose prose-invert mt-10 prose-img:rounded-lg">
      {props.children}
    </div>
  </div>
);
