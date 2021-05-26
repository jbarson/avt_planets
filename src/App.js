import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Planet from "./Planet";
import Stars from "./Stars";

function App() {
  const [rotationVel, setRotationVel] = useState("slow");
  return (
    <div className="root">
      <div className="app">
        <Canvas>
          <Stars />
          <directionalLight position={[50, 0, 50]} color={"#ffffdd"} />
          <Planet rotation={rotationVel} />
        </Canvas>
      </div>
      <div className="rotation-speed">
        {/* 1/60th, 1/600, and 1/3600 (so 1 minute per hour, 1 second per 10
        minutes, and 1 second per hour) */}
        <ul>
          <li>
            <input
              type="radio"
              name="speed"
              defaultChecked={rotationVel === "slow"}
              onChange={() => setRotationVel("slow")}
            />
            <label htmlFor="slow">1:60</label>
          </li>
          <li>
            <input
              type="radio"
              name="speed"
              defaultChecked={rotationVel === "medium"}
              onClick={() => setRotationVel("medium")}
            />
            <label htmlFor="medium">1:600</label>
          </li>
          <li>
            <input
              type="radio"
              name="speed"
              defaultChecked={rotationVel === "fast"}
              onChange={() => setRotationVel("fast")}
            />
            <label htmlFor="fast">1:3600</label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
