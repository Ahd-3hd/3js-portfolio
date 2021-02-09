import { Container, Title, SkillP, SkillsContainer } from "./index.style";

const Skills = () => {
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
    <Container>
      <Title>
        Skills <span>&</span> Techs
      </Title>
      <SkillsContainer>
        {skills.map((skill, i) => (
          <SkillP
            key={skill}
            index={9 + Math.PI * Math.sin(i) * -3 * Math.cos(i / 2)}
          >
            {skill}
          </SkillP>
        ))}
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
