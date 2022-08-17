import { useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {  useFrame, useLoader } from '@react-three/fiber'

export default function Model(props) {
  useFrame((state, delta) => (maingroup.current.rotation.y += 0.005))
  const { nodes, materials } = useLoader(GLTFLoader ,'/models/rooms/rooms.glb')
  return (
    <group {...props} dispose={null}>
      <group
        name="Armature"
        position={[1.884181, 0.029764, 2.35909]}
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
          geometry={nodes["t-shirt"].geometry}
          material={materials["t-shirt"]}
          position={[0, 4.525225, 0]}
        />
        <group name="shorts" position={[0, 4.525225, 0]}>
          <mesh
            name="Cube008"
            geometry={nodes.Cube008.geometry}
            material={materials.shorts}
          />
          <mesh
            name="Cube008_1"
            geometry={nodes.Cube008_1.geometry}
            material={materials.cuerdas}
          />
        </group>
        <group name="Show" position={[0, 4.525225, 0]}>
          <mesh
            name="Cube003_1"
            geometry={nodes.Cube003_1.geometry}
            material={materials.Body}
          />
          <mesh
            name="Cube003_2"
            geometry={nodes.Cube003_2.geometry}
            material={materials.Eye}
          />
          <mesh
            name="Cube003_3"
            geometry={nodes.Cube003_3.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <mesh
          name="Shoes"
          geometry={nodes.Shoes.geometry}
          material={materials.shoes}
          position={[0, 4.525225, 0]}
        />
      </group>
      <group
        name="Armature002"
        position={[-1.782913, 0.029764, -2.296916]}
        rotation={[-Math.PI, 0.002646, -Math.PI]}
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
        <group name="shorts002" position={[0, 4.525225, 0]}>
          <mesh
            name="Cube021"
            geometry={nodes.Cube021.geometry}
            material={materials.shorts}
          />
          <mesh
            name="Cube021_1"
            geometry={nodes.Cube021_1.geometry}
            material={materials.cuerdas}
          />
        </group>
        <mesh
          name="t-shirt001"
          geometry={nodes["t-shirt001"].geometry}
          material={materials["t-shirt"]}
          position={[0, 4.525225, 0]}
        />
        <group name="Show002" position={[0, 4.525225, 0]}>
          <mesh
            name="Cube022"
            geometry={nodes.Cube022.geometry}
            material={materials.Body}
          />
          <mesh
            name="Cube022_1"
            geometry={nodes.Cube022_1.geometry}
            material={materials.Eye}
          />
          <mesh
            name="Cube022_2"
            geometry={nodes.Cube022_2.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <mesh
          name="Shoes002"
          geometry={nodes.Shoes002.geometry}
          material={materials.shoes}
          position={[0, 4.525225, 0]}
        />
      </group>
      <group
        name="Armature001"
        position={[-1.447446, 0.077479, 1.860579]}
        rotation={[-1.682645, 1.168699, 1.650317]}
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
          geometry={nodes.Shoes001.geometry}
          material={materials["shoes.001"]}
          position={[0, 4.525226, 0]}
        />
        <mesh
          name="shirt"
          geometry={nodes.shirt.geometry}
          material={materials.shirt}
          position={[0, 4.525226, 0]}
        />
        <mesh
          name="shorts001"
          geometry={nodes.shorts001.geometry}
          material={materials["shorts.001"]}
          position={[0, 4.525226, 0]}
        />
        <group name="Show001" position={[0, 4.525226, 0]}>
          <mesh
            name="Cube016"
            geometry={nodes.Cube016.geometry}
            material={materials["Body.001"]}
          />
          <mesh
            name="Cube016_1"
            geometry={nodes.Cube016_1.geometry}
            material={materials["Eye.001"]}
          />
          <mesh
            name="Cube016_2"
            geometry={nodes.Cube016_2.geometry}
            material={materials["Material.003"]}
          />
        </group>
      </group>
      <group
        name="Armature003"
        position={[1.547382, 0.077479, -1.789592]}
        rotation={[-1.465136, -1.168987, -1.497999]}
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
          geometry={nodes.shirt001.geometry}
          material={materials.shirt}
          position={[0, 4.525226, 0]}
        />
        <mesh
          name="shorts003"
          geometry={nodes.shorts003.geometry}
          material={materials["shorts.001"]}
          position={[0, 4.525226, 0]}
        />
        <mesh
          name="Shoes003"
          geometry={nodes.Shoes003.geometry}
          material={materials["shoes.001"]}
          position={[0, 4.525226, 0]}
        />
        <group name="Show003" position={[0, 4.525226, 0]}>
          <mesh
            name="Cube033"
            geometry={nodes.Cube033.geometry}
            material={materials["Body.001"]}
          />
          <mesh
            name="Cube033_1"
            geometry={nodes.Cube033_1.geometry}
            material={materials["Eye.001"]}
          />
          <mesh
            name="Cube033_2"
            geometry={nodes.Cube033_2.geometry}
            material={materials["Material.003"]}
          />
        </group>
      </group>
      <group
        name="agarres"
        position={[2.331357, 0.564106, 0.72221]}
        rotation={[-1.585036, 0.002177, -0.001661]}
        scale={1.21865}
      >
        <mesh
          name="Box004__0001"
          geometry={nodes.Box004__0001.geometry}
          material={materials["RootNode.001"]}
        />
        <mesh
          name="Box004__0001_1"
          geometry={nodes.Box004__0001_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <mesh
        name="Piso001"
        geometry={nodes.Piso001.geometry}
        material={materials["Piso.001"]}
        position={[1.884181, 0, 1.864415]}
        scale={1.518872}
      />
      <mesh
        name="mancuerda001"
        geometry={nodes.mancuerda001.geometry}
        material={materials["RootNode.001"]}
        position={[2.191374, 0.08803, 1.871513]}
        rotation={[2.907799, -1.459089, 2.474727]}
        scale={0.017626}
      />
      <mesh
        name="mancuerda002"
        geometry={nodes.mancuerda002.geometry}
        material={materials["RootNode.001"]}
        position={[2.188678, 0.103428, 1.780032]}
        rotation={[-0.448992, 0.206599, -2.527911]}
        scale={0.017626}
      />
      <group
        name="agarres001"
        position={[-2.234419, 0.564106, -0.661226]}
        rotation={[-1.556563, -0.002215, 3.137285]}
        scale={[1.21865, 1.218649, 1.21865]}
      >
        <mesh
          name="Box004__0002"
          geometry={nodes.Box004__0002.geometry}
          material={materials["RootNode.001"]}
        />
        <mesh
          name="Box004__0002_1"
          geometry={nodes.Box004__0002_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <mesh
        name="Piso002"
        geometry={nodes.Piso002.geometry}
        material={materials["Piso.001"]}
        position={[-1.784222, 0, -1.802243]}
        rotation={[-Math.PI, 0.002646, -Math.PI]}
        scale={1.518872}
      />
      <mesh
        name="mancuerda004"
        geometry={nodes.mancuerda004.geometry}
        material={materials["RootNode.001"]}
        position={[-2.091395, 0.08803, -1.810155]}
        rotation={[0.228452, 1.456513, -0.66149]}
        scale={0.017626}
      />
      <mesh
        name="RuedaPie"
        geometry={nodes.RuedaPie.geometry}
        material={materials["Material.001"]}
        position={[1.754612, 0, 1.864415]}
        scale={1.536324}
      />
      <mesh
        name="mancuerda005"
        geometry={nodes.mancuerda005.geometry}
        material={materials["RootNode.001"]}
        position={[-2.088941, 0.103428, -1.718667]}
        rotation={[-2.69284, -0.204215, 0.612509]}
        scale={0.017626}
      />
      <mesh
        name="Cube001"
        geometry={nodes.Cube001.geometry}
        material={materials.Material}
        position={[1.884181, 0, 1.864415]}
      />
      <mesh
        name="Cube003"
        geometry={nodes.Cube003.geometry}
        material={materials.Material}
        position={[-1.784222, 0, -1.802243]}
        rotation={[-Math.PI, 0.002646, -Math.PI]}
      />
      <mesh
        name="RuedaPie002"
        geometry={nodes.RuedaPie002.geometry}
        material={materials["Material.001"]}
        position={[-1.654654, 0, -1.801901]}
        rotation={[-Math.PI, 0.002646, -Math.PI]}
        scale={1.536324}
      />
      <mesh
        name="alcoclchado"
        geometry={nodes.alcoclchado.geometry}
        material={materials["Material.002"]}
        position={[1.884181, -0.026075, 1.864415]}
      />
      <mesh
        name="alcoclchado001"
        geometry={nodes.alcoclchado001.geometry}
        material={materials["Material.002"]}
        position={[-1.784222, -0.026075, -1.802243]}
        rotation={[-Math.PI, 0.002646, -Math.PI]}
      />
      <mesh
        name="Cylinder001_Cylinder001"
        geometry={nodes.Cylinder001_Cylinder001.geometry}
        material={materials["Star.001"]}
        position={[0.596842, 0.057014, 1.394468]}
        rotation={[1.552764, 0.021386, -0.870176]}
        scale={0.020745}
      />
      <mesh
        name="Cylinder002_Cylinder001"
        geometry={nodes.Cylinder002_Cylinder001.geometry}
        material={materials["Star.001"]}
        position={[0.596842, 0.057014, 1.394468]}
        rotation={[1.552764, 0.021386, -0.870176]}
        scale={0.020745}
      />
      <mesh
        name="Cylinder003_Cylinder001"
        geometry={nodes.Cylinder003_Cylinder001.geometry}
        material={materials["Star.001"]}
        position={[0.596842, 0.057014, 1.394468]}
        rotation={[1.552764, 0.021386, -0.870176]}
        scale={0.020745}
      />
      <mesh
        name="Cylinder_Cylinder001"
        geometry={nodes.Cylinder_Cylinder001.geometry}
        material={materials["Star.001"]}
        position={[0.596842, 0.057014, 1.394468]}
        rotation={[1.552764, 0.021386, -0.870176]}
        scale={0.020745}
      />
      <mesh
        name="DragonBall_Sphere002"
        geometry={nodes.DragonBall_Sphere002.geometry}
        material={materials["DragonBall.001"]}
        position={[0.914546, 0.092521, 0.718934]}
        rotation={[1.552764, 0.021386, -0.870176]}
        scale={0.059433}
      />
      <mesh
        name="?"
        geometry={nodes["?"].geometry}
        material={materials["Material.009"]}
        position={[-0.642812, 1.180228, 1.55434]}
        rotation={[1.513917, -0.045941, 0.678712]}
        scale={0.396241}
      />
      <mesh
        name="Holder_Cylinder"
        geometry={nodes.Holder_Cylinder.geometry}
        material={materials["Holder.001"]}
        position={[0.864818, 1.039261, 0.683118]}
        rotation={[-0.26871, 0.911465, 0.535421]}
        scale={0.027432}
      />
      <mesh
        name="Cube"
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[-1.77301, 0, 1.859539]}
        rotation={[Math.PI, -1.567599, Math.PI]}
      />
      <mesh
        name="CHAIR"
        geometry={nodes.CHAIR.geometry}
        material={materials["Default OBJ"]}
        position={[-1.510799, 0.04274, 1.860376]}
        rotation={[1.569668, 0.339632, -1.526279]}
        scale={0.007895}
      />
      <group
        name="Cube002"
        position={[-0.637656, 0.924258, 1.561522]}
        rotation={[0, -0.88928, 0]}
        scale={[0.14778, 0.214259, 0.14778]}
      >
        <mesh
          name="Cube010"
          geometry={nodes.Cube010.geometry}
          material={materials["Computer.Chassis"]}
        />
        <mesh
          name="Cube010_1"
          geometry={nodes.Cube010_1.geometry}
          material={materials["Computer.Black"]}
        />
      </group>
      <mesh
        name="Piso"
        geometry={nodes.Piso.geometry}
        material={materials.Piso}
        position={[-1.77301, 0, 1.859539]}
        rotation={[Math.PI, -1.567598, Math.PI]}
        scale={1.518872}
      />
      <group
        name="Cylinder"
        position={[-0.325467, 1.260902, 2.218305]}
        rotation={[1.804658, 0.552144, 2.72213]}
      >
        <mesh
          name="Cylinder_1"
          geometry={nodes.Cylinder_1.geometry}
          material={materials.metal}
        />
        <mesh
          name="Cylinder_2"
          geometry={nodes.Cylinder_2.geometry}
          material={materials["plastico negro"]}
        />
        <mesh
          name="Cylinder_3"
          geometry={nodes.Cylinder_3.geometry}
          material={materials["metal opaco"]}
        />
        <mesh
          name="Cylinder_4"
          geometry={nodes.Cylinder_4.geometry}
          material={materials.rojo}
        />
        <mesh
          name="Cylinder_5"
          geometry={nodes.Cylinder_5.geometry}
          material={materials.blanco}
        />
      </group>
      <group
        name="Cylinder001"
        position={[-0.344328, 1.269295, 2.177063]}
        rotation={[1.808571, 1.036802, 2.968859]}
        scale={0.1473}
      >
        <mesh
          name="Cylinder001_1"
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["luz blanca"]}
        />
        <mesh
          name="Cylinder001_2"
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["luz roja"]}
        />
      </group>
      <group
        name="glass"
        position={[-1.77301, -0.144286, 1.859539]}
        rotation={[Math.PI, -1.567598, Math.PI]}
        scale={1.536324}
      >
        <mesh
          name="Cube009"
          geometry={nodes.Cube009.geometry}
          material={materials.Window}
        />
        <mesh
          name="Cube009_1"
          geometry={nodes.Cube009_1.geometry}
          material={materials.Glass}
        />
      </group>
      <group
        name="Plane001"
        position={[-1.019606, 0.6243, 2.059698]}
        rotation={[Math.PI, -1.567625, Math.PI]}
        scale={[0.008479, 0.001664, 0.008479]}
      >
        <mesh
          name="Plane005_1"
          geometry={nodes.Plane005_1.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          name="Plane005_2"
          geometry={nodes.Plane005_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        name="Plane"
        position={[-0.713328, -0.555816, 1.862923]}
        rotation={[Math.PI, -1.567599, Math.PI]}
      >
        <mesh
          name="Plane002_1"
          geometry={nodes.Plane002_1.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          name="Plane002_2"
          geometry={nodes.Plane002_2.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          name="Plane002_3"
          geometry={nodes.Plane002_3.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          name="Plane002_4"
          geometry={nodes.Plane002_4.geometry}
          material={materials["Material.014"]}
        />
      </group>
      <mesh
        name="cuerda"
        geometry={nodes.cuerda.geometry}
        material={materials["PowerPole.001"]}
        position={[1.00036, 1.441065, 0.831814]}
        rotation={[-0.199701, 0.718969, -0.089666]}
        scale={0.027645}
      />
      <mesh
        name="Plane026"
        geometry={nodes.Plane026.geometry}
        material={materials["plastik_polysk.klawiatura"]}
        position={[-1.060104, 0.622522, 1.884315]}
        rotation={[Math.PI, -1.567625, Math.PI]}
        scale={0.06622}
      />
      <mesh
        name="RuedaPie001"
        geometry={nodes.RuedaPie001.geometry}
        material={materials["Material.015"]}
        position={[-1.772596, 0, 1.729972]}
        rotation={[Math.PI, -1.567598, Math.PI]}
        scale={1.536324}
      />
      <mesh
        name="Sphere"
        geometry={nodes.Sphere.geometry}
        material={materials["Computer.Monitor.Glass"]}
        position={[-0.781643, 0.988804, 1.678321]}
        rotation={[0, -0.88928, 0]}
        scale={[0.14341, 0.14341, 0.01413]}
      />
      <group
        name="Plane015"
        position={[-1.157511, 0.618174, 2.274152]}
        rotation={[0, -1.174489, 0]}
        scale={[0.01123, 0.014498, 0.01123]}
      >
        <mesh
          name="Plane007_1"
          geometry={nodes.Plane007_1.geometry}
          material={materials["plastik_mat.001"]}
        />
        <mesh
          name="Plane007_2"
          geometry={nodes.Plane007_2.geometry}
          material={materials["plastik_polysk.002"]}
        />
        <mesh
          name="Plane007_3"
          geometry={nodes.Plane007_3.geometry}
          material={materials.guma}
        />
        <mesh
          name="Plane007_4"
          geometry={nodes.Plane007_4.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <mesh
        name="Plane027"
        geometry={nodes.Plane027.geometry}
        material={materials["plastik_polysk.001"]}
        position={[-1.060145, 0.62374, 1.884315]}
        rotation={[1.666018, -1.537218, 1.666071]}
        scale={[0.261483, 0.069929, 0.056326]}
      />
      <mesh
        name="water_drop"
        geometry={nodes.water_drop.geometry}
        material={materials.None}
        position={[-2.080315, 0.73254, 2.181775]}
        rotation={[Math.PI / 2, 0, 1.57399]}
      />
      <mesh
        name="Cylinder001_Cylinder002"
        geometry={nodes.Cylinder001_Cylinder002.geometry}
        material={materials["Star.001"]}
        position={[-0.498131, 0.057014, -1.328892]}
        rotation={[1.588886, -0.021338, 2.274063]}
        scale={0.020745}
      />
      <mesh
        name="Cylinder002_Cylinder002"
        geometry={nodes.Cylinder002_Cylinder002.geometry}
        material={materials["Star.001"]}
        position={[-0.498131, 0.057014, -1.328892]}
        rotation={[1.588886, -0.021338, 2.274063]}
        scale={0.020745}
      />
      <mesh
        name="Cylinder003_Cylinder002"
        geometry={nodes.Cylinder003_Cylinder002.geometry}
        material={materials["Star.001"]}
        position={[-0.498131, 0.057014, -1.328892]}
        rotation={[1.588886, -0.021338, 2.274063]}
        scale={0.020745}
      />
      <mesh
        name="Cylinder_Cylinder002"
        geometry={nodes.Cylinder_Cylinder002.geometry}
        material={materials["Star.001"]}
        position={[-0.498131, 0.057014, -1.328892]}
        rotation={[1.588886, -0.021338, 2.274063]}
        scale={0.020745}
      />
      <mesh
        name="DragonBall_Sphere001"
        geometry={nodes.DragonBall_Sphere001.geometry}
        material={materials["DragonBall.001"]}
        position={[-0.817622, 0.092521, -0.654201]}
        rotation={[1.588886, -0.021338, 2.274063]}
        scale={0.059433}
      />
      <mesh
        name="Plane006"
        geometry={nodes.Plane006.geometry}
        material={materials["plastik_polysk.klawiatura"]}
        position={[1.160105, 0.622522, -1.814353]}
        rotation={[0, 1.564967, 0]}
        scale={0.06622}
      />
      <mesh
        name="Holder_Cylinder001"
        geometry={nodes.Holder_Cylinder001.geometry}
        material={materials["Holder.001"]}
        position={[-0.767988, 1.039261, -0.618254]}
        rotation={[-2.873785, -0.908914, -2.607315]}
        scale={0.027432}
      />
      <mesh
        name="?001"
        geometry={nodes["?001"].geometry}
        material={materials["Material.009"]}
        position={[0.741942, 1.180228, -1.485483]}
        rotation={[1.627554, 0.046091, -2.460236]}
        scale={0.396241}
      />
      <mesh
        name="Plane007"
        geometry={nodes.Plane007.geometry}
        material={materials["plastik_polysk.001"]}
        position={[1.160146, 0.62374, -1.814352]}
        rotation={[1.397909, 1.536861, -1.397811]}
        scale={[0.261483, 0.069929, 0.056326]}
      />
      <mesh
        name="water_drop001"
        geometry={nodes.water_drop001.geometry}
        material={materials.None}
        position={[2.181099, 0.73254, -2.109112]}
        rotation={[Math.PI / 2, 0, -1.564957]}
      />
      <mesh
        name="Cube004"
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[1.872943, 0, -1.78769]}
        rotation={[0, 1.564953, 0]}
      />
      <group
        name="Cylinder003"
        position={[0.445106, 1.269295, -2.108994]}
        rotation={[1.337376, -1.037419, -0.167676]}
        scale={0.1473}
      >
        <mesh
          name="Cylinder003_1"
          geometry={nodes.Cylinder003_1.geometry}
          material={materials["luz blanca"]}
        />
        <mesh
          name="Cylinder003_2"
          geometry={nodes.Cylinder003_2.geometry}
          material={materials["luz roja"]}
        />
      </group>
      <mesh
        name="cuerda001"
        geometry={nodes.cuerda001.geometry}
        material={materials["PowerPole.001"]}
        position={[-0.903137, 1.441065, -0.767307]}
        rotation={[-2.942349, -0.716376, 3.051231]}
        scale={0.027645}
      />
      <mesh
        name="mirror001"
        geometry={nodes.mirror001.geometry}
        material={materials["mirror.002"]}
        position={[0.881564, 0.727999, 0.966577]}
        rotation={[-0.221902, 0.85811, 0.169074]}
        scale={0.00287}
      />
      <mesh
        name="mirror002"
        geometry={nodes.mirror002.geometry}
        material={materials["mirror.002"]}
        position={[-0.783985, 0.727999, -0.901756]}
        rotation={[-2.920362, -0.855529, -2.973407]}
        scale={0.00287}
      />
      <mesh
        name="CHAIR001"
        geometry={nodes.CHAIR001.geometry}
        material={materials["Default OBJ"]}
        position={[1.610735, 0.04274, -1.789222]}
        rotation={[1.57286, -0.339627, 1.61812]}
        scale={0.007895}
      />
      <group
        name="glass001"
        position={[1.872943, -0.144286, -1.78769]}
        rotation={[0, 1.564953, 0]}
        scale={1.536324}
      >
        <mesh
          name="Cube027"
          geometry={nodes.Cube027.geometry}
          material={materials.Window}
        />
        <mesh
          name="Cube027_1"
          geometry={nodes.Cube027_1.geometry}
          material={materials.Glass}
        />
      </group>
      <mesh
        name="Piso003"
        geometry={nodes.Piso003.geometry}
        material={materials.Piso}
        position={[1.872943, 0, -1.78769]}
        rotation={[0, 1.564953, 0]}
        scale={1.518872}
      />
      <group
        name="Plane002"
        position={[0.813273, -0.555816, -1.793879]}
        rotation={[0, 1.564953, 0]}
      >
        <mesh
          name="Plane012"
          geometry={nodes.Plane012.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          name="Plane012_1"
          geometry={nodes.Plane012_1.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          name="Plane012_2"
          geometry={nodes.Plane012_2.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          name="Plane012_3"
          geometry={nodes.Plane012_3.geometry}
          material={materials["Material.014"]}
        />
      </group>
      <mesh
        name="for-starts"
        geometry={nodes["for-starts"].geometry}
        material={materials["for-starts"]}
        position={[0.770426, 0.102704, 0.694602]}
        rotation={[2.547768, 0.340186, -1.991195]}
        scale={0.091741}
      />
      <mesh
        name="for-starts001"
        geometry={nodes["for-starts001"].geometry}
        material={materials["for-starts"]}
        position={[0.696176, 0.115693, 0.801077]}
        rotation={[2.001066, -0.662916, -2.718848]}
        scale={0.091741}
      />
      <mesh
        name="for-starts002"
        geometry={nodes["for-starts002"].geometry}
        material={materials["for-starts"]}
        position={[-0.673567, 0.102704, -0.629487]}
        rotation={[0.594351, -0.342379, 1.151969]}
        scale={0.091741}
      />
      <mesh
        name="for-starts003"
        geometry={nodes["for-starts003"].geometry}
        material={materials["for-starts"]}
        position={[-0.599035, 0.115693, -0.735766]}
        rotation={[1.138652, 0.66181, 0.425793]}
        scale={0.091741}
      />
      <mesh
        name="584830f5cef1014c0b5e4aa1"
        geometry={nodes["584830f5cef1014c0b5e4aa1"].geometry}
        material={materials["584830f5cef1014c0b5e4aa1"]}
        position={[1.931869, 0.487905, 2.515404]}
        rotation={[-1.081323, 0.196115, -2.73984]}
        scale={-0.216517}
      />
      <mesh
        name="584830f5cef1014c0b5e4aa1001"
        geometry={nodes["584830f5cef1014c0b5e4aa1001"].geometry}
        material={materials["584830f5cef1014c0b5e4aa1"]}
        position={[-1.830187, 0.487905, -2.453357]}
        rotation={[-2.060733, -0.194871, 0.399373]}
        scale={-0.216517}
      />
      <group
        name="Plane017"
        position={[-1.069096, 0.625002, 1.639639]}
        rotation={[Math.PI, -1.567625, Math.PI]}
        scale={0.06622}
      >
        <mesh
          name="Plane006_1"
          geometry={nodes.Plane006_1.geometry}
          material={materials.klawiatura_klawisze}
        />
        <mesh
          name="Plane006_2"
          geometry={nodes.Plane006_2.geometry}
          material={materials["Material.011"]}
        />
      </group>
      <group
        name="Cube005"
        position={[0.736804, 0.924258, -1.492679]}
        rotation={[-Math.PI, 0.891926, -Math.PI]}
        scale={[0.14778, 0.214259, 0.14778]}
      >
        <mesh
          name="Cube026"
          geometry={nodes.Cube026.geometry}
          material={materials["Computer.Chassis"]}
        />
        <mesh
          name="Cube026_1"
          geometry={nodes.Cube026_1.geometry}
          material={materials["Computer.Black"]}
        />
      </group>
      <group
        name="Cylinder002"
        position={[0.426354, 1.260902, -2.150285]}
        rotation={[1.338522, -0.552755, -0.416438]}
      >
        <mesh
          name="Cylinder002_1"
          geometry={nodes.Cylinder002_1.geometry}
          material={materials.metal}
        />
        <mesh
          name="Cylinder002_2"
          geometry={nodes.Cylinder002_2.geometry}
          material={materials["plastico negro"]}
        />
        <mesh
          name="Cylinder002_3"
          geometry={nodes.Cylinder002_3.geometry}
          material={materials["metal opaco"]}
        />
        <mesh
          name="Cylinder002_4"
          geometry={nodes.Cylinder002_4.geometry}
          material={materials.rojo}
        />
        <mesh
          name="Cylinder002_5"
          geometry={nodes.Cylinder002_5.geometry}
          material={materials.blanco}
        />
      </group>
      <group
        name="Plane003"
        position={[1.120072, 0.6243, -1.989843]}
        rotation={[0, 1.564953, 0]}
        scale={[0.008479, 0.001664, 0.008479]}
      >
        <mesh
          name="Plane013"
          geometry={nodes.Plane013.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          name="Plane013_1"
          geometry={nodes.Plane013_1.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <mesh
        name="nodejs-1-logo-png-transparent"
        geometry={nodes["nodejs-1-logo-png-transparent"].geometry}
        material={materials["nodejs-1-logo-png-transparent"]}
        position={[0.884074, 1.184157, 0.953806]}
        rotation={[1.671845, 0.174246, -0.870382]}
        scale={0.196417}
      />
      <mesh
        name="nodejs-1-logo-png-transparent001"
        geometry={nodes["nodejs-1-logo-png-transparent001"].geometry}
        material={materials["nodejs-1-logo-png-transparent"]}
        position={[-0.786528, 1.184157, -0.888992]}
        rotation={[1.470212, -0.174512, 2.273883]}
        scale={0.196417}
      />
      <mesh
        name="OXTDM33NMJFA7FDN63C3IPYLGI"
        geometry={nodes.OXTDM33NMJFA7FDN63C3IPYLGI.geometry}
        material={materials.OXTDM33NMJFA7FDN63C3IPYLGI}
        position={[0.338054, 0.976689, 1.864415]}
        rotation={[0, 0, -1.568647]}
        scale={0.532424}
      />
      <mesh
        name="OXTDM33NMJFA7FDN63C3IPYLGI001"
        geometry={nodes.OXTDM33NMJFA7FDN63C3IPYLGI001.geometry}
        material={materials.OXTDM33NMJFA7FDN63C3IPYLGI}
        position={[-0.238101, 0.976689, -1.798152]}
        rotation={[Math.PI, 0.002646, 1.572946]}
        scale={0.532424}
      />
      <mesh
        name="RuedaPie003"
        geometry={nodes.RuedaPie003.geometry}
        material={materials["Material.015"]}
        position={[1.872186, 0, -1.658124]}
        rotation={[0, 1.564953, 0]}
        scale={1.536324}
      />
      <mesh
        name="Sphere001"
        geometry={nodes.Sphere001.geometry}
        material={materials["Computer.Monitor.Glass"]}
        position={[0.8811, 0.988804, -1.609096]}
        rotation={[-Math.PI, 0.891926, -Math.PI]}
        scale={[0.14341, 0.14341, 0.01413]}
      />
      <group
        name="Plane004"
        position={[1.258543, 0.618174, -2.203931]}
        rotation={[-Math.PI, 1.177134, -Math.PI]}
        scale={[0.01123, 0.014498, 0.01123]}
      >
        <mesh
          name="Plane014"
          geometry={nodes.Plane014.geometry}
          material={materials["plastik_mat.001"]}
        />
        <mesh
          name="Plane014_1"
          geometry={nodes.Plane014_1.geometry}
          material={materials["plastik_polysk.002"]}
        />
        <mesh
          name="Plane014_2"
          geometry={nodes.Plane014_2.geometry}
          material={materials.guma}
        />
        <mesh
          name="Plane014_3"
          geometry={nodes.Plane014_3.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <mesh
        name="albertEinstein"
        geometry={nodes.albertEinstein.geometry}
        material={materials.albertEinstein}
        position={[-0.833032, 0.978156, 0.293229]}
        rotation={[Math.PI / 2, 0, 0.003194]}
        scale={0.63524}
      />
      <mesh
        name="albertEinstein001"
        geometry={nodes.albertEinstein001.geometry}
        material={materials.albertEinstein}
        position={[0.928824, 0.978156, -0.223873]}
        rotation={[Math.PI / 2, 0, -3.135753]}
        scale={0.63524}
      />
      <mesh
        name="criticalError"
        geometry={nodes.criticalError.geometry}
        material={materials.criticalError}
        position={[-0.802987, 0.992449, 1.770384]}
        rotation={[1.569741, 0.00396, -2.225254]}
        scale={1.598917}
      />
      <mesh
        name="criticalError001"
        geometry={nodes.criticalError001.geometry}
        material={materials.criticalError}
        position={[0.902687, 0.992449, -1.701102]}
        rotation={[1.571862, -0.003958, 0.918984]}
        scale={1.598917}
      />
      <mesh
        name="kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a"
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
        position={[-0.555929, 0.919974, 1.702899]}
        rotation={[Math.PI / 2, 0, -0.751135]}
        scale={0.310852}
      />
      <mesh
        name="kisspng-javascript-logo-html-clip-art-javascript-logo-5b518"
        geometry={
          nodes["kisspng-javascript-logo-html-clip-art-javascript-logo-5b518"]
            .geometry
        }
        material={
          materials[
            "kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a"
          ]
        }
        position={[0.655452, 0.919974, -1.634271]}
        rotation={[Math.PI / 2, 0, 2.393103]}
        scale={0.310852}
      />
      <mesh
        name="kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01db2f8"
        geometry={
          nodes["kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01db2f8"]
            .geometry
        }
        material={
          materials[
            "kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01db2f8"
          ]
        }
        position={[-0.661404, 1.229092, 1.575029]}
        rotation={[0.057386, -0.068865, -0.020303]}
        scale={0.289417}
      />
      <mesh
        name="kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01d"
        geometry={
          nodes["kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01d"]
            .geometry
        }
        material={
          materials[
            "kisspng-logo-html5-brand-clip-art-杉-山-良-雄-5b62be01db2f8"
          ]
        }
        position={[0.760588, 1.229092, -1.506122]}
        rotation={[3.084196, 0.071507, 3.121441]}
        scale={0.289417}
      />
      <mesh
        name="dinosaur-downloading-for-pc-wallpaper-preview"
        geometry={
          nodes["dinosaur-downloading-for-pc-wallpaper-preview"].geometry
        }
        material={materials["dinosaur-downloading-for-pc-wallpaper-preview"]}
        position={[0.36705, 0.921925, 2.757537]}
        rotation={[1.550255, 0.034652, -1.582562]}
        scale={0.595288}
      />
      <mesh
        name="dinosaur-downloading-for-pc-wallpaper-preview001"
        geometry={
          nodes["dinosaur-downloading-for-pc-wallpaper-preview001"].geometry
        }
        material={materials["dinosaur-downloading-for-pc-wallpaper-preview"]}
        position={[-0.264733, 0.921925, -2.691348]}
        rotation={[1.591429, -0.034598, 1.561678]}
        scale={0.595288}
      />
      <mesh
        name="kisspng-web-development-cascading-style-sheets-css3-comput-css-"
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
        position={[-0.736969, 0.9116, 1.423055]}
        rotation={[1.436379, -0.17464, -0.854557]}
        scale={0.254333}
      />
      <mesh
        name="kisspng-web-development-cascading-style-sheets-css3-comput-"
        geometry={
          nodes["kisspng-web-development-cascading-style-sheets-css3-comput-"]
            .geometry
        }
        material={
          materials[
            "kisspng-web-development-cascading-style-sheets-css3-comput-css-"
          ]
        }
        position={[0.835751, 0.9116, -1.353949]}
        rotation={[1.704751, 0.174993, 2.289698]}
        scale={0.254333}
      />
      <mesh
        name="batman-logo-png-2039"
        geometry={nodes["batman-logo-png-2039"].geometry}
        material={materials["batman-logo-png-2039"]}
        position={[-1.60386, 0.61464, 1.860079]}
        rotation={[1.569031, 0.504993, -1.66548]}
        scale={0.052715}
      />
      <mesh
        name="batman-logo-png-2039001"
        geometry={nodes["batman-logo-png-2039001"].geometry}
        material={materials["batman-logo-png-2039"]}
        position={[1.703796, 0.61464, -1.788678]}
        rotation={[1.574024, -0.504986, 1.479136]}
        scale={0.052715}
      />
      <mesh
        name="Suzanne"
        geometry={nodes.Suzanne.geometry}
        material={materials.Monkey}
        position={[-0.87391, 0.816317, 1.613275]}
        rotation={[0, -0.88928, 0]}
        scale={[0.00697, 0.00697, 0.000938]}
      />
      <mesh
        name="Suzanne001"
        geometry={nodes.Suzanne001.geometry}
        material={materials.Monkey}
        position={[0.973194, 0.816317, -1.543806]}
        rotation={[-Math.PI, 0.891926, -Math.PI]}
        scale={[0.00697, 0.00697, 0.000938]}
      />
      <mesh
        name="IMAGE"
        geometry={nodes.IMAGE.geometry}
        material={materials.IMAGE}
        position={[-0.212831, 1.037582, 2.824663]}
        rotation={[Math.PI / 2, 0, 1.59306]}
        scale={0.502317}
      />
      <mesh
        name="IMAGE001"
        geometry={nodes.IMAGE001.geometry}
        material={materials.IMAGE}
        position={[0.315324, 1.037582, -2.756939]}
        rotation={[Math.PI / 2, 0, -1.545887]}
        scale={0.502317}
      />
      <mesh
        name="PisoGranito"
        geometry={nodes.PisoGranito.geometry}
        material={materials.PisoGranito}
        position={[-1.77301, 0.208032, 1.859539]}
        rotation={[Math.PI, -1.567625, Math.PI]}
        scale={1.437775}
      />
      <mesh
        name="PisoGranito001"
        geometry={nodes.PisoGranito001.geometry}
        material={materials.PisoGranito}
        position={[1.872943, 0.208032, -1.78769]}
        rotation={[0, 1.564967, 0]}
        scale={1.437775}
      />
      <group
        name="Plane005"
        position={[1.168449, 0.625002, -1.569654]}
        rotation={[0, 1.564967, 0]}
        scale={0.06622}
      >
        <mesh
          name="Plane015_1"
          geometry={nodes.Plane015_1.geometry}
          material={materials.klawiatura_klawisze}
        />
        <mesh
          name="Plane015_2"
          geometry={nodes.Plane015_2.geometry}
          material={materials["Material.011"]}
        />
      </group>
      <group
        name="babygroot"
        position={[-0.616483, 0.789759, 2.246225]}
        rotation={[Math.PI / 2, 0, 0.840343]}
        scale={0.663722}
      >
        <mesh
          name="pCylinder9_phong1_0"
          geometry={nodes.pCylinder9_phong1_0.geometry}
          material={materials.phong1}
        />
        <mesh
          name="pCylinder9_phong1_0_1"
          geometry={nodes.pCylinder9_phong1_0_1.geometry}
          material={materials.blinn2}
        />
        <mesh
          name="pCylinder9_phong1_0_2"
          geometry={nodes.pCylinder9_phong1_0_2.geometry}
          material={materials.phongE1}
        />
        <mesh
          name="pCylinder9_phong1_0_3"
          geometry={nodes.pCylinder9_phong1_0_3.geometry}
          material={materials.lambert2}
        />
        <mesh
          name="pCylinder9_phong1_0_4"
          geometry={nodes.pCylinder9_phong1_0_4.geometry}
          material={materials.lambert3}
        />
      </group>
      <group
        name="babygroot001"
        position={[0.717443, 0.789759, -2.177435]}
        rotation={[Math.PI / 2, 0, -2.298604]}
        scale={0.663722}
      >
        <mesh
          name="pCylinder9_phong1_0001"
          geometry={nodes.pCylinder9_phong1_0001.geometry}
          material={materials.phong1}
        />
        <mesh
          name="pCylinder9_phong1_0001_1"
          geometry={nodes.pCylinder9_phong1_0001_1.geometry}
          material={materials.blinn2}
        />
        <mesh
          name="pCylinder9_phong1_0001_2"
          geometry={nodes.pCylinder9_phong1_0001_2.geometry}
          material={materials.phongE1}
        />
        <mesh
          name="pCylinder9_phong1_0001_3"
          geometry={nodes.pCylinder9_phong1_0001_3.geometry}
          material={materials.lambert2}
        />
        <mesh
          name="pCylinder9_phong1_0001_4"
          geometry={nodes.pCylinder9_phong1_0001_4.geometry}
          material={materials.lambert3}
        />
      </group>
      <mesh
        name="Wood"
        geometry={nodes.Wood.geometry}
        material={materials.Wood}
        position={[-1.77301, -0.114474, 1.859539]}
        rotation={[Math.PI, -1.567598, Math.PI]}
        scale={1.536324}
      />
      <mesh
        name="Wood001"
        geometry={nodes.Wood001.geometry}
        material={materials.Wood}
        position={[1.872943, -0.114474, -1.78769]}
        rotation={[0, 1.564953, 0]}
        scale={1.536324}
      />
    </group>
  );
}

useGLTF.preload("/models/rooms/room2.glb");