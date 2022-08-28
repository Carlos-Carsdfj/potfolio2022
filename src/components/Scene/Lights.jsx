import React from 'react'

const Lights = () => {
  return (
    <>
      {/*<pointLight position={[3, 5, 0]} color={0xff0000} intensity={2.5} />*/}
      <directionalLight
        position={[0, 10, 0]}
        color={0xffffff}
        intensity={2}
        target-position={[0, 0, 0]}
        castShadow={true}
        shadow-bias={-0.001}
  />
      <directionalLight
        position={[5, 2, 0]}
        color={0x0000ff}
        intensity={1}
        target-position={[0, 0, 0]}
        castShadow={true}
        shadow-bias={-0.001}
  />      

      <ambientLight color={0xffffff} intensity={0.1} />
    </>
  )
}

export default Lights
