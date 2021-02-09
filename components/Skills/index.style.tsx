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
  pointer-events: none;
`;
export const SkillsContainer = styled.div`
  position: relative;
  border: 1px solid red;
  overflow: hidden;
`;
export const Title = styled.h2`
  font-size: 4vw;
  color: #333333;
  span {
    color: rgb(16, 161, 180);
  }
`;

export const SkillP = styled.p<{ position: number }>`
  font-size: 1.3rem;
  font-weight: bold;
  color: rgb(16, 161, 180);
  position: relative;
  top: ${({ position }) => -position / 7}%;
  left: ${({ position }) => position * 2}%;
`;
