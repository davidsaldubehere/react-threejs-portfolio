import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Printer = () => {
  const computer = useGLTF("./printer/scene.gltf");

  return (
    <Float speed={1.75} rotationIntensity={.5} floatIntensity={.5}>
    <mesh>
      <hemisphereLight intensity={0.5} groundColor='black' />
      <spotLight
        position={[20, 3, 5]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={5} />
      <primitive
        object={computer.scene}
        scale={0.05}
        position={[0, -3.25, 0]}
        rotation={[0,1.3,0]}
      />
    </mesh>
  </Float>
  );
};

const PrinterCanvas = () => {

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
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Printer />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default PrinterCanvas;
