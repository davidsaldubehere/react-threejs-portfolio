import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Headphones = () => {
  const headphones = useGLTF("./headphones/scene.gltf");

  return (
    <Float speed={1.75} rotationIntensity={2} floatIntensity={3}>
    <mesh>
      <hemisphereLight intensity={3} groundColor='black' />
      <spotLight
        position={[0, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={5} />
      <primitive
        object={headphones.scene}
        scale={0.007}
        position={[0, -2, 0]}
        rotation={[0,1.3,0]}
      />
    </mesh>
  </Float>
  );
};

const HeadphoneCanvas = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Headphones/>
      </Suspense>

    </Canvas>
  );
};

export default HeadphoneCanvas;
