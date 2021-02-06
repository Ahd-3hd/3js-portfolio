import { Canvas } from "react-three-fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Particles from "../Particles";
const CanvasComponent = () => {
  return (
    <Canvas>
      <PerspectiveCamera />
      <Particles />
    </Canvas>
  );
};

export default CanvasComponent;
