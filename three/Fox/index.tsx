import { useFrame, useThree } from "react-three-fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";

useGLTF.preload("/models/Fox.gltf");
const Fox = ({ page }) => {
  const group = useRef<any>();
  const { nodes, materials, animations } = useGLTF("/models/Fox.gltf");
  const { actions } = useAnimations(animations, group);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  useEffect(() => {}, []);

  return (
    <>
      <spotLight intensity={0.3} position={[0, 0, 35]} />
      <group
        ref={group}
        dispose={null}
        rotation={[0, -Math.PI / 4, 0]}
        position={[0, -aspect * 6, 0]}
        scale={[aspect * 0.05, aspect * 0.05, aspect * 0.05]}
      >
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          material={materials.fox_material}
          // @ts-ignore
          geometry={nodes.fox.geometry}
          // @ts-ignore
          skeleton={nodes.fox.skeleton}
        />
      </group>
    </>
  );
};
export default Fox;
