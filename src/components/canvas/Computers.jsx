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
  const canvasContainerRef = React.useRef(null);

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

  // Handle Chrome address bar resize on mobile
  useEffect(() => {
    if (!isMobile || typeof ResizeObserver === "undefined") return;

    const resizeObserver = new ResizeObserver(() => {
      // Trigger canvas resize through Three.js
    });

    const container = canvasContainerRef.current;
    if (container) {
      resizeObserver.observe(container);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [isMobile]);

  // Determine optimal DPR based on device (capped to prevent GPU overload)
  const getDPR = () => {
    // Cap DPR to prevent WebGL context loss on Chrome mobile
    const maxDPR = isMobile ? 1 : 1.3;
    const deviceDPR = window.devicePixelRatio || 1;
    return Math.min(deviceDPR, maxDPR);
  };

  return (
    <div ref={canvasContainerRef} style={{ width: "100%", height: "100%", position: "absolute" }}>
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
    </div>
  );
};

export default ComputersCanvas;
