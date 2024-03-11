import { GradientText, HeroAvatar, Section, SocialButtons } from '@/components';
import { socialData } from '@/constants';

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
      socialButtons={<SocialButtons data={socialData} />}
    />
  </Section>
);

export { Hero };
