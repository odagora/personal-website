import type { MarkdownInstance, Page } from './index';

export interface IBlogFrontmatter {
  title: string;
  description: string;
  pubDate: string;
  imgSrc: string;
  imgAlt: string;
  draft: boolean;
}

export type BlogFrontmatterPage = Page<MarkdownInstance<IBlogFrontmatter>>;
