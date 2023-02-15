import React, { useState } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import Badge from '../components/Badge'
import { BasicShadowMap, Vector3, Object3D } from 'three'
import { Stats } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

function Scene({ isMouseDown }: any) {
  const materials = useLoader(MTLLoader, '/assets/three/badge/badge.mtl')
  const object = useLoader(
    OBJLoader,
    '/assets/three/badge/badge.obj',
    (loader: any) => {
      materials.preload()
      loader.setMaterials(materials)
    }
  )
  object.rotation.y = Math.PI / 2

  const Badges = []

  const spacing = 4
  const xMin = -10
  const xMax = 10
  const yMin = -20
  const yMax = 20

  for (let x = xMin; x <= xMax; x += spacing) {
    for (let y = yMin; y <= yMax; y += spacing) {
      Badges.push(
        <Badge
          key={`position-x${x}-y${y}`}
          isMouseDown={isMouseDown}
          initialPosition={new Vector3(x, y, -40)}
          object={new Object3D().copy(object)}
        />
      )
    }
  }

  return (
    <>
      <directionalLight
        color={[255, 255, 255]}
        intensity={0.01}
        position={[-10, 20, 25]}
      />
      <hemisphereLight
        color={0xffffff}
        groundColor={0x000000}
        position={[0, 20, 0]}
      />
      <group>{Badges}</group>
    </>
  )
}

export default function PageThree() {
  const [isMouseDown, setIsMouseDown] = useState(false)
  return (
    <div className='h-screen w-screen touch-none'>
      <Canvas
        onTouchStart={() => setIsMouseDown(true)}
        onTouchEnd={() => setIsMouseDown(false)}
        onPointerDown={() => setIsMouseDown(true)}
        onPointerUp={() => setIsMouseDown(false)}
        shadows={{ type: BasicShadowMap }}
        camera={{ position: [0, 0, 5] }}
      >
        <Scene isMouseDown={isMouseDown} />
        <Stats />
      </Canvas>
    </div>
  )
}
