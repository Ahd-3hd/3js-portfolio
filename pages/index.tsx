import styles from "../styles/Home.module.scss";
import dynamic from "next/dynamic";
import Title from "../components/Title";

const Canvas = dynamic(import("../three/Canvas"), { ssr: false });

export default function Home() {
  return (
    <div className={styles.container}>
      <Canvas />
      <Title />
    </div>
  );
}
