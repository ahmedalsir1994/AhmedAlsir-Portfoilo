import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={isMobile ? 0.1 : 0.15} groundColor='black' />
      {!isMobile && (
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={512}
        />
      )}
      <pointLight intensity={isMobile ? 0.8 : 1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmall, setIsVerySmall] = useState(false);

  useEffect(() => {
    // Check if mobile and very small screen
    const mediaQueryMobile = window.matchMedia("(max-width: 500px)");
    const mediaQueryVerySmall = window.matchMedia("(max-width: 768px)");

    setIsMobile(mediaQueryMobile.matches);
    setIsVerySmall(mediaQueryVerySmall.matches);

    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
    };

    const handleVerySmallChange = (event) => {
      setIsVerySmall(event.matches);
    };

    mediaQueryMobile.addEventListener("change", handleMobileChange);
    mediaQueryVerySmall.addEventListener("change", handleVerySmallChange);

    return () => {
      mediaQueryMobile.removeEventListener("change", handleMobileChange);
      mediaQueryVerySmall.removeEventListener("change", handleVerySmallChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='auto'
      shadows={!isMobile}
      dpr={isMobile ? 1 : 1.5}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: isMobile ? false : true,
        stencil: false,
        depth: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      onCreated={(state) => {
        state.gl.outputColorSpace = "srgb";
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
