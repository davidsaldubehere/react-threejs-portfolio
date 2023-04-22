import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Printer = ({isMobile}) => {
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
        scale={isMobile ? .1: .05}
        position={[0, -3.25, 0]}
        rotation={[0,1.3,0]}
      />
    </mesh>
  </Float>
  );
};

const PrinterCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    
    <Canvas
      style={isMobile ? {maxHeight: "300px", position: "absolute", bottom: "20%"}: {}}
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
        <Printer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default PrinterCanvas;
