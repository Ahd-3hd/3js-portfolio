import styles from "../styles/Home.module.scss";
import dynamic from "next/dynamic";
import { useGesture } from "react-use-gesture";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Layout from "../components/Layout";

const Canvas = dynamic(import("../three/Canvas"), { ssr: false });

export default function Home() {
  const [page, setPage] = useState(0);
  const bind = useGesture({
    onWheel: (state) => {
      if (state.first && state.intentional) {
        state.direction[1] > 0
          ? setPage((prev) => prev + 1)
          : setPage((prev) => prev - 1);
        console.log(page);
      }
    },
  });
  return (
    <div className={styles.container} {...bind()}>
      <Layout>
        <Navbar />
        <Header />
      </Layout>
      <Canvas page={page} />
    </div>
  );
}
