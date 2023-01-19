import React, { useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import Badge from '../components/Badge'
import { BasicShadowMap, Vector3 } from 'three'
import { Stats } from '@react-three/drei'

function Scene({ isMouseDown }: any) {
  return (
    <>
      <color attach="background" args={['#000000']} />
      <ambientLight color={[0, 0, 0]} />
      <directionalLight color={[0, 0, 0]} intensity={0.015} position={[0, 0, 20]} />
      <directionalLight color={[255, 255, 255]} intensity={0.01} position={[-10, 20, 25]} />
      <hemisphereLight color={0xffffff} groundColor={0x000000} position={[0, 20, 0]} />
      <Badge isMouseDown={isMouseDown} position={new Vector3(0, 0, 0)} />
    </>
  )
}

export default function PageThree() {
  const [isMouseDown, setIsMouseDown] = useState(false)
  return (
    <div className="h-screen w-screen">
      <Canvas
        onTouchStart={() => setIsMouseDown(true)}
        onTouchEnd={() => setIsMouseDown(false)}
        onPointerDown={() => setIsMouseDown(true)}
        onPointerUp={() => setIsMouseDown(false)}
        shadows={{ type: BasicShadowMap }}
        camera={{ position: [0, 0, 10] }}>
        <Scene isMouseDown={isMouseDown} />
        <Stats />
      </Canvas>
    </div>
  )
}
