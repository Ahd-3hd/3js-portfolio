import { Canvas, useFrame } from "react-three-fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import Particles from "../Particles";
import Light from "../Light";
import { useRef, useCallback, Suspense } from "react";
import styles from "../../styles/Home.module.scss";

const Camera = () => {
  const cameraRef = useRef<any>(0);
  useFrame(() => {});
  return (
    <PerspectiveCamera
      makeDefault
      fov={60}
      position={[0, 0, 80]}
      ref={cameraRef}
    />
  );
};

import MyImg from "../MyImg";
const CanvasComponent = ({ page }: { page: number }) => {
  const mouse = useRef<any>([0, 0]);
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  );

  return (
    <Canvas
      onMouseMove={onMouseMove}
      // camera={{ fov: 60, position: [0, 0, 80] }}
      colorManagement={true}
      className={styles.canvas}
    >
      <Camera />
      {/* <OrbitControls /> */}
      <Light />
      <Particles mouse={mouse} page={page} />
      <Suspense fallback={null}>
        <MyImg mouse={mouse} page={page} />
      </Suspense>
    </Canvas>
  );
};

export default CanvasComponent;
