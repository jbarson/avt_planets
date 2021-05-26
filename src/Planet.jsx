import React from 'react'
import { useFrame } from "@react-three/fiber";

import { useTexture } from "@react-three/drei";


function Planet({ rotation }) {
  const planet = React.useRef();
  const clouds = React.useRef()
  const ALTIPLANODAY = 98291 //seconds in a day
  const timeCompression = {
    slow: 60,
    medium: 600,
    fast: 3600,
  }
  useFrame(({ clock }) => {
    planet.current.rotation.y = (clock.getElapsedTime() * 2 * Math.PI / ALTIPLANODAY * timeCompression[rotation]) % 2*Math.PI
    // planet.current.rotation.y += clock.getDelta() * 2 * Math.PI / ALTIPLANODAY * timeCompression[rotation]
    // setcurrentRotation((clock.getElapsedTime() * 2 * Math.PI  * timeCompression[rotation])/ ALTIPLANODAY)
    // planet.current.rotation.y = currentRotation
    // clouds.current.rotation.y= clock.getElapsedTime() / 200
  })

  
  const [
    planetMap, 
    specularMap, 
    occlusionMap,
    cloudMap
  ] = useTexture([
    "/textures/Map_Altiplano2.jpg",
    "/textures/specular-altiplano.png",
    "/textures/AmbientOcclusionMap.png",
    "textures/clouds-trans.png",
  ]);
  return (
    <mesh rotation={[0, 0, Math.PI / 6.12]}>
    <mesh ref={planet} >
      <sphereBufferGeometry args={[2, 32, 32]} />
      <meshPhongMaterial
        map={planetMap}
        displacementScale={0.002}
        displacementMap={occlusionMap}
        aoMap={specularMap}
      />
      <mesh ref={clouds}>
        <sphereBufferGeometry args={[2.01, 32, 32]} />
        <meshPhongMaterial
            map={cloudMap}
            transparent
            depthWrite
            opacity="0.8"
          />
      </mesh>
      </mesh>
      </mesh>
  )
}

export default Planet
