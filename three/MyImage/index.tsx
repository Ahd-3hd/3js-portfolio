import { useRef } from "react";
import { useLoader, useFrame, useThree } from "react-three-fiber";
import { TextureLoader } from "three";
import "./ImageShaderMaterial";
import { useGesture } from "react-use-gesture";
import { useState } from "react";

const MyImg = ({
  mouse,
  page,
  scrollY,
}: {
  mouse: {
    current: number[];
  };
  page: number;
  scrollY: number;
}) => {
  const ref = useRef<any>();
  const planeRef = useRef<any>();
  const { size, viewport } = useThree();
  const [timeFactor, setTimeFactor] = useState(0.1);
  const [hovered, setHovered] = useState(false);
  const aspect = size.width / viewport.width;
  const [texture1, displacement] = useLoader(TextureLoader, [
    "/img/ahd.png",
    "/img/displacementimg.png",
  ]);

  useFrame(() => {
    // console.log(planeRef.current.position.y);
    // console.log(size.height);
    if (planeRef.current.position.y < viewport.height * page) {
      planeRef.current.position.y += 1;
    } else if (planeRef.current.position.y > viewport.height * page) {
      planeRef.current.position.y -= 1;
    }
    planeRef.current.rotation.x = mouse.current[1] * 0.0001;
    planeRef.current.rotation.y = mouse.current[0] * 0.0001;
    planeRef.current.position.y = scrollY * 0.2;
    ref.current.time += timeFactor;
    if (!hovered) {
      if (ref.current.progress < 1) {
        ref.current.progress += 0.1;
      }
    } else {
      if (ref.current.progress > 0) {
        ref.current.progress -= 0.1;
      }
    }
  });

  const bind = useGesture({
    onHover: (state) => {
      if (state.hovering) {
        setHovered(true);
        setTimeFactor(0);
      } else {
        setHovered(false);
        setTimeFactor(0.1);
      }
    },
  });
  return (
    <mesh
      {...bind()}
      position={[
        size.width > 1024 ? aspect * 5 : aspect * 0.001,
        aspect,
        size.width * 0.000001,
      ]}
      ref={planeRef}
    >
      <planeBufferGeometry
        attach="geometry"
        args={[
          size.width < 1024 ? size.width * 0.09 : aspect * 7,
          size.width < 1024 ? size.width * 0.09 : aspect * 7,
        ]}
      />
      {/** For some reason typescript doesnt recoginize imageFadeMaterial, but it does work i promise */}
      {/*@ts-ignore*/}
      <imageFadeMaterial
        ref={ref}
        attach="material"
        myimg={texture1}
        displacement={displacement}
        time={timeFactor}
      />
    </mesh>
  );
};

export default MyImg;
