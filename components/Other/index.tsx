import { useSpring } from "react-spring";
import { Container, Title, SkillP, SkillsContainer } from "./index.style";

const Testing = ({ page }: { page: number }) => {
  const animation = useSpring({
    transform:
      page === 2 ? `translateY(0%) scale(1)` : `translateY(200%) scale(0)`,
  });
  return <Container style={animation}></Container>;
};

export default Testing;
