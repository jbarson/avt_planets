import React from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import "./App.css";
import Planet from "./Planet";

function App() {
  const [stars] = useTexture(["/textures/starField_alpha.png"]);
  return (
    <div className="app">
      <Canvas>
        <mesh>
          <planeGeometry args={[15, 6.5]} position={[0, 0, -5]} />
          <meshBasicMaterial map={stars} />
        </mesh>
        <directionalLight position={[50, 0, 50]} color={"#ffffdd"} />
        <Planet />
      </Canvas>
    </div>
  );
}

export default App;
