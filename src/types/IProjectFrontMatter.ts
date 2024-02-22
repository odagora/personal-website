import type { MarkdownInstance, Page } from './index';

export interface IProjectFrontmatter {
  name: string;
  description: string;
  link: string;
  imgSrc: string;
  imgAlt: string;
  coverImgSrc: string;
  coverImgAlt: string;
  tags: string[];
  pubDate: string;
}

export type ProjectFrontmatterPage = Page<
  MarkdownInstance<IProjectFrontmatter>
>;
