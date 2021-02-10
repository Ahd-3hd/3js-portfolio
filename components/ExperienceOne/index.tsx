import { useSpring } from "react-spring";
import {
  Container,
  Title,
  EntryContainer,
  Subtitle,
  SubtitleSpan,
  Paragraph,
} from "./index.style";

const ExperienceOne = ({ page }: { page: number }) => {
  const animation = useSpring({
    transform:
      page === 2 ? `translateY(0%) scale(1)` : `translateY(200%) scale(0)`,
  });
  return (
    <Container style={animation}>
      <Title>
        Experience <span>&</span> Qualifications
      </Title>
      <EntryContainer>
        <Subtitle>
          <SubtitleSpan invert>Full-Stack</SubtitleSpan> Developer - Zaat.Dev
        </Subtitle>
        <Paragraph>
          Established the company’s online presence by leading the development &
          design process of the company’s platform.
        </Paragraph>
        <Paragraph>
          Contributed Ideas and suggestions in team meetings and delivered
          updates on deadlines, designs and enhancements
        </Paragraph>
        <Paragraph>
          Delivered performance-driven and user-centric websites that met all
          business requirements.
        </Paragraph>
        <Paragraph>
          Reviewed code, debugged problems and corrected issues.
        </Paragraph>
      </EntryContainer>
    </Container>
  );
};

export default ExperienceOne;
