import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Planet from "./Planet";
import Stars from "./Stars"

function App() {
  return (
    <div className="root">
      <div className="app">
        <Canvas>
          <Stars />
          <directionalLight position={[50, 0, 50]} color={"#ffffdd"} />
          <Planet />
        </Canvas>
        
      </div>
      {/* <div className="rotation-speed">
          <h2>Planetary Rotation Rate</h2>
        </div> */}
    </div>
  );
}

export default App;

