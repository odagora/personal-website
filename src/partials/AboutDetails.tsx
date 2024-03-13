import {
  AboutContent,
  AboutHeader,
  GradientText,
  Section,
  SocialButtons,
} from '@/components';
import { socialData } from '@/constants';

export const AboutDetails = () => (
  <Section>
    <AboutHeader
      title={
        <>
          Hey there, I'm <GradientText>Daniel González</GradientText>
        </>
      }
    />
    <AboutContent
      image={
        <img
          className="h-full w-full rounded-lg object-cover object-center hover:translate-y-1"
          src="/assets/images/profile-photo.jpg"
          alt="profile photo"
          loading="lazy"
        />
      }
      content={
        <>
          <p className="mt-6 text-xl leading-9">
            I’m based in Bogotá, often referred to as the “Athens of South
            America”, in the wonderful country of Colombia. I have a solid
            engineering foundation, and through self-directed learning, I’ve
            broadened my skill set to include marketing and software
            development, skills that have become cornerstones of my career.
          </p>
          <p className="mt-6 text-xl leading-9">
            I’m a tech enthusiast and a productivity buff, always on the lookout
            for new ways to streamline processes and integrate the latest tech
            trends into my work and life. Teaching and sharing knowledge are
            close to my heart, and I find joy in traveling, discovering new
            destinations, and spending time with my wife.
          </p>
          <p className="mt-6 text-xl leading-9">
            When the pandemic reshaped the world, it also reshaped my career
            path, steering me towards software engineering. Now, I focus on
            delivering top-notch user experiences as a frontend developer,
            primarily using React to craft responsive and user-friendly web
            interfaces that people interact with every day.
          </p>
          <div className="mt-3 flex gap-1">
            <SocialButtons data={socialData} />
          </div>
          <h2 className="mt-10 text-3xl font-bold">Experience</h2>
          <p className="mt-6 text-xl leading-9">
            I am a Software Engineer with more than 5 years of experience. My
            tech journey began in 2014 when I delved into the data science
            field, constructing custom scripts for the financial sector using{' '}
            <GradientText>Python</GradientText>,{' '}
            <GradientText>NumPy</GradientText>,{' '}
            <GradientText>Pandas</GradientText>, and{' '}
            <GradientText>Matplotlib</GradientText> libraries during my free
            time. In 2017, I made a transition to Fullstack web development,
            where I built an asset management app for the automotive industry
            and customized a <GradientText>WordPress</GradientText> website
            through plugins and open-source <GradientText>CRM</GradientText>{' '}
            integrations using <GradientText>PHP</GradientText>,{' '}
            <GradientText>Laravel</GradientText>, and{' '}
            <GradientText>Bootstrap</GradientText>. Over the past few years,
            I’ve primarily focused on frontend development within the{' '}
            <GradientText>React</GradientText> ecosystem.
          </p>
          <p className="mt-6 text-xl leading-9">
            Feel free to reach out to me via{' '}
            <span>
              <a
                className="underline"
                href={`mailto:oscar.d.gonzalez@gmail.com`}
              >
                email
              </a>
            </span>{' '}
            if you’d like to connect!
          </p>
        </>
      }
    />
  </Section>
);
