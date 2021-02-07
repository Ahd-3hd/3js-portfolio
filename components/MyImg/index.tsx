import { useRef } from "react";
import { useLoader, useFrame, useThree } from "react-three-fiber";
import { TextureLoader } from "three";
import "./ImageShaderMaterial";
import * as THREE from "three";

const MyImg = ({
  mouse,
}: {
  mouse: {
    current: number[];
  };
}) => {
  const ref = useRef<any>();
  const planeRef = useRef<any>();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  console.log(aspect);
  const [texture1, displacement] = useLoader(TextureLoader, [
    "/img/ahd.png",
    "/img/displacementimg.png",
  ]);

  useFrame(() => {
    planeRef.current.rotation.x = mouse.current[0] * -0.0001;
    planeRef.current.rotation.y = mouse.current[1] * -0.0001;
  });
  return (
    <mesh position={[(viewport.width / aspect) * 2, 0, 0]} ref={planeRef}>
      <planeBufferGeometry attach="geometry" args={[30, 30]} />
      {/** For some reason typescript doesnt recoginize imageFadeMaterial, but it does work i promise */}
      {/*@ts-ignore*/}
      <imageFadeMaterial
        ref={ref}
        attach="material"
        myimg={texture1}
        displacement={displacement}
      />
    </mesh>
  );
};

export default MyImg;
