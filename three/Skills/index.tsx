import { Html } from "@react-three/drei";
import { useFrame, useThree } from "react-three-fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import styled from "styled-components";

const Par = styled.p`
  font-size: calc(13px + 1vw);
  font-weight: bold;
  color: #10a1bd;
  min-width: 150px;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
  transition: color 0.3s ease-in;
  cursor: pointer;
  :hover {
    color: #333333;
  }
`;

function Singleskill({ text, ...props }) {
  return (
    <mesh {...props}>
      <Html center scaleFactor={100}>
        <Par>{text}</Par>
      </Html>
    </mesh>
  );
}

const Skills = ({ scrollY }: { scrollY: number }) => {
  const ref = useRef<any>();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const scale = 0.4;

  useFrame(() => {
    ref.current.rotation.x += 0.002;
    ref.current.position.y =
      size.height > 700
        ? size.height * 0.2 - scrollY * 0.2
        : size.height / aspect - scrollY * 0.2;
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
    "Redux",
  ];

  return (
    <mesh
      ref={ref}
      position={[size.width > 1024 ? 45 : 5, size.height * 2, 0]}
      scale={[scale, scale, scale]}
    >
      {skills.map((s, i) => (
        <Singleskill
          text={s}
          key={s}
          position={[Math.sin(i + 1) * 50, Math.cos(i + 1) * 50, i * i * 0.3]}
        />
      ))}
    </mesh>
  );
};

export default Skills;
