import { BlogGallery, GradientText, Section } from '@/components';
import type { MarkdownInstance } from '@/types';
import type { IBlogFrontmatter } from '@/types/IBlogFrontMatter';

type IRecentPostsProps = {
  postList: MarkdownInstance<IBlogFrontmatter>[];
};

export const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Posts</GradientText>
        </div>

        <div className="text-sm">
          <a href="/posts/">View all Posts →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);
