import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Planet from "./components/Planet";
import Stars from "./components/Stars";
import Controls from "./components/Controls";

function App() {
  const [rotationVel, setRotationVel] = useState("slow");
  return (
    <div className="root">
      <div className="app">
        <Canvas>
          <Stars />
          <directionalLight position={[50, 0, 50]} color={"#ffffdd"} intensity="0.7"/>
          <Planet rotation={rotationVel} />
        </Canvas>
      </div>
      <Controls setRotationVel={setRotationVel} rotationVel={rotationVel} />
    </div>
  );
}

export default App;
