import { Html } from "@react-three/drei";

const CanvasLoader = () => {
  return (
    <Html center>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span className='canvas-loader' />
        <p
          style={{
            fontSize: 14,
            color: "#F1F1F1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          Loading...
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
