import React, { Suspense } from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useEffect, useState } from 'react';

import state from '../store';

const MODEL_URL = '/T-Shirt-Customizer/shirt_baked.glb';
const TEXTURE_URL = '/T-Shirt-Customizer/threejs.png';

function Shirt() {
  const snap = useSnapshot(state);
  const [modelLoaded, setModelLoaded] = useState(false);
  
  const { nodes, materials } = useGLTF(MODEL_URL, () => setModelLoaded(true));
  const logoTexture = useTexture(TEXTURE_URL);
  const fullTexture = useTexture(TEXTURE_URL);

  useFrame((state, delta) => {
    if (materials.lambert1) {
      easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
    }
  });

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && fullTexture && (
          <Decal 
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && logoTexture && (
          <Decal 
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  )
}

export default function ShirtWrapper() {
  return (
    <Suspense fallback={null}>
      <Shirt />
    </Suspense>
  )
}