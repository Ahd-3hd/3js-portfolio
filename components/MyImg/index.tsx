import { Suspense, useRef } from "react";
import { useLoader, extend } from "react-three-fiber";
import { TextureLoader } from "three";
import "./ImageShaderMaterial";

const MyImg = () => {
  const ref = useRef<any>();
  const [texture1, displacement] = useLoader(TextureLoader, [
    "/img/ahd.png",
    "/img/displacementimg.png",
  ]);
  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[60, 60]} />
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
