import { useLoader } from "react-three-fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
useGLTF.preload("/models/scene.gltf");
const Phone = (): any => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/scene.gltf");
  console.log(group.current);
  return (
    <group ref={group} dispose={null}>
      <group rotation={[-Math.PI / 1.7, 0, 0]}>
        <group scale={[4, 4, 4]}>
          <group position={[0, 0, 0.63]} rotation={[0, 0, -0.63]}>
            <mesh
              material-color="red"
              material={materials.Head}
              geometry={nodes.Roundcube_0.geometry}
            />
            <mesh
              material={materials.Bill}
              geometry={nodes.Roundcube_1.geometry}
            />
            <mesh
              material={materials.material_3}
              geometry={nodes.Roundcube_2.geometry}
            />
            <mesh
              material={materials.pale_white}
              geometry={nodes.Roundcube_3.geometry}
            />
            <mesh
              material={materials.Bill2}
              geometry={nodes.Roundcube_4.geometry}
            />
          </group>
          {/* <group
            position={[-1.5, -1.6, 0.46]}
            rotation={[-0.14, -0.25, -0.5]}
            scale={[1, 1, 1]}
          >
            <mesh
              material={materials.Head}
              geometry={nodes.Frog_Body_0.geometry}
            />
            <mesh
              material={materials.material_3}
              geometry={nodes.Frog_Body_1.geometry}
            />
            <mesh
              material={materials.Viola}
              geometry={nodes.Frog_Body_2.geometry}
            />
            <mesh
              material={materials.Frog}
              geometry={nodes.Frog_Body_3.geometry}
            />
            <mesh
              material={materials.Frog_2}
              geometry={nodes.Frog_Body_4.geometry}
            />
            <mesh
              material={materials.material}
              geometry={nodes.Frog_Body_5.geometry}
            />
          </group> */}
          {/* <group
            position={[-1.8, -0.41, -4.58]}
            rotation={[-Math.PI / 2, 1.43, Math.PI / 2]}
          >
            <mesh
              material={materials.Leaf}
              geometry={nodes.Circle007_0.geometry}
            />
            <mesh
              material={materials.Leaf}
              geometry={nodes.Circle007_0_1.geometry}
            />
          </group> */}
          {/* <mesh material={materials.Water} geometry={nodes.Plane_0.geometry} /> */}
          {/* <group position={[0, 0, -2.03]} rotation={[0, 0, -Math.PI]}>
            <mesh
              material={materials.Water}
              geometry={nodes.Plane001_0.geometry}
            />
          </group> */}
          {/* <group position={[0, 0, -1.18]} rotation={[0, 0, -0.63]}>
            <mesh
              material={materials.Head}
              geometry={nodes.Roundcube001_0.geometry}
            />
            <mesh
              material={materials.Bill}
              geometry={nodes.Roundcube001_1.geometry}
            />
            <mesh
              material={materials.material_3}
              geometry={nodes.Roundcube001_2.geometry}
            />
            <mesh
              material={materials.pale_white}
              geometry={nodes.Roundcube001_3.geometry}
            />
            <mesh
              material={materials.Bill2}
              geometry={nodes.Roundcube001_4.geometry}
            />
          </group> */}
          {/* <group position={[-1.62, -1.66, 0.63]}>
            <mesh
              material={materials.material}
              geometry={nodes.Vert_0.geometry}
            />
          </group> */}
        </group>
      </group>
    </group>
  );
};
export default Phone;
