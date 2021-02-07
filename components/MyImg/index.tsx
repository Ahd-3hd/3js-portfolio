import { useRef } from "react";
import { useLoader, useFrame, useThree } from "react-three-fiber";
import { TextureLoader } from "three";
import "./ImageShaderMaterial";
function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
}
const MyImg = ({
  mouse,
}: {
  mouse: {
    current: number[];
  };
}) => {
  const ref = useRef<any>();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  console.log(aspect);
  const [texture1, displacement] = useLoader(TextureLoader, [
    "/img/ahd.png",
    "/img/displacementimg.png",
  ]);

  useFrame(() => {});
  return (
    <mesh position={[(viewport.width / aspect) * 0.9, 0, 0]}>
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
