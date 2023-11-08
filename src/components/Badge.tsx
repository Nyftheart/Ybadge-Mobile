import { useFrame, useLoader, Canvas } from '@react-three/fiber'
import { Center, Text3D } from '@react-three/drei'
import { useState } from 'react'
import { Euler, MeshPhongMaterial } from 'three'
import { Motion, spring, PlainStyle } from 'react-motion'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

export default function Badge({
  initialPosition,
  objectFolderPath,
  isLocked = false,
  badgeScale,
  displayText = true,
  badgeName = 'logo',
}: any) {
  const [isMouseDown, setIsMouseDown] = useState(false)

  return (
    <Canvas
      className={` ${isLocked ? 'locked-badge' : ''}`}
      onTouchEnd={() => setIsMouseDown(false)}
      onPointerUp={() => setIsMouseDown(false)}
      onTouchStart={() => setIsMouseDown(true)}
      onPointerDown={() => setIsMouseDown(true)}
      camera={{ position: [0, 0, 6.5] }}
    >
      <directionalLight
        color={[255, 255, 255]}
        intensity={0.01}
        position={[0, 0, 25]}
      />
      <BadgeModel
        isMouseDown={isMouseDown}
        initialPosition={initialPosition}
        objectFolderPath={objectFolderPath}
        badgeScale={badgeScale}
        displayText={displayText}
        badgeName={badgeName}
      />
    </Canvas>
  )
}

function BadgeModel({
  isMouseDown,
  initialPosition,
  objectFolderPath,
  badgeScale = 1,
  displayText,
  badgeName,
}: any) {
  const [position, setPosition] = useState(initialPosition)
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 })
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const [badgeIsTurned, setBadgeIsTurned] = useState(false)

  const materials = useLoader(
    MTLLoader,
    `${objectFolderPath}/${badgeName}/material.mtl`
  )
  const object = useLoader(
    OBJLoader,
    `${objectFolderPath}/${badgeName}/object.obj`,
    (loader: any) => {
      materials.preload()
      loader.setMaterials(materials)
    }
  )
  object.scale.set(2 * badgeScale, 2 * badgeScale, 2 * badgeScale)

  useFrame(({ pointer: { x, y } }) => {
    setPointer({ x: x, y: y })
  })

  const turnBadge = () => {
    setBadgeIsTurned(!badgeIsTurned)
    setRotation({ x: 0, y: rotation.y + Math.PI, z: 0 })
  }

  const interpolate = (interpolated: PlainStyle) =>
    new Euler(interpolated.x, interpolated.y, interpolated.z)

  return (
    <Motion
      defaultStyle={rotation}
      style={
        isMouseDown
          ? {
              x: spring(-pointer.y + rotation.x),
              y: spring(pointer.x + rotation.y),
              z: spring(rotation.z + rotation.z),
            }
          : {
              x: spring(rotation.x),
              y: spring(rotation.y),
              z: spring(rotation.z),
            }
      }
    >
      {(interpolated) => (
        <group
          onDoubleClick={() => turnBadge()}
          position={position}
          rotation={interpolate(interpolated)}
        >
          {displayText && (
            <group name="badge-date" position={[0, 0, -2]}>
              <mesh rotation={new Euler(0, Math.PI, 0)}>
                <planeBufferGeometry args={[3, 1]} />
                <meshBasicMaterial color="white" />
              </mesh>
              <Center matrixWorldAutoUpdate={false} getObjectsByProperty={null}>
                <Text3D
                  matrixWorldAutoUpdate={false}
                  getObjectsByProperty={null}
                  getVertexPosition={() => null}
                  font={'/assets/three/montserrat.json'}
                  size={0.3}
                  height={0.01}
                  bevelEnabled={true}
                  bevelThickness={0.001}
                  bevelSize={0.001}
                  bevelOffset={0}
                  bevelSegments={1}
                  material={new MeshPhongMaterial({ color: 0x000000 })}
                  rotation-y={Math.PI}
                >
                  {new Date().getDate() +
                    '-' +
                    (new Date().getMonth() + 1) +
                    '-' +
                    new Date().getFullYear()}
                </Text3D>
              </Center>
              <mesh position={[0, 0, 0.02]}>
                <planeBufferGeometry args={[3, 1]} />
                <meshBasicMaterial color="rgb(37,37,37)" />
              </mesh>
            </group>
          )}
          <primitive object={object} />
        </group>
      )}
    </Motion>
  )
}
