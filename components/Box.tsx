import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box as NativeBox } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

export default function Box(props: any) {
  const materials = useLoader(MTLLoader, '/assets/three/badge/badge.mtl')
  const object = useLoader(OBJLoader, '/assets/three/badge/badge.obj', (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })
  console.log(object)

  useFrame(() => (object.rotation.x = object.rotation.y += 0.01))
  return <primitive object={object} />
}
