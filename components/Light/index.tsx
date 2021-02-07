const Light = () => {
  return (
    <>
      <ambientLight color="white" intensity={0.2} />
      <spotLight intensity={0.2} position={[70, 70, 70]} penumbra={1} />
    </>
  );
};

export default Light;
