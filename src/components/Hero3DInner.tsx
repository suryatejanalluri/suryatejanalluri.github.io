import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei'

// Note: OrbitControls is configured to disable pointer-based rotation (enablePan/enableRotate false)
// so the 3D sphere no longer responds to user drag/swipe and behaves as a subtle auto-rotating visual.

const Hero3DInner: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={0.8} />
      {/* subtle backdrop */}
      <mesh position={[0, 0, -1.2]}>
        <planeGeometry args={[6, 4]} />
        <meshBasicMaterial color={'#0f1724'} transparent opacity={0.6} />
      </mesh>

      <mesh>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial distort={0.42} speed={1.6} color="#2b076e" metalness={0.25} roughness={0.06} />
      </mesh>

      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.35} />
    </Canvas>
  )
}

export default Hero3DInner
