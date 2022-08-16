import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {  useFrame } from '@react-three/fiber'

export default  function Model(props) {
  const maingroup = useRef()
  useFrame((state, delta) => (maingroup.current.rotation.y += 0.005))
  const { nodes, materials } = useGLTF('/models/rooms/rooms.glb')
  return (
    <group {...props}  ref={maingroup} dispose={null}>
      <group name="Armature" position={[1.88, 0.03, 2.36]} scale={0.1}>
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
        <mesh name="Shoes" geometry={nodes.Shoes.geometry} material={materials.shoes} position={[0, 4.53, 0]} />
        <group name="shorts" position={[0, 4.53, 0]}>
          <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.shorts} />
          <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials.cuerdas} />
        </group>
        <group name="Show" position={[0, 4.53, 0]}>
          <mesh name="Cube003_1" geometry={nodes.Cube003_1.geometry} material={materials.Body} />
          <mesh name="Cube003_2" geometry={nodes.Cube003_2.geometry} material={materials.Eye} />
          <mesh name="Cube003_3" geometry={nodes.Cube003_3.geometry} material={materials['Material.002']} />
        </group>
        <mesh name="t-shirt" geometry={nodes['t-shirt'].geometry} material={materials['t-shirt']} position={[0, 4.53, 0]} />
      </group>
      <group name="Armature002" position={[-1.78, 0.03, -2.29]} rotation={[Math.PI, 0, Math.PI]} scale={0.1}>
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
        <mesh name="Shoes002" geometry={nodes.Shoes002.geometry} material={materials.shoes} position={[0, 4.53, 0]} />
        <group name="shorts002" position={[0, 4.53, 0]}>
          <mesh name="Cube021" geometry={nodes.Cube021.geometry} material={materials.shorts} />
          <mesh name="Cube021_1" geometry={nodes.Cube021_1.geometry} material={materials.cuerdas} />
        </group>
        <group name="Show002" position={[0, 4.53, 0]}>
          <mesh name="Cube022" geometry={nodes.Cube022.geometry} material={materials.Body} />
          <mesh name="Cube022_1" geometry={nodes.Cube022_1.geometry} material={materials.Eye} />
          <mesh name="Cube022_2" geometry={nodes.Cube022_2.geometry} material={materials['Material.002']} />
        </group>
        <mesh name="t-shirt001" geometry={nodes['t-shirt001'].geometry} material={materials['t-shirt']} position={[0, 4.53, 0]} />
      </group>
      <group name="Armature001" position={[-1.45, 0.08, 1.86]} rotation={[-1.68, 1.17, 1.65]} scale={0.11}>
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
        <mesh name="shirt" geometry={nodes.shirt.geometry} material={materials.shirt} position={[0, 4.53, 0]} />
        <mesh name="Shoes001" geometry={nodes.Shoes001.geometry} material={materials['shoes.001']} position={[0, 4.53, 0]} />
        <mesh name="shorts001" geometry={nodes.shorts001.geometry} material={materials['shorts.001']} position={[0, 4.53, 0]} />
        <group name="Show001" position={[0, 4.53, 0]}>
          <mesh name="Cube016" geometry={nodes.Cube016.geometry} material={materials['Body.001']} />
          <mesh name="Cube016_1" geometry={nodes.Cube016_1.geometry} material={materials['Eye.001']} />
          <mesh name="Cube016_2" geometry={nodes.Cube016_2.geometry} material={materials['Material.003']} />
        </group>
      </group>
      <group name="Armature003" position={[1.56, 0.08, -1.79]} rotation={[-1.46, -1.17, -1.49]} scale={0.11}>
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
        <mesh name="shirt001" geometry={nodes.shirt001.geometry} material={materials.shirt} position={[0, 4.53, 0]} />
        <mesh name="Shoes003" geometry={nodes.Shoes003.geometry} material={materials['shoes.001']} position={[0, 4.53, 0]} />
        <mesh name="shorts003" geometry={nodes.shorts003.geometry} material={materials['shorts.001']} position={[0, 4.53, 0]} />
        <group name="Show003" position={[0, 4.53, 0]}>
          <mesh name="Cube033" geometry={nodes.Cube033.geometry} material={materials['Body.001']} />
          <mesh name="Cube033_1" geometry={nodes.Cube033_1.geometry} material={materials['Eye.001']} />
          <mesh name="Cube033_2" geometry={nodes.Cube033_2.geometry} material={materials['Material.003']} />
        </group>
      </group>
      <group name="agarres" position={[2.33, 0.56, 0.72]} rotation={[-1.59, 0, 0]} scale={1.22}>
        <mesh name="Box004__0001" geometry={nodes.Box004__0001.geometry} material={materials['RootNode.001']} />
        <mesh name="Box004__0001_1" geometry={nodes.Box004__0001_1.geometry} material={materials['Material.002']} />
      </group>
      <mesh name="Piso001" geometry={nodes.Piso001.geometry} material={materials['Piso.001']} position={[1.88, 0, 1.86]} scale={1.52} />
      <mesh name="mancuerda001" geometry={nodes.mancuerda001.geometry} material={materials['RootNode.001']} position={[2.19, 0.09, 1.87]} rotation={[2.91, -1.46, 2.47]} scale={0.02} />
      <mesh name="mancuerda002" geometry={nodes.mancuerda002.geometry} material={materials['RootNode.001']} position={[2.19, 0.1, 1.78]} rotation={[-0.45, 0.21, -2.53]} scale={0.02} />
      <group name="agarres001" position={[-2.22, 0.56, -0.66]} rotation={[-1.56, 0, 3.14]} scale={1.22}>
        <mesh name="Box004__0002" geometry={nodes.Box004__0002.geometry} material={materials['RootNode.001']} />
        <mesh name="Box004__0002_1" geometry={nodes.Box004__0002_1.geometry} material={materials['Material.002']} />
      </group>
      <mesh name="Piso002" geometry={nodes.Piso002.geometry} material={materials['Piso.001']} position={[-1.78, 0, -1.8]} rotation={[Math.PI, 0, Math.PI]} scale={1.52} />
      <mesh name="mancuerda004" geometry={nodes.mancuerda004.geometry} material={materials['RootNode.001']} position={[-2.08, 0.09, -1.81]} rotation={[0.23, 1.46, -0.67]} scale={0.02} />
      <mesh name="mancuerda005" geometry={nodes.mancuerda005.geometry} material={materials['RootNode.001']} position={[-2.08, 0.1, -1.71]} rotation={[-2.69, -0.21, 0.61]} scale={0.02} />
      <mesh name="RuedaPie" geometry={nodes.RuedaPie.geometry} material={materials['Material.001']} position={[1.75, 0, 1.86]} scale={1.54} />
      <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.Material} position={[1.88, 0, 1.86]} />
      <mesh name="RuedaPie002" geometry={nodes.RuedaPie002.geometry} material={materials['Material.001']} position={[-1.65, 0, -1.8]} rotation={[Math.PI, 0, Math.PI]} scale={1.54} />
      <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials.Material} position={[-1.78, 0, -1.8]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh name="alcoclchado" geometry={nodes.alcoclchado.geometry} material={materials['Material.002']} position={[1.88, -0.03, 1.86]} />
      <mesh name="alcoclchado001" geometry={nodes.alcoclchado001.geometry} material={materials['Material.002']} position={[-1.78, -0.03, -1.8]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh name="cuerda" geometry={nodes.cuerda.geometry} material={materials['PowerPole.001']} position={[1, 1.44, 0.83]} rotation={[-0.2, 0.72, -0.09]} scale={0.03} />
      <mesh name="mirror001" geometry={nodes.mirror001.geometry} material={materials['mirror.002']} position={[0.88, 0.73, 0.97]} rotation={[-0.22, 0.86, 0.17]} scale={0} />
      <mesh name="Cylinder001_Cylinder001" geometry={nodes.Cylinder001_Cylinder001.geometry} material={materials['Star.001']} position={[0.6, 0.06, 1.39]} rotation={[1.55, 0.02, -0.87]} scale={0.02} />
      <mesh name="Cylinder002_Cylinder001" geometry={nodes.Cylinder002_Cylinder001.geometry} material={materials['Star.001']} position={[0.6, 0.06, 1.39]} rotation={[1.55, 0.02, -0.87]} scale={0.02} />
      <mesh name="Cylinder003_Cylinder001" geometry={nodes.Cylinder003_Cylinder001.geometry} material={materials['Star.001']} position={[0.6, 0.06, 1.39]} rotation={[1.55, 0.02, -0.87]} scale={0.02} />
      <mesh name="Cylinder_Cylinder001" geometry={nodes.Cylinder_Cylinder001.geometry} material={materials['Star.001']} position={[0.6, 0.06, 1.39]} rotation={[1.55, 0.02, -0.87]} scale={0.02} />
      <mesh name="DragonBall_Sphere002" geometry={nodes.DragonBall_Sphere002.geometry} material={materials['DragonBall.001']} position={[0.91, 0.09, 0.72]} rotation={[1.55, 0.02, -0.87]} scale={0.06} />
      <mesh name="Holder_Cylinder" geometry={nodes.Holder_Cylinder.geometry} material={materials['Holder.001']} position={[0.86, 1.04, 0.68]} rotation={[-0.27, 0.91, 0.54]} scale={0.03} />
      <mesh name="for-starts" geometry={nodes['for-starts'].geometry} material={materials['for-starts']} position={[0.77, 0.1, 0.69]} rotation={[2.55, 0.34, -1.99]} scale={0.09} />
      <mesh name="for-starts001" geometry={nodes['for-starts001'].geometry} material={materials['for-starts']} position={[0.7, 0.12, 0.8]} rotation={[2, -0.66, -2.72]} scale={0.09} />
      <mesh name="584830f5cef1014c0b5e4aa1" geometry={nodes['584830f5cef1014c0b5e4aa1'].geometry} material={materials['584830f5cef1014c0b5e4aa1']} position={[1.93, 0.49, 2.52]} rotation={[-1.08, 0.2, -2.74]} scale={-0.22} />
      <mesh name="nodejs-1-logo-png-transparent" geometry={nodes['nodejs-1-logo-png-transparent'].geometry} material={materials['nodejs-1-logo-png-transparent']} position={[0.88, 1.18, 0.95]} rotation={[1.67, 0.17, -0.87]} scale={0.2} />
      <mesh name="OXTDM33NMJFA7FDN63C3IPYLGI" geometry={nodes.OXTDM33NMJFA7FDN63C3IPYLGI.geometry} material={materials.OXTDM33NMJFA7FDN63C3IPYLGI} position={[0.34, 0.98, 1.86]} rotation={[0, 0, -1.57]} scale={0.53} />
      <mesh name="dinosaur-downloading-for-pc-wallpaper-preview" geometry={nodes['dinosaur-downloading-for-pc-wallpaper-preview'].geometry} material={materials['dinosaur-downloading-for-pc-wallpaper-preview']} position={[0.37, 0.92, 2.76]} rotation={[1.55, 0.03, -1.58]} scale={0.6} />
      <mesh name="?" geometry={nodes['?'].geometry} material={materials['Material.009']} position={[-0.64, 1.18, 1.55]} rotation={[1.51, -0.05, 0.68]} scale={0.4} />
      <mesh name="albertEinstein" geometry={nodes.albertEinstein.geometry} material={materials.albertEinstein} position={[-0.83, 0.98, 0.29]} rotation={[Math.PI / 2, 0, 0]} scale={0.64} />
      <group name="babygroot" position={[-0.62, 0.79, 2.25]} rotation={[Math.PI / 2, 0, 0.84]} scale={0.66}>
        <mesh name="pCylinder9_phong1_0" geometry={nodes.pCylinder9_phong1_0.geometry} material={materials.phong1} />
        <mesh name="pCylinder9_phong1_0_1" geometry={nodes.pCylinder9_phong1_0_1.geometry} material={materials.blinn2} />
        <mesh name="pCylinder9_phong1_0_2" geometry={nodes.pCylinder9_phong1_0_2.geometry} material={materials.phongE1} />
        <mesh name="pCylinder9_phong1_0_3" geometry={nodes.pCylinder9_phong1_0_3.geometry} material={materials.lambert2} />
        <mesh name="pCylinder9_phong1_0_4" geometry={nodes.pCylinder9_phong1_0_4.geometry} material={materials.lambert3} />
      </group>
      <mesh name="batman-logo-png-2039" geometry={nodes['batman-logo-png-2039'].geometry} material={materials['batman-logo-png-2039']} position={[-1.6, 0.61, 1.86]} rotation={[1.57, 0.5, -1.67]} scale={0.05} />
      <mesh name="CHAIR" geometry={nodes.CHAIR.geometry} material={materials['Default OBJ']} position={[-1.51, 0.04, 1.86]} rotation={[1.57, 0.34, -1.53]} scale={0.01} />
      <mesh name="criticalError" geometry={nodes.criticalError.geometry} material={materials.criticalError} position={[-0.8, 0.99, 1.77]} rotation={[1.57, 0, -2.23]} scale={1.6} />
      <mesh name="Cube" geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[-1.77, 0, 1.86]} rotation={[Math.PI, -1.57, Math.PI]} />
      <group name="Cube002" position={[-0.64, 0.92, 1.56]} rotation={[0, -0.89, 0]} scale={[0.15, 0.21, 0.15]}>
        <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials['Computer.Chassis']} />
        <mesh name="Cube010_1" geometry={nodes.Cube010_1.geometry} material={materials['Computer.Black']} />
      </group>
      <group name="Cylinder" position={[-0.33, 1.26, 2.22]} rotation={[1.8, 0.55, 2.72]}>
        <mesh name="Cylinder_1" geometry={nodes.Cylinder_1.geometry} material={materials.metal} />
        <mesh name="Cylinder_2" geometry={nodes.Cylinder_2.geometry} material={materials['plastico negro']} />
        <mesh name="Cylinder_3" geometry={nodes.Cylinder_3.geometry} material={materials['metal opaco']} />
        <mesh name="Cylinder_4" geometry={nodes.Cylinder_4.geometry} material={materials.rojo} />
        <mesh name="Cylinder_5" geometry={nodes.Cylinder_5.geometry} material={materials.blanco} />
      </group>
      <group name="Cylinder001" position={[-0.34, 1.27, 2.18]} rotation={[1.81, 1.04, 2.97]} scale={0.15}>
        <mesh name="Cylinder001_1" geometry={nodes.Cylinder001_1.geometry} material={materials['luz blanca']} />
        <mesh name="Cylinder001_2" geometry={nodes.Cylinder001_2.geometry} material={materials['luz roja']} />
      </group>
      <group name="glass" position={[-1.77, -0.14, 1.86]} rotation={[Math.PI, -1.57, Math.PI]} scale={1.54}>
        <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials.Window} />
        <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials.Glass} />
      </group>
      <mesh name="IMAGE" geometry={nodes.IMAGE.geometry} material={materials.IMAGE} position={[-0.21, 1.04, 2.82]} rotation={[Math.PI / 2, 0, 1.59]} scale={0.5} />
      <mesh name="kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a" geometry={nodes['kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a'].geometry} material={materials['kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a']} position={[-0.56, 0.92, 1.7]} rotation={[Math.PI / 2, 0, -0.75]} scale={0.31} />
      <mesh name="kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01db2f8" geometry={nodes['kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01db2f8'].geometry} material={materials['kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01db2f8']} position={[-0.66, 1.23, 1.58]} rotation={[0.06, -0.07, -0.02]} scale={0.29} />
      <mesh name="kisspng-web-development-cascading-style-sheets-css3-comput-css-" geometry={nodes['kisspng-web-development-cascading-style-sheets-css3-comput-css-'].geometry} material={materials['kisspng-web-development-cascading-style-sheets-css3-comput-css-']} position={[-0.74, 0.91, 1.42]} rotation={[1.44, -0.17, -0.85]} scale={0.25} />
      <mesh name="Piso" geometry={nodes.Piso.geometry} material={materials.Piso} position={[-1.77, 0, 1.86]} rotation={[Math.PI, -1.57, Math.PI]} scale={1.52} />
      <mesh name="PisoGranito" geometry={nodes.PisoGranito.geometry} material={materials.PisoGranito} position={[-1.77, 0.21, 1.86]} rotation={[Math.PI, -1.57, Math.PI]} scale={1.44} />
      <group name="Plane" position={[-0.71, -0.56, 1.86]} rotation={[Math.PI, -1.57, Math.PI]}>
        <mesh name="Plane002_1" geometry={nodes.Plane002_1.geometry} material={materials['Material.010']} />
        <mesh name="Plane002_2" geometry={nodes.Plane002_2.geometry} material={materials['Material.012']} />
        <mesh name="Plane002_3" geometry={nodes.Plane002_3.geometry} material={materials['Material.013']} />
        <mesh name="Plane002_4" geometry={nodes.Plane002_4.geometry} material={materials['Material.014']} />
      </group>
      <group name="Plane001" position={[-1.02, 0.62, 2.06]} rotation={[Math.PI, -1.57, Math.PI]} scale={[0.01, 0, 0.01]}>
        <mesh name="Plane005_1" geometry={nodes.Plane005_1.geometry} material={materials['Material.005']} />
        <mesh name="Plane005_2" geometry={nodes.Plane005_2.geometry} material={materials['Material.008']} />
      </group>
      <group name="Plane015" position={[-1.16, 0.62, 2.27]} rotation={[0, -1.17, 0]} scale={0.01}>
        <mesh name="Plane007_1" geometry={nodes.Plane007_1.geometry} material={materials['plastik_mat.001']} />
        <mesh name="Plane007_2" geometry={nodes.Plane007_2.geometry} material={materials['plastik_polysk.002']} />
        <mesh name="Plane007_3" geometry={nodes.Plane007_3.geometry} material={materials.guma} />
        <mesh name="Plane007_4" geometry={nodes.Plane007_4.geometry} material={materials['Material.008']} />
      </group>
      <group name="Plane017" position={[-1.07, 0.63, 1.64]} rotation={[Math.PI, -1.57, Math.PI]} scale={0.07}>
        <mesh name="Plane006_1" geometry={nodes.Plane006_1.geometry} material={materials.klawiatura_klawisze} />
        <mesh name="Plane006_2" geometry={nodes.Plane006_2.geometry} material={materials['Material.011']} />
      </group>
      <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials['plastik_polysk.klawiatura']} position={[-1.06, 0.62, 1.88]} rotation={[Math.PI, -1.57, Math.PI]} scale={0.07} />
      <mesh name="Plane027" geometry={nodes.Plane027.geometry} material={materials['plastik_polysk.001']} position={[-1.06, 0.62, 1.88]} rotation={[1.67, -1.54, 1.67]} scale={[0.26, 0.07, 0.06]} />
      <mesh name="RuedaPie001" geometry={nodes.RuedaPie001.geometry} material={materials['Material.015']} position={[-1.77, 0, 1.73]} rotation={[Math.PI, -1.57, Math.PI]} scale={1.54} />
      <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['Computer.Monitor.Glass']} position={[-0.78, 0.99, 1.68]} rotation={[0, -0.89, 0]} scale={[0.14, 0.14, 0.01]} />
      <mesh name="Suzanne" geometry={nodes.Suzanne.geometry} material={materials.Monkey} position={[-0.87, 0.82, 1.61]} rotation={[0, -0.89, 0]} scale={[0.01, 0.01, 0]} />
      <mesh name="water_drop" geometry={nodes.water_drop.geometry} material={materials.None} position={[-2.08, 0.73, 2.18]} rotation={[Math.PI / 2, 0, 1.57]} />
      <mesh name="Wood" geometry={nodes.Wood.geometry} material={materials.Wood} position={[-1.77, -0.11, 1.86]} rotation={[Math.PI, -1.57, Math.PI]} scale={1.54} />
      <mesh name="cuerda001" geometry={nodes.cuerda001.geometry} material={materials['PowerPole.001']} position={[-0.89, 1.44, -0.77]} rotation={[-2.94, -0.72, 3.05]} scale={0.03} />
      <mesh name="mirror002" geometry={nodes.mirror002.geometry} material={materials['mirror.002']} position={[-0.77, 0.73, -0.9]} rotation={[-2.92, -0.86, -2.97]} scale={0} />
      <mesh name="Cylinder001_Cylinder002" geometry={nodes.Cylinder001_Cylinder002.geometry} material={materials['Star.001']} position={[-0.49, 0.05, -1.33]} rotation={[1.59, -0.02, 2.27]} scale={0.02} />
      <mesh name="Cylinder002_Cylinder002" geometry={nodes.Cylinder002_Cylinder002.geometry} material={materials['Star.001']} position={[-0.49, 0.05, -1.33]} rotation={[1.59, -0.02, 2.27]} scale={0.02} />
      <mesh name="Cylinder003_Cylinder002" geometry={nodes.Cylinder003_Cylinder002.geometry} material={materials['Star.001']} position={[-0.49, 0.05, -1.33]} rotation={[1.59, -0.02, 2.27]} scale={0.02} />
      <mesh name="Cylinder_Cylinder002" geometry={nodes.Cylinder_Cylinder002.geometry} material={materials['Star.001']} position={[-0.49, 0.05, -1.33]} rotation={[1.59, -0.02, 2.27]} scale={0.02} />
      <mesh name="DragonBall_Sphere001" geometry={nodes.DragonBall_Sphere001.geometry} material={materials['DragonBall.001']} position={[-0.81, 0.09, -0.65]} rotation={[1.59, -0.02, 2.27]} scale={0.06} />
      <mesh name="Holder_Cylinder001" geometry={nodes.Holder_Cylinder001.geometry} material={materials['Holder.001']} position={[-0.76, 1.04, -0.62]} rotation={[-2.87, -0.91, -2.61]} scale={0.03} />
      <mesh name="for-starts002" geometry={nodes['for-starts002'].geometry} material={materials['for-starts']} position={[-0.66, 0.1, -0.63]} rotation={[0.59, -0.34, 1.15]} scale={0.09} />
      <mesh name="for-starts003" geometry={nodes['for-starts003'].geometry} material={materials['for-starts']} position={[-0.84, 0.48, -1.7]} rotation={[1.14, 0.66, 0.42]} scale={0.09} />
      <mesh name="584830f5cef1014c0b5e4aa1001" geometry={nodes['584830f5cef1014c0b5e4aa1001'].geometry} material={materials['584830f5cef1014c0b5e4aa1']} position={[-1.82, 0.49, -2.45]} rotation={[-2.06, -0.2, 0.4]} scale={-0.22} />
      <mesh name="nodejs-1-logo-png-transparent001" geometry={nodes['nodejs-1-logo-png-transparent001'].geometry} material={materials['nodejs-1-logo-png-transparent']} position={[-0.78, 1.18, -0.89]} rotation={[1.47, -0.17, 2.27]} scale={0.2} />
      <mesh name="OXTDM33NMJFA7FDN63C3IPYLGI001" geometry={nodes.OXTDM33NMJFA7FDN63C3IPYLGI001.geometry} material={materials.OXTDM33NMJFA7FDN63C3IPYLGI} position={[-0.23, 0.97, -1.8]} rotation={[Math.PI, 0, 1.57]} scale={0.53} />
      <mesh name="dinosaur-downloading-for-pc-wallpaper-preview001" geometry={nodes['dinosaur-downloading-for-pc-wallpaper-preview001'].geometry} material={materials['dinosaur-downloading-for-pc-wallpaper-preview']} position={[-0.26, 0.92, -2.69]} rotation={[1.59, -0.03, 1.56]} scale={0.6} />
      <mesh name="?001" geometry={nodes['?001'].geometry} material={materials['Material.009']} position={[0.75, 1.18, -1.49]} rotation={[1.63, 0.05, -2.46]} scale={0.4} />
      <mesh name="albertEinstein001" geometry={nodes.albertEinstein001.geometry} material={materials.albertEinstein} position={[0.94, 0.98, -0.23]} rotation={[Math.PI / 2, 0, -3.14]} scale={0.64} />
      <group name="babygroot001" position={[0.73, 0.79, -2.18]} rotation={[Math.PI / 2, 0, -2.3]} scale={0.66}>
        <mesh name="pCylinder9_phong1_0001" geometry={nodes.pCylinder9_phong1_0001.geometry} material={materials.phong1} />
        <mesh name="pCylinder9_phong1_0001_1" geometry={nodes.pCylinder9_phong1_0001_1.geometry} material={materials.blinn2} />
        <mesh name="pCylinder9_phong1_0001_2" geometry={nodes.pCylinder9_phong1_0001_2.geometry} material={materials.phongE1} />
        <mesh name="pCylinder9_phong1_0001_3" geometry={nodes.pCylinder9_phong1_0001_3.geometry} material={materials.lambert2} />
        <mesh name="pCylinder9_phong1_0001_4" geometry={nodes.pCylinder9_phong1_0001_4.geometry} material={materials.lambert3} />
      </group>
      <mesh name="batman-logo-png-2039001" geometry={nodes['batman-logo-png-2039001'].geometry} material={materials['batman-logo-png-2039']} position={[1.71, 0.61, -1.79]} rotation={[1.57, -0.5, 1.48]} scale={0.05} />
      <mesh name="CHAIR001" geometry={nodes.CHAIR001.geometry} material={materials['Default OBJ']} position={[1.62, 0.04, -1.79]} rotation={[1.57, -0.34, 1.62]} scale={0.01} />
      <mesh name="criticalError001" geometry={nodes.criticalError001.geometry} material={materials.criticalError} position={[0.89, 0.63, -1.7]} rotation={[1.57, 0, 0.92]} scale={1.6} />
      <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={nodes.Cube004.material} position={[1.88, 0, -1.79]} rotation={[0, 1.57, 0]} />
      <group name="Cube005" position={[0.75, 0.92, -1.5]} rotation={[-Math.PI, 0.89, -Math.PI]} scale={[0.15, 0.21, 0.15]}>
        <mesh name="Cube026" geometry={nodes.Cube026.geometry} material={materials['Computer.Chassis']} />
        <mesh name="Cube026_1" geometry={nodes.Cube026_1.geometry} material={materials['Computer.Black']} />
      </group>
      <group name="Cylinder002" position={[0.43, 1.26, -2.15]} rotation={[1.34, -0.55, -0.42]}>
        <mesh name="Cylinder002_1" geometry={nodes.Cylinder002_1.geometry} material={materials.metal} />
        <mesh name="Cylinder002_2" geometry={nodes.Cylinder002_2.geometry} material={materials['plastico negro']} />
        <mesh name="Cylinder002_3" geometry={nodes.Cylinder002_3.geometry} material={materials['metal opaco']} />
        <mesh name="Cylinder002_4" geometry={nodes.Cylinder002_4.geometry} material={materials.rojo} />
        <mesh name="Cylinder002_5" geometry={nodes.Cylinder002_5.geometry} material={materials.blanco} />
      </group>
      <group name="Cylinder003" position={[0.45, 1.27, -2.11]} rotation={[1.33, -1.04, -0.17]} scale={0.15}>
        <mesh name="Cylinder003_1" geometry={nodes.Cylinder003_1.geometry} material={materials['luz blanca']} />
        <mesh name="Cylinder003_2" geometry={nodes.Cylinder003_2.geometry} material={materials['luz roja']} />
      </group>
      <group name="glass001" position={[1.88, -0.15, -1.79]} rotation={[0, 1.57, 0]} scale={1.54}>
        <mesh name="Cube027" geometry={nodes.Cube027.geometry} material={materials.Window} />
        <mesh name="Cube027_1" geometry={nodes.Cube027_1.geometry} material={materials.Glass} />
      </group>
      <mesh name="IMAGE001" geometry={nodes.IMAGE001.geometry} material={materials.IMAGE} position={[0.32, 1.04, -2.76]} rotation={[Math.PI / 2, 0, -1.55]} scale={0.5} />
      <mesh name="kisspng-javascript-logo-html-clip-art-javascript-logo-5b518" geometry={nodes['kisspng-javascript-logo-html-clip-art-javascript-logo-5b518'].geometry} material={materials['kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a']} position={[0.66, 0.92, -1.64]} rotation={[Math.PI / 2, 0, 2.39]} scale={0.31} />
      <mesh name="kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01d" geometry={nodes['kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01d'].geometry} material={materials['kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01db2f8']} position={[0.77, 1.23, -1.51]} rotation={[3.08, 0.07, 3.12]} scale={0.29} />
      <mesh name="kisspng-web-development-cascading-style-sheets-css3-comput-" geometry={nodes['kisspng-web-development-cascading-style-sheets-css3-comput-'].geometry} material={materials['kisspng-web-development-cascading-style-sheets-css3-comput-css-']} position={[0.82, 0.55, -1.36]} rotation={[1.71, 0.17, 2.29]} scale={0.25} />
      <mesh name="Piso003" geometry={nodes.Piso003.geometry} material={materials.Piso} position={[1.88, 0, -1.79]} rotation={[0, 1.57, 0]} scale={1.52} />
      <mesh name="PisoGranito001" geometry={nodes.PisoGranito001.geometry} material={materials.PisoGranito} position={[1.88, 0.21, -1.79]} rotation={[0, 1.57, 0]} scale={1.44} />
      <group name="Plane002" position={[0.82, -0.56, -1.8]} rotation={[0, 1.57, 0]}>
        <mesh name="Plane012" geometry={nodes.Plane012.geometry} material={materials['Material.010']} />
        <mesh name="Plane012_1" geometry={nodes.Plane012_1.geometry} material={materials['Material.012']} />
        <mesh name="Plane012_2" geometry={nodes.Plane012_2.geometry} material={materials['Material.013']} />
        <mesh name="Plane012_3" geometry={nodes.Plane012_3.geometry} material={materials['Material.014']} />
      </group>
      <group name="Plane003" position={[1.13, 0.62, -1.99]} rotation={[0, 1.57, 0]} scale={[0.01, 0, 0.01]}>
        <mesh name="Plane013" geometry={nodes.Plane013.geometry} material={materials['Material.005']} />
        <mesh name="Plane013_1" geometry={nodes.Plane013_1.geometry} material={materials['Material.008']} />
      </group>
      <group name="Plane004" position={[1.27, 0.62, -2.21]} rotation={[-Math.PI, 1.17, -Math.PI]} scale={0.01}>
        <mesh name="Plane014" geometry={nodes.Plane014.geometry} material={materials['plastik_mat.001']} />
        <mesh name="Plane014_1" geometry={nodes.Plane014_1.geometry} material={materials['plastik_polysk.002']} />
        <mesh name="Plane014_2" geometry={nodes.Plane014_2.geometry} material={materials.guma} />
        <mesh name="Plane014_3" geometry={nodes.Plane014_3.geometry} material={materials['Material.008']} />
      </group>
      <group name="Plane005" position={[1.18, 0.62, -1.57]} rotation={[0, 1.57, 0]} scale={0.07}>
        <mesh name="Plane015_1" geometry={nodes.Plane015_1.geometry} material={materials.klawiatura_klawisze} />
        <mesh name="Plane015_2" geometry={nodes.Plane015_2.geometry} material={materials['Material.011']} />
      </group>
      <mesh name="Plane006" geometry={nodes.Plane006.geometry} material={materials['plastik_polysk.klawiatura']} position={[1.17, 0.62, -1.82]} rotation={[0, 1.57, 0]} scale={0.07} />
      <mesh name="Plane007" geometry={nodes.Plane007.geometry} material={materials['plastik_polysk.001']} position={[1.17, 0.62, -1.82]} rotation={[1.48, 1.54, -1.48]} scale={[0.26, 0.07, 0.06]} />
      <mesh name="RuedaPie003" geometry={nodes.RuedaPie003.geometry} material={materials['Material.015']} position={[1.88, 0, -1.66]} rotation={[0, 1.57, 0]} scale={1.54} />
      <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials['Computer.Monitor.Glass']} position={[0.89, 0.99, -1.61]} rotation={[-Math.PI, 0.89, -Math.PI]} scale={[0.14, 0.14, 0.01]} />
      <mesh name="Suzanne001" geometry={nodes.Suzanne001.geometry} material={materials.Monkey} position={[0.98, 0.81, -1.55]} rotation={[-Math.PI, 0.89, -Math.PI]} scale={[0.01, 0.01, 0]} />
      <mesh name="water_drop001" geometry={nodes.water_drop001.geometry} material={materials.None} position={[2.19, 0.73, -2.12]} rotation={[Math.PI / 2, 0, -1.57]} />
      <mesh name="Wood001" geometry={nodes.Wood001.geometry} material={materials.Wood} position={[1.88, -0.12, -1.79]} rotation={[0, 1.57, 0]} scale={1.54} />
    </group>
  )
}

useGLTF.preload('/models/rooms/rooms.glb')