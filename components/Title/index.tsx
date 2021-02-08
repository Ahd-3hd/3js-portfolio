import styles from "./index.module.scss";
import { animated, useSpring, config } from "react-spring";
import { useState, useEffect } from "react";

const Title = ({ page }: { page: number }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1600);
  }, []);

  const animation = useSpring({
    transform: show ? "translate(10%, 0%)" : "translate(10%, 500%)",
    opacity: show ? 1 : 0,
    config: { ...config.wobbly, friction: 20, tension: 50 },
  });
  return (
    <div className={styles.container}>
      <animated.h1 style={animation}>
        Hi!
        <br />
        My Name is <span>Ahd</span>
      </animated.h1>
    </div>
  );
};

export default Title;
