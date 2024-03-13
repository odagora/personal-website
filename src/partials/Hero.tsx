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
          Let's work on using <GradientText>tech</GradientText> to make the
          world a better place for everyone. We'll code with{' '}
          <GradientText>purpose</GradientText>, design with{' '}
          <GradientText>empathy</GradientText>, and make sure our creations
          leave a valuable <GradientText>legacy</GradientText> on society.
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
