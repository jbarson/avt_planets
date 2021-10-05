import React from 'react'

function Controls({setRotationVel, rotationVel}) {
    return (
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
    )
}

export default Controls
