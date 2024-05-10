import { ImageResponse } from '@vercel/og';
import fs from 'fs';
import { basename, resolve } from 'path';
import type { ReactElement } from 'react';

import type { MarkdownInstance } from '@/types';
import type { IProjectFrontmatter } from '@/types/IProjectFrontMatter';
import { AppConfig } from '@/utils';

interface Props {
  params: { slug: string };
  props: { loadProject: () => Promise<MarkdownInstance<IProjectFrontmatter>> };
}

export async function GET({ props }: Props) {
  const { loadProject } = props;

  const projectData = await loadProject();
  const projectName = projectData.frontmatter.name;
  const projectImageUrl = projectData.frontmatter.coverImgSrc;
  const projectAuthor = AppConfig.author;

  const projectCover = fs.readFileSync(
    resolve(process.cwd(), `public/${projectImageUrl}`)
  );

  const RobotoBold = fs.readFileSync(
    resolve(process.cwd(), 'public/fonts/Roboto-Bold.ttf')
  );
  const RobotoRegular = fs.readFileSync(
    resolve(process.cwd(), 'public/fonts/Roboto-Regular.ttf')
  );

  const html: ReactElement = {
    key: projectName,
    type: 'div',
    props: {
      tw: 'w-full h-full flex items-center justify-center relative bg-slate-900 text-gray-100',
      style: { fontFamily: 'Roboto Bold' },
      children: [
        {
          type: 'div',
          props: {
            tw: 'w-[450px] aspect-[16/9] flex rounded-3xl overflow-hidden items-center justify-center',
            children: [
              {
                type: 'img',
                props: {
                  src: projectCover.buffer,
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            tw: 'w-[500px] ml-10 flex flex-col items-center justify-center text-center',
            children: [
              {
                type: 'div',
                props: {
                  tw: 'text-5xl leading-snug mb-5',
                  children: projectName,
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
                              children: projectAuthor,
                            },
                          },
                          {
                            type: 'div',
                            props: {
                              tw: 'px-2',
                              style: { fontFamily: 'Roboto Regular' },
                              children: 'Portfolio',
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
  const projects = import.meta.glob('../**/*.md');

  return Object.entries(projects).map(([path, promise]) => ({
    params: { slug: basename(path).replace('.md', '') },
    props: { loadProject: promise },
  }));
}
