import type { ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};

export const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
    {props.children}
  </div>
);
