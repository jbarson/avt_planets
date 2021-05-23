import React from 'react'
import { useFrame } from "@react-three/fiber";

import { useTexture } from "@react-three/drei";


function Planet() {
  const planet = React.useRef();
  const clouds = React.useRef()
  useFrame(({ clock }) => {
    planet.current.rotation.y = clock.getElapsedTime() / 20
    clouds.current.rotation.y= clock.getElapsedTime() / 200
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
    <mesh ref={planet} rotation={[0, 0, Math.PI / 5292]}>
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
  )
}

export default Planet
