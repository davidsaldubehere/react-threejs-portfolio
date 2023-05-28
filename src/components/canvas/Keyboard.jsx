import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Keyboard = () => {
  const keyboard = useGLTF("./keyboard/scene.gltf");

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={3}>
    <mesh>
      <hemisphereLight intensity={10} groundColor='black' />
      <spotLight
        position={[20, 0, 0]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />
    
      <primitive
        object={keyboard.scene}
        scale={0.3}
        position={[0, 0, 0]}
        rotation={[1.5,0,-1]}
      />
    </mesh>
  </Float>
  );
};

const KeyboardCanvas = () => {
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
        />
        <Keyboard/>
      </Suspense>

    </Canvas>
  );
};

export default KeyboardCanvas;
