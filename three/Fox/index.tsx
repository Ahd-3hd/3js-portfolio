import { useLoader } from "react-three-fiber";
import { useGLTF, OrbitControls, useAnimations } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
useGLTF.preload("/models/Fox.gltf");
const Fox = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Fox.gltf");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions.Run.play();
  }, []);
  return (
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
        geometry={nodes.fox.geometry}
        skeleton={nodes.fox.skeleton}
      />
    </group>
  );
};
export default Fox;
