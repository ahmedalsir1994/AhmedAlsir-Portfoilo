import { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  
  const sphere = useMemo(() => {
    const arr = new Float32Array(3000); // Reduced from 5001 for better performance
    try {
      const positions = random.inSphere(arr, { radius: 1.2 });
      
      // Validate and sanitize all values
      for (let i = 0; i < positions.length; i++) {
        if (!Number.isFinite(positions[i]) || isNaN(positions[i])) {
          positions[i] = 0;
        }
      }
      return positions;
    } catch (error) {
      console.error('Error generating star positions:', error);
      // Return a safe default array
      return new Float32Array(3000).fill(0);
    }
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-full absolute inset-0 z-[-1]'>
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        dpr={1}
        gl={{
          antialias: false,
          stencil: false,
          alpha: true,
          depth: false,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
        }}
        style={{ width: "100%", height: "100%", display: "block" }}
        onCreated={(state) => {
          if (state.gl.domElement) {
            state.gl.domElement.style.width = "100%";
            state.gl.domElement.style.height = "100%";
            state.gl.domElement.style.display = "block";
          }
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
