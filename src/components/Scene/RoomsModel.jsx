import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {  useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Model(props) {
  const maingroup = useRef()
  useFrame((state, delta) => (maingroup.current.rotation.y += 0.005))
  const { nodes, materials } =useGLTF('https://res.cloudinary.com/darvaxtkj/image/upload/v1661996457/scene_lmp2nu.glb')
  return (
    <group {...props}  dispose={null}>
    <group name="Scene" ref={maingroup} >
      <group
        name="Sketchfab_model"
        position={[-2.06298685, 0.09355097, -1.51134431]}
        rotation={[2.06254659, 0, 0.0202473]}
        scale={[0.84600759, 0.84600753, 0.84600753]}
      >
        <group name="pGunLowfbx" rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <group name="RootNode" position={[0.00001504, -0.00001335, 0]}>
            <group name="pGunLow" position={[0.00001504, -0.00001335, 0]}>
              <mesh
                name="pGunLow_Material_#0_0"
                castShadow
                receiveShadow
                geometry={nodes["pGunLow_Material_#0_0"].geometry}
                material={materials.PistolaDePortal}
                position={[0.00001504, -0.00001335, 0]}
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
        <mesh
          name="t-shirt"
          castShadow
          receiveShadow
          geometry={nodes["t-shirt"].geometry}
          material={materials["t-shirt"]}
          position={[-0.23551458, 4.52522516, 0.31984875]}
          rotation={[0, -0.02085175, 0]}
        />
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
            material={materials.shortHair}
          />
        </group>
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
        <mesh
          name="t-shirt001"
          castShadow
          receiveShadow
          geometry={nodes["t-shirt001"].geometry}
          material={materials["t-shirt"]}
          position={[-0.22056597, 4.57989454, 0.15979183]}
          rotation={[0, -0.02085173, 0]}
        />
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
            material={materials.shortHair}
          />
        </group>
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
          material={materials["shorts-marron"]}
          position={[0, 4.52522516, 0]}
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
            material={materials.Body}
          />
          <mesh
            name="Cube014_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube014_1.geometry}
            material={materials.Eye}
          />
          <mesh
            name="Cube014_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube014_2.geometry}
            material={materials.shortHair}
          />
        </group>
        <mesh
          name="Shoes002"
          castShadow
          receiveShadow
          geometry={nodes.Shoes002.geometry}
          material={materials.shoes}
          position={[0, 4.52522516, 0]}
        />
      </group>
      <group
        name="groodbaby"
        position={[-0.58412302, 0.53986531, 2.14546061]}
        rotation={[-Math.PI / 2, -5e-8, -1.84496792]}
        scale={0.0536028}
      />
      <group
        name="sofa"
        position={[1.83090806, 0.05533981, -2.58170676]}
        rotation={[-Math.PI / 2, -3e-8, -0.78431125]}
        scale={0.00500197}
      >
        <group
          name="sofa001"
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
        name="slenderman"
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
            name="slenderman001"
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
                material={materials["saco-de-slenderman"]}
                position={[616.45599365, 745.3984375, -1172.93395996]}
                rotation={[0.0962446, -0.62593178, 0.084669]}
              />
            </group>
          </group>
        </group>
      </group>
      <group
        name="Armature002"
        position={[-1.16268778, 0.01328129, -0.95735961]}
        rotation={[-Math.PI, 0.86260514, -Math.PI]}
        scale={0.10472432}
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
        <group name="jeans" position={[0, 4.52522469, 0]}>
          <mesh
            name="Cube027"
            castShadow
            receiveShadow
            geometry={nodes.Cube027.geometry}
            material={materials.Body}
          />
          <mesh
            name="Cube027_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube027_1.geometry}
            material={materials.Eye}
          />
          <mesh
            name="Cube027_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube027_2.geometry}
            material={materials.shortHair}
          />
          <mesh
            name="Cube027_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube027_3.geometry}
            material={materials.shirt}
          />
          <mesh
            name="Cube027_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube027_4.geometry}
            material={materials.jeans}
          />
          <mesh
            name="Cube027_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube027_5.geometry}
            material={materials.guantes}
          />
        </group>
        <mesh
          name="Shoes003"
          castShadow
          receiveShadow
          geometry={nodes.Shoes003.geometry}
          material={materials.shoes}
          position={[0, 4.52522469, 0]}
        />
      </group>
      <group
        name="Armature004"
        position={[-1.10097468, 0.35985613, -1.05503988]}
        rotation={[-Math.PI, 0.86260514, -Math.PI]}
        scale={0.10472432}
      >
        <primitive object={nodes.Centro_4} />
        <primitive object={nodes.CInturaBaja} />
        <primitive object={nodes.LHombrera} />
        <primitive object={nodes.RHombrera} />
        <skinnedMesh
          name="robe"
          geometry={nodes.robe.geometry}
          material={materials["chefhat_1_(null)"]}
          skeleton={nodes.robe.skeleton}
        />
      </group>
      <group
        name="metarig"
        position={[-1.22683859, 0.00642688, -2.0415411]}
        rotation={[-0.12518563, -1.03227886, -0.1160797]}
        scale={[0.13825282, 0.13825279, 0.13825284]}
      >
        <primitive object={nodes.spine004} />
        <group
          name="Cube"
          position={[-0.02144296, 0.52491641, 0.06056206]}
          scale={[0.31364286, 0.31364292, 0.31364289]}
        >
          <mesh
            name="Cube040"
            castShadow
            receiveShadow
            geometry={nodes.Cube040.geometry}
            material={materials.dog}
          />
          <mesh
            name="Cube040_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube040_1.geometry}
            material={materials.eyes}
          />
        </group>
      </group>
      <group
        name="metarig001"
        position={[2.28270674, 0.20802745, -0.40469736]}
        rotation={[2.5263079, -0.94628878, 2.90346706]}
        scale={[0.13825282, 0.13825279, 0.13825284]}
      >
        <primitive object={nodes.spine004_1} />
        <group
          name="Cube003"
          position={[-0.0214451, 0.52491629, 0.06056327]}
          scale={[0.31364289, 0.31364292, 0.31364289]}
        >
          <mesh
            name="Cube028"
            castShadow
            receiveShadow
            geometry={nodes.Cube028.geometry}
            material={materials.dog}
          />
          <mesh
            name="Cube028_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube028_1.geometry}
            material={materials.eyes}
          />
        </group>
      </group>
      <group
        name="metarig002"
        position={[1.04352891, 0.15866396, -1.82369471]}
        rotation={[-0.65682812, -0.88621432, -0.87332697]}
        scale={[0.27632222, 0.27632219, 0.27632225]}
      >
        <primitive object={nodes.spine} />
        <primitive object={nodes.thumbL} />
        <primitive object={nodes.thumbR} />
        <primitive object={nodes.fingerL} />
        <primitive object={nodes.fingerR} />
        <mesh
          name="jeans001"
          castShadow
          receiveShadow
          geometry={nodes.jeans001.geometry}
          material={materials["Material.001"]}
          position={[0.07339281, 1.42195535, 0.02611375]}
          rotation={[-0.00009472, -0.00010383, -0.00051575]}
          scale={0.35589167}
        />
        <mesh
          name="shoes"
          castShadow
          receiveShadow
          geometry={nodes.shoes.geometry}
          material={materials["Eye.002"]}
          position={[0.07339281, 1.42195535, 0.02611375]}
          rotation={[-0.00009472, -0.00010383, -0.00051575]}
          scale={0.35589167}
        />
        <mesh
          name="blusa"
          castShadow
          receiveShadow
          geometry={nodes.blusa.geometry}
          material={materials["shirt.003"]}
          position={[0.07339281, 1.42195535, 0.02611375]}
          rotation={[-0.00009472, -0.00010383, -0.00051575]}
          scale={0.35589167}
        />
        <group
          name="Show003"
          position={[0.07266223, 1.42199075, 0.02624011]}
          scale={0.3558917}
        >
          <mesh
            name="Cube039"
            castShadow
            receiveShadow
            geometry={nodes.Cube039.geometry}
            material={materials["Body.002"]}
          />
          <mesh
            name="Cube039_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube039_1.geometry}
            material={materials["Eye.002"]}
          />
        </group>
      </group>
      <group
        name="BezierCurve038"
        position={[1.54059064, 8.43236828, -1.53195691]}
        rotation={[1.23029299, 0.48564483, 0.01273362]}
        scale={0.2652784}
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
        name="DragonBall_Sphere002"
        castShadow
        receiveShadow
        geometry={nodes.DragonBall_Sphere002.geometry}
        material={materials["DragonBall.001"]}
        position={[0.74673307, 0.09252083, 0.51372772]}
        rotation={[1.55285344, 0.02146151, -0.87436492]}
        scale={0.05943304}
      />
      <group
        name="caramelo"
        position={[-2.08533072, 0.44161889, -1.57293987]}
        rotation={[Math.PI, -1.17525294, Math.PI]}
        scale={0.02442229}
      >
        <mesh
          name="buffer-0-mesh-0"
          castShadow
          receiveShadow
          geometry={nodes["buffer-0-mesh-0"].geometry}
          material={materials.plato}
        />
        <mesh
          name="buffer-0-mesh-0_1"
          castShadow
          receiveShadow
          geometry={nodes["buffer-0-mesh-0_1"].geometry}
          material={materials.flan}
        />
        <mesh
          name="buffer-0-mesh-0_2"
          castShadow
          receiveShadow
          geometry={nodes["buffer-0-mesh-0_2"].geometry}
          material={materials.carameloflan}
        />
      </group>
      <mesh
        name="Cube001"
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.wall}
        position={[1.72115719, 0, 1.69875121]}
        rotation={[0, 0.00418879, 0]}
      />
      <mesh
        name="Cube004"
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.wall}
        position={[1.72115719, 0, 1.69875121]}
        rotation={[0, 0.00418879, 0]}
      />
      <mesh
        name="Cube005"
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.wall}
        position={[1.69007027, 0, -1.68911576]}
        rotation={[0, 1.56980121, 0]}
      />
      <mesh
        name="Cube006"
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials.wall}
        position={[-1.6769191, 0, -1.66125607]}
        rotation={[Math.PI, -0.00947389, Math.PI]}
      />
      <mesh
        name="alcoclchado"
        castShadow
        receiveShadow
        geometry={nodes.alcoclchado.geometry}
        material={materials.floorGym}
        position={[1.64318573, -0.02607512, 1.69907784]}
        rotation={[0, -0.00979795, 0]}
      />
      <mesh
        name="alcoclchado001"
        castShadow
        receiveShadow
        geometry={nodes.alcoclchado001.geometry}
        material={materials.floorGym}
        position={[-1.5090853, -0.03712055, -1.5635066]}
        rotation={[3.13159461, 0.02150819, 3.13389549]}
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
        name="Holder_Cylinder"
        castShadow
        receiveShadow
        geometry={nodes.Holder_Cylinder.geometry}
        material={materials["Holder.001"]}
        position={[0.75893736, 0.82283503, 0.4863829]}
        rotation={[-0.27015467, 0.91550283, 0.53724597]}
        scale={[0.04148283, 0.04148282, 0.04148282]}
      />
      <mesh
        name="?"
        castShadow
        receiveShadow
        geometry={nodes["?"].geometry}
        material={materials.exclamacion}
        position={[-0.51337463, 1.18022847, 1.40618813]}
        rotation={[1.51356889, -0.04550679, 0.67110172]}
        scale={0.39624137}
      />
      <mesh
        name="CHAIR"
        castShadow
        receiveShadow
        geometry={nodes.CHAIR.geometry}
        material={materials["chefhat_1_(null)"]}
        position={[-1.36423659, 0.0814184, 1.62545943]}
        rotation={[1.54542298, 0.24986729, -1.53936738]}
        scale={0.00725737}
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
          material={materials.ironPesas}
        />
        <mesh
          name="Box004__0001_1"
          castShadow
          receiveShadow
          geometry={nodes.Box004__0001_1.geometry}
          material={materials["desk paste"]}
        />
      </group>
      <mesh
        name="RuedaPie"
        castShadow
        receiveShadow
        geometry={nodes.RuedaPie.geometry}
        material={materials.ruedapie}
        position={[1.56400609, 0, 1.66025567]}
        rotation={[0, 0.00418879, 0]}
        scale={[1.53632414, 1.53632402, 1.53632414]}
      />
      <mesh
        name="RuedaPie001"
        castShadow
        receiveShadow
        geometry={nodes.RuedaPie001.geometry}
        material={materials.ruedapie}
        position={[-1.62020242, 0, 1.56488109]}
        rotation={[Math.PI, -1.56773421, Math.PI]}
        scale={1.53632402}
      />
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
          material={nodes.Plane005.material}
        />
        <mesh
          name="Plane005_1"
          castShadow
          receiveShadow
          geometry={nodes.Plane005_1.geometry}
          material={nodes.Plane005_1.material}
        />
      </group>
      <mesh
        name="Plane026"
        castShadow
        receiveShadow
        geometry={nodes.Plane026.geometry}
        material={materials["desk paste"]}
        position={[-0.92814195, 0.62252194, 1.73933101]}
        rotation={[0, -1.56636696, 0]}
        scale={0.06621987}
      />
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
      <group
        name="glass001"
        position={[-2.11768436, -0.14428574, 1.69240296]}
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
      <mesh
        name="water_drop"
        castShadow
        receiveShadow
        geometry={nodes.water_drop.geometry}
        material={materials["Computer.Monitor.Glass"]}
        position={[-1.84035003, 0.75387156, 1.98797274]}
        rotation={[Math.PI / 2, 2.1e-7, 1.44844691]}
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
        name="Plane027"
        castShadow
        receiveShadow
        geometry={nodes.Plane027.geometry}
        material={materials["plastik_polysk.001"]}
        position={[-0.92818272, 0.62374049, 1.73933125]}
        rotation={[1.43936272, -1.5370783, 1.43928882]}
        scale={[0.26148272, 0.06992919, 0.05632584]}
      />
      <mesh
        name="Floor"
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.floor}
        position={[0.01579052, 0.03322593, 0.01752385]}
        scale={3.2085855}
      />

      <mesh
        name="Cylinder002"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["metal opaco"]}
        position={[0.0165205, 1.65097284, 0.00050911]}
        scale={0.13805822}
      />
      <group
        name="Cylinder003"
        position={[0.02729396, 1.65097284, 0.00050911]}
        rotation={[0, -0.00028926, 0]}
        scale={[0.1380582, 0.13805822, 0.1380582]}
      >
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials["metal opaco"]}
        />
        <mesh
          name="Cylinder003_2"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={materials["esfera-amarilla"]}
        />
      </group>
      <group
        name="Cylinder004"
        position={[0.0165205, 1.65097284, 0.00050911]}
        rotation={[-Math.PI, 0.01523456, -Math.PI]}
        scale={0.13805822}
      >
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials["metal opaco"]}
        />
        <mesh
          name="Cylinder003_2"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={materials["esfera-amarilla"]}
        />
      </group>
      <group
        name="Cylinder005"
        position={[0.0165205, 1.65097284, 0.00050911]}
        rotation={[0, 1.57023109, 0]}
        scale={0.13805822}
      >
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials["metal opaco"]}
        />
        <mesh
          name="Cylinder003_2"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={materials["esfera-amarilla"]}
        />
      </group>
      <group
        name="Cylinder006"
        position={[0.02729396, 1.65097284, 0.00050911]}
        rotation={[Math.PI, -1.55456998, Math.PI]}
        scale={[0.13805823, 0.13805822, 0.13805823]}
      >
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials["metal opaco"]}
        />
        <mesh
          name="Cylinder003_2"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={materials["esfera-amarilla"]}
        />
      </group>
      <mesh
        name="cuerda"
        castShadow
        receiveShadow
        geometry={nodes.cuerda.geometry}
        material={materials.cuerdas}
        position={[0.83301872, 1.4410646, 0.66986132]}
        rotation={[-0.2004326, 0.72307444, -0.08855778]}
        scale={0.02764532}
      />
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
        <mesh
          name="Cylinder_6"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_6.geometry}
          material={materials["luz blanca"]}
        />
        <mesh
          name="Cylinder_7"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_7.geometry}
          material={materials["luz roja"]}
        />
      </group>
      <group
        name="glass"
        position={[-1.54913008, -0.14428574, 1.6900214]}
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
        name="PisoGranito"
        castShadow
        receiveShadow
        geometry={nodes.PisoGranito.geometry}
        material={materials.floorBedRoom}
        position={[-1.64121497, 0.20803243, 1.71998453]}
        rotation={[0, -1.56638607, 0]}
        scale={1.43777549}
      />
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
          material={materials.irondesk}
        />
        <mesh
          name="Plane002_2"
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={materials.Eye}
        />
        <mesh
          name="Plane002_3"
          castShadow
          receiveShadow
          geometry={nodes.Plane002_3.geometry}
          material={materials.desk}
        />
        <mesh
          name="Plane002_4"
          castShadow
          receiveShadow
          geometry={nodes.Plane002_4.geometry}
          material={materials["desk paste"]}
        />
      </group>
      <group
        name="mouse"
        position={[-1.02257669, 0.61817414, 2.12989926]}
        rotation={[0, -1.1668729, 0]}
        scale={[0.01123011, 0.01449813, 0.01123011]}
      >
        <mesh
          name="Plane007"
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials["plastico negro"]}
        />
        <mesh
          name="Plane007_1"
          castShadow
          receiveShadow
          geometry={nodes.Plane007_1.geometry}
          material={materials["desk paste"]}
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
          material={nodes.Plane007_3.material}
        />
      </group>
      <mesh
        name="alien_u0v1_alien_u0v1_0"
        castShadow
        receiveShadow
        geometry={nodes.alien_u0v1_alien_u0v1_0.geometry}
        material={materials["alien_u0v1.003"]}
        position={[0.82399851, -0.26102263, -1.82294893]}
        rotation={[-1.90206826, 0.76558479, 1.72624866]}
        scale={[0.32467592, 0.32467586, 0.32467592]}
      />
      <mesh
        name="alien_u0v2_alien_u0v2_0"
        castShadow
        receiveShadow
        geometry={nodes.alien_u0v2_alien_u0v2_0.geometry}
        material={materials["alien_u0v2.003"]}
        position={[0.82399851, -0.26102263, -1.82294893]}
        rotation={[-1.90206826, 0.76558479, 1.72624866]}
        scale={[0.32467592, 0.32467586, 0.32467592]}
      />
      <mesh
        name="bandeja1"
        castShadow
        receiveShadow
        geometry={nodes.bandeja1.geometry}
        material={materials.bandeja}
        position={[-2.33706999, 0.1883404, -1.1110878]}
        rotation={[0, 0.44465264, 0]}
        scale={[0.25462392, 0.25462395, 0.25462392]}
      />
      <mesh
        name="bandeja2"
        castShadow
        receiveShadow
        geometry={nodes.bandeja2.geometry}
        material={materials.bandeja}
        position={[-1.85103917, 0.07475868, -1.30176711]}
        rotation={[Math.PI, -0.42898908, Math.PI]}
        scale={0.36973259}
      />
      <mesh
        name="bol"
        castShadow
        receiveShadow
        geometry={nodes.bol.geometry}
        material={materials.bol}
        position={[-1.73522234, 0.48787555, -1.89609599]}
        rotation={[0, -0.47904935, 0]}
        scale={0.09460387}
      />
      <mesh
        name="galleta"
        castShadow
        receiveShadow
        geometry={nodes.galleta.geometry}
        material={materials.masaMescla}
        position={[-2.05004811, 0.45062134, -1.28141522]}
        rotation={[Math.PI, -0.45063481, Math.PI]}
        scale={[0.22201593, 0.22201589, 0.22201593]}
      />
      <mesh
        name="galleta001"
        castShadow
        receiveShadow
        geometry={nodes.galleta001.geometry}
        material={materials.masaMescla}
        position={[-2.0151403, 0.45062134, -1.29830492]}
        rotation={[Math.PI, -0.45063481, Math.PI]}
        scale={[0.22201593, 0.22201589, 0.22201593]}
      />
      <mesh
        name="galleta002"
        castShadow
        receiveShadow
        geometry={nodes.galleta002.geometry}
        material={materials.masaMescla}
        position={[-2.0332222, 0.45100546, -1.24686849]}
        rotation={[Math.PI, -0.45063481, Math.PI]}
        scale={[0.22201593, 0.22201589, 0.22201593]}
      />
      <mesh
        name="galleta003"
        castShadow
        receiveShadow
        geometry={nodes.galleta003.geometry}
        material={materials.masaMescla}
        position={[-1.99831438, 0.45100546, -1.26375818]}
        rotation={[Math.PI, -0.45063481, Math.PI]}
        scale={[0.22201593, 0.22201589, 0.22201593]}
      />
      <mesh
        name="galleta004"
        castShadow
        receiveShadow
        geometry={nodes.galleta004.geometry}
        material={materials.masaMescla}
        position={[-2.01639628, 0.45138958, -1.21232176]}
        rotation={[Math.PI, -0.45063481, Math.PI]}
        scale={[0.22201593, 0.22201589, 0.22201593]}
      />
      <mesh
        name="galleta005"
        castShadow
        receiveShadow
        geometry={nodes.galleta005.geometry}
        material={materials.masaMescla}
        position={[-1.98148847, 0.45138958, -1.22921145]}
        rotation={[Math.PI, -0.45063481, Math.PI]}
        scale={[0.22201593, 0.22201589, 0.22201593]}
      />
      <mesh
        name="galleta006"
        castShadow
        receiveShadow
        geometry={nodes.galleta006.geometry}
        material={materials.masaMescla}
        position={[-1.9974612, 0.45215786, -1.17691362]}
        rotation={[Math.PI, -0.45063481, Math.PI]}
        scale={[0.22201593, 0.22201589, 0.22201593]}
      />
      <mesh
        name="galleta007"
        castShadow
        receiveShadow
        geometry={nodes.galleta007.geometry}
        material={materials.masaMescla}
        position={[-1.96255338, 0.45215786, -1.19380331]}
        rotation={[Math.PI, -0.45063481, Math.PI]}
        scale={[0.22201593, 0.22201589, 0.22201593]}
      />
      <mesh
        name="galleta008"
        castShadow
        receiveShadow
        geometry={nodes.galleta008.geometry}
        material={materials.masaMescla}
        position={[-1.98196101, 0.45164075, -1.31014955]}
        rotation={[Math.PI, -0.45063481, Math.PI]}
        scale={[0.22201593, 0.22201589, 0.22201593]}
      />
      <mesh
        name="masa"
        castShadow
        receiveShadow
        geometry={nodes.masa.geometry}
        material={materials.masaMescla}
        position={[-1.7921083, 0.50471568, -1.52300239]}
        rotation={[0, -0.47904938, 0]}
        scale={0.0916804}
      />
      <mesh
        name="mescla"
        castShadow
        receiveShadow
        geometry={nodes.mescla.geometry}
        material={materials.masaMescla}
        position={[-1.72121561, 0.5096525, -1.92971909]}
        rotation={[0, -0.47904932, 0]}
        scale={[0.914644, 0.91464394, 0.914644]}
      />
      <group
        name="horno"
        position={[-0.74807775, 0.28069979, -0.80096102]}
        rotation={[-Math.PI, 0.84359777, -Math.PI]}
        scale={[0.25605682, 0.25605685, 0.25605682]}
      >
        <mesh
          name="Cube022"
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials.metalCocina}
        />
        <mesh
          name="Cube022_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube022_1.geometry}
          material={nodes.Cube022_1.material}
        />
      </group>
      <group
        name="mesaisla"
        position={[-2.09901667, 0.22383234, -1.19568741]}
        rotation={[0, -0.47904935, 0]}
        scale={[0.21999338, 0.2199934, 0.21999338]}
      >
        <mesh
          name="Cube_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.maderaDeIslaCocina}
        />
        <mesh
          name="Cube_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.cocinagavetas}
        />
        <mesh
          name="Cube_3"
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={materials["shoes.002"]}
        />
      </group>
      <group
        name="millhojas"
        position={[-2.22082019, 0.46026686, -1.10390103]}
        rotation={[0, -1.13963634, 0]}
        scale={[0.22201593, 0.22201589, 0.22201593]}
      >
        <mesh
          name="Cube024"
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials.ajojoliMilOjas}
        />
        <mesh
          name="Cube024_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube024_1.geometry}
          material={materials.cremaMilOjas}
        />
        <mesh
          name="Cube024_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube024_2.geometry}
          material={materials.arequipe}
        />
      </group>
      <group
        name="millhojas001"
        position={[-2.22082019, 0.44915029, -1.10390103]}
        rotation={[0, -1.13963634, 0]}
        scale={[0.22201593, 0.22201589, 0.22201593]}
      >
        <mesh
          name="Cube024"
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials.ajojoliMilOjas}
        />
        <mesh
          name="Cube024_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube024_1.geometry}
          material={materials.cremaMilOjas}
        />
        <mesh
          name="Cube024_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube024_2.geometry}
          material={materials.arequipe}
        />
      </group>
      <group
        name="millhojas002"
        position={[-2.23960495, 0.44942942, -1.14430499]}
        rotation={[0, -1.13963634, 0]}
        scale={[0.22201593, 0.22201589, 0.22201593]}
      >
        <mesh
          name="Cube024"
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials.ajojoliMilOjas}
        />
        <mesh
          name="Cube024_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube024_1.geometry}
          material={materials.cremaMilOjas}
        />
        <mesh
          name="Cube024_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube024_2.geometry}
          material={materials.arequipe}
        />
      </group>
      <group
        name="millhojas003"
        position={[-2.23960495, 0.46054599, -1.14430499]}
        rotation={[0, -1.13963634, 0]}
        scale={[0.22201593, 0.22201589, 0.22201593]}
      >
        <mesh
          name="Cube024"
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials.ajojoliMilOjas}
        />
        <mesh
          name="Cube024_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube024_1.geometry}
          material={materials.cremaMilOjas}
        />
        <mesh
          name="Cube024_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube024_2.geometry}
          material={materials.arequipe}
        />
      </group>
      <group
        name="millhojas004"
        position={[-2.2602458, 0.4498671, -1.18970406]}
        rotation={[0, -1.13963634, 0]}
        scale={[0.22201593, 0.22201589, 0.22201593]}
      >
        <mesh
          name="Cube024"
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials.ajojoliMilOjas}
        />
        <mesh
          name="Cube024_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube024_1.geometry}
          material={materials.cremaMilOjas}
        />
        <mesh
          name="Cube024_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube024_2.geometry}
          material={materials.arequipe}
        />
      </group>
      <group
        name="millhojas005"
        position={[-2.2602458, 0.46098372, -1.18970406]}
        rotation={[0, -1.13963634, 0]}
        scale={[0.22201593, 0.22201589, 0.22201593]}
      >
        <mesh
          name="Cube024"
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials.ajojoliMilOjas}
        />
        <mesh
          name="Cube024_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube024_1.geometry}
          material={materials.cremaMilOjas}
        />
        <mesh
          name="Cube024_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube024_2.geometry}
          material={materials.arequipe}
        />
      </group>
      <mesh
        name="rodillo"
        castShadow
        receiveShadow
        geometry={nodes.rodillo.geometry}
        material={materials.Wood}
        position={[-1.76200819, 0.45822033, -1.43560994]}
        rotation={[-1.56247708, -0.00432095, -0.47903125]}
        scale={[0.01348913, 0.01348914, 0.01348914]}
      />
      <group
        name="horno001"
        position={[-0.0854286, 0.5590502, -0.40454617]}
        rotation={[-Math.PI, 0.84359777, -Math.PI]}
        scale={[0.25605682, 0.25605685, 0.25605682]}
      >
        <mesh
          name="Cube029"
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={materials.metalCocina}
        />
        <mesh
          name="Cube029_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube029_1.geometry}
          material={materials.cocinagavetas}
        />
        <mesh
          name="Cube029_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube029_2.geometry}
          material={materials.puertasCocina}
        />
      </group>
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
          material={materials.shortHair}
        />
        <mesh
          name="Plane006_1"
          castShadow
          receiveShadow
          geometry={nodes.Plane006_1.geometry}
          material={materials.guma}
        />
      </group>
      <mesh
        name="for-starts"
        castShadow
        receiveShadow
        geometry={nodes["for-starts"].geometry}
        material={materials["for-starts"]}
        position={[0.6025123, 0.10270426, 0.489999]}
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
        name="nodejs-1-logo-png-transparent"
        castShadow
        receiveShadow
        geometry={nodes["nodejs-1-logo-png-transparent"].geometry}
        material={materials["nodejs-logo"]}
        position={[0.71724492, 1.18415666, 0.79234022]}
        rotation={[1.67257752, 0.17382159, -0.87461327]}
        scale={[0.19641726, 0.19641729, 0.19641727]}
      />
      <mesh
        name="mirror001"
        castShadow
        receiveShadow
        geometry={nodes.mirror001.geometry}
        material={materials.mirror}
        position={[0.71478897, 0.72799909, 0.80512083]}
        rotation={[-0.22297561, 0.86219613, 0.17049083]}
        scale={0.00287}
      />
      <mesh
        name="OXTDM33NMJFA7FDN63C3IPYLGI"
        castShadow
        receiveShadow
        geometry={nodes.OXTDM33NMJFA7FDN63C3IPYLGI.geometry}
        material={materials.universo}
        position={[0.1729849, 0.97668904, 1.21364963]}
        rotation={[0, 0.00418878, -1.56864678]}
        scale={0.53242356}
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
        name="kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a"
        castShadow
        receiveShadow
        geometry={
          nodes[
            "kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a"
          ].geometry
        }
        material={materials.javascript}
        position={[-0.42536277, 0.91997355, 1.55408216]}
        rotation={[Math.PI / 2, 0, -0.7587498]}
        scale={[0.2771737, 0.2771737, 0.27717373]}
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
        name="kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01db2f8"
        castShadow
        receiveShadow
        geometry={
          nodes["kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01db2f8"]
            .geometry
        }
        material={materials.html5}
        position={[-0.53180814, 1.22909224, 1.42701781]}
        rotation={[0.05735819, -0.06126355, -0.02074183]}
        scale={[0.20076783, 0.2007678, 0.20076782]}
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
        material={materials.css3}
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
        material={materials.ladrillospared}
        position={[1.75451255, 0.9524765, -0.12281501]}
        rotation={[-1.57364523, -0.00007135, 0.02504043]}
        scale={0.75764012}
      />
      <mesh
        name="ink-303244_640"
        castShadow
        receiveShadow
        geometry={nodes["ink-303244_640"].geometry}
        material={materials["segunda-manchasangre"]}
        position={[0.90877408, 1.23025084, -0.39826715]}
        rotation={[-1.55631337, 0.00036273, 0.02503791]}
        scale={[0.49928305, 0.49928311, 0.49928311]}
      />
      <mesh
        name="kisspng-portable-network-"
        castShadow
        receiveShadow
        geometry={nodes["kisspng-portable-network-"].geometry}
        material={materials.aberturapared}
        position={[1.75971568, 0.93020487, -0.1828472]}
        rotation={[-1.60065575, 0.52992343, 0.03670117]}
      />
      <mesh
        name="dlfpt-portal-png-140301"
        castShadow
        receiveShadow
        geometry={nodes["dlfpt-portal-png-140301"].geometry}
        material={materials["magic-portal-2"]}
        position={[0.25985515, 0.67907119, -0.32030559]}
        rotation={[1e-8, -0.06276054, -1.54902341]}
        scale={[2.70015121, 2.70015144, 2.70015144]}
      />
      <mesh
        name="splatter-303569_640"
        castShadow
        receiveShadow
        geometry={nodes["splatter-303569_640"].geometry}
        material={materials.manchaSangre}
        position={[0.24379545, 0.80465007, -2.03274465]}
        rotation={[0, 0.00255295, -1.6780621]}
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
        name="fotohorno"
        castShadow
        receiveShadow
        geometry={nodes.fotohorno.geometry}
        material={materials.horno}
        position={[-0.67496598, 0.37959659, -0.62876368]}
        rotation={[Math.PI / 2, 0, -0.70476358]}
        scale={0.25605685}
      />
      <mesh
        name="dlfpt-magic-png-87625"
        castShadow
        receiveShadow
        geometry={nodes["dlfpt-magic-png-87625"].geometry}
        material={materials["magic-portal"]}
        position={[0.48632377, -0.00859884, -1.8632133]}
        rotation={[0, 0.28474687, 0]}
        scale={0.88688844}
      />
      <mesh
        name="kitchen"
        castShadow
        receiveShadow
        geometry={nodes.kitchen.geometry}
        material={materials.kitchen}
        position={[-0.83713317, 1.10808468, -0.23241428]}
        rotation={[1.51718169, 0, 0]}
        scale={2.16208291}
      />
      <mesh
        name="hornillas2"
        castShadow
        receiveShadow
        geometry={nodes.hornillas2.geometry}
        material={materials.hornillas2}
        position={[-0.54627877, 0.53388375, -0.51123482]}
        rotation={[0.00038534, -0.84379325, -3.12377596]}
        scale={[0.38425541, 0.38425535, 0.38425541]}
      />
      <mesh
        name="dinosaur-downloading-for-pc-wallpaper-preview"
        castShadow
        receiveShadow
        geometry={
          nodes["dinosaur-downloading-for-pc-wallpaper-preview"].geometry
        }
        material={materials.dinosaur}
        position={[0.20519269, 0.85092282, 1.98034441]}
        rotation={[1.55040053, 0.03473768, -1.58675219]}
        scale={[0.5952878, 0.59528786, 0.5952878]}
      />
      <mesh
        name="tv"
        castShadow
        receiveShadow
        geometry={nodes.tv.geometry}
        material={materials.tv}
        position={[0.78411603, 0.55002588, -0.81206787]}
        rotation={[-Math.PI, 0.80868862, -Math.PI]}
        scale={[0.92140865, 0.92140859, 0.92140865]}
      />
      <mesh
        name="IMAGE"
        castShadow
        receiveShadow
        geometry={nodes.IMAGE.geometry}
        material={materials.fotoMarcasManos}
        position={[-0.11250629, 1.03758156, 0.59417379]}
        rotation={[Math.PI / 2, 3e-8, 1.58544537]}
        scale={[0.50231707, 0.50231707, 0.50231713]}
      />
      <mesh
        name="Rickobj"
        castShadow
        receiveShadow
        geometry={nodes.Rickobj.geometry}
        material={materials.rick}
        position={[-0.38490453, 1.26863503, -1.66160882]}
        rotation={[Math.PI / 2, 4e-8, 2.65490723]}
        scale={0.12890145}
      />
      <mesh
        name="alien_u0v0_alien_u0v0_0"
        castShadow
        receiveShadow
        geometry={nodes.alien_u0v0_alien_u0v0_0.geometry}
        material={materials["alien_u0v0.003"]}
        position={[0.82399851, -0.26102263, -1.82294893]}
        rotation={[-1.90206826, 0.76558479, 1.72624866]}
        scale={[0.32467592, 0.32467586, 0.32467592]}
      />
    </group>
    <mesh
        name="BaseFloor"
        castShadow
        receiveShadow
        geometry={nodes.BaseFloor.geometry}
     
        material={materials.floor} 
        position={[0.01579052, -0.40062413, 0.01752385]}
        scale={3.53889871}
      />
  </group>
  );
}

useGLTF.preload("https://res.cloudinary.com/darvaxtkj/image/upload/v1661996457/scene_lmp2nu.glb");