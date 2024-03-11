import { BlogCard } from '@/components';
import type { MarkdownInstance } from '@/types';
import type { IBlogFrontmatter } from '@/types/IBlogFrontMatter';

type IRecentPostsProps = {
  postList: MarkdownInstance<IBlogFrontmatter>[];
};

export const BlogGallery = (props: IRecentPostsProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.postList.map((elt) => (
      <BlogCard key={elt.url} instance={elt} />
    ))}
  </div>
);
