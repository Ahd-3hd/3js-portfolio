import { useSpring } from "react-spring";
import { Container, Title, SkillP, SkillsContainer } from "./index.style";

const Skills = ({ page }: { page: number }) => {
  const animation = useSpring({
    transform: page === 1 ? `translateY(0%)` : `translateY(200%)`,
  });
  const skills = [
    "ReactJS",
    "NodeJS",
    "JavaScript",
    "GatsbyJS",
    "TypeScript",
    "CSS",
    "NextJS",
    "Sass",
    "React-Native",
    "CSS Animation",
    "ExpressJS",
    "MongoDB",
    "HTML",
  ];
  return (
    <Container style={animation}>
      <Title>
        Skills <span>&</span> Techs
      </Title>
      <SkillsContainer>
        {skills.map((skill, i) => (
          <SkillP
            key={skill}
            position={9 + Math.PI * Math.sin(i) * -3 * Math.cos(i / 2)}
          >
            {skill}
          </SkillP>
        ))}
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
