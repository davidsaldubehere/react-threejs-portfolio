import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./macbook_pro_2021/scene.gltf");

  return (
    <Float speed={1.75} rotationIntensity={.5} floatIntensity={.5}>
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={8}
        position={[0, -3, 0]}
        rotation={[0, 3, 0]}
      />
    </mesh>
  </Float>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
