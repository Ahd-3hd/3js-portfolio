import { Canvas } from "react-three-fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import Particles from "../Particles";
import Light from "../Light";
import { useRef, useCallback } from "react";
const CanvasComponent = () => {
  const mouse = useRef<any>([0, 0]);
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  );

  return (
    <Canvas
      onMouseMove={onMouseMove}
      camera={{ fov: 90, position: [0, 0, 80] }}
      colorManagement={true}
    >
      <OrbitControls />
      <Light />
      <Particles mouse={mouse} />
    </Canvas>
  );
};

export default CanvasComponent;
