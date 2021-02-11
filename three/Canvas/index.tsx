import { Canvas } from "react-three-fiber";
import { OrbitControls, Sky, Stars } from "@react-three/drei";
import Light from "../Light";
import { useRef, useCallback, Suspense } from "react";
import MyImg from "../MyImage";
import Particles from "../Particles";
import Fox from "../Fox";

const CanvasComponent = ({
  page,
  scrollY,
}: {
  page: number;
  scrollY: number;
}) => {
  const mouse = useRef<any>([0, 0]);
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  );

  return (
    <Canvas
      concurrent
      onMouseMove={onMouseMove}
      camera={{ fov: 60, position: [0, 0, 100] }}
      colorManagement
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      <Light />
      <Suspense fallback={null}>
        <MyImg mouse={mouse} page={page} scrollY={scrollY} />
        {/* <Fox page={page} /> */}
      </Suspense>
      <Particles mouse={mouse} page={page} />
    </Canvas>
  );
};

export default CanvasComponent;
