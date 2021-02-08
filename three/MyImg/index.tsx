import { useRef } from "react";
import { useLoader, useFrame, useThree } from "react-three-fiber";
import { TextureLoader } from "three";
import "./ImageShaderMaterial";
import { a } from "react-spring/three";
import { useGesture } from "react-use-gesture";
import { useState } from "react";

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
  const [timeFactor, setTimeFactor] = useState(0.1);
  const [hovered, setHovered] = useState(false);
  const aspect = size.width / viewport.width;
  console.log(aspect);
  const [texture1, displacement] = useLoader(TextureLoader, [
    "/img/ahd.png",
    "/img/displacementimg.png",
  ]);

  useFrame(() => {
    planeRef.current.rotation.x = mouse.current[1] * 0.0001;
    planeRef.current.rotation.y = mouse.current[0] * 0.0001;
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
      console.log(state);
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
    <a.mesh
      {...bind()}
      position={[(viewport.width / aspect) * 2, 0, 0]}
      ref={planeRef}
    >
      <planeBufferGeometry attach="geometry" args={[30, 30]} />
      {/** For some reason typescript doesnt recoginize imageFadeMaterial, but it does work i promise */}
      {/*@ts-ignore*/}
      <imageFadeMaterial
        ref={ref}
        attach="material"
        myimg={texture1}
        displacement={displacement}
        time={timeFactor}
      />
    </a.mesh>
  );
};

export default MyImg;
