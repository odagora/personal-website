import { ImageResponse } from '@vercel/og';
import fs from 'fs';
import { basename, resolve } from 'path';
import type { ReactElement } from 'react';

import type { MarkdownInstance } from '@/types';
import type { IBlogFrontmatter } from '@/types/IBlogFrontMatter';
import { AppConfig } from '@/utils';

interface Props {
  params: { slug: string };
  props: { loadPost: () => Promise<MarkdownInstance<IBlogFrontmatter>> };
}

export async function GET({ props }: Props) {
  const { loadPost } = props;

  const postData = await loadPost();
  const postTitle = postData.frontmatter.title;
  const postImageUrl = postData.frontmatter.imgSrc;
  const blogAuthor = AppConfig.author;

  const postCover = fs.readFileSync(
    resolve(process.cwd(), `public/${postImageUrl}`)
  );

  const RobotoBold = fs.readFileSync(
    resolve(process.cwd(), 'public/fonts/Roboto-Bold.ttf')
  );
  const RobotoRegular = fs.readFileSync(
    resolve(process.cwd(), 'public/fonts/Roboto-Regular.ttf')
  );

  const html: ReactElement = {
    key: postTitle,
    type: 'div',
    props: {
      tw: 'w-full h-full flex items-center justify-center relative bg-slate-900 text-gray-100',
      style: { fontFamily: 'Roboto Bold' },
      children: [
        {
          type: 'div',
          props: {
            tw: 'w-[400px] aspect-[16/9] flex rounded-3xl overflow-hidden',
            children: [
              {
                type: 'img',
                props: {
                  src: postCover.buffer,
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            tw: 'w-[600px] ml-10 flex flex-col',
            children: [
              {
                type: 'div',
                props: {
                  tw: 'text-5xl leading-snug mb-5',
                  children: postTitle,
                },
              },
              {
                type: 'div',
                props: {
                  tw: 'flex text-3xl',
                  children: [
                    {
                      type: 'div',
                      tw: 'flex',
                      props: {
                        tw: 'flex border-t-2 border-sky-500 pt-4',
                        children: [
                          {
                            type: 'div',
                            props: {
                              tw: 'text-sky-500 font-bold',
                              children: blogAuthor,
                            },
                          },
                          {
                            type: 'div',
                            props: {
                              tw: 'px-2',
                              style: { fontFamily: 'Roboto Regular' },
                              children: 'Blog',
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };

  return new ImageResponse(html, {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: 'Roboto Bold',
        data: RobotoBold.buffer,
        style: 'normal',
      },
      {
        name: 'Roboto Regular',
        data: RobotoRegular.buffer,
        style: 'normal',
      },
    ],
  });
}

export async function getStaticPaths() {
  const posts = import.meta.glob('../**/*.md');

  return Object.entries(posts).map(([path, promise]) => ({
    params: { slug: basename(path).replace('.md', '') },
    props: { loadPost: promise },
  }));
}
