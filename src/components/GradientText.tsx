import type { PropsWithChildren } from 'react';

export const GradientText = (props: PropsWithChildren) => (
  <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
    {props.children}
  </span>
);
