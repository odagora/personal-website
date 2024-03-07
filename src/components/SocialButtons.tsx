import { HeroSocial } from 'astro-boilerplate-components';

type SocialButton = {
  name: string;
  image: string;
  link: string;
};

interface ISocialButtonsProps {
  data: SocialButton[];
}

export const SocialButtons = ({ data }: ISocialButtonsProps) => {
  return data.map((item) => (
    <a href={item.link}>
      <HeroSocial
        src={`/assets/images/${item.image}`}
        alt={`${item.name} icon`}
      />
    </a>
  ));
};
