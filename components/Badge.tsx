import { useFrame, useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { Center, Text3D } from '@react-three/drei'
import { Euler, MeshPhongMaterial } from 'three'
import { useRef, useState } from 'react'
import { Motion, spring, PlainStyle } from 'react-motion'

export default function Badge({ isMouseDown, position }: any) {
  const materials = useLoader(MTLLoader, '/assets/three/badge/badge.mtl')
  const object = useLoader(OBJLoader, '/assets/three/badge/badge.obj', (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })
  object.rotation.y = Math.PI / 2

  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 })
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const [badgeIsTurned, setBadgeIsTurned] = useState(false)

  useFrame(({ pointer: { x, y } }) => {
    setPointer({ x, y })
  })

  const interpolate = (interpolated: PlainStyle) => new Euler(interpolated.x, interpolated.y, interpolated.z)

  const turnBadge = () => {
    setBadgeIsTurned(!badgeIsTurned)

    setRotation({ x: 0, y: rotation.y + Math.PI, z: 0 })
  }

  return (
    <Motion
      defaultStyle={rotation}
      style={
        isMouseDown
          ? { x: spring(-pointer.y + rotation.x), y: spring(pointer.x + rotation.y), z: spring(rotation.z + rotation.z) }
          : { x: spring(rotation.x), y: spring(rotation.y), z: spring(rotation.z) }
      }>
      {(interpolated) => (
        <group onDoubleClick={() => turnBadge()} position={position} rotation={interpolate(interpolated)}>
          <Center position={[0, 0, -0.275]}>
            <Text3D
              font={'/assets/three/montserrat.json'}
              size={0.2}
              height={0.01}
              bevelEnabled={true}
              bevelThickness={0.001}
              bevelSize={0.001}
              bevelOffset={0}
              bevelSegments={1}
              material={[
                new MeshPhongMaterial({ color: 0x000000 }), // front
                new MeshPhongMaterial({ color: 0x000000 }) // side
              ]}
              rotation-y={Math.PI}>
              {new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear()}
            </Text3D>
          </Center>
          <primitive object={object} />
        </group>
      )}
    </Motion>
  )
}
