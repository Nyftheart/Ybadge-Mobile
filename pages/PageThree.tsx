import React, { useState } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import Badge from '../components/Badge'
import { BasicShadowMap, Vector3 } from 'three'
import { Stats } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
function Scene({ isMouseDown }: any) {
  const materials = useLoader(MTLLoader, '/assets/three/badge/badge.mtl')
  const object = useLoader(OBJLoader, '/assets/three/badge/badge.obj', (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })
  object.rotation.y = Math.PI / 2

  return (
    <>
      <color attach="background" args={['#FFFFFF']} />
      <ambientLight color={[0, 0, 0]} />
      <directionalLight color={[0, 0, 0]} intensity={0.015} position={[0, 0, 20]} />
      <directionalLight color={[255, 255, 255]} intensity={0.01} position={[-10, 20, 25]} />
      <hemisphereLight color={0xffffff} groundColor={0x000000} position={[0, 20, 0]} />
      <group>
        <Badge isMouseDown={isMouseDown} position={new Vector3(0, 0, 0)} object={object.clone()} />
      </group>
    </>
  )
}

export default function PageThree() {
  const [isMouseDown, setIsMouseDown] = useState(false)
  return (
    <div className="h-screen w-screen touch-none">
      <Canvas
        onTouchStart={() => setIsMouseDown(true)}
        onTouchEnd={() => setIsMouseDown(false)}
        onPointerDown={() => setIsMouseDown(true)}
        onPointerUp={() => setIsMouseDown(false)}
        shadows={{ type: BasicShadowMap }}
        camera={{ position: [0, 0, 5] }}>
        <Scene isMouseDown={isMouseDown} />
        <Stats />
      </Canvas>
    </div>
  )
}
