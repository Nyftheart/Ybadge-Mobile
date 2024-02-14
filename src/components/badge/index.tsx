import { useFrame, Canvas, useLoader } from '@react-three/fiber'
import { Center, Text3D, useGLTF } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { Euler, MeshPhongMaterial, Vector3 } from 'three'
import { Motion, spring, PlainStyle } from 'react-motion'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export type BadgeProps = {
  initialPosition?: Vector3
  isLocked?: boolean
  badgeScale?: number
  displayText?: boolean
  badgeName?: string
  isUnlocking?: boolean
}

export default function Badge({
  initialPosition = new Vector3(0, -5, -10),
  isLocked = false,
  badgeScale = 1,
  displayText = true,
  badgeName = 'logo',
  isUnlocking = false,
}: BadgeProps) {
  const [isMouseDown, setIsMouseDown] = useState(false)

  return (
    <Canvas
      className={` ${isLocked ? 'locked-badge' : ''}`}
      onTouchEnd={() => setIsMouseDown(false)}
      onPointerUp={() => setIsMouseDown(false)}
      onTouchStart={() => setIsMouseDown(true)}
      onPointerDown={() => setIsMouseDown(true)}
      camera={{ position: new Vector3(0, 2, 6.5) }}
    >
      <directionalLight
        color={[255, 255, 255]}
        intensity={0.005}
        position={[0, -50, 30]}
      />
      <directionalLight
        color={[150, 150, 150]}
        intensity={0.0005}
        position={[0, 50, 30]}
      />
      <BadgeModel
        isMouseDown={isMouseDown}
        initialPosition={initialPosition}
        badgeScale={badgeScale}
        displayText={displayText}
        badgeName={badgeName}
        isUnlocking={isUnlocking}
      />
    </Canvas>
  )
}

function BadgeModel({
  isMouseDown,
  initialPosition,
  badgeScale,
  displayText,
  badgeName,
  isUnlocking,
}: BadgeProps & { isMouseDown: boolean }) {
  const [position, setPosition] = useState(initialPosition)
  const [rotation, setRotation] = useState(
    isUnlocking ? { x: -Math.PI, y: Math.PI * 2, z: 0 } : { x: 0, y: 0, z: 0 }
  )
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const [badgeIsTurned, setBadgeIsTurned] = useState(false)
  const [unlocking, setUnlocking] = useState(isUnlocking)
  const [i, setI] = useState(0)
  const [motionStyle, setMotionStyle] = useState({
    x: spring(0),
    y: spring(0),
    z: spring(0),
  })

  /** MTL + OBJ */
  const materials = useLoader(
    MTLLoader,
    `/assets/three/badges/${badgeName}/material.mtl`
  )
  const object = useLoader(
    OBJLoader,
    `/assets/three/badges/${badgeName}/object.obj`,
    (loader: any) => {
      materials.preload()
      loader.setMaterials(materials)
    }
  )

  /** GLTF */
  // const object = useLoader(
  //   GLTFLoader,
  //   `/assets/three/badges/halloween/badge.gltf`,
  //   (loader: any) => {
  //     console.log(loader)
  //   }
  // )

  /** GLB */
  // const object = useGLTF(`/assets/three/badges/halloween/test.glb`)

  /** Scale for GLB */
  // object.scene.scale.set(0.8, 0.8, 0.8)

  /** Scale for OBJ + MTL */
  object.scale.set(badgeScale, badgeScale, badgeScale)

  useFrame(({ pointer: { x, y } }) => {
    if (unlocking) return updatePosition()
    setPointer({ x: x, y: y })
  })

  const startY = -25
  const startZ = -20
  const totalIterations = 120
  const updatePosition = () => {
    setI(i + 1)
    const progress = Math.min(i / totalIterations, Math.PI / 2)
    const interpolatedY =
      startY + (initialPosition.y - startY) * Math.sin(progress)
    const interpolatedZ =
      startZ + (initialPosition.z - startZ) * Math.sin(progress)

    setPosition(new Vector3(position.x, interpolatedY, interpolatedZ))

    if (progress === Math.PI / 2) {
      setUnlocking(false)
      setRotation({ x: 0, y: 0, z: 0 })
      setI(0)
    }
  }

  useEffect(() => {
    if (unlocking) return

    if (isMouseDown) {
      setMotionStyle({
        x: spring(-pointer.y + rotation.x),
        y: spring(pointer.x + rotation.y),
        z: spring(rotation.z + rotation.z),
      })
    } else {
      setMotionStyle({
        x: spring(rotation.x),
        y: spring(rotation.y),
        z: spring(rotation.z),
      })
    }
  }, [isMouseDown, pointer])

  useEffect(() => {
    setMotionStyle({ x: spring(0), y: spring(0), z: spring(0) })
  }, [unlocking])

  const handleUnlockBadge = () => {
    setUnlocking(true)
    setMotionStyle({
      x: spring(0, { damping: 100, stiffness: 100 }),
      y: spring(0, { damping: 75, stiffness: 100 }),
      z: spring(0),
    })
    setPosition(new Vector3(position.x, position.y, position.z))
  }

  useEffect(() => {
    handleUnlockBadge()
  }, [])

  const turnBadge = () => {
    setBadgeIsTurned(!badgeIsTurned)
    setRotation({ x: 0, y: rotation.y + Math.PI, z: 0 })
  }

  const interpolate = (interpolated: PlainStyle) =>
    new Euler(interpolated.x, interpolated.y, interpolated.z)

  return (
    <Motion defaultStyle={rotation} style={motionStyle}>
      {(interpolated) => (
        <group
          onDoubleClick={() => turnBadge()}
          position={position}
          rotation={interpolate(interpolated)}
        >
          {displayText && !isUnlocking && (
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
