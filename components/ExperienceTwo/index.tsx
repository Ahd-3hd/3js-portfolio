import { useSpring } from "react-spring";
import {
  Container,
  Title,
  EntryContainer,
  Subtitle,
  SubtitleSpan,
  Paragraph,
} from "./index.style";

const ExperienceTwo = ({ page }: { page: number }) => {
  const animation = useSpring({
    transform:
      page === 3 ? `translateY(0%) scale(1)` : `translateY(200%) scale(0)`,
  });
  return (
    <Container style={animation}>
      <Title>
        Experience <span>&</span> Qualifications
      </Title>
      <EntryContainer>
        <Subtitle>
          <SubtitleSpan invert>UNICEF</SubtitleSpan> Partnering With Zaat
        </Subtitle>
        <Paragraph>
          Took full responsibility of the Front-End Development of UNICEF
          project that aims to combat rumors surrounding the covid-19 pandemic.
        </Paragraph>
        <Paragraph>
          Single Handedly designed, implemented and coded the platform using
          TypeScript and NextJS.
        </Paragraph>
        <Paragraph>
          Built, tested and deployed scalable, highly available and modular
          software product that supports authentication, sharing and
          communication
        </Paragraph>
        <Paragraph>
          Adjusted design parameters to boost performance and incorporate new
          features.
        </Paragraph>
        <Paragraph>
          pixel perfect implementation of web design that meet UNICEF
          requirements.
        </Paragraph>
      </EntryContainer>
    </Container>
  );
};

export default ExperienceTwo;
