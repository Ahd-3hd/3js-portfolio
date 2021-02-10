import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 3vw;
  /* pointer-events: none; */
  transform-origin: top left;
`;
export const Title = styled.h2`
  font-size: calc(32px + 0.7vw);
  color: #333333;
  span {
    color: rgb(16, 161, 180);
  }
`;
export const SkillsContainer = styled.div`
  overflow: hidden;
`;

export const SkillP = styled.p<{ position: number }>`
  margin: 0.5rem 0;
  width: 200px;
  font-size: calc(16px + 0.7vw);
  font-weight: bold;
  color: rgb(16, 161, 180);
  position: relative;
  transform: scale(${({ index }) => 0.45 + Math.abs(Math.cos(index))});
  top: ${({ position }) => -position / 7}%;
  left: ${({ position }) => position * 2.5}%;
  /* border: 2px solid red; */
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    transform: scale(1.5);
  }
`;
