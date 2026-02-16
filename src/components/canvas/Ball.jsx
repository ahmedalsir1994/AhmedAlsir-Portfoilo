import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  if (!decal) return null;

  const rotationIntensity = props.isMobile ? 0.3 : 1;
  const floatIntensity = props.isMobile ? 0.5 : 2;
  const speed = props.isMobile ? 0.8 : 1.75;

  return (
    <Float speed={speed} rotationIntensity={rotationIntensity} floatIntensity={floatIntensity}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, isMobile }) => {
  if (!icon) return null;
  
  return (
    <Canvas
      frameloop={isMobile ? 'demand' : 'demand'}
      dpr={isMobile ? [1, 1] : [1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: !isMobile,
        stencil: false,
        depth: true
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
