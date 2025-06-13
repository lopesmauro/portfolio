import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Float } from "@react-three/drei"

// Cubo simples e elegante
function MinimalCube({ position }) {
  const meshRef = useRef(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={1} position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.1} wireframe />
      </mesh>
    </Float>
  )
}

// Diamante lapidado (icosaedro)
function Diamond({ position }) {
  const diamondRef = useRef(null)

  useFrame((state) => {
    if (diamondRef.current) {
      diamondRef.current.rotation.y = state.clock.elapsedTime * 0.2
      diamondRef.current.rotation.x = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.8} position={position}>
      <mesh ref={diamondRef}>
        <icosahedronGeometry args={[0.75, 0]} />
        <meshStandardMaterial color="#9ca3af" transparent opacity={0.1} wireframe />
      </mesh>
    </Float>
  )
}

// Pirâmide minimalista
function MinimalPyramid({ position }) {
  const pyramidRef = useRef(null)

  useFrame((state) => {
    if (pyramidRef.current) {
      pyramidRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.1} floatIntensity={1.2} position={position}>
      <mesh ref={pyramidRef}>
        <coneGeometry args={[0.6, 1.0, 4]} />
        <meshStandardMaterial color="#9ca3af" transparent opacity={0.1} wireframe />
      </mesh>
    </Float>
  )
}

// Octaedro wireframe
function WireframeOctahedron({ position }) {
  return (
    <Float speed={0.9} rotationIntensity={0.3} floatIntensity={0.9} position={position}>
      <mesh>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial color="#d1d5db" transparent opacity={0.1} wireframe />
      </mesh>
    </Float>
  )
}

// Tetraedro pequeno
function SmallTetrahedron({ position }) {
  const tetraRef = useRef(null)

  useFrame((state) => {
    if (tetraRef.current) {
      tetraRef.current.rotation.x = state.clock.elapsedTime * 0.25
      tetraRef.current.rotation.z = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.6} position={position}>
      <mesh ref={tetraRef}>
        <tetrahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial color="#f3f4f6" transparent opacity={0.08} wireframe />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.6} />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} />

      {/* Formas principais */}
      <MinimalCube position={[3.5, 1.8, -1]} />
      <Diamond position={[5.2, -0.5, -2]} />
      <MinimalPyramid position={[4.0, -2.2, 0.5]} />
      <WireframeOctahedron position={[2.8, -1.3, -2.2]} />

      {/* Formas adicionais no canto inferior direito */}
      <SmallTetrahedron position={[4.8, 0.8, -0.5]} />

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.1} />
      <Environment preset="studio" />
    </>
  )
}

export const CanvaComponent = () => {
    return (
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <Scene />
          </Suspense>
        </Canvas>
    )
}    
