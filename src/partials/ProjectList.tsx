import { ColorTags, GradientText, Project, Section, Tags } from '@/components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Umoob Landing Page"
        description="Fully responsive landing page for promoting a sports marketplace app"
        link="https://www.umoob.com/"
        img={{
          src: '/assets/images/umoob-logo.svg',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>React.js</Tags>
            <Tags color={ColorTags.ORANGE}>TypeScript</Tags>
            <Tags color={ColorTags.PINK}>SASS</Tags>
            <Tags color={ColorTags.LIME}>Google Sheets API</Tags>
          </>
        }
      />
      <Project
        name="Automotive Workshop App"
        description="Automotive Workshop Operation Docs Management"
        link="https://github.com/odagora/workshop"
        img={{
          src: '/assets/images/servitalleres-logo.svg',
          alt: 'Project Fire',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>PHP</Tags>
            <Tags color={ColorTags.NEUTRAL}>Bootstrap</Tags>
            <Tags color={ColorTags.RED}>Laravel</Tags>
            <Tags color={ColorTags.AMBER}>PHPUnit</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
