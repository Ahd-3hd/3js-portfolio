import { useCallback, useEffect, useRef, useState } from "react";
import { useSpring } from "react-spring";
import { Container, Title, SkillP, SkillsContainer } from "./index.style";
import { useGesture } from "react-use-gesture";
import { useFrame } from "react-three-fiber";

const Skills = ({ page }: { page: number }) => {
  const [mouse, setMouse] = useState([0, 0]);
  const containerRef = useRef<any>();
  const animation = useSpring({
    transform:
      page === 1 ? `translateY(0%) scale(1)` : `translateY(200%) scale(0)`,
  });
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
    <Container style={animation} ref={containerRef}>
      <Title>
        Skills <span>&</span> Techs
      </Title>
      <SkillsContainer>
        {skills.map((skill, i) => (
          <SkillP
            key={skill}
            position={9 + Math.PI * Math.sin(i) * -3 * Math.cos(i / 2)}
            index={i}
          >
            {skill}
          </SkillP>
        ))}
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
