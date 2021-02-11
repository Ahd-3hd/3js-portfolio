import styled from "styled-components";

export const Container = styled.header`
  min-height: 100vh;
  display: flex;
  padding: 1rem;
  align-items: flex-end;
  @media (min-width: 1024px) {
    align-items: stretch;
  }
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Title = styled.h1`
  font-size: calc(32px + 3vw);
  color: #333333;
  margin: 0;
  > span {
    color: #10a1bd;
  }
`;
export const Paragraph = styled.p`
  font-size: calc(18px + 2vw);
  color: #333333;
  margin: 1rem 0;
  line-height: 160%;
  margin: 0;
`;
