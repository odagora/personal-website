import type { PropsWithChildren } from 'react';

interface FooterWrapperProps extends PropsWithChildren {
  title?: string;
}

export const FooterWrapper = (props: FooterWrapperProps) => {
  return (
    <footer className="mx-auto max-w-screen-lg px-3 py-6">
      {props.title && (
        <div className="mb-6 text-2xl font-bold">{props.title}</div>
      )}
      {props.children}
    </footer>
  );
};
