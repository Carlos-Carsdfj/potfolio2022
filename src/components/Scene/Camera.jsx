import { PerspectiveCamera } from '@react-three/drei/core'

const Camera = () => {
  return <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={75} />
}

export default Camera