import { useTexture } from "@react-three/drei";

function Stars() {
  const [stars] = useTexture(["/textures/starField_alpha.png"]);
  return (
    <mesh>
      <planeGeometry args={[15, 6.5]} position={[0, 0, -5]} />
      <meshBasicMaterial map={stars} />
    </mesh>
  )
}

export default Stars
