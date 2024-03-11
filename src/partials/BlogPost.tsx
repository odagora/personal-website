import type { ReactNode } from 'react';

import { PostContent, PostHeader, Section } from '@/components';
import type { IBlogFrontmatter } from '@/types/IBlogFrontMatter';
import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: IBlogFrontmatter;
  children: ReactNode;
};

export const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <PostHeader content={props.frontmatter} author={AppConfig.author} />
    <PostContent content={props.frontmatter}>{props.children}</PostContent>
  </Section>
);
