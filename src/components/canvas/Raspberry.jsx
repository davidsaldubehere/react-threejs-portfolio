import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Raspberry = () => {
  const raspberry = useGLTF("./raspberry/scene.gltf");

  return (
    <Float speed={1.75} rotationIntensity={2} floatIntensity={3}>
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />

      <primitive
        object={raspberry.scene}
        scale={0.07}
        position={[-2, 0, 0]}
        rotation={[0,1.3,2]}
      />
    </mesh>
  </Float>
  );
};

const RaspberryCanvas = () => {
  return (
    <Canvas
    style={{maxWidth: '90%'}}
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Raspberry/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RaspberryCanvas;
