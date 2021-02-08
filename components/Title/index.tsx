import styles from "./index.module.scss";
import { animated, useSpring } from "react-spring";

const Title = ({ page }: { page: number }) => {
  const animation = useSpring({
    transform: `translateY(${page * 100}%)`,
  });
  return (
    <animated.div className={styles.container} style={animation}>
      <h1>
        Hi!
        <br />
        My Name is <span>Ahd</span>
      </h1>
    </animated.div>
  );
};

export default Title;
