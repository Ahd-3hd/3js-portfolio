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
  useEffect(() => {
    actions.Survey.play();
    console.log(animations);
  }, []);
  useFrame(() => {
    if (page === 1) {
      actions.Survey.play();
      actions.Walk.play();
      actions.Run.stop();
      if (group.current.position.x < 0.5 * (viewport.width / aspect) * 6)
        group.current.position.x += 1;
      if (group.current.rotation.y < -0.6) group.current.rotation.y += 0.01;
      // if (group.current.position.z < 0) group.current.position.z += 1;
      // if (group.current.position.x >= (viewport.width / aspect) * 3) {
      // }
      if (group.current.position.y > viewport.height / aspect / -1) {
        group.current.position.y -= 0.9;
      }

      // if (group.current.rotation.y < 20) group.current.position.x += 0.5;
      // if (group.current.position.x > 1) group.current.position.x -= 1;
    }
    if (page === 2) {
      actions.Survey.stop();
      actions.Walk.stop();
      actions.Run.play();
      if (group.current.scale.x < 0.7) {
        group.current.scale.x += 0.01;
        group.current.scale.y += 0.01;
        group.current.scale.z += 0.01;
        group.current.position.y -= 0.3;
      }
    }
  });
  return (
    <>
      <spotLight intensity={0.3} position={[0, 0, 35]} />
      <group
        ref={group}
        dispose={null}
        rotation={[0, -Math.PI / 4, 0]}
        position={[
          (viewport.width / aspect) * -2,
          (viewport.height / aspect) * 0.2,
          -35,
        ]}
        scale={[
          (viewport.width / aspect) * 0.02,
          (viewport.width / aspect) * 0.02,
          (viewport.width / aspect) * 0.02,
        ]}
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
