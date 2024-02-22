import type { MarkdownInstance } from '@/types';
import type { IBlogFrontmatter } from '@/types/IBlogFrontMatter';
import type { IProjectFrontmatter } from '@/types/IProjectFrontMatter';

type Frontmatter = IBlogFrontmatter | IProjectFrontmatter;

export function sortByDate<T extends Frontmatter>(
  posts: MarkdownInstance<T>[]
): MarkdownInstance<T>[] {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
}
