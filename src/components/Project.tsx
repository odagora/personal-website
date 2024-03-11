import { format } from 'date-fns';

import type { ColorTag, Tag } from '@/constants';
import { tagsMap } from '@/constants';
import type { MarkdownInstance } from '@/types';
import type { IProjectFrontmatter } from '@/types/IProjectFrontMatter';

import { Tags } from './Tags';

type IProjectProps = {
  instance: MarkdownInstance<IProjectFrontmatter>;
};

export const Project = (props: IProjectProps) => {
  const getColorTag = (tag: string) => {
    return tagsMap.get(tag as Tag) as ColorTag;
  };

  return (
    <div className="flex flex-col items-center justify-around gap-x-8 rounded-md bg-slate-800 p-4 md:flex-row">
      <div className="shrink-0">
        <a href={props.instance.url}>
          <img
            className="h-36 w-48 hover:translate-y-1"
            src={props.instance.frontmatter.imgSrc}
            alt={props.instance.frontmatter.imgAlt}
            loading="lazy"
          />
        </a>
      </div>
      <div>
        <div className="flex flex-col items-center gap-y-2 md:flex-row">
          <a className="hover:text-cyan-400" href={props.instance.url}>
            <div className="text-xl font-semibold">
              {props.instance.frontmatter.name}
            </div>
          </a>
          <div className="ml-3 flex flex-wrap gap-2">
            {props.instance.frontmatter.tags.map((tag) => (
              <Tags key={tag} color={getColorTag(tag)}>
                {tag}
              </Tags>
            ))}
          </div>
        </div>
        <div className="mt-1 text-xs text-gray-400">
          {format(new Date(props.instance.frontmatter.pubDate), 'LLLL yyyy')}
        </div>
        <p className="mt-3 text-gray-400">
          {props.instance.frontmatter.description}
        </p>
      </div>
    </div>
  );
};
