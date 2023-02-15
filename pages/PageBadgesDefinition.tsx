import React, { useState } from 'react'
import Link from 'next/link'
import { Canvas, useLoader } from '@react-three/fiber'
import Badge from '../components/Badge_list_turn_temp'
import { BasicShadowMap, Vector3 } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

function Scene({ isMouseDown, setIsMouseDown }: any) {
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
      <Badge
        setIsMouseDown={setIsMouseDown}
        isMouseDown={isMouseDown}
        initialPosition={new Vector3(0, 1, 0)}
        object={object}
        animated={true}
      />
    </>
  )
}

export default function PageBadgesDefinition() {
  const [isMouseDown, setIsMouseDown] = useState(false)

  return (
    <div className={'bg-Background min-h-screen pt-20'}>

      <Link className='relative z-0 select-all' href='/PageBadges'>
        <img
          src='/arrow.png'
          width={21}
          height={14}
          alt='logo'
          className='ml-6 z-50'
        />
      </Link>

        <div className='h-96  mb-10'>
            <div className='fixed z-40 h-screen w-screen touch-none'>
                <Canvas
                    onTouchEnd={() => setIsMouseDown(false)}
                    onPointerUp={() => setIsMouseDown(false)}
                    shadows={{ type: BasicShadowMap }}
                    camera={{ position: [0, 0, 6.5] }}
                >
                    <Scene isMouseDown={isMouseDown} setIsMouseDown={setIsMouseDown} />
                </Canvas>
            </div>
        </div>

      <div
        className={
          'select-none text-Text text-center text-red-600 text-2xl p-8 w-full SemiboldChill'
        }
      >
        Badges TEST
      </div>

      <p
        className={
          'select-none text-Text text-center text-orange-500 w-full text-sm font-light font-poppins'
        }
      >
        {' '}
        Ce badge correspond à ta filière.{' '}
      </p>
    </div>
  )
}
