import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={isMobile ? 0.12 : 0.15} groundColor='black' />
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
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Handle mobile detection with better breakpoints
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const tabletQuery = window.matchMedia("(max-width: 1024px)");

    const handleMobileChange = (e) => {
      setIsMobile(e.matches);
    };
    const handleTabletChange = (e) => {
      setIsTablet(e.matches);
    };

    setIsMobile(mobileQuery.matches);
    setIsTablet(tabletQuery.matches);

    mobileQuery.addEventListener("change", handleMobileChange);
    tabletQuery.addEventListener("change", handleTabletChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      tabletQuery.removeEventListener("change", handleTabletChange);
    };
  }, []);

  // Determine optimal DPR based on device (with safe defaults)
  const getDPR = () => {
    if (isMobile) return 1;
    if (isTablet) return 1.2;
    return 1.5;
  };

  return (
    <Canvas
      frameloop='auto'
      shadows={!isMobile && !isTablet}
      dpr={getDPR()}
      camera={{ position: [20, 3, 5], fov: 25 }}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
      }}
      gl={{
        preserveDrawingBuffer: true,
        antialias: !isMobile,
        stencil: false,
        depth: true,
        alpha: true,
        powerPreference: isMobile ? "low-power" : "high-performance",
        failIfMajorPerformanceCaveat: false,
        logarithmicDepthBuffer: isMobile,
      }}
      onCreated={(state) => {
        try {
          // Ensure canvas fits properly
          if (state.gl.domElement) {
            state.gl.domElement.style.width = "100%";
            state.gl.domElement.style.height = "100%";
            state.gl.domElement.style.display = "block";
            state.gl.domElement.style.position = "absolute";
            state.gl.domElement.style.top = "0";
            state.gl.domElement.style.left = "0";
          }
        } catch (e) {
          console.error("Canvas setup error:", e);
        }
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
          enableRotate={!isMobile}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
