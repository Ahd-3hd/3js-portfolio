import { useMemo, useRef } from "react";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
const Particles = ({
  mouse,
}: {
  mouse: {
    current: number[];
  };
}) => {
  const mesh = useRef<any>();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 500; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, []);

  useFrame(() => {
    const mouseX = mouse.current[0] / aspect;
    const mouseY = -mouse.current[1] / aspect;
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 10;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      particle.mx += particle.mx * 0.01;
      particle.my += particle.my * 0.01;
      dummy.position.set(
        (particle.mx / 10) * a +
          xFactor +
          Math.cos((t / 10) * factor) +
          mouseX * speed +
          (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b +
          yFactor +
          Math.sin((t / 10) * factor) +
          mouseY * speed +
          (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b +
          zFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      // dummy.position.set(
      //   (dummy.position.x + mouseX) * factor,
      //   (dummy.position.y + mouseY) * factor,
      //   0
      // );
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <>
      <instancedMesh ref={mesh} args={[null, null, 500]}>
        <dodecahedronBufferGeometry args={[0.15, 0]} />
        <meshPhongMaterial color="#050505" />
      </instancedMesh>
    </>
  );
};

export default Particles;
