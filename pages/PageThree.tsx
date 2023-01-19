import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import Box from '../components/Box'
import { OrbitControls } from '@react-three/drei'

export default function PageThree() {
  // METTRE TEXTE

  const shadowCamera = {
    top: 2,
    bottom: -2,
    left: -2,
    right: 2,
    near: 0.1,
    far: 40
  }
  return (
    <>
      <h1>Click on me - Hover me :)</h1>
      <div className='h-screen w-screen'>
        <Canvas camera={{ position: [0, 0, 35] }}>
          <color attach='background' args={['#DDDDDD']} />

          <hemisphereLight
            color={'0xffffff'}
            groundColor={'0x444444'}
            position={[0, 20, 0]}
          />
          <ambientLight color={'0x000000'} />
          <directionalLight
            color={'0xffddcc'}
            intensity={5}
            position={[-1, 0.75, 0.5]}
          />
          <directionalLight
            color={'0xccccff'}
            intensity={5}
            position={[1, 0.75, -0.5]}
          />
          <directionalLight
            color={'0xffffff'}
            position={[-3, 10, -10]}
            castShadow={true}
            shadow={shadowCamera}
          />
          <Box position={[10, 0, 0]} />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  )
}
