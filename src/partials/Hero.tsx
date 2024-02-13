import { GradientText, HeroAvatar, HeroSocial, Section } from '@/components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hey, I'm <GradientText>Daniel</GradientText>
        </>
      }
      description={
        <>
          Striving to use <GradientText>tech</GradientText> for good, making the
          world better for all. Let's code with{' '}
          <GradientText>purpose</GradientText>, design with{' '}
          <GradientText>empathy</GradientText>, and ensure our{' '}
          <GradientText>innovations</GradientText> leave a valuable{' '}
          <GradientText>legacy</GradientText> on society.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/code-icon.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/od-gonzalez/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://twitter.com/odagora">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://github.com/odagora">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="Github icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
