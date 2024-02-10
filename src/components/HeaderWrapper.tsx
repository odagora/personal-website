import type { PropsWithChildren } from 'react';

interface HeaderWrapperProps extends PropsWithChildren {
  title?: string;
}

export const HeaderWrapper = (props: HeaderWrapperProps) => {
  return (
    <header className="mx-auto max-w-screen-lg px-3 py-6">
      {props.title && (
        <div className="mb-6 text-2xl font-bold">{props.title}</div>
      )}
      {props.children}
    </header>
  );
};
