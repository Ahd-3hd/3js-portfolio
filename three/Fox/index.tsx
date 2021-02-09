import { useLoader } from "react-three-fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";

useGLTF.preload("/models/Fox.gltf");
const Fox = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Fox.gltf");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions.Run.play();
  }, []);
  return (
    <>
      <spotLight intensity={0.3} position={[50, 40, 35]} />
      <group
        ref={group}
        {...props}
        dispose={null}
        rotation={[0, -Math.PI / 4, 0]}
        position={[-35, 0, -35]}
        scale={[0.3, 0.3, 0.3]}
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
