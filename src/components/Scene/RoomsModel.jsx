import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {  useFrame } from '@react-three/fiber'

export default  function Model(props) {
  const maingroup = useRef()
  useFrame((state, delta) => (maingroup.current.rotation.y += 0.005))
  const { nodes, materials } = useGLTF('/models/rooms/rooms.glb')
  return (
    <group {...props}  ref={maingroup} dispose={null}>
  <group
        name="Armature"
        position={[1.73043072, 0.02976418, 2.35965776]}
        scale={0.10287501}
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
        <primitive object={nodes.neutral_bone} />
        <primitive object={nodes.neutral_bone_1} />
        <mesh
          name="t-shirt"
          castShadow
          receiveShadow
          geometry={nodes["t-shirt"].geometry}
          material={materials["t-shirt"]}
          position={[0, 4.52522516, 0]}
        />
        <skinnedMesh
          name="Cube008"
          geometry={nodes.Cube008.geometry}
          material={materials.shorts}
          skeleton={nodes.Cube008.skeleton}
        />
        <skinnedMesh
          name="Cube008_1"
          geometry={nodes.Cube008_1.geometry}
          material={materials.cuerdas}
          skeleton={nodes.Cube008_1.skeleton}
        />
        <group name="Show" position={[0, 4.52522516, 0]}>
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
        <skinnedMesh
          name="Shoes"
          geometry={nodes.Shoes.geometry}
          material={materials.shoes}
          skeleton={nodes.Shoes.skeleton}
        />
      </group>
      <group
        name="Armature002"
        position={[-1.95109212, 0.02976418, -2.27937555]}
        rotation={[-Math.PI, 0.00096115, -Math.PI]}
        scale={[0.102875, 0.10287501, 0.102875]}
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
        <primitive object={nodes.neutral_bone_2} />
        <primitive object={nodes.neutral_bone_3} />
        <primitive object={nodes.neutral_bone_4} />
        <skinnedMesh
          name="t-shirt001"
          geometry={nodes["t-shirt001"].geometry}
          material={materials["t-shirt"]}
          skeleton={nodes["t-shirt001"].skeleton}
        />
        <skinnedMesh
          name="Cube008_2"
          geometry={nodes.Cube008_2.geometry}
          material={materials.shorts}
          skeleton={nodes.Cube008_2.skeleton}
        />
        <skinnedMesh
          name="Cube008_3"
          geometry={nodes.Cube008_3.geometry}
          material={materials.cuerdas}
          skeleton={nodes.Cube008_3.skeleton}
        />
        <group name="Show002" position={[0, 4.52522421, 0]}>
          <mesh
            name="Cube018"
            castShadow
            receiveShadow
            geometry={nodes.Cube018.geometry}
            material={materials.Body}
          />
          <mesh
            name="Cube018_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_1.geometry}
            material={materials.Eye}
          />
          <mesh
            name="Cube018_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_2.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <skinnedMesh
          name="Shoes002"
          geometry={nodes.Shoes002.geometry}
          material={materials.shoes}
          skeleton={nodes.Shoes002.skeleton}
        />
      </group>
      <group
        name="Armature001"
        position={[-1.60601532, 0.07747889, 1.89754248]}
        rotation={[-1.70459931, 1.16754503, 1.67418046]}
        scale={[0.10808203, 0.10808203, 0.10808204]}
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
          name="shorts001"
          castShadow
          receiveShadow
          geometry={nodes.shorts001.geometry}
          material={materials["shorts.001"]}
          position={[0, 4.52522612, 0]}
        />
        <skinnedMesh
          name="Shoes001"
          geometry={nodes.Shoes001.geometry}
          material={materials["shoes.001"]}
          skeleton={nodes.Shoes001.skeleton}
        />
        <mesh
          name="shirt"
          castShadow
          receiveShadow
          geometry={nodes.shirt.geometry}
          material={materials.shirt}
          position={[0, 4.52522612, 0]}
        />
        <group name="Show001" position={[0, 4.52522612, 0]}>
          <mesh
            name="Cube020"
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={materials["Body.001"]}
          />
          <mesh
            name="Cube020_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_1.geometry}
            material={materials["Eye.001"]}
          />
          <mesh
            name="Cube020_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_2.geometry}
            material={materials["Material.003"]}
          />
        </group>
      </group>
      <group
        name="Armature003"
        position={[1.38490832, 0.07747889, -1.81405389]}
        rotation={[-1.43922691, -1.1676721, -1.46984039]}
        scale={0.10808203}
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
          name="shorts003"
          castShadow
          receiveShadow
          geometry={nodes.shorts003.geometry}
          material={materials["shorts.001"]}
          position={[0, 4.52522469, 0]}
        />
        <skinnedMesh
          name="Shoes003"
          geometry={nodes.Shoes003.geometry}
          material={materials["shoes.001"]}
          skeleton={nodes.Shoes003.skeleton}
        />
        <mesh
          name="shirt001"
          castShadow
          receiveShadow
          geometry={nodes.shirt001.geometry}
          material={materials.shirt}
          position={[0, 4.52522469, 0]}
        />
        <group name="Show003" position={[0, 4.52522469, 0]}>
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
      <mesh
        name="Cube001"
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Material}
        position={[1.73043072, 0, 1.8649832]}
      />
      <mesh
        name="Cube003"
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.Material}
        position={[-1.93165433, 0, 1.88680649]}
        rotation={[0, -1.56457665, 0]}
      />
      <mesh
        name="Cube004"
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.Material}
        position={[-1.95156729, 0, -1.78470075]}
        rotation={[-Math.PI, 0.00096115, -Math.PI]}
      />
      <mesh
        name="Cube005"
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.Material}
        position={[1.71053708, 0, -1.80300534]}
        rotation={[-Math.PI, 1.5655269, -Math.PI]}
      />
      <group
        name="agarres"
        position={[2.17760706, 0.56410557, 0.72277808]}
        rotation={[-1.58503585, 0.00217696, -0.00166133]}
        scale={[1.21864986, 1.21864963, 1.21864986]}
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
          material={materials["Material.006"]}
        />
      </group>
      <group
        name="agarres001"
        position={[-2.39984083, 0.56410557, -0.64292586]}
        rotation={[-1.55655912, -0.00219064, 3.13897051]}
        scale={[1.2186501, 1.21864963, 1.21864998]}
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
          material={materials["Material.006"]}
        />
      </group>
      <mesh
        name="RuedaPie"
        castShadow
        receiveShadow
        geometry={nodes.RuedaPie.geometry}
        material={materials["Material.001"]}
        position={[1.60086191, 0, 1.8649832]}
        scale={1.53632402}
      />
      <mesh
        name="RuedaPie002"
        castShadow
        receiveShadow
        geometry={nodes.RuedaPie002.geometry}
        material={materials["Material.001"]}
        position={[-1.82199848, 0, -1.7845763]}
        rotation={[-Math.PI, 0.00096115, -Math.PI]}
        scale={1.53632402}
      />
      <mesh
        name="Piso001"
        castShadow
        receiveShadow
        geometry={nodes.Piso001.geometry}
        material={materials["Piso.001"]}
        position={[1.73043072, 0, 1.8649832]}
        scale={1.51887202}
      />
      <mesh
        name="Piso002"
        castShadow
        receiveShadow
        geometry={nodes.Piso002.geometry}
        material={materials["Piso.001"]}
        position={[-1.95156729, 0, -1.78470075]}
        rotation={[-Math.PI, 0.00096115, -Math.PI]}
        scale={1.51887202}
      />
      <mesh
        name="mancuerda002"
        castShadow
        receiveShadow
        geometry={nodes.mancuerda002.geometry}
        material={materials["RootNode.001"]}
        position={[2.03492785, 0.10342794, 1.78060043]}
        rotation={[-0.44899207, 0.20659888, -2.52791073]}
        scale={0.01762588}
      />
      <mesh
        name="mancuerda005"
        castShadow
        receiveShadow
        geometry={nodes.mancuerda005.geometry}
        material={materials["RootNode.001"]}
        position={[-2.25614548, 0.10342795, -1.70061076]}
        rotation={[-2.69268787, -0.20573317, 0.6132558]}
        scale={0.01762588}
      />
      <mesh
        name="Cylinder001_Cylinder001"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_Cylinder001.geometry}
        material={materials["Star.001"]}
        position={[0.44309163, 0.0570142, 1.39503646]}
        rotation={[1.55276359, 0.02138621, -0.87017572]}
        scale={0.02074506}
      />
      <mesh
        name="Cylinder001_Cylinder002"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_Cylinder002.geometry}
        material={materials["Star.001"]}
        position={[-0.66468036, 0.0570142, -1.31351745]}
        rotation={[1.5888496, -0.02136884, 2.27237803]}
        scale={0.02074506}
      />
      <mesh
        name="Cylinder002_Cylinder001"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002_Cylinder001.geometry}
        material={materials["Star.001"]}
        position={[0.44309163, 0.0570142, 1.39503646]}
        rotation={[1.55276359, 0.02138621, -0.87017572]}
        scale={0.02074506}
      />
      <mesh
        name="Cylinder002_Cylinder002"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002_Cylinder002.geometry}
        material={materials["Star.001"]}
        position={[-0.66468036, 0.0570142, -1.31351745]}
        rotation={[1.5888496, -0.02136884, 2.27237803]}
        scale={0.02074506}
      />
      <mesh
        name="Cylinder003_Cylinder001"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003_Cylinder001.geometry}
        material={materials["Star.001"]}
        position={[0.44309163, 0.0570142, 1.39503646]}
        rotation={[1.55276359, 0.02138621, -0.87017572]}
        scale={0.02074506}
      />
      <mesh
        name="Cylinder003_Cylinder002"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003_Cylinder002.geometry}
        material={materials["Star.001"]}
        position={[-0.66468036, 0.0570142, -1.31351745]}
        rotation={[1.5888496, -0.02136884, 2.27237803]}
        scale={0.02074506}
      />
      <mesh
        name="alcoclchado"
        castShadow
        receiveShadow
        geometry={nodes.alcoclchado.geometry}
        material={materials["Material.007"]}
        position={[1.73043072, -0.02607511, 1.8649832]}
      />
      <mesh
        name="alcoclchado001"
        castShadow
        receiveShadow
        geometry={nodes.alcoclchado001.geometry}
        material={materials["Material.007"]}
        position={[-1.95156729, -0.02607512, -1.78470075]}
        rotation={[-Math.PI, 0.00096115, -Math.PI]}
      />
      <mesh
        name="Cylinder_Cylinder001"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_Cylinder001.geometry}
        material={materials["Star.001"]}
        position={[0.44309163, 0.0570142, 1.39503646]}
        rotation={[1.55276359, 0.02138621, -0.87017572]}
        scale={0.02074506}
      />
      <mesh
        name="Cylinder_Cylinder002"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_Cylinder002.geometry}
        material={materials["Star.001"]}
        position={[-0.66468036, 0.0570142, -1.31351745]}
        rotation={[1.5888496, -0.02136884, 2.27237803]}
        scale={0.02074506}
      />
      <mesh
        name="DragonBall_Sphere002"
        castShadow
        receiveShadow
        geometry={nodes.DragonBall_Sphere002.geometry}
        material={materials["DragonBall.001"]}
        position={[0.76079619, 0.09252083, 0.71950281]}
        rotation={[1.55276359, 0.02138621, -0.87017572]}
        scale={[0.05943304, 0.05943303, 0.05943304]}
      />
      <mesh
        name="DragonBall_Sphere001"
        castShadow
        receiveShadow
        geometry={nodes.DragonBall_Sphere001.geometry}
        material={materials["DragonBall.001"]}
        position={[-0.98303401, 0.09252083, -0.63828909]}
        rotation={[1.58884963, -0.0213688, 2.27237801]}
        scale={[0.05943303, 0.05943304, 0.05943304]}
      />
      <mesh
        name="?"
        castShadow
        receiveShadow
        geometry={nodes["?"].geometry}
        material={materials["Material.009"]}
        position={[-0.80430305, 1.18022847, 1.58373547]}
        rotation={[1.51348697, -0.04540333, 0.66929534]}
        scale={0.39624137}
      />
      <mesh
        name="?001"
        castShadow
        receiveShadow
        geometry={nodes["?001"].geometry}
        material={materials["Material.009"]}
        position={[0.58289492, 1.18022847, -1.50101769]}
        rotation={[1.6280623, 0.04545842, -2.47133687]}
        scale={0.39624137}
      />
      <mesh
        name="CHAIR"
        castShadow
        receiveShadow
        geometry={nodes.CHAIR.geometry}
        material={materials["Default OBJ"]}
        position={[-1.66936791, 0.04273963, 1.89793706]}
        rotation={[1.57299703, 0.33962653, -1.53627219]}
        scale={0.0078952}
      />
      <mesh
        name="CHAIR001"
        castShadow
        receiveShadow
        geometry={nodes.CHAIR001.geometry}
        material={materials["Default OBJ"]}
        position={[1.44826114, 0.04273963, -1.81438768]}
        rotation={[1.56893534, -0.3396285, 1.60633983]}
        scale={0.0078952}
      />
      <mesh
        name="Holder_Cylinder"
        castShadow
        receiveShadow
        geometry={nodes.Holder_Cylinder.geometry}
        material={materials["Holder.001"]}
        position={[0.73425114, 0.81078458, 0.71277881]}
        rotation={[-0.26870998, 0.91146501, 0.53542103]}
        scale={[0.02743236, 0.02743237, 0.02743236]}
      />
      <mesh
        name="Holder_Cylinder001"
        castShadow
        receiveShadow
        geometry={nodes.Holder_Cylinder001.geometry}
        material={materials["Holder.001"]}
        position={[-0.9564954, 0.81078458, -0.6315397]}
        rotation={[-2.87321134, -0.91053859, -2.60658761]}
        scale={[0.02743236, 0.02743237, 0.02743237]}
      />
      <mesh
        name="mancuerda001"
        castShadow
        receiveShadow
        geometry={nodes.mancuerda001.geometry}
        material={materials["RootNode.001"]}
        position={[2.03762341, 0.08802977, 1.87208152]}
        rotation={[2.90779867, -1.45908935, 2.47472731]}
        scale={0.01762588}
      />
      <mesh
        name="mancuerda004"
        castShadow
        receiveShadow
        geometry={nodes.mancuerda004.geometry}
        material={materials["RootNode.001"]}
        position={[-2.2587533, 0.08802977, -1.79209411]}
        rotation={[0.23182684, 1.45815487, -0.66488628]}
        scale={0.01762588}
      />
      <mesh
        name="PowerPole_Cylinder001"
        castShadow
        receiveShadow
        geometry={nodes.PowerPole_Cylinder001.geometry}
        material={materials["PowerPole.001"]}
        position={[0.7236793, 0.99051833, 0.67545366]}
        rotation={[-0.26871013, 0.91146526, 0.53542118]}
        scale={0.03655697}
      />
      <mesh
        name="PowerPole_Cylinder002"
        castShadow
        receiveShadow
        geometry={nodes.PowerPole_Cylinder002.geometry}
        material={materials["PowerPole.001"]}
        position={[-0.94595945, 0.99051833, -0.59420455]}
        rotation={[-2.87321132, -0.91053858, -2.6065876]}
        scale={0.03655697}
      />
      <group
        name="Cube002"
        position={[-0.7990793, 0.92425776, 1.59086967]}
        rotation={[0, -0.87985742, 0]}
        scale={[0.14777975, 0.21425878, 0.14777975]}
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
        name="Cube006"
        position={[0.57767808, 0.92425776, -1.50815666]}
        rotation={[-Math.PI, 0.88081875, -Math.PI]}
        scale={[0.14777975, 0.21425878, 0.14777975]}
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
        position={[-0.48071587, 1.26090193, 2.24468184]}
        rotation={[1.81028711, 0.54993435, 2.71137896]}
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
        name="Cylinder002"
        position={[0.25994301, 1.26090193, -2.16227484]}
        rotation={[1.33187819, -0.55016214, -0.42911865]}
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
        name="Cylinder001"
        position={[-0.49996459, 1.26929462, 2.20361948]}
        rotation={[1.82398895, 1.03451157, 2.95093571]}
        scale={0.14729965}
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
        name="Cylinder003"
        position={[0.27915227, 1.26929462, -2.12119389]}
        rotation={[1.31916958, -1.03475153, -0.18883556]}
        scale={[0.14729965, 0.14729965, 0.14729966]}
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
        name="Plane001"
        position={[-1.176319, 0.62429959, 2.09262156]}
        rotation={[0, -1.56457665, 0]}
        scale={[0.00847909, 0.00166361, 0.00847909]}
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
      <group
        name="Plane003"
        position={[0.95539963, 0.62429959, -2.0095458]}
        rotation={[-Math.PI, 1.5655269, -Math.PI]}
        scale={[0.00847909, 0.00166361, 0.00847909]}
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
        material={nodes.cuerda.material}
        position={[0.84660983, 1.44106472, 0.83238208]}
        rotation={[-0.19970098, 0.71896927, -0.08966608]}
        scale={[0.02764532, 0.02764532, 0.02764533]}
      />
      <mesh
        name="cuerda001"
        castShadow
        receiveShadow
        geometry={nodes.cuerda001.geometry}
        material={nodes.cuerda001.material}
        position={[-1.0687393, 1.44106472, -0.7512511]}
        rotation={[-2.94205833, -0.71802748, 3.0516735]}
        scale={[0.02764532, 0.02764532, 0.02764533]}
      />
      <group
        name="glass"
        position={[-1.9315747, -0.14428568, 1.89957023]}
        rotation={[0, -1.56457665, 0]}
        scale={1.53632402}
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
        position={[-1.9315747, 0, 1.89957023]}
        rotation={[0, -1.56457665, 0]}
        scale={1.51887202}
      />
      <mesh
        name="Piso003"
        castShadow
        receiveShadow
        geometry={nodes.Piso003.geometry}
        material={materials.Piso}
        position={[1.71046937, 0, -1.81576884]}
        rotation={[-Math.PI, 1.56554288, -Math.PI]}
        scale={[1.5188719, 1.51887202, 1.5188719]}
      />
      <group
        name="Plane"
        position={[-0.87190783, -0.5558157, 1.89296997]}
        rotation={[0, -1.56457665, 0]}
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
        name="Plane002"
        position={[0.65079689, -0.5558157, -1.81018698]}
        rotation={[-Math.PI, 1.5655269, -Math.PI]}
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
      <mesh
        name="RuedaPie001"
        castShadow
        receiveShadow
        geometry={nodes.RuedaPie001.geometry}
        material={materials["Material.015"]}
        position={[-1.93238199, 0, 1.77000391]}
        rotation={[0, -1.56457665, 0]}
        scale={1.53632402}
      />
      <mesh
        name="RuedaPie003"
        castShadow
        receiveShadow
        geometry={nodes.RuedaPie003.geometry}
        material={materials["Material.015"]}
        position={[1.7111522, 0, -1.68620193]}
        rotation={[-Math.PI, 1.5655269, -Math.PI]}
        scale={1.53632402}
      />
      <mesh
        name="Sphere"
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Computer.Monitor.Glass"]}
        position={[-0.94195974, 0.98880404, 1.70901978]}
        rotation={[0, -0.87985759, 0]}
        scale={[0.14341043, 0.14341043, 0.01413031]}
      />
      <mesh
        name="Sphere001"
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials["Computer.Monitor.Glass"]}
        position={[0.72067201, 0.98880404, -1.62616956]}
        rotation={[-Math.PI, 0.88081875, -Math.PI]}
        scale={[0.14341043, 0.14341043, 0.01413031]}
      />
      <group
        name="Plane015"
        position={[-1.31219637, 0.61817414, 2.30836558]}
        rotation={[0, -1.16506679, 0]}
        scale={[0.01123011, 0.01449813, 0.01123011]}
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
        name="Plane026"
        castShadow
        receiveShadow
        geometry={nodes.Plane026.geometry}
        material={materials["plastik_polysk.klawiatura"]}
        position={[-1.21846759, 0.62252194, 1.91762757]}
        rotation={[0, -1.56457665, 0]}
        scale={0.06621987}
      />
      <mesh
        name="Plane027"
        castShadow
        receiveShadow
        geometry={nodes.Plane027.geometry}
        material={materials["plastik_polysk.001"]}
        position={[-1.21850836, 0.62374049, 1.91762781]}
        rotation={[1.38665872, -1.53679189, 1.3865546]}
        scale={[0.26148272, 0.06992919, 0.05632584]}
      />
      <mesh
        name="water_drop"
        castShadow
        receiveShadow
        geometry={nodes.water_drop.geometry}
        material={materials.None}
        position={[-2.23582888, 0.73254013, 2.22468686]}
        rotation={[Math.PI / 2, 1.5e-7, 1.56456785]}
      />
      <mesh
        name="water_drop001"
        castShadow
        receiveShadow
        geometry={nodes.water_drop001.geometry}
        material={materials.None}
        position={[2.01503658, 0.73254013, -2.14059305]}
        rotation={[Math.PI / 2, -9e-8, -1.57606398]}
      />
      <group
        name="glass001"
        position={[1.71046937, -0.14428568, -1.81576884]}
        rotation={[-Math.PI, 1.5655269, -Math.PI]}
        scale={1.53632402}
      >
        <mesh
          name="Cube009_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube009_2.geometry}
          material={materials.Window}
        />
        <mesh
          name="Cube009_3"
          castShadow
          receiveShadow
          geometry={nodes.Cube009_3.geometry}
          material={materials.Glass}
        />
      </group>
      <group
        name="Plane004"
        position={[1.09148443, 0.61817414, -2.22515917]}
        rotation={[-Math.PI, 1.16602759, -Math.PI]}
        scale={[0.01123011, 0.01449813, 0.01123011]}
      >
        <mesh
          name="Plane007_5"
          castShadow
          receiveShadow
          geometry={nodes.Plane007_5.geometry}
          material={materials["plastik_mat.001"]}
        />
        <mesh
          name="Plane007_6"
          castShadow
          receiveShadow
          geometry={nodes.Plane007_6.geometry}
          material={materials["plastik_polysk.002"]}
        />
        <mesh
          name="Plane007_7"
          castShadow
          receiveShadow
          geometry={nodes.Plane007_7.geometry}
          material={materials.guma}
        />
        <mesh
          name="Plane007_8"
          castShadow
          receiveShadow
          geometry={nodes.Plane007_8.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        name="Plane017"
        position={[-1.2297641, 0.62500221, 1.6730473]}
        rotation={[0, -1.56457665, 0]}
        scale={0.06621987}
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
        name="Plane005"
        position={[1.00844181, 0.62500221, -1.5899204]}
        rotation={[-Math.PI, 1.56554288, -Math.PI]}
        scale={0.06621987}
      >
        <mesh
          name="Plane006_3"
          castShadow
          receiveShadow
          geometry={nodes.Plane006_3.geometry}
          material={materials.klawiatura_klawisze}
        />
        <mesh
          name="Plane006_4"
          castShadow
          receiveShadow
          geometry={nodes.Plane006_4.geometry}
          material={materials["Material.011"]}
        />
      </group>
      <mesh
        name="Plane006"
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials["plastik_polysk.klawiatura"]}
        position={[0.99738014, 0.62252194, -1.8345114]}
        rotation={[-Math.PI, 1.56554288, -Math.PI]}
        scale={0.06621987}
      />
      <mesh
        name="Plane007"
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials["plastik_polysk.001"]}
        position={[0.99742091, 0.62374049, -1.83451188]}
        rotation={[1.72702861, 1.53695524, -1.72711666]}
        scale={[0.26148272, 0.06992919, 0.05632584]}
      />
      <mesh
        name="mirror001"
        castShadow
        receiveShadow
        geometry={nodes.mirror001.geometry}
        material={materials["mirror.002"]}
        position={[0.72781432, 0.72799909, 0.9671452]}
        rotation={[-0.22190181, 0.85811035, 0.16907415]}
        scale={0.00287}
      />
      <mesh
        name="mirror002"
        castShadow
        receiveShadow
        geometry={nodes.mirror002.geometry}
        material={materials["mirror.002"]}
        position={[-0.9498142, 0.72799909, -0.88589966]}
        rotation={[-2.91993517, -0.85717304, -2.97284156]}
        scale={0.00287}
      />
      <mesh
        name="for-starts"
        castShadow
        receiveShadow
        geometry={nodes["for-starts"].geometry}
        material={materials["for-starts"]}
        position={[0.61667609, 0.10270426, 0.69517028]}
        rotation={[2.54776821, 0.34018621, -1.99119534]}
        scale={[0.09174055, 0.09174053, 0.09174053]}
      />
      <mesh
        name="for-starts001"
        castShadow
        receiveShadow
        geometry={nodes["for-starts001"].geometry}
        material={materials["for-starts"]}
        position={[0.5804646, 0.10993768, 0.78868425]}
        rotation={[2.0010658, -0.66291633, -2.71884775]}
        scale={[0.09174054, 0.09174053, 0.09174053]}
      />
      <mesh
        name="for-starts002"
        castShadow
        receiveShadow
        geometry={nodes["for-starts002"].geometry}
        material={materials["for-starts"]}
        position={[-0.8389374, 0.10270426, -0.61381853]}
        rotation={[0.59401508, -0.34098255, 1.15096793]}
        scale={[0.09174055, 0.09174053, 0.09174053]}
      />
      <mesh
        name="for-starts003"
        castShadow
        receiveShadow
        geometry={nodes["for-starts003"].geometry}
        material={materials["for-starts"]}
        position={[-0.80263603, 0.10993767, -0.70729697]}
        rotation={[1.13984558, 0.66251528, 0.4238526]}
        scale={[0.09174054, 0.09174053, 0.09174053]}
      />
      <mesh
        name="584830f5cef1014c0b5e4aa1"
        castShadow
        receiveShadow
        geometry={nodes["584830f5cef1014c0b5e4aa1"].geometry}
        material={materials["584830f5cef1014c0b5e4aa1"]}
        position={[1.77811861, 0.48790503, 2.51597285]}
        rotation={[-1.08132258, 0.19611528, -2.73983962]}
        scale={[-0.2165173, -0.2165173, -0.21651731]}
      />
      <mesh
        name="584830f5cef1014c0b5e4aa1001"
        castShadow
        receiveShadow
        geometry={nodes["584830f5cef1014c0b5e4aa1001"].geometry}
        material={materials["584830f5cef1014c0b5e4aa1"]}
        position={[-1.99862969, 0.48790503, -2.43573618]}
        rotation={[-2.06043868, -0.19566344, 0.4008885]}
        scale={[-0.2165173, -0.2165173, -0.21651731]}
      />
      <mesh
        name="albertEinstein"
        castShadow
        receiveShadow
        geometry={nodes.albertEinstein.geometry}
        material={materials.albertEinstein}
        position={[-1.00639665, 0.97815627, 0.32447243]}
        rotation={[Math.PI / 2, 0, -0.00622857]}
        scale={[0.6352399, 0.6352399, 0.63523984]}
      />
      <mesh
        name="albertEinstein001"
        castShadow
        receiveShadow
        geometry={nodes.albertEinstein001.geometry}
        material={materials.albertEinstein}
        position={[0.78377843, 0.97815627, -0.24156106]}
        rotation={[Math.PI / 2, 0, 3.13632488]}
        scale={0.63523984}
      />
      <mesh
        name="nodejs-1-logo-png-transparent"
        castShadow
        receiveShadow
        geometry={nodes["nodejs-1-logo-png-transparent"].geometry}
        material={materials["nodejs-1-logo-png-transparent"]}
        position={[0.73032391, 1.18415666, 0.95437497]}
        rotation={[1.67184504, 0.17424562, -0.87038209]}
        scale={[0.19641726, 0.19641729, 0.19641727]}
      />
      <mesh
        name="nodejs-1-logo-png-transparent001"
        castShadow
        receiveShadow
        geometry={nodes["nodejs-1-logo-png-transparent001"].geometry}
        material={materials["nodejs-1-logo-png-transparent"]}
        position={[-0.95233595, 1.18415666, -0.87313187]}
        rotation={[1.46991613, -0.17434254, 2.2721813]}
        scale={[0.19641726, 0.19641727, 0.19641727]}
      />
      <mesh
        name="criticalError"
        castShadow
        receiveShadow
        geometry={nodes.criticalError.geometry}
        material={materials.criticalError}
        position={[-0.96243489, 0.9924494, 1.80128026]}
        rotation={[1.56977863, 0.00397015, -2.23467692]}
        scale={[1.59891725, 1.59891737, 1.59891725]}
      />
      <mesh
        name="criticalError001"
        castShadow
        receiveShadow
        geometry={nodes.criticalError001.geometry}
        material={materials.criticalError}
        position={[0.74123573, 0.9924494, -1.71841013]}
        rotation={[1.57181809, -0.00396908, 0.9078767]}
        scale={[1.59891737, 1.59891725, 1.59891725]}
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
        position={[-0.71602428, 0.91997355, 1.73147035]}
        rotation={[Math.PI / 2, -1e-7, -0.76055749]}
        scale={0.27717373}
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
        position={[0.49475825, 0.91997355, -1.64883697]}
        rotation={[Math.PI / 2, 4e-8, 2.38199614]}
        scale={[0.2771737, 0.2771737, 0.27717373]}
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
        position={[-0.82269919, 1.22909224, 1.6045984]}
        rotation={[0.05735073, -0.05945803, -0.02084457]}
        scale={[0.20076783, 0.2007678, 0.20076782]}
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
        position={[0.60131109, 1.22909224, -1.52186286]}
        rotation={[3.08423838, 0.06041738, 3.12080304]}
        scale={[0.20076783, 0.20076779, 0.20076782]}
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
        position={[-0.89969265, 0.91160035, 1.45334375]}
        rotation={[1.43473772, -0.17336916, -0.86403597]}
        scale={[0.25433347, 0.25433347, 0.2543335]}
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
        position={[0.67815924, 0.91160035, -1.3705343]}
        rotation={[1.70668816, 0.17349941, 2.27852314]}
        scale={[0.25433347, 0.25433347, 0.2543335]}
      />
      <mesh
        name="OXTDM33NMJFA7FDN63C3IPYLGI"
        castShadow
        receiveShadow
        geometry={nodes.OXTDM33NMJFA7FDN63C3IPYLGI.geometry}
        material={materials.OXTDM33NMJFA7FDN63C3IPYLGI}
        position={[0.184304, 0.97668904, 1.8649832]}
        rotation={[0, 0, -1.56864678]}
        scale={0.53242356}
      />
      <mesh
        name="OXTDM33NMJFA7FDN63C3IPYLGI001"
        castShadow
        receiveShadow
        geometry={nodes.OXTDM33NMJFA7FDN63C3IPYLGI001.geometry}
        material={materials.OXTDM33NMJFA7FDN63C3IPYLGI}
        position={[-0.4054414, 0.97668904, -1.78321517]}
        rotation={[-Math.PI, 0.00096115, 1.57294582]}
        scale={0.53242356}
      />
      <mesh
        name="batman-logo-png-2039"
        castShadow
        receiveShadow
        geometry={nodes["batman-logo-png-2039"].geometry}
        material={materials["batman-logo-png-2039"]}
        position={[-1.76242816, 0.61464024, 1.89851665]}
        rotation={[1.57423975, 0.50498521, -1.67624618]}
        scale={[0.05271521, 0.0527152, 0.05271522]}
      />
      <mesh
        name="batman-logo-png-2039001"
        castShadow
        receiveShadow
        geometry={nodes["batman-logo-png-2039001"].geometry}
        material={materials["batman-logo-png-2039"]}
        position={[1.54132211, 0.61464024, -1.81487811]}
        rotation={[1.56788416, -0.50498807, 1.46644449]}
        scale={[0.05271521, 0.0527152, 0.05271522]}
      />
      <mesh
        name="dinosaur-downloading-for-pc-wallpaper-preview"
        castShadow
        receiveShadow
        geometry={
          nodes["dinosaur-downloading-for-pc-wallpaper-preview"].geometry
        }
        material={materials["dinosaur-downloading-for-pc-wallpaper-preview"]}
        position={[0.21329963, 0.92192519, 2.75810528]}
        rotation={[1.55025521, 0.03465204, -1.58256181]}
        scale={[0.5952878, 0.59528792, 0.5952878]}
      />
      <mesh
        name="dinosaur-downloading-for-pc-wallpaper-preview001"
        castShadow
        receiveShadow
        geometry={
          nodes["dinosaur-downloading-for-pc-wallpaper-preview001"].geometry
        }
        material={materials["dinosaur-downloading-for-pc-wallpaper-preview"]}
        position={[-0.43357885, 0.92192519, -2.67636442]}
        rotation={[1.59137089, -0.03463224, 1.55999242]}
        scale={[0.5952878, 0.59528786, 0.5952878]}
      />
      <mesh
        name="Suzanne"
        castShadow
        receiveShadow
        geometry={nodes.Suzanne.geometry}
        material={materials.Monkey}
        position={[-1.03483498, 0.81631678, 1.64484537]}
        rotation={[0, -0.87985759, 0]}
        scale={[0.00696993, 0.00696993, 0.00093791]}
      />
      <mesh
        name="Suzanne001"
        castShadow
        receiveShadow
        geometry={nodes.Suzanne001.geometry}
        material={materials.Monkey}
        position={[0.8134855, 0.81631678, -1.56190598]}
        rotation={[-Math.PI, 0.88081884, -Math.PI]}
        scale={[0.00696993, 0.00696993, 0.00093791]}
      />
      <mesh
        name="IMAGE"
        castShadow
        receiveShadow
        geometry={nodes.IMAGE.geometry}
        material={materials.IMAGE}
        position={[-0.36237204, 1.03758156, 2.84995151]}
        rotation={[Math.PI / 2, 9e-8, 1.58363774]}
        scale={[0.50231707, 0.50231707, 0.50231713]}
      />
      <mesh
        name="IMAGE001"
        castShadow
        receiveShadow
        geometry={nodes.IMAGE001.geometry}
        material={materials.IMAGE}
        position={[0.14218092, 1.03758156, -2.76765776]}
        rotation={[Math.PI / 2, 3e-8, -1.55699369]}
        scale={[0.50231707, 0.50231707, 0.50231713]}
      />
      <mesh
        name="PisoGranito"
        castShadow
        receiveShadow
        geometry={nodes.PisoGranito.geometry}
        material={materials.PisoGranito}
        position={[-1.9315747, 0.20803243, 1.89957023]}
        rotation={[0, -1.56459026, 0]}
        scale={1.43777549}
      />
      <mesh
        name="PisoGranito001"
        castShadow
        receiveShadow
        geometry={nodes.PisoGranito001.geometry}
        material={materials.PisoGranito}
        position={[1.71046937, 0.20803243, -1.81576884]}
        rotation={[-Math.PI, 1.56554288, -Math.PI]}
        scale={1.43777549}
      />
      <group
        name="babygroot"
        position={[-0.77145612, 0.78975886, 2.27534103]}
        rotation={[Math.PI / 2, 1.5e-7, 0.83092074]}
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
        position={[0.5507127, 0.78975886, -2.19265413]}
        rotation={[Math.PI / 2, -1.1e-7, -2.30971096]}
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
      <mesh
        name="Wood"
        castShadow
        receiveShadow
        geometry={nodes.Wood.geometry}
        material={materials.Wood}
        position={[-1.9315747, -0.11447406, 1.89957023]}
        rotation={[0, -1.56457665, 0]}
        scale={1.53632402}
      />
      <mesh
        name="Wood001"
        castShadow
        receiveShadow
        geometry={nodes.Wood001.geometry}
        material={materials.Wood}
        position={[1.71046937, -0.11447406, -1.81576884]}
        rotation={[-Math.PI, 1.5655269, -Math.PI]}
        scale={1.53632402}
      />
    </group>

  )
}

useGLTF.preload('/models/rooms/rooms.glb')