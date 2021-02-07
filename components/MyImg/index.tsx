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
  const [texture1, displacement] = useLoader(TextureLoader, [
    "/img/ahd.png",
    "/img/displacementimg.png",
  ]);

  useFrame(() => {
    // ref.current.progress += mouse.current[0] / 9000;
    // ref.current.position.x = viewport.width;
    console.log(viewport.width);
  });
  return (
    <mesh position={[(viewport.width * 10) / 50, 0, 0]}>
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
