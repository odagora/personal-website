import type { ReactNode } from 'react';

interface IAboutContentProps {
  image: ReactNode;
  content: ReactNode;
}

export const AboutContent = (props: IAboutContentProps) => (
  <>
    <div>
      <div className="m-6 mx-auto w-56 md:float-right md:mb-6 md:ml-6 md:mt-0">
        {props.image}
      </div>
      <div>{props.content}</div>
    </div>
  </>
);
