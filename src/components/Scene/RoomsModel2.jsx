import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {  useFrame, useLoader } from '@react-three/fiber'

export default function Model(props) {
  const maingroup = useRef()
  useFrame((state, delta) => (maingroup.current.rotation.y += 0.005))
  const { nodes, materials } =useGLTF('/models/rooms/scene.glb')
  return (
    <group {...props} ref={maingroup} dispose={null}>
      <group name="Scene">
        <group
          name="RootNode"
          position={[-0.06702539, 0, 2.51914644]}
          rotation={[0, 0.02504053, 0]}
        />
        <group
          name="Sketchfab_model"
          position={[1.24132419, -0.41083825, -4.43410444]}
          rotation={[-Math.PI / 2, -2e-8, 2.57112414]}
          scale={0.00333333}
        >
          <group
            name="Slendermanfbx"
            position={[-1016.72149658, -108.45809937, -471.5440979]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group
              name="RootNode001"
              position={[0.00013196, 0.00003967, -0.00001327]}
            >
              <group
                name="Mesh_0666"
                position={[0.00013196, 0.00003967, -0.00001327]}
              >
                <mesh
                  name="Mesh_0666_Tex_0666_0_dds_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh_0666_Tex_0666_0_dds_0.geometry}
                  material={materials.Tex_0666_0_dds}
                  position={[616.45599365, 745.3984375, -1172.93395996]}
                  rotation={[0.0962446, -0.62593178, 0.084669]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Object_86"
          position={[-0.06702539, 0, 2.51914644]}
          rotation={[0, 0.02504053, 0]}
        />
        <group
          name="Sketchfab_model001"
          position={[1.83090806, 0.05533981, -2.58170676]}
          rotation={[-Math.PI / 2, -3e-8, -0.78431125]}
          scale={0.00500197}
        >
          <group
            name="3009959deb4043e3aab9d591a13dc671fbx"
            position={[0, 0.00003037, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode002" position={[-0.00000748, 0, -0.00003186]}>
              <group name="couch1" position={[-0.00000748, 0, -0.00003186]}>
                <mesh
                  name="couch1_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.couch1_lambert1_0.geometry}
                  material={materials.lambert1}
                  position={[129.50665283, -18.07505226, 90.4571991]}
                  rotation={[0, -0.06247947, 0]}
                  scale={[0.93587071, 0.93587083, 0.93587077]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Armature"
          position={[1.74662638, 0.02976418, 2.15992093]}
          rotation={[0, 0.02504053, 0]}
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
          <group
            name="shorts"
            position={[-0.23551458, 4.52522516, 0.31984875]}
            rotation={[0, -0.02085175, 0]}
          >
            <mesh
              name="Cube016"
              castShadow
              receiveShadow
              geometry={nodes.Cube016.geometry}
              material={materials.shorts}
            />
            <mesh
              name="Cube016_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube016_1.geometry}
              material={materials.cuerdas}
            />
          </group>
          <group
            name="Show"
            position={[-0.23551458, 4.52522516, 0.31984875]}
            rotation={[0, -0.02085175, 0]}
          >
            <mesh
              name="Cube013"
              castShadow
              receiveShadow
              geometry={nodes.Cube013.geometry}
              material={materials.Body}
            />
            <mesh
              name="Cube013_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube013_1.geometry}
              material={materials.Eye}
            />
            <mesh
              name="Cube013_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube013_2.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <mesh
            name="t-shirt"
            castShadow
            receiveShadow
            geometry={nodes["t-shirt"].geometry}
            material={materials["t-shirt"]}
            position={[-0.23551458, 4.52522516, 0.31984875]}
            rotation={[0, -0.02085175, 0]}
          />
          <mesh
            name="Shoes"
            castShadow
            receiveShadow
            geometry={nodes.Shoes.geometry}
            material={materials.shoes}
            position={[-0.23551458, 4.52522516, 0.31984875]}
            rotation={[0, -0.02085175, 0]}
          />
        </group>
        <group
          name="Armature003"
          position={[2.22485471, -0.00305712, -1.41082788]}
          rotation={[-0.41662958, -0.6865328, -0.38101991]}
          scale={[0.102875, 0.10287501, 0.10287501]}
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
          <group
            name="shorts002"
            position={[-0.22056597, 4.57989454, 0.15979183]}
            rotation={[0, -0.02085173, 0]}
          >
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
          <group
            name="Show001"
            position={[-0.22056597, 4.57989454, 0.15979183]}
            rotation={[0, -0.02085173, 0]}
          >
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
            name="t-shirt001"
            castShadow
            receiveShadow
            geometry={nodes["t-shirt001"].geometry}
            material={materials["t-shirt"]}
            position={[-0.22056597, 4.57989454, 0.15979183]}
            rotation={[0, -0.02085173, 0]}
          />
          <mesh
            name="Shoes001"
            castShadow
            receiveShadow
            geometry={nodes.Shoes001.geometry}
            material={materials.shoes}
            position={[-0.22056597, 4.57989454, 0.15979183]}
            rotation={[0, -0.02085173, 0]}
          />
        </group>
        <group
          name="Armature001"
          position={[-1.25268054, 0.09881032, 1.59006095]}
          rotation={[-1.95794031, 1.13736644, 1.95110755]}
          scale={[0.10808204, 0.10808203, 0.10808204]}
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
            material={materials["shorts.002"]}
            position={[0, 4.52522516, 0]}
          />
          <skinnedMesh
            name="Shoes002"
            geometry={nodes.Shoes002.geometry}
            material={materials["shoes.002"]}
            skeleton={nodes.Shoes002.skeleton}
          />
          <mesh
            name="shirt"
            castShadow
            receiveShadow
            geometry={nodes.shirt.geometry}
            material={materials["shirt.001"]}
            position={[0, 4.52522516, 0]}
          />
          <group name="Show002" position={[0, 4.52522516, 0]}>
            <mesh
              name="Cube014"
              castShadow
              receiveShadow
              geometry={nodes.Cube014.geometry}
              material={materials["Body.002"]}
            />
            <mesh
              name="Cube014_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube014_1.geometry}
              material={materials["Eye.002"]}
            />
            <mesh
              name="Cube014_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube014_2.geometry}
              material={materials["Material.015"]}
            />
          </group>
        </group>
        <group
          name="agarres"
          position={[2.16354513, 0.56410557, 0.55468303]}
          rotation={[-1.58504509, 0.0021173, 0.00252704]}
          scale={[1.21864986, 1.21864974, 1.21864998]}
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
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Material}
          position={[1.72115719, 0, 1.69875121]}
          rotation={[0, 0.00418879, 0]}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.Material}
          position={[-1.66478407, 0, 1.71151996]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.Material}
          position={[1.72115719, 0, 1.69875121]}
          rotation={[0, 0.00418879, 0]}
        />
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.Material}
          position={[1.69007027, 0, -1.68911576]}
          rotation={[0, 1.56980121, 0]}
        />
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials.Material}
          position={[-1.6769191, 0, -1.66125607]}
          rotation={[Math.PI, -0.00947389, Math.PI]}
        />
        <mesh
          name="alcoclchado"
          castShadow
          receiveShadow
          geometry={nodes.alcoclchado.geometry}
          material={materials["Material.007"]}
          position={[1.64318573, -0.02607512, 1.69907784]}
          rotation={[0, -0.00979795, 0]}
        />
        <mesh
          name="Piso001"
          castShadow
          receiveShadow
          geometry={nodes.Piso001.geometry}
          material={materials["Piso.001"]}
          position={[1.64308703, 0, 1.67553854]}
          rotation={[0, 1.57052524, 0]}
          scale={1.51887202}
        />
        <mesh
          name="Piso002"
          castShadow
          receiveShadow
          geometry={nodes.Piso002.geometry}
          material={materials["Piso.001"]}
          position={[-1.65101767, 0, 1.62764049]}
          rotation={[0, 0.00561089, 0]}
          scale={[1.51887214, 1.51887202, 1.51887214]}
        />
        <mesh
          name="Piso003"
          castShadow
          receiveShadow
          geometry={nodes.Piso003.geometry}
          material={materials["Piso.001"]}
          position={[1.64308703, 0, 1.67553854]}
          rotation={[0, 1.57052524, 0]}
          scale={1.51887202}
        />
        <mesh
          name="Piso004"
          castShadow
          receiveShadow
          geometry={nodes.Piso004.geometry}
          material={materials["Piso.001"]}
          position={[1.66644657, 0, -1.61116815]}
          rotation={[-Math.PI, 0.00516978, -Math.PI]}
          scale={[1.51887214, 1.51887202, 1.51887214]}
        />
        <mesh
          name="Piso005"
          castShadow
          receiveShadow
          geometry={nodes.Piso005.geometry}
          material={materials["Piso.001"]}
          position={[-1.5980674, 0, -1.62476945]}
          rotation={[0, -1.55237015, 0]}
          scale={1.51887202}
        />
        <mesh
          name="RuedaPie"
          castShadow
          receiveShadow
          geometry={nodes.RuedaPie.geometry}
          material={materials["Material.001"]}
          position={[1.56400609, 0, 1.66025567]}
          rotation={[0, 0.00418879, 0]}
          scale={[1.53632414, 1.53632402, 1.53632414]}
        />
        <mesh
          name="RuedaPie001"
          castShadow
          receiveShadow
          geometry={nodes.RuedaPie001.geometry}
          material={materials["Material.001"]}
          position={[-1.62020242, 0, 1.56488109]}
          rotation={[Math.PI, -1.56773421, Math.PI]}
          scale={1.53632402}
        />
        <mesh
          name="Cylinder001_Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_Cylinder001.geometry}
          material={materials["Star.001"]}
          position={[0.43186092, 0.0570142, 1.23420095]}
          rotation={[1.55285344, 0.02146151, -0.87436492]}
          scale={0.02074506}
        />
        <mesh
          name="Cylinder002_Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_Cylinder001.geometry}
          material={materials["Star.001"]}
          position={[0.43186092, 0.0570142, 1.23420095]}
          rotation={[1.55285344, 0.02146151, -0.87436492]}
          scale={0.02074506}
        />
        <mesh
          name="Cylinder003_Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_Cylinder001.geometry}
          material={materials["Star.001"]}
          position={[0.43186092, 0.0570142, 1.23420095]}
          rotation={[1.55285344, 0.02146151, -0.87436492]}
          scale={0.02074506}
        />
        <mesh
          name="Cylinder_Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_Cylinder001.geometry}
          material={materials["Star.001"]}
          position={[0.43186092, 0.0570142, 1.23420095]}
          rotation={[1.55285344, 0.02146151, -0.87436492]}
          scale={0.02074506}
        />
        <mesh
          name="CHAIR"
          castShadow
          receiveShadow
          geometry={nodes.CHAIR.geometry}
          material={materials["Default OBJ"]}
          position={[-1.36423659, 0.0814184, 1.62545943]}
          rotation={[1.54542298, 0.24986729, -1.53936738]}
          scale={0.00725737}
        />
        <mesh
          name="DragonBall_Sphere002"
          castShadow
          receiveShadow
          geometry={nodes.DragonBall_Sphere002.geometry}
          material={materials["DragonBall.001"]}
          position={[0.74673307, 0.09252083, 0.55734253]}
          rotation={[1.55285344, 0.02146151, -0.87436492]}
          scale={0.05943304}
        />
        <mesh
          name="PowerPole_Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.PowerPole_Cylinder001.geometry}
          material={materials["PowerPole.001"]}
          position={[0.70943195, 0.99051833, 0.51344919]}
          rotation={[-0.27015468, 0.91550283, 0.53724598]}
          scale={0.03655697}
        />
        <mesh
          name="?"
          castShadow
          receiveShadow
          geometry={nodes["?"].geometry}
          material={materials["Material.009"]}
          position={[-0.51337463, 1.18022847, 1.40618813]}
          rotation={[1.51356889, -0.04550679, 0.67110172]}
          scale={0.39624137}
        />
        <group
          name="Cube002"
          position={[-0.50816333, 0.92425776, 1.41333163]}
          rotation={[0, -0.88166518, 0]}
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
          name="Plane001"
          position={[-0.88630974, 0.62429959, 1.91440105]}
          rotation={[0, -1.56636696, 0]}
          scale={[0.00847909, 0.00166361, 0.00847909]}
        >
          <mesh
            name="Plane005"
            castShadow
            receiveShadow
            geometry={nodes.Plane005.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            name="Plane005_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane005_1.geometry}
            material={materials["Material.008"]}
          />
        </group>
        <mesh
          name="cuerda"
          castShadow
          receiveShadow
          geometry={nodes.cuerda.geometry}
          material={nodes.cuerda.material}
          position={[0.83301872, 1.4410646, 0.66986132]}
          rotation={[-0.2004326, 0.72307444, -0.08855778]}
          scale={0.02764532}
        />
        <group
          name="Cylinder001"
          position={[-0.21015687, 1.26929462, 2.02662158]}
          rotation={[1.82104233, 1.03496177, 2.9543629]}
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
        <mesh
          name="Holder_Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Holder_Cylinder.geometry}
          material={materials["Holder.001"]}
          position={[0.7219041, 0.94760031, 0.5075376]}
          rotation={[-0.27015472, 0.91550283, 0.53724603]}
          scale={0.03228367}
        />
        <group
          name="glass"
          position={[-1.64121497, -0.14428574, 1.71998453]}
          rotation={[0, -1.56636696, 0]}
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
        <group
          name="Plane"
          position={[-0.58153796, -0.5558157, 1.71529984]}
          rotation={[0, -1.56636696, 0]}
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
          name="Cylinder"
          position={[-0.1909823, 1.26090193, 2.06771803]}
          rotation={[1.80921051, 0.55036203, 2.71343824]}
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
        <mesh
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Computer.Monitor.Glass"]}
          position={[-0.65125704, 0.98880404, 1.5312233]}
          rotation={[0, -0.88166526, 0]}
          scale={[0.14341043, 0.14341043, 0.01413031]}
        />
        <group
          name="Plane015"
          position={[-1.02257669, 0.61817414, 2.12989926]}
          rotation={[0, -1.1668729, 0]}
          scale={[0.01123011, 0.01449813, 0.01123011]}
        >
          <mesh
            name="Plane007"
            castShadow
            receiveShadow
            geometry={nodes.Plane007.geometry}
            material={materials["plastik_mat.001"]}
          />
          <mesh
            name="Plane007_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane007_1.geometry}
            material={materials["plastik_polysk.002"]}
          />
          <mesh
            name="Plane007_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane007_2.geometry}
            material={materials.guma}
          />
          <mesh
            name="Plane007_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane007_3.geometry}
            material={materials["Material.008"]}
          />
        </group>
        <mesh
          name="Plane026"
          castShadow
          receiveShadow
          geometry={nodes.Plane026.geometry}
          material={materials["plastik_polysk.klawiatura"]}
          position={[-0.92814195, 0.62252194, 1.73933101]}
          rotation={[0, -1.56636696, 0]}
          scale={0.06621987}
        />
        <mesh
          name="Plane027"
          castShadow
          receiveShadow
          geometry={nodes.Plane027.geometry}
          material={materials["plastik_polysk.001"]}
          position={[-0.92818272, 0.62374049, 1.73933125]}
          rotation={[1.43936272, -1.5370783, 1.43928882]}
          scale={[0.26148272, 0.06992919, 0.05632584]}
        />
        <group
          name="glass001"
          position={[-2.20976925, -0.14428574, 1.72236609]}
          rotation={[0, -1.56636696, 0]}
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
        <mesh
          name="water_drop"
          castShadow
          receiveShadow
          geometry={nodes.water_drop.geometry}
          material={materials["None.001"]}
          position={[-1.84035003, 0.75387156, 1.98797274]}
          rotation={[Math.PI / 2, 2.1e-7, 1.44844691]}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={nodes.Plane002.material}
          position={[1.51475, -0.00687793, -1.07403195]}
          rotation={[0, 0.00418879, 0]}
          scale={0.41722798}
        />
        <mesh
          name="for-starts"
          castShadow
          receiveShadow
          geometry={nodes["for-starts"].geometry}
          material={materials["for-starts"]}
          position={[0.6025123, 0.10270426, 0.5336138]}
          rotation={[2.54859255, 0.33671343, -1.99367857]}
          scale={[0.09174054, 0.09174053, 0.09174053]}
        />
        <mesh
          name="for-starts001"
          castShadow
          receiveShadow
          geometry={nodes["for-starts001"].geometry}
          material={materials["for-starts"]}
          position={[0.56669289, 0.10993767, 0.62727875]}
          rotation={[1.99808614, -0.66465796, -2.72368417]}
          scale={[0.09174055, 0.09174053, 0.09174053]}
        />
        <mesh
          name="584830f5cef1014c0b5e4aa1"
          castShadow
          receiveShadow
          geometry={nodes["584830f5cef1014c0b5e4aa1"].geometry}
          material={materials["584830f5cef1014c0b5e4aa1"]}
          position={[1.77157128, 0.48790503, 2.34953594]}
          rotation={[-1.08206088, 0.19808351, -2.73606854]}
          scale={[-0.2165173, -0.2165173, -0.21651731]}
        />
        <mesh
          name="nodejs-1-logo-png-transparent"
          castShadow
          receiveShadow
          geometry={nodes["nodejs-1-logo-png-transparent"].geometry}
          material={materials["nodejs-1-logo-png-transparent"]}
          position={[0.71724492, 1.18415666, 0.79234022]}
          rotation={[1.67257752, 0.17382159, -0.87461327]}
          scale={[0.19641726, 0.19641729, 0.19641727]}
        />
        <mesh
          name="albertEinstein"
          castShadow
          receiveShadow
          geometry={nodes.albertEinstein.geometry}
          material={materials.albertEinstein}
          position={[-0.71319157, 0.97815627, 0.14656192]}
          rotation={[Math.PI / 2, 0, -0.004421]}
          scale={0.63523984}
        />
        <mesh
          name="mirror001"
          castShadow
          receiveShadow
          geometry={nodes.mirror001.geometry}
          material={materials["mirror.002"]}
          position={[0.71478897, 0.72799909, 0.80512083]}
          rotation={[-0.22297561, 0.86219613, 0.17049083]}
          scale={0.00287}
        />
        <mesh
          name="criticalError"
          castShadow
          receiveShadow
          geometry={nodes.criticalError.geometry}
          material={materials.criticalError}
          position={[-0.69393474, 0.99548477, 1.59790945]}
          rotation={[1.56977138, 0.00396825, -2.23286956]}
          scale={[1.44045484, 1.44045448, 1.44045448]}
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
          position={[-0.42536277, 0.91997355, 1.55408216]}
          rotation={[Math.PI / 2, 0, -0.7587498]}
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
          position={[-0.53180814, 1.22909224, 1.42701781]}
          rotation={[0.05735819, -0.06126355, -0.02074183]}
          scale={[0.20076783, 0.2007678, 0.20076782]}
        />
        <group
          name="Plane017"
          position={[-0.9389962, 0.62500221, 1.49473071]}
          rotation={[0, -1.56636696, 0]}
          scale={0.06621987}
        >
          <mesh
            name="Plane006"
            castShadow
            receiveShadow
            geometry={nodes.Plane006.geometry}
            material={materials.klawiatura_klawisze}
          />
          <mesh
            name="Plane006_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane006_1.geometry}
            material={materials["Material.011"]}
          />
        </group>
        <mesh
          name="dinosaur-downloading-for-pc-wallpaper-preview"
          castShadow
          receiveShadow
          geometry={
            nodes["dinosaur-downloading-for-pc-wallpaper-preview"].geometry
          }
          material={materials["dinosaur-downloading-for-pc-wallpaper-preview"]}
          position={[0.20519269, 0.85092282, 1.98034441]}
          rotation={[1.55040053, 0.03473768, -1.58675219]}
          scale={[0.5952878, 0.59528786, 0.5952878]}
        />
        <mesh
          name="0"
          castShadow
          receiveShadow
          geometry={nodes["0"].geometry}
          material={materials["Material.016"]}
          morphTargetDictionary={nodes["0"].morphTargetDictionary}
          morphTargetInfluences={nodes["0"].morphTargetInfluences}
          position={[-0.06627066, -1.93773961, -1.57711792]}
          rotation={[2.75919727, 0.86227856, -2.65608725]}
          scale={[0.00202822, 0.00202821, 0.00202822]}
        />
        <mesh
          name="Suzanne"
          castShadow
          receiveShadow
          geometry={nodes.Suzanne.geometry}
          material={materials.Monkey}
          position={[-0.74401617, 0.81631678, 1.46688128]}
          rotation={[0, -0.88166518, 0]}
          scale={[0.00696993, 0.00696993, 0.00093791]}
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
          position={[-0.6085279, 0.91160035, 1.2756238]}
          rotation={[1.43505152, -0.173614, -0.86221781]}
          scale={[0.25433347, 0.25433347, 0.2543335]}
        />
        <mesh
          name="kisspng-stone-wall-brick-cracks-in-the-walls-5a6a354defb004337"
          castShadow
          receiveShadow
          geometry={
            nodes[
              "kisspng-stone-wall-brick-cracks-in-the-walls-5a6a354defb004337"
            ].geometry
          }
          material={
            materials[
              "kisspng-stone-wall-brick-cracks-in-the-walls-5a6a354defb004.337"
            ]
          }
          position={[1.75451255, 0.9524765, -0.12281501]}
          rotation={[-1.57364523, -0.00007135, 0.02504043]}
          scale={0.75764012}
        />
        <mesh
          name="ink-303244_640"
          castShadow
          receiveShadow
          geometry={nodes["ink-303244_640"].geometry}
          material={materials["ink-303244_640"]}
          position={[0.90877408, 1.23025084, -0.39826715]}
          rotation={[-1.55631337, 0.00036273, 0.02503791]}
          scale={[0.49928305, 0.49928311, 0.49928311]}
        />
        <mesh
          name="kisspng-portable-network-"
          castShadow
          receiveShadow
          geometry={nodes["kisspng-portable-network-"].geometry}
          material={materials["kisspng-portable-network-"]}
          position={[1.75971568, 0.93020487, -0.1828472]}
          rotation={[-1.60065575, 0.52992343, 0.03670117]}
        />
        <mesh
          name="alfombra"
          castShadow
          receiveShadow
          geometry={nodes.alfombra.geometry}
          material={materials.alfombra}
          position={[1.27660203, 0.00509998, -1.15721846]}
          rotation={[0, 0.00418879, 0]}
          scale={1.34361005}
        />
        <mesh
          name="OXTDM33NMJFA7FDN63C3IPYLGI"
          castShadow
          receiveShadow
          geometry={nodes.OXTDM33NMJFA7FDN63C3IPYLGI.geometry}
          material={materials.OXTDM33NMJFA7FDN63C3IPYLGI}
          position={[0.1729849, 0.97668904, 1.21364963]}
          rotation={[0, 0.00418878, -1.56864678]}
          scale={0.53242356}
        />
        <mesh
          name="Franquicia-terror-Viernes-13"
          castShadow
          receiveShadow
          geometry={nodes["Franquicia-terror-Viernes-13"].geometry}
          material={materials["Franquicia-terror-Viernes-13"]}
          position={[0.82112467, 0.59401089, -0.84817159]}
          rotation={[1.58100519, 0.01419761, -2.34525075]}
          scale={[0.89415538, 0.89415538, 0.89415532]}
        />
        <mesh
          name="dlfpt-portal-png-140301"
          castShadow
          receiveShadow
          geometry={nodes["dlfpt-portal-png-140301"].geometry}
          material={materials["dlf.pt-portal-png-140301"]}
          position={[0.25985515, 0.67907119, -0.32030559]}
          rotation={[1e-8, -0.06276054, -1.54902341]}
          scale={[2.70015121, 2.70015144, 2.70015144]}
        />
        <mesh
          name="dlfpt-portal-png-140301001"
          castShadow
          receiveShadow
          geometry={nodes["dlfpt-portal-png-140301001"].geometry}
          material={materials["dlf.pt-portal-png-140301"]}
          position={[0.30202001, 0.33452138, -1.69082236]}
          rotation={[0.13668415, 0.89249741, -0.21206118]}
          scale={[3.09441996, 3.09441948, 3.09441972]}
        />
        <mesh
          name="splatter-303569_640"
          castShadow
          receiveShadow
          geometry={nodes["splatter-303569_640"].geometry}
          material={materials["splatter-303569_640"]}
          position={[0.24379545, 0.80465007, -2.03274465]}
          rotation={[0, 0.00255295, -1.6780621]}
        />
        <mesh
          name="IMAGE"
          castShadow
          receiveShadow
          geometry={nodes.IMAGE.geometry}
          material={materials.IMAGE}
          position={[-0.11250629, 1.03758156, 0.59417379]}
          rotation={[Math.PI / 2, 3e-8, 1.58544537]}
          scale={[0.50231707, 0.50231707, 0.50231713]}
        />
        <mesh
          name="PisoGranito"
          castShadow
          receiveShadow
          geometry={nodes.PisoGranito.geometry}
          material={materials.PisoGranito}
          position={[-1.64121497, 0.20803243, 1.71998453]}
          rotation={[0, -1.56638607, 0]}
          scale={1.43777549}
        />
        <group
          name="babygroot"
          position={[-0.48177743, 0.78975886, 2.09785199]}
          rotation={[Math.PI / 2, 1.5e-7, 0.83272835]}
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
          name="defaultMaterial"
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials["02___Default"]}
          position={[0.78411603, 0.55002588, -0.81206787]}
          rotation={[-Math.PI, 0.80868862, -Math.PI]}
          scale={[0.92140865, 0.92140859, 0.92140865]}
        />
        <mesh
          name="Wood"
          castShadow
          receiveShadow
          geometry={nodes.Wood.geometry}
          material={materials.Wood}
          position={[-1.64121497, -0.114474, 1.71998453]}
          rotation={[0, -1.56636696, 0]}
          scale={1.53632402}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/rooms/scene.glb");