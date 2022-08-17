import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {  useFrame, useLoader } from '@react-three/fiber'

export default function Model(props) {
  const maingroup = useRef()
  useFrame((state, delta) => (maingroup.current.rotation.y += 0.005))
  const { nodes, materials } =useGLTF('/models/rooms/rooms.glb')
  return (
    <group {...props} ref={maingroup} dispose={null}>
    <group
      name="Armature"
      position={[1.8841809, 0.0297642, 2.3590896]}
      scale={0.102875}
    >
      <primitive object={nodes.Centro} />
      <primitive object={nodes.LPierna} />
      <primitive object={nodes.RPierna} />
      <primitive object={nodes.LPelvis} />
      <primitive object={nodes.RPelvis} />
      <primitive object={nodes.LClavicula} />
      <primitive object={nodes.RClavicula} />
      <primitive object={nodes.LBrazo} />
      <primitive object={nodes.LPulgar} />
      <primitive object={nodes.RBrazo} />
      <primitive object={nodes.RPulgar} />
      <mesh
        name="t-shirt"
        castShadow
        receiveShadow
        geometry={nodes["t-shirt"].geometry}
        material={materials["t-shirt"]}
        position={[0, 4.5252252, 0]}
      />
      <group name="shorts" position={[0, 4.5252252, 0]}>
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials.shorts}
        />
        <mesh
          name="Cube008_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials.cuerdas}
        />
      </group>
      <group name="Show" position={[0, 4.5252252, 0]}>
        <mesh
          name="Cube003_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials.Body}
        />
        <mesh
          name="Cube003_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube003_2.geometry}
          material={materials.Eye}
        />
        <mesh
          name="Cube003_3"
          castShadow
          receiveShadow
          geometry={nodes.Cube003_3.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <mesh
        name="Shoes"
        castShadow
        receiveShadow
        geometry={nodes.Shoes.geometry}
        material={materials.shoes}
        position={[0, 4.5252252, 0]}
      />
    </group>
    <group
      name="Armature002"
      position={[-1.7829133, 0.0297642, -2.2969162]}
      rotation={[-Math.PI, 0.0026459, -Math.PI]}
      scale={0.102875}
    >
      <primitive object={nodes.Centro_1} />
      <primitive object={nodes.LPierna_1} />
      <primitive object={nodes.RPierna_1} />
      <primitive object={nodes.LPelvis_1} />
      <primitive object={nodes.RPelvis_1} />
      <primitive object={nodes.LClavicula_1} />
      <primitive object={nodes.RClavicula_1} />
      <primitive object={nodes.LBrazo_1} />
      <primitive object={nodes.LPulgar_1} />
      <primitive object={nodes.RBrazo_1} />
      <primitive object={nodes.RPulgar_1} />
      <group name="shorts002" position={[0, 4.5252252, 0]}>
        <mesh
          name="Cube021"
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials.shorts}
        />
        <mesh
          name="Cube021_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube021_1.geometry}
          material={materials.cuerdas}
        />
      </group>
      <mesh
        name="t-shirt001"
        castShadow
        receiveShadow
        geometry={nodes["t-shirt001"].geometry}
        material={materials["t-shirt"]}
        position={[0, 4.5252252, 0]}
      />
      <group name="Show002" position={[0, 4.5252252, 0]}>
        <mesh
          name="Cube022"
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials.Body}
        />
        <mesh
          name="Cube022_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube022_1.geometry}
          material={materials.Eye}
        />
        <mesh
          name="Cube022_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube022_2.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <mesh
        name="Shoes002"
        castShadow
        receiveShadow
        geometry={nodes.Shoes002.geometry}
        material={materials.shoes}
        position={[0, 4.5252252, 0]}
      />
    </group>
    <group
      name="Armature001"
      position={[-1.4474455, 0.0774789, 1.8605788]}
      rotation={[-1.6826446, 1.1686994, 1.6503172]}
      scale={0.108082}
    >
      <primitive object={nodes.Centro_2} />
      <primitive object={nodes.LPierna_2} />
      <primitive object={nodes.RPierna_2} />
      <primitive object={nodes.LPelvis_2} />
      <primitive object={nodes.RPelvis_2} />
      <primitive object={nodes.LClavicula_2} />
      <primitive object={nodes.RClavicula_2} />
      <primitive object={nodes.LBrazo_2} />
      <primitive object={nodes.LPulgar_2} />
      <primitive object={nodes.RBrazo_2} />
      <primitive object={nodes.RPulgar_2} />
      <mesh
        name="Shoes001"
        castShadow
        receiveShadow
        geometry={nodes.Shoes001.geometry}
        material={materials["shoes.001"]}
        position={[0, 4.5252256, 0]}
      />
      <mesh
        name="shirt"
        castShadow
        receiveShadow
        geometry={nodes.shirt.geometry}
        material={materials.shirt}
        position={[0, 4.5252256, 0]}
      />
      <mesh
        name="shorts001"
        castShadow
        receiveShadow
        geometry={nodes.shorts001.geometry}
        material={materials["shorts.001"]}
        position={[0, 4.5252256, 0]}
      />
      <group name="Show001" position={[0, 4.5252256, 0]}>
        <mesh
          name="Cube016"
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials["Body.001"]}
        />
        <mesh
          name="Cube016_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube016_1.geometry}
          material={materials["Eye.001"]}
        />
        <mesh
          name="Cube016_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube016_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
    </group>
    <group
      name="Armature003"
      position={[1.5473824, 0.0774789, -1.7895916]}
      rotation={[-1.4651359, -1.1689866, -1.4979991]}
      scale={0.108082}
    >
      <primitive object={nodes.Centro_3} />
      <primitive object={nodes.LPierna_3} />
      <primitive object={nodes.RPierna_3} />
      <primitive object={nodes.LPelvis_3} />
      <primitive object={nodes.RPelvis_3} />
      <primitive object={nodes.LClavicula_3} />
      <primitive object={nodes.RClavicula_3} />
      <primitive object={nodes.LBrazo_3} />
      <primitive object={nodes.LPulgar_3} />
      <primitive object={nodes.RBrazo_3} />
      <primitive object={nodes.RPulgar_3} />
      <mesh
        name="shirt001"
        castShadow
        receiveShadow
        geometry={nodes.shirt001.geometry}
        material={materials.shirt}
        position={[0, 4.5252256, 0]}
      />
      <mesh
        name="shorts003"
        castShadow
        receiveShadow
        geometry={nodes.shorts003.geometry}
        material={materials["shorts.001"]}
        position={[0, 4.5252256, 0]}
      />
      <mesh
        name="Shoes003"
        castShadow
        receiveShadow
        geometry={nodes.Shoes003.geometry}
        material={materials["shoes.001"]}
        position={[0, 4.5252256, 0]}
      />
      <group name="Show003" position={[0, 4.5252256, 0]}>
        <mesh
          name="Cube033"
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={materials["Body.001"]}
        />
        <mesh
          name="Cube033_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube033_1.geometry}
          material={materials["Eye.001"]}
        />
        <mesh
          name="Cube033_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube033_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
    </group>
    <group
      name="agarres"
      position={[2.331357, 0.5641056, 0.7222096]}
      rotation={[-1.5850358, 0.002177, -0.0016613]}
      scale={[1.2186499, 1.2186496, 1.2186499]}
    >
      <mesh
        name="Box004__0001"
        castShadow
        receiveShadow
        geometry={nodes.Box004__0001.geometry}
        material={materials["RootNode.001"]}
      />
      <mesh
        name="Box004__0001_1"
        castShadow
        receiveShadow
        geometry={nodes.Box004__0001_1.geometry}
        material={materials["Material.002"]}
      />
    </group>
    <mesh
      name="Piso001"
      castShadow
      receiveShadow
      geometry={nodes.Piso001.geometry}
      material={materials["Piso.001"]}
      position={[1.8841809, 0, 1.8644147]}
      scale={1.518872}
    />
    <mesh
      name="mancuerda004"
      castShadow
      receiveShadow
      geometry={nodes.mancuerda004.geometry}
      material={materials["RootNode.001"]}
      position={[-2.0913947, 0.0880298, -1.8101546]}
      rotation={[0.2284522, 1.4565134, -0.6614895]}
      scale={0.0176259}
    />
    <mesh
      name="mancuerda002"
      castShadow
      receiveShadow
      geometry={nodes.mancuerda002.geometry}
      material={materials["RootNode.001"]}
      position={[2.1886783, 0.1034279, 1.7800319]}
      rotation={[-0.4489921, 0.2065989, -2.5279107]}
      scale={0.0176259}
    />
    <mesh
      name="Cube001"
      castShadow
      receiveShadow
      geometry={nodes.Cube001.geometry}
      material={materials.Material}
      position={[1.8841809, 0, 1.8644147]}
    />
    <mesh
      name="RuedaPie002"
      castShadow
      receiveShadow
      geometry={nodes.RuedaPie002.geometry}
      material={materials["Material.001"]}
      position={[-1.6546538, 0, -1.8019005]}
      rotation={[-Math.PI, 0.0026459, -Math.PI]}
      scale={1.536324}
    />
    <mesh
      name="alcoclchado001"
      castShadow
      receiveShadow
      geometry={nodes.alcoclchado001.geometry}
      material={materials["Material.002"]}
      position={[-1.7842222, -0.0260751, -1.8022434]}
      rotation={[-Math.PI, 0.0026459, -Math.PI]}
    />
    <group
      name="agarres001"
      position={[-2.2344186, 0.5641056, -0.6612257]}
      rotation={[-1.5565629, -0.0022146, 3.1372855]}
      scale={[1.2186499, 1.2186494, 1.2186499]}
    >
      <mesh
        name="Box004__0002"
        castShadow
        receiveShadow
        geometry={nodes.Box004__0002.geometry}
        material={materials["RootNode.001"]}
      />
      <mesh
        name="Box004__0002_1"
        castShadow
        receiveShadow
        geometry={nodes.Box004__0002_1.geometry}
        material={materials["Material.002"]}
      />
    </group>
    <mesh
      name="mancuerda005"
      castShadow
      receiveShadow
      geometry={nodes.mancuerda005.geometry}
      material={materials["RootNode.001"]}
      position={[-2.0889413, 0.1034279, -1.7186666]}
      rotation={[-2.69284, -0.2042149, 0.612509]}
      scale={0.0176259}
    />
    <mesh
      name="mancuerda001"
      castShadow
      receiveShadow
      geometry={nodes.mancuerda001.geometry}
      material={materials["RootNode.001"]}
      position={[2.1913736, 0.0880298, 1.871513]}
      rotation={[2.9077987, -1.4590893, 2.4747273]}
      scale={0.0176259}
    />
    <mesh
      name="Piso002"
      castShadow
      receiveShadow
      geometry={nodes.Piso002.geometry}
      material={materials["Piso.001"]}
      position={[-1.7842222, 0, -1.8022434]}
      rotation={[-Math.PI, 0.0026459, -Math.PI]}
      scale={[1.5188719, 1.518872, 1.5188719]}
    />
    <mesh
      name="RuedaPie"
      castShadow
      receiveShadow
      geometry={nodes.RuedaPie.geometry}
      material={materials["Material.001"]}
      position={[1.7546121, 0, 1.8644147]}
      scale={1.536324}
    />
    <mesh
      name="Cube003"
      castShadow
      receiveShadow
      geometry={nodes.Cube003.geometry}
      material={materials.Material}
      position={[-1.7842222, 0, -1.8022434]}
      rotation={[-Math.PI, 0.0026459, -Math.PI]}
    />
    <mesh
      name="alcoclchado"
      castShadow
      receiveShadow
      geometry={nodes.alcoclchado.geometry}
      material={materials["Material.002"]}
      position={[1.8841809, -0.0260751, 1.8644147]}
    />
    <mesh
      name="Cylinder002_Cylinder001"
      castShadow
      receiveShadow
      geometry={nodes.Cylinder002_Cylinder001.geometry}
      material={materials["Star.001"]}
      position={[0.5968418, 0.0570142, 1.3944679]}
      rotation={[1.5527636, 0.0213862, -0.8701757]}
      scale={0.0207451}
    />
    <mesh
      name="Cylinder_Cylinder001"
      castShadow
      receiveShadow
      geometry={nodes.Cylinder_Cylinder001.geometry}
      material={materials["Star.001"]}
      position={[0.5968418, 0.0570142, 1.3944679]}
      rotation={[1.5527636, 0.0213862, -0.8701757]}
      scale={0.0207451}
    />
    <mesh
      name="Cube"
      castShadow
      receiveShadow
      geometry={nodes.Cube.geometry}
      material={nodes.Cube.material}
      position={[-1.7730099, 0, 1.8595389]}
      rotation={[Math.PI, -1.5675985, Math.PI]}
    />
    <mesh
      name="Cylinder001_Cylinder001"
      castShadow
      receiveShadow
      geometry={nodes.Cylinder001_Cylinder001.geometry}
      material={materials["Star.001"]}
      position={[0.5968418, 0.0570142, 1.3944679]}
      rotation={[1.5527636, 0.0213862, -0.8701757]}
      scale={0.0207451}
    />
    <mesh
      name="Cylinder003_Cylinder001"
      castShadow
      receiveShadow
      geometry={nodes.Cylinder003_Cylinder001.geometry}
      material={materials["Star.001"]}
      position={[0.5968418, 0.0570142, 1.3944679]}
      rotation={[1.5527636, 0.0213862, -0.8701757]}
      scale={0.0207451}
    />
    <mesh
      name="DragonBall_Sphere002"
      castShadow
      receiveShadow
      geometry={nodes.DragonBall_Sphere002.geometry}
      material={materials["DragonBall.001"]}
      position={[0.9145464, 0.0925208, 0.7189343]}
      rotation={[1.5527636, 0.0213862, -0.8701757]}
      scale={0.059433}
    />
    <mesh
      name="?"
      castShadow
      receiveShadow
      geometry={nodes["?"].geometry}
      material={materials["Material.009"]}
      position={[-0.6428124, 1.1802285, 1.5543398]}
      rotation={[1.5139167, -0.045941, 0.678712]}
      scale={0.3962414}
    />
    <mesh
      name="Holder_Cylinder"
      castShadow
      receiveShadow
      geometry={nodes.Holder_Cylinder.geometry}
      material={materials["Holder.001"]}
      position={[0.8648176, 1.0392607, 0.6831182]}
      rotation={[-0.26871, 0.911465, 0.535421]}
      scale={0.0274324}
    />
    <mesh
      name="CHAIR"
      castShadow
      receiveShadow
      geometry={nodes.CHAIR.geometry}
      material={materials["Default OBJ"]}
      position={[-1.5107991, 0.0427396, 1.8603764]}
      rotation={[1.5696681, 0.3396317, -1.5262793]}
      scale={0.0078952}
    />
    <group
      name="Cylinder001"
      position={[-0.344328, 1.2692946, 2.1770632]}
      rotation={[1.8085714, 1.0368016, 2.9688588]}
      scale={0.1472996}
    >
      <mesh
        name="Cylinder001_1"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_1.geometry}
        material={materials["luz blanca"]}
      />
      <mesh
        name="Cylinder001_2"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_2.geometry}
        material={materials["luz roja"]}
      />
    </group>
    <group
      name="Cube002"
      position={[-0.6376559, 0.9242578, 1.5615221]}
      rotation={[0, -0.8892799, 0]}
      scale={[0.1477797, 0.2142588, 0.1477797]}
    >
      <mesh
        name="Cube010"
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials["Computer.Chassis"]}
      />
      <mesh
        name="Cube010_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube010_1.geometry}
        material={materials["Computer.Black"]}
      />
    </group>
    <group
      name="Cylinder"
      position={[-0.325467, 1.2609019, 2.2183053]}
      rotation={[1.804658, 0.5521437, 2.72213]}
    >
      <mesh
        name="Cylinder_1"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_1.geometry}
        material={materials.metal}
      />
      <mesh
        name="Cylinder_2"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_2.geometry}
        material={materials["plastico negro"]}
      />
      <mesh
        name="Cylinder_3"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_3.geometry}
        material={materials["metal opaco"]}
      />
      <mesh
        name="Cylinder_4"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_4.geometry}
        material={materials.rojo}
      />
      <mesh
        name="Cylinder_5"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_5.geometry}
        material={materials.blanco}
      />
    </group>
    <group
      name="glass"
      position={[-1.7730099, -0.1442857, 1.8595389]}
      rotation={[Math.PI, -1.5675984, Math.PI]}
      scale={1.536324}
    >
      <mesh
        name="Cube009"
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials.Window}
      />
      <mesh
        name="Cube009_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube009_1.geometry}
        material={materials.Glass}
      />
    </group>
    <mesh
      name="Piso"
      castShadow
      receiveShadow
      geometry={nodes.Piso.geometry}
      material={materials.Piso}
      position={[-1.7730099, 0, 1.8595389]}
      rotation={[Math.PI, -1.5675984, Math.PI]}
      scale={1.518872}
    />
    <group
      name="Plane"
      position={[-0.7133278, -0.5558156, 1.8629234]}
      rotation={[Math.PI, -1.5675985, Math.PI]}
    >
      <mesh
        name="Plane002_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane002_1.geometry}
        material={materials["Material.010"]}
      />
      <mesh
        name="Plane002_2"
        castShadow
        receiveShadow
        geometry={nodes.Plane002_2.geometry}
        material={materials["Material.012"]}
      />
      <mesh
        name="Plane002_3"
        castShadow
        receiveShadow
        geometry={nodes.Plane002_3.geometry}
        material={materials["Material.013"]}
      />
      <mesh
        name="Plane002_4"
        castShadow
        receiveShadow
        geometry={nodes.Plane002_4.geometry}
        material={materials["Material.014"]}
      />
    </group>
    <group
      name="Plane001"
      position={[-1.0196065, 0.6242996, 2.0596983]}
      rotation={[Math.PI, -1.5676249, Math.PI]}
      scale={[0.0084791, 0.0016636, 0.0084791]}
    >
      <mesh
        name="Plane005_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane005_1.geometry}
        material={materials["Material.005"]}
      />
      <mesh
        name="Plane005_2"
        castShadow
        receiveShadow
        geometry={nodes.Plane005_2.geometry}
        material={materials["Material.008"]}
      />
    </group>
    <mesh
      name="cuerda"
      castShadow
      receiveShadow
      geometry={nodes.cuerda.geometry}
      material={materials["PowerPole.001"]}
      position={[1.00036, 1.4410647, 0.8318136]}
      rotation={[-0.199701, 0.7189693, -0.0896661]}
      scale={0.0276453}
    />
    <mesh
      name="Plane026"
      castShadow
      receiveShadow
      geometry={nodes.Plane026.geometry}
      material={materials["plastik_polysk.klawiatura"]}
      position={[-1.0601045, 0.6225219, 1.884315]}
      rotation={[Math.PI, -1.5676249, Math.PI]}
      scale={0.0662199}
    />
    <mesh
      name="RuedaPie001"
      castShadow
      receiveShadow
      geometry={nodes.RuedaPie001.geometry}
      material={materials["Material.015"]}
      position={[-1.772596, 0, 1.7299715]}
      rotation={[Math.PI, -1.5675984, Math.PI]}
      scale={1.536324}
    />
    <mesh
      name="Sphere"
      castShadow
      receiveShadow
      geometry={nodes.Sphere.geometry}
      material={materials["Computer.Monitor.Glass"]}
      position={[-0.7816433, 0.988804, 1.6783208]}
      rotation={[0, -0.8892799, 0]}
      scale={[0.1434104, 0.1434104, 0.0141303]}
    />
    <mesh
      name="Cylinder001_Cylinder002"
      castShadow
      receiveShadow
      geometry={nodes.Cylinder001_Cylinder002.geometry}
      material={materials["Star.001"]}
      position={[-0.4981311, 0.0570142, -1.328892]}
      rotation={[1.5888855, -0.0213384, 2.2740628]}
      scale={0.0207451}
    />
    <mesh
      name="Cylinder002_Cylinder002"
      castShadow
      receiveShadow
      geometry={nodes.Cylinder002_Cylinder002.geometry}
      material={materials["Star.001"]}
      position={[-0.4981311, 0.0570142, -1.328892]}
      rotation={[1.5888855, -0.0213384, 2.2740628]}
      scale={0.0207451}
    />
    <mesh
      name="Cylinder003_Cylinder002"
      castShadow
      receiveShadow
      geometry={nodes.Cylinder003_Cylinder002.geometry}
      material={materials["Star.001"]}
      position={[-0.4981311, 0.0570142, -1.328892]}
      rotation={[1.5888855, -0.0213384, 2.2740628]}
      scale={0.0207451}
    />
    <mesh
      name="Cylinder_Cylinder002"
      castShadow
      receiveShadow
      geometry={nodes.Cylinder_Cylinder002.geometry}
      material={materials["Star.001"]}
      position={[-0.4981311, 0.0570142, -1.328892]}
      rotation={[1.5888855, -0.0213384, 2.2740628]}
      scale={0.0207451}
    />
    <mesh
      name="DragonBall_Sphere001"
      castShadow
      receiveShadow
      geometry={nodes.DragonBall_Sphere001.geometry}
      material={materials["DragonBall.001"]}
      position={[-0.8176221, 0.0925208, -0.6542011]}
      rotation={[1.5888855, -0.0213384, 2.2740628]}
      scale={0.059433}
    />
    <group
      name="Plane015"
      position={[-1.1575106, 0.6181741, 2.2741523]}
      rotation={[0, -1.1744888, 0]}
      scale={[0.0112301, 0.0144981, 0.0112301]}
    >
      <mesh
        name="Plane007_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane007_1.geometry}
        material={materials["plastik_mat.001"]}
      />
      <mesh
        name="Plane007_2"
        castShadow
        receiveShadow
        geometry={nodes.Plane007_2.geometry}
        material={materials["plastik_polysk.002"]}
      />
      <mesh
        name="Plane007_3"
        castShadow
        receiveShadow
        geometry={nodes.Plane007_3.geometry}
        material={materials.guma}
      />
      <mesh
        name="Plane007_4"
        castShadow
        receiveShadow
        geometry={nodes.Plane007_4.geometry}
        material={materials["Material.008"]}
      />
    </group>
    <mesh
      name="Holder_Cylinder001"
      castShadow
      receiveShadow
      geometry={nodes.Holder_Cylinder001.geometry}
      material={materials["Holder.001"]}
      position={[-0.7679883, 1.0392607, -0.6182535]}
      rotation={[-2.8737852, -0.9089141, -2.6073146]}
      scale={0.0274324}
    />
    <mesh
      name="?001"
      castShadow
      receiveShadow
      geometry={nodes["?001"].geometry}
      material={materials["Material.009"]}
      position={[0.7419416, 1.1802285, -1.4854828]}
      rotation={[1.6275543, 0.0460913, -2.460236]}
      scale={0.3962414}
    />
    <mesh
      name="Plane027"
      castShadow
      receiveShadow
      geometry={nodes.Plane027.geometry}
      material={materials["plastik_polysk.001"]}
      position={[-1.060145, 0.6237405, 1.8843149]}
      rotation={[1.6660176, -1.5372178, 1.666071]}
      scale={[0.2614827, 0.0699292, 0.0563258]}
    />
    <mesh
      name="Plane006"
      castShadow
      receiveShadow
      geometry={nodes.Plane006.geometry}
      material={materials["plastik_polysk.klawiatura"]}
      position={[1.1601055, 0.6225219, -1.8143526]}
      rotation={[0, 1.5649672, 0]}
      scale={0.0662199}
    />
    <mesh
      name="Cube004"
      castShadow
      receiveShadow
      geometry={nodes.Cube004.geometry}
      material={nodes.Cube004.material}
      position={[1.8729428, 0, -1.7876902]}
      rotation={[0, 1.5649527, 0]}
    />
    <mesh
      name="water_drop"
      castShadow
      receiveShadow
      geometry={nodes.water_drop.geometry}
      material={materials.None}
      position={[-2.0803146, 0.7325401, 2.1817749]}
      rotation={[Math.PI / 2, 1e-7, 1.5739901]}
    />
    <group
      name="Cylinder003"
      position={[0.4451062, 1.2692946, -2.1089938]}
      rotation={[1.3373762, -1.0374193, -0.1676758]}
      scale={0.1472996}
    >
      <mesh
        name="Cylinder003_1"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003_1.geometry}
        material={materials["luz blanca"]}
      />
      <mesh
        name="Cylinder003_2"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003_2.geometry}
        material={materials["luz roja"]}
      />
    </group>
    <mesh
      name="Plane007"
      castShadow
      receiveShadow
      geometry={nodes.Plane007.geometry}
      material={materials["plastik_polysk.001"]}
      position={[1.160146, 0.6237405, -1.8143524]}
      rotation={[1.3979091, 1.5368611, -1.3978115]}
      scale={[0.2614827, 0.0699292, 0.0563258]}
    />
    <mesh
      name="water_drop001"
      castShadow
      receiveShadow
      geometry={nodes.water_drop001.geometry}
      material={materials.None}
      position={[2.1810992, 0.7325401, -2.1091118]}
      rotation={[Math.PI / 2, -1e-7, -1.5649566]}
    />
    <mesh
      name="cuerda001"
      castShadow
      receiveShadow
      geometry={nodes.cuerda001.geometry}
      material={materials["PowerPole.001"]}
      position={[-0.903137, 1.4410647, -0.7673072]}
      rotation={[-2.9423493, -0.7163763, 3.0512307]}
      scale={0.0276453}
    />
    <mesh
      name="CHAIR001"
      castShadow
      receiveShadow
      geometry={nodes.CHAIR001.geometry}
      material={materials["Default OBJ"]}
      position={[1.6107351, 0.0427396, -1.7892215]}
      rotation={[1.5728596, -0.3396273, 1.6181196]}
      scale={0.0078952}
    />
    <group
      name="Plane017"
      position={[-1.0690957, 0.6250022, 1.639639]}
      rotation={[Math.PI, -1.5676249, Math.PI]}
      scale={0.0662199}
    >
      <mesh
        name="Plane006_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane006_1.geometry}
        material={materials.klawiatura_klawisze}
      />
      <mesh
        name="Plane006_2"
        castShadow
        receiveShadow
        geometry={nodes.Plane006_2.geometry}
        material={materials["Material.011"]}
      />
    </group>
    <group
      name="Cube005"
      position={[0.7368042, 0.9242578, -1.4926788]}
      rotation={[-Math.PI, 0.891926, -Math.PI]}
      scale={[0.1477797, 0.2142588, 0.1477797]}
    >
      <mesh
        name="Cube026"
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials["Computer.Chassis"]}
      />
      <mesh
        name="Cube026_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube026_1.geometry}
        material={materials["Computer.Black"]}
      />
    </group>
    <group
      name="glass001"
      position={[1.8729428, -0.1442858, -1.7876902]}
      rotation={[0, 1.5649527, 0]}
      scale={1.536324}
    >
      <mesh
        name="Cube027"
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={materials.Window}
      />
      <mesh
        name="Cube027_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube027_1.geometry}
        material={materials.Glass}
      />
    </group>
    <mesh
      name="Piso003"
      castShadow
      receiveShadow
      geometry={nodes.Piso003.geometry}
      material={materials.Piso}
      position={[1.8729428, 0, -1.7876902]}
      rotation={[0, 1.5649527, 0]}
      scale={1.518872}
    />
    <group
      name="Plane002"
      position={[0.8132734, -0.5558157, -1.7938787]}
      rotation={[0, 1.5649527, 0]}
    >
      <mesh
        name="Plane012"
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={materials["Material.010"]}
      />
      <mesh
        name="Plane012_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane012_1.geometry}
        material={materials["Material.012"]}
      />
      <mesh
        name="Plane012_2"
        castShadow
        receiveShadow
        geometry={nodes.Plane012_2.geometry}
        material={materials["Material.013"]}
      />
      <mesh
        name="Plane012_3"
        castShadow
        receiveShadow
        geometry={nodes.Plane012_3.geometry}
        material={materials["Material.014"]}
      />
    </group>
    <group
      name="Cylinder002"
      position={[0.4263544, 1.2609019, -2.1502855]}
      rotation={[1.3385218, -0.5527549, -0.4164382]}
    >
      <mesh
        name="Cylinder002_1"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002_1.geometry}
        material={materials.metal}
      />
      <mesh
        name="Cylinder002_2"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002_2.geometry}
        material={materials["plastico negro"]}
      />
      <mesh
        name="Cylinder002_3"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002_3.geometry}
        material={materials["metal opaco"]}
      />
      <mesh
        name="Cylinder002_4"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002_4.geometry}
        material={materials.rojo}
      />
      <mesh
        name="Cylinder002_5"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002_5.geometry}
        material={materials.blanco}
      />
    </group>
    <group
      name="Plane003"
      position={[1.1200718, 0.6242996, -1.9898425]}
      rotation={[0, 1.5649527, 0]}
      scale={[0.0084791, 0.0016636, 0.0084791]}
    >
      <mesh
        name="Plane013"
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={materials["Material.005"]}
      />
      <mesh
        name="Plane013_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane013_1.geometry}
        material={materials["Material.008"]}
      />
    </group>
    <group
      name="Plane004"
      position={[1.2585428, 0.6181741, -2.2039309]}
      rotation={[-Math.PI, 1.1771344, -Math.PI]}
      scale={[0.0112301, 0.0144981, 0.0112301]}
    >
      <mesh
        name="Plane014"
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials["plastik_mat.001"]}
      />
      <mesh
        name="Plane014_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane014_1.geometry}
        material={materials["plastik_polysk.002"]}
      />
      <mesh
        name="Plane014_2"
        castShadow
        receiveShadow
        geometry={nodes.Plane014_2.geometry}
        material={materials.guma}
      />
      <mesh
        name="Plane014_3"
        castShadow
        receiveShadow
        geometry={nodes.Plane014_3.geometry}
        material={materials["Material.008"]}
      />
    </group>
    <mesh
      name="RuedaPie003"
      castShadow
      receiveShadow
      geometry={nodes.RuedaPie003.geometry}
      material={materials["Material.015"]}
      position={[1.8721859, 0, -1.6581243]}
      rotation={[0, 1.5649527, 0]}
      scale={1.536324}
    />
    <mesh
      name="Sphere001"
      castShadow
      receiveShadow
      geometry={nodes.Sphere001.geometry}
      material={materials["Computer.Monitor.Glass"]}
      position={[0.8811002, 0.988804, -1.6090959]}
      rotation={[-Math.PI, 0.891926, -Math.PI]}
      scale={[0.1434104, 0.1434104, 0.0141303]}
    />
    <mesh
      name="for-starts"
      castShadow
      receiveShadow
      geometry={nodes["for-starts"].geometry}
      material={materials["for-starts"]}
      position={[0.7704263, 0.1027043, 0.6946018]}
      rotation={[2.5477682, 0.3401862, -1.9911953]}
      scale={0.0917405}
    />
    <mesh
      name="for-starts001"
      castShadow
      receiveShadow
      geometry={nodes["for-starts001"].geometry}
      material={materials["for-starts"]}
      position={[0.6961758, 0.1156929, 0.801077]}
      rotation={[2.0010658, -0.6629163, -2.7188478]}
      scale={0.0917405}
    />
    <mesh
      name="for-starts002"
      castShadow
      receiveShadow
      geometry={nodes["for-starts002"].geometry}
      material={materials["for-starts"]}
      position={[-0.6735669, 0.1027043, -0.6294873]}
      rotation={[0.5943506, -0.3423789, 1.1519693]}
      scale={0.0917405}
    />
    <mesh
      name="for-starts003"
      castShadow
      receiveShadow
      geometry={nodes["for-starts003"].geometry}
      material={materials["for-starts"]}
      position={[-0.5990349, 0.1156929, -0.7357659]}
      rotation={[1.1386521, 0.6618104, 0.4257933]}
      scale={0.0917405}
    />
    <mesh
      name="584830f5cef1014c0b5e4aa1"
      castShadow
      receiveShadow
      geometry={nodes["584830f5cef1014c0b5e4aa1"].geometry}
      material={materials["584830f5cef1014c0b5e4aa1"]}
      position={[1.9318688, 0.487905, 2.5154045]}
      rotation={[-1.0813226, 0.1961153, -2.7398396]}
      scale={-0.2165173}
    />
    <mesh
      name="584830f5cef1014c0b5e4aa1001"
      castShadow
      receiveShadow
      geometry={nodes["584830f5cef1014c0b5e4aa1001"].geometry}
      material={materials["584830f5cef1014c0b5e4aa1"]}
      position={[-1.8301867, 0.487905, -2.453357]}
      rotation={[-2.0607327, -0.1948708, 0.3993728]}
      scale={-0.2165173}
    />
    <group
      name="Plane005"
      position={[1.1684494, 0.6250022, -1.5696537]}
      rotation={[0, 1.5649672, 0]}
      scale={0.0662199}
    >
      <mesh
        name="Plane015_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane015_1.geometry}
        material={materials.klawiatura_klawisze}
      />
      <mesh
        name="Plane015_2"
        castShadow
        receiveShadow
        geometry={nodes.Plane015_2.geometry}
        material={materials["Material.011"]}
      />
    </group>
    <mesh
      name="mirror001"
      castShadow
      receiveShadow
      geometry={nodes.mirror001.geometry}
      material={materials["mirror.002"]}
      position={[0.8815645, 0.7279991, 0.9665767]}
      rotation={[-0.2219018, 0.8581104, 0.1690742]}
      scale={0.00287}
    />
    <mesh
      name="mirror002"
      castShadow
      receiveShadow
      geometry={nodes.mirror002.geometry}
      material={materials["mirror.002"]}
      position={[-0.7839852, 0.7279991, -0.9017556]}
      rotation={[-2.920362, -0.8555289, -2.9734065]}
      scale={0.00287}
    />
    <mesh
      name="nodejs-1-logo-png-transparent"
      castShadow
      receiveShadow
      geometry={nodes["nodejs-1-logo-png-transparent"].geometry}
      material={materials["nodejs-1-logo-png-transparent"]}
      position={[0.8840741, 1.1841567, 0.9538065]}
      rotation={[1.671845, 0.1742456, -0.8703821]}
      scale={0.1964173}
    />
    <mesh
      name="nodejs-1-logo-png-transparent001"
      castShadow
      receiveShadow
      geometry={nodes["nodejs-1-logo-png-transparent001"].geometry}
      material={materials["nodejs-1-logo-png-transparent"]}
      position={[-0.7865285, 1.1841567, -0.888992]}
      rotation={[1.4702116, -0.174512, 2.273883]}
      scale={0.1964173}
    />
    <mesh
      name="OXTDM33NMJFA7FDN63C3IPYLGI"
      castShadow
      receiveShadow
      geometry={nodes.OXTDM33NMJFA7FDN63C3IPYLGI.geometry}
      material={materials.OXTDM33NMJFA7FDN63C3IPYLGI}
      position={[0.3380542, 0.976689, 1.8644147]}
      rotation={[0, 0, -1.5686468]}
      scale={0.5324236}
    />
    <mesh
      name="OXTDM33NMJFA7FDN63C3IPYLGI001"
      castShadow
      receiveShadow
      geometry={nodes.OXTDM33NMJFA7FDN63C3IPYLGI001.geometry}
      material={materials.OXTDM33NMJFA7FDN63C3IPYLGI}
      position={[-0.2381008, 0.976689, -1.798152]}
      rotation={[Math.PI, 0.0026459, 1.572946]}
      scale={0.5324236}
    />
    <mesh
      name="dinosaur-downloading-for-pc-wallpaper-preview"
      castShadow
      receiveShadow
      geometry={
        nodes["dinosaur-downloading-for-pc-wallpaper-preview"].geometry
      }
      material={materials["dinosaur-downloading-for-pc-wallpaper-preview"]}
      position={[0.3670498, 0.9219252, 2.7575371]}
      rotation={[1.5502552, 0.034652, -1.5825618]}
      scale={[0.5952878, 0.5952879, 0.5952878]}
    />
    <mesh
      name="dinosaur-downloading-for-pc-wallpaper-preview001"
      castShadow
      receiveShadow
      geometry={
        nodes["dinosaur-downloading-for-pc-wallpaper-preview001"].geometry
      }
      material={materials["dinosaur-downloading-for-pc-wallpaper-preview"]}
      position={[-0.264733, 0.9219252, -2.6913478]}
      rotation={[1.5914293, -0.0345976, 1.5616782]}
      scale={[0.5952878, 0.5952879, 0.5952878]}
    />
    <mesh
      name="albertEinstein"
      castShadow
      receiveShadow
      geometry={nodes.albertEinstein.geometry}
      material={materials.albertEinstein}
      position={[-0.833032, 0.9781563, 0.2932288]}
      rotation={[Math.PI / 2, 0, 0.0031938]}
      scale={0.6352398}
    />
    <mesh
      name="albertEinstein001"
      castShadow
      receiveShadow
      geometry={nodes.albertEinstein001.geometry}
      material={materials.albertEinstein}
      position={[0.9288235, 0.9781563, -0.2238728]}
      rotation={[Math.PI / 2, 0, -3.1357527]}
      scale={0.6352398}
    />
    <mesh
      name="criticalError"
      castShadow
      receiveShadow
      geometry={nodes.criticalError.geometry}
      material={materials.criticalError}
      position={[-0.8029865, 0.9924494, 1.7703838]}
      rotation={[1.5697414, 0.0039604, -2.2252545]}
      scale={[1.5989174, 1.5989172, 1.5989172]}
    />
    <mesh
      name="criticalError001"
      castShadow
      receiveShadow
      geometry={nodes.criticalError001.geometry}
      material={materials.criticalError}
      position={[0.902687, 0.9924494, -1.7011023]}
      rotation={[1.571862, -0.0039576, 0.9189839]}
      scale={[1.5989174, 1.5989172, 1.5989172]}
    />
    <mesh
      name="kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a"
      castShadow
      receiveShadow
      geometry={
        nodes[
          "kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a"
        ].geometry
      }
      material={
        materials[
          "kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a"
        ]
      }
      position={[-0.5559291, 0.9199736, 1.702899]}
      rotation={[Math.PI / 2, -1e-7, -0.7511352]}
      scale={[0.310852, 0.310852, 0.3108521]}
    />
    <mesh
      name="kisspng-javascript-logo-html-clip-art-javascript-logo-5b518"
      castShadow
      receiveShadow
      geometry={
        nodes["kisspng-javascript-logo-html-clip-art-javascript-logo-5b518"]
          .geometry
      }
      material={
        materials[
          "kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a"
        ]
      }
      position={[0.6554518, 0.9199736, -1.6342714]}
      rotation={[Math.PI / 2, 0, 2.3931032]}
      scale={[0.310852, 0.310852, 0.3108521]}
    />
    <mesh
      name="kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01db2f8"
      castShadow
      receiveShadow
      geometry={
        nodes["kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01db2f8"]
          .geometry
      }
      material={
        materials[
          "kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01db2f8"
        ]
      }
      position={[-0.661404, 1.2290922, 1.5750285]}
      rotation={[0.0573857, -0.0688649, -0.0203034]}
      scale={0.2894168}
    />
    <mesh
      name="kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01d"
      castShadow
      receiveShadow
      geometry={
        nodes["kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01d"]
          .geometry
      }
      material={
        materials[
          "kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01db2f8"
        ]
      }
      position={[0.760588, 1.2290922, -1.5061222]}
      rotation={[3.0841956, 0.0715067, 3.1214407]}
      scale={0.2894168}
    />
    <mesh
      name="kisspng-web-development-cascading-style-sheets-css3-comput-css-"
      castShadow
      receiveShadow
      geometry={
        nodes[
          "kisspng-web-development-cascading-style-sheets-css3-comput-css-"
        ].geometry
      }
      material={
        materials[
          "kisspng-web-development-cascading-style-sheets-css3-comput-css-"
        ]
      }
      position={[-0.7369691, 0.9116004, 1.4230551]}
      rotation={[1.4363788, -0.1746395, -0.8545566]}
      scale={0.2543335}
    />
    <mesh
      name="kisspng-web-development-cascading-style-sheets-css3-comput-"
      castShadow
      receiveShadow
      geometry={
        nodes["kisspng-web-development-cascading-style-sheets-css3-comput-"]
          .geometry
      }
      material={
        materials[
          "kisspng-web-development-cascading-style-sheets-css3-comput-css-"
        ]
      }
      position={[0.8357506, 0.9116004, -1.3539493]}
      rotation={[1.7047509, 0.1749934, 2.2896983]}
      scale={0.2543335}
    />
    <mesh
      name="batman-logo-png-2039"
      castShadow
      receiveShadow
      geometry={nodes["batman-logo-png-2039"].geometry}
      material={materials["batman-logo-png-2039"]}
      position={[-1.6038605, 0.6146402, 1.8600793]}
      rotation={[1.5690312, 0.5049931, -1.6654802]}
      scale={0.0527152}
    />
    <mesh
      name="batman-logo-png-2039001"
      castShadow
      receiveShadow
      geometry={nodes["batman-logo-png-2039001"].geometry}
      material={materials["batman-logo-png-2039"]}
      position={[1.7037956, 0.6146402, -1.7886782]}
      rotation={[1.5740245, -0.5049863, 1.4791359]}
      scale={0.0527152}
    />
    <mesh
      name="Suzanne"
      castShadow
      receiveShadow
      geometry={nodes.Suzanne.geometry}
      material={materials.Monkey}
      position={[-0.8739096, 0.8163168, 1.6132752]}
      rotation={[0, -0.8892799, 0]}
      scale={[0.0069699, 0.0069699, 0.0009379]}
    />
    <mesh
      name="Suzanne001"
      castShadow
      receiveShadow
      geometry={nodes.Suzanne001.geometry}
      material={materials.Monkey}
      position={[0.9731941, 0.8163168, -1.5438064]}
      rotation={[-Math.PI, 0.891926, -Math.PI]}
      scale={[0.0069699, 0.0069699, 0.0009379]}
    />
    <mesh
      name="IMAGE"
      castShadow
      receiveShadow
      geometry={nodes.IMAGE.geometry}
      material={materials.IMAGE}
      position={[-0.2128314, 1.0375816, 2.8246634]}
      rotation={[Math.PI / 2, 1e-7, 1.5930601]}
      scale={[0.502317, 0.502317, 0.5023171]}
    />
    <mesh
      name="IMAGE001"
      castShadow
      receiveShadow
      geometry={nodes.IMAGE001.geometry}
      material={materials.IMAGE}
      position={[0.3153237, 1.0375816, -2.7569394]}
      rotation={[Math.PI / 2, -1e-7, -1.5458865]}
      scale={[0.502317, 0.502317, 0.5023171]}
    />
    <mesh
      name="PisoGranito"
      castShadow
      receiveShadow
      geometry={nodes.PisoGranito.geometry}
      material={materials.PisoGranito}
      position={[-1.7730099, 0.2080324, 1.8595389]}
      rotation={[Math.PI, -1.5676249, Math.PI]}
      scale={[1.4377754, 1.4377755, 1.4377754]}
    />
    <mesh
      name="PisoGranito001"
      castShadow
      receiveShadow
      geometry={nodes.PisoGranito001.geometry}
      material={materials.PisoGranito}
      position={[1.8729428, 0.2080324, -1.7876902]}
      rotation={[0, 1.5649672, 0]}
      scale={1.4377755}
    />
    <group
      name="babygroot"
      position={[-0.6164831, 0.7897589, 2.2462246]}
      rotation={[Math.PI / 2, 1e-7, 0.8403429]}
      scale={0.6637224}
    >
      <mesh
        name="pCylinder9_phong1_0"
        castShadow
        receiveShadow
        geometry={nodes.pCylinder9_phong1_0.geometry}
        material={materials.phong1}
      />
      <mesh
        name="pCylinder9_phong1_0_1"
        castShadow
        receiveShadow
        geometry={nodes.pCylinder9_phong1_0_1.geometry}
        material={materials.blinn2}
      />
      <mesh
        name="pCylinder9_phong1_0_2"
        castShadow
        receiveShadow
        geometry={nodes.pCylinder9_phong1_0_2.geometry}
        material={materials.phongE1}
      />
      <mesh
        name="pCylinder9_phong1_0_3"
        castShadow
        receiveShadow
        geometry={nodes.pCylinder9_phong1_0_3.geometry}
        material={materials.lambert2}
      />
      <mesh
        name="pCylinder9_phong1_0_4"
        castShadow
        receiveShadow
        geometry={nodes.pCylinder9_phong1_0_4.geometry}
        material={materials.lambert3}
      />
    </group>
    <group
      name="babygroot001"
      position={[0.7174433, 0.7897589, -2.1774349]}
      rotation={[Math.PI / 2, -1e-7, -2.2986038]}
      scale={0.6637224}
    >
      <mesh
        name="pCylinder9_phong1_0001"
        castShadow
        receiveShadow
        geometry={nodes.pCylinder9_phong1_0001.geometry}
        material={materials.phong1}
      />
      <mesh
        name="pCylinder9_phong1_0001_1"
        castShadow
        receiveShadow
        geometry={nodes.pCylinder9_phong1_0001_1.geometry}
        material={materials.blinn2}
      />
      <mesh
        name="pCylinder9_phong1_0001_2"
        castShadow
        receiveShadow
        geometry={nodes.pCylinder9_phong1_0001_2.geometry}
        material={materials.phongE1}
      />
      <mesh
        name="pCylinder9_phong1_0001_3"
        castShadow
        receiveShadow
        geometry={nodes.pCylinder9_phong1_0001_3.geometry}
        material={materials.lambert2}
      />
      <mesh
        name="pCylinder9_phong1_0001_4"
        castShadow
        receiveShadow
        geometry={nodes.pCylinder9_phong1_0001_4.geometry}
        material={materials.lambert3}
      />
    </group>
    <mesh
      name="Wood"
      castShadow
      receiveShadow
      geometry={nodes.Wood.geometry}
      material={materials.Wood}
      position={[-1.7730099, -0.114474, 1.8595389]}
      rotation={[Math.PI, -1.5675984, Math.PI]}
      scale={1.536324}
    />
    <mesh
      name="Wood001"
      castShadow
      receiveShadow
      geometry={nodes.Wood001.geometry}
      material={materials.Wood}
      position={[1.8729428, -0.1144741, -1.7876902]}
      rotation={[0, 1.5649527, 0]}
      scale={1.536324}
    />
  </group>
  );
}

useGLTF.preload("/models/rooms/rooms.glb");