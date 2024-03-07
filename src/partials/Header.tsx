import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
} from 'astro-boilerplate-components';

import { HeaderWrapper } from '@/components';

const Header = () => (
  <HeaderWrapper>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-10 w-10 stroke-cyan-600"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 9l3 3l-3 3" />
              <path d="M13 15l3 0" />
              <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
            </svg>
          }
          name="Daniel's Blog"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/projects/">Projects</NavMenuItem>
        <NavMenuItem href="/posts/">Posts</NavMenuItem>
        <NavMenuItem href="/about/">About</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </HeaderWrapper>
);

export { Header };
