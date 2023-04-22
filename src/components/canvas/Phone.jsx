import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Phone = () => {
  const phone = useGLTF("./iphone_12_pro/scene.gltf");

  return (
    <Float speed={1.75} rotationIntensity={2} floatIntensity={3}>
    <mesh>
      <hemisphereLight intensity={10} groundColor='black' />
      <spotLight
        position={[20, 0, 10]}
        angle={0.12}
        penumbra={1}
        intensity={6}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={phone.scene}
        scale={0.07}
        position={[0, -4, 0]}
        rotation={[0,.7,0]}
      />
    </mesh>
  </Float>
  );
};

const PhoneCanvas = () => {
  return (
    <Canvas
        style={{maxWidth: '90%'}}
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Phone/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default PhoneCanvas;
