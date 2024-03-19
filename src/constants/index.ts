import { ColorTags } from '@/components/Tags';

export const socialData = [
  {
    name: 'LinkedIn',
    image: 'linkedin-icon.png',
    link: 'https://www.linkedin.com/in/od-gonzalez/',
  },
  {
    name: 'Twitter',
    image: 'twitter-icon.png',
    link: 'https://twitter.com/odagora',
  },
  {
    name: 'GitHub',
    image: 'github-icon.png',
    link: 'https://github.com/odagora',
  },
];

export const technologies = {
  // Frontend
  HTML: 'HTML',
  CSS: 'CSS',
  JavaScript: 'JavaScript',
  TypeScript: 'TypeScript',
  React: 'React',
  Angular: 'Angular',
  Vue: 'Vue',
  Svelte: 'Svelte',
  Bootstrap: 'Bootstrap',
  TailwindCSS: 'TailwindCSS',
  Sass: 'Sass',
  Less: 'Less',
  Webpack: 'Webpack',
  Parcel: 'Parcel',
  Babel: 'Babel',
  ESLint: 'ESLint',
  Prettier: 'Prettier',
  Jest: 'Jest',
  Cypress: 'Cypress',
  Storybook: 'Storybook',
  PostCSS: 'PostCSS',
  NextJS: 'NextJS',
  NuxtJS: 'NuxtJS',
  Gatsby: 'Gatsby',
  Remix: 'Remix',
  Astro: 'Astro',
  Vite: 'Vite',
  WebGL: 'WebGL',
  Zustand: 'Zustand',
  MUI: 'MUI',
  'Styled Components': 'Styled Components',
  Axios: 'Axios',
  PropTypes: 'PropTypes',
  WordPress: 'WordPress',

  // Backend
  NodeJS: 'NodeJS',
  ExpressJS: 'ExpressJS',
  Django: 'Django',
  Flask: 'Flask',
  RubyOnRails: 'RubyOnRails',
  ASPDotNET: 'ASP.NET',
  Laravel: 'Laravel',
  SpringBoot: 'SpringBoot',
  Ruby: 'Ruby',
  Python: 'Python',
  Java: 'Java',
  CSharp: 'CSharp',
  PHP: 'PHP',
  Go: 'Go',
  Rust: 'Rust',
  Scala: 'Scala',
  Kotlin: 'Kotlin',
  Swift: 'Swift',
  NET: 'NET',
  PHPUnit: 'PHPUnit',
  'Google Sheets API': 'Google Sheets API',
  MySQL: 'MySQL',
} as const;

export const tagsMap: Map<keyof typeof technologies, keyof typeof ColorTags> =
  new Map([
    [technologies.HTML, ColorTags.PINK],
    [technologies.CSS, ColorTags.GRAY],
    [technologies.JavaScript, ColorTags.AMBER],
    [technologies.TypeScript, ColorTags.ORANGE],
    [technologies.React, ColorTags.BLUE],
    [technologies.Angular, ColorTags.TEAL],
    [technologies.Vue, ColorTags.GREEN],
    [technologies.Svelte, ColorTags.EMERALD],
    [technologies.Bootstrap, ColorTags.LIME],
    [technologies.TailwindCSS, ColorTags.INDIGO],
    [technologies.Sass, ColorTags.RED],
    [technologies.Less, ColorTags.CYAN],
    [technologies.Webpack, ColorTags.SKY],
    [technologies.Parcel, ColorTags.VIOLET],
    [technologies.Babel, ColorTags.PURPLE],
    [technologies.ESLint, ColorTags.FUCHSIA],
    [technologies.Prettier, ColorTags.PINK],
    [technologies.Jest, ColorTags.ROSE],
    [technologies.Cypress, ColorTags.SLATE],
    [technologies.Storybook, ColorTags.GRAY],
    [technologies.PostCSS, ColorTags.AMBER],
    [technologies.NextJS, ColorTags.ORANGE],
    [technologies.NuxtJS, ColorTags.LIME],
    [technologies.Gatsby, ColorTags.GREEN],
    [technologies.Remix, ColorTags.EMERALD],
    [technologies.Astro, ColorTags.TEAL],
    [technologies.Vite, ColorTags.CYAN],
    [technologies.WebGL, ColorTags.SKY],
    [technologies.Zustand, ColorTags.VIOLET],
    [technologies.MUI, ColorTags.PURPLE],
    [technologies['Styled Components'], ColorTags.SKY],
    [technologies.Axios, ColorTags.PINK],
    [technologies.PropTypes, ColorTags.GRAY],
    [technologies.WordPress, ColorTags.EMERALD],
    [technologies.NodeJS, ColorTags.RED],
    [technologies.ExpressJS, ColorTags.ORANGE],
    [technologies.Django, ColorTags.YELLOW],
    [technologies.Flask, ColorTags.LIME],
    [technologies.RubyOnRails, ColorTags.GREEN],
    [technologies.NET, ColorTags.TEAL],
    [technologies.Laravel, ColorTags.EMERALD],
    [technologies.SpringBoot, ColorTags.SKY],
    [technologies.Ruby, ColorTags.BLUE],
    [technologies.Python, ColorTags.INDIGO],
    [technologies.Java, ColorTags.VIOLET],
    [technologies.CSharp, ColorTags.PURPLE],
    [technologies.PHP, ColorTags.FUCHSIA],
    [technologies.Go, ColorTags.PINK],
    [technologies.Rust, ColorTags.ROSE],
    [technologies.Scala, ColorTags.SLATE],
    [technologies.Kotlin, ColorTags.GRAY],
    [technologies.Swift, ColorTags.RED],
    [technologies.NET, ColorTags.ORANGE],
    [technologies.PHPUnit, ColorTags.YELLOW],
    [technologies['Google Sheets API'], ColorTags.GREEN],
    [technologies.MySQL, ColorTags.TEAL],
  ]);

export type Tag = keyof typeof technologies;
export type ColorTag = keyof typeof ColorTags;
