import { Container, Title, SkillsContainer, SkillP } from "./index.style";

const Tech = () => {
  const skills = [
    "ReactJS",
    "NodeJS",
    "JavaScript",
    "GatsbyJS",
    "TypeScript",
    "React-Native",
    "CSS",
    "NextJS",
    "Sass",
    "CSS Animation",
    "ExpressJS",
    "MongoDB",
    "HTML",
  ];
  return (
    <Container>
      <Title>Tech & Skills</Title>
      {/* <SkillsContainer>
        {skills.map((skill, i) => (
          <SkillP
            key={skill}
            position={9 + Math.PI * Math.sin(i) * -3 * Math.cos(i / 2)}
            index={i}
          >
            {skill}
          </SkillP>
        ))}
      </SkillsContainer> */}
    </Container>
  );
};

export default Tech;
