import React, { useState } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import Badge from '../components/Badge'
import { BasicShadowMap, Vector3, Object3D } from 'three'
import { OrthographicCamera, Stats } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

function Scene({ isMouseDown, badges }: any) {
  const badges3D: any = [
    // {
    //   "id": 0,
    //   "nom": "string",
    //   "description": "string",
    //   "linkImage": "string",
    //   "linkOBJ": "string",
    //   "linkMaterial": "string",
    //   "categorie": "string",
    //   "date": "string",
    //   "obtenu": true
    // }
  ]

  const [positionsX, setPositionsX] = useState([-10, -6, -2, 2, 6, 10])
  const [positionsY, setPositionsY] = useState([-10, -6, -2, 2, 6, 10])

  badges.forEach((badge: any) => {
    const materials: any = useLoader(MTLLoader, badge.linkMaterial)
    const object: any = useLoader(OBJLoader, badge.linkOBJ, (loader: any) => {
      materials.preload()
      loader.setMaterials(materials)
    })

    object.rotation.y = Math.PI / 2

    const newBadge = {
      ...badge,
      // object3D: object
      object3D: new Object3D().copy(object)
    }

    badges3D.push(newBadge)
  })

  // const spacing = 4
  // const xMin = -10
  // const xMax = 10
  // const yMin = -20
  // const yMax = 20

  // for (let x = xMin; x <= xMax; x += spacing) {
  //   for (let y = yMin; y <= yMax; y += spacing) {
  //     Badges.push(
  //       <Badge
  //         key={`position-x${x}-y${y}`}
  //         isMouseDown={isMouseDown}
  //         initialPosition={new Vector3(x, y, -40)}
  //         object={new Object3D().copy(object)}
  //       />
  //     )
  //   }
  // }

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
      <group>
        {badges3D.map((x: any, i: any) => {
          return (
            <>
              <Badge
                key={x.id}
                animated={false}
                data={x}
                initialPosition={new Vector3(i, i, -40)}
                object={x.object3D}
              />
            </>
          )
        })}
      </group>
    </>
  )
}

export default function BadgesList({ badges }: any) {
  const [isMouseDown, setIsMouseDown] = useState(false)
  return (
    <div
      className={`h-[${96 * Math.ceil(badges.length / 5)}px] w-full touch-none`}
    >
      <Canvas
        onTouchStart={() => setIsMouseDown(true)}
        onTouchEnd={() => setIsMouseDown(false)}
        onPointerDown={() => setIsMouseDown(true)}
        onPointerUp={() => setIsMouseDown(false)}
        shadows={{ type: BasicShadowMap }}
        camera={{ position: [0, 0, 5] }}
      >
        <OrthographicCamera position={[0, 0, 5]} />
        <Scene badges={badges} isMouseDown={isMouseDown} />
        <Stats />
      </Canvas>
    </div>
  )
}
