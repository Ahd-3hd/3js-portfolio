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
  transform-origin: top left;
`;
export const Title = styled.h2`
  font-size: calc(32px + 0.7vw);
  color: #333333;
  span {
    color: rgb(16, 161, 180);
  }
  font-weight: bolder;
`;

export const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Subtitle = styled.h3`
  font-size: 1.7rem;
  color: #333333;
  font-weight: 500;
  padding-bottom: 0.8rem;
  border-bottom: 3px solid #36d693;
`;

export const SubtitleSpan = styled.span`
  background: #10a1bd;
  color: ${({ invert }) => (invert ? "#ffffff" : "#333333")};
  padding: 0.5rem;
`;

export const Paragraph = styled.p`
  max-width: 60ch;
  line-height: 200%;
  color: #333333;
  font-size: 1.02rem;
`;
