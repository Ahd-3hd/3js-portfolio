import { Container, Hero, Title, Paragraph } from "./index.style";

const Header = () => {
  return (
    <Container>
      <Hero>
        <Title>
          Hi, I'm <span>Ahd</span>
        </Title>
        <Paragraph>
          I am a passionate web
          <br />
          developer.
        </Paragraph>
      </Hero>
    </Container>
  );
};

export default Header;
