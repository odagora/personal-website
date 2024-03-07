import type { ReactNode } from 'react';

interface IAboutHeaderProps {
  title: ReactNode;
}

export const AboutHeader = (props: IAboutHeaderProps) => (
  <h1 className="text-3xl font-bold">{props.title}</h1>
);
