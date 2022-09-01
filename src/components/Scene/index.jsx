import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useProgress, OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'
import Camera from './Camera'
import  Lights  from './Lights'
import RoomsModel from './RoomsModel'
const Scene = ({screensize = 1}) => {
  const { progress, total, loaded } = useProgress()
  return (<>
    
      <Canvas

      gl={{
        antialias: true,
        toneMappingExposure: 0.5,
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
      >
    <Camera/>
     <Lights/>
    <pointLight position={[10, 10, 10]}  />
    <Suspense  fallback={null}>
      <RoomsModel  scale={screensize} position={[0,1,0]}/>
      <Environment files={'https://res.cloudinary.com/darvaxtkj/raw/upload/v1661997887/hdr/brown_photostudio_02_2k_whbl7d.hdr'} />
    </Suspense>
    <OrbitControls target={[0, 1, 0]} enabled={true} mouseButtons={{
	LEFT: THREE.MOUSE.ROTATE,
	}
} 
touches={{
	ONE: THREE.TOUCH.ROTATE,
	TWO: THREE.TOUCH.DOLLY_ROTATE
}}
maxDistance={8} minDistance={5.7} maxPolarAngle={70*Math.PI /180} minPolarAngle={70*Math.PI /180} />
  </Canvas></>
  )
}

export default Scene
