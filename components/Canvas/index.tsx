import { Canvas } from "react-three-fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import Particles from "../Particles";
import Light from "../Light";
const CanvasComponent = () => {
  return (
    <Canvas camera={{ fov: 90, position: [0, 0, 80] }} colorManagement={true}>
      <OrbitControls />
      <Light />
      <Particles />
    </Canvas>
  );
};

export default CanvasComponent;
