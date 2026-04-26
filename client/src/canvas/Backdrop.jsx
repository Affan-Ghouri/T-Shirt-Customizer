import React from 'react'

const Backdrop = () => {
  return (
    <mesh position={[0, 0, -0.5]} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="#ffffff" transparent opacity={0} />
    </mesh>
  )
}

export default Backdrop