import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useProgress, OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'
import Camera from './Camera'
import  Lights  from './Lights'
import RoomsModel from './RoomsModel2'
const Scene = () => {
  const { progress, total, loaded } = useProgress()
  return (<>
    
      <Canvas

      gl={{
        antialias: true,
        toneMappingExposure: 1.5,
        toneMapping: THREE.ReinhardToneMapping,
      }}
      >
    <Camera/>
     <Lights/>
    <pointLight position={[10, 10, 10]}  />
    <Suspense  fallback={null}>
      <RoomsModel />
      <Environment files={'/hdr/brown_photostudio_02_2k.hdr'} />
    </Suspense>
    <OrbitControls target={[0, 1, 0]} maxDistance={8} minDistance={5} maxPolarAngle={78*Math.PI /180} minPolarAngle={78*Math.PI /180} />
  </Canvas></>
  )
}

export default Scene
