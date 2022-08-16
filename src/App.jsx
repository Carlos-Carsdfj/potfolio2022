import { useProgress } from '@react-three/drei'
import { DivEffect,SceneDiv, SphereLeft, SphereRight, NavSection, ListNav, ItemNav } from './Styled'
import './App.css'
import  Scene  from './components/Scene'

function App(){
  const { progress, total, loaded } = useProgress()

  return (<>
  <NavSection
  
  ><ListNav
  onanimation={Boolean(total === loaded)}
  ><ItemNav>Social media</ItemNav><ItemNav>About me</ItemNav><ItemNav>projects</ItemNav></ListNav></NavSection> <div className='container'>

    <SceneDiv onanimation={Boolean(total === loaded)}>
      <Scene/>
    </SceneDiv >
    <DivEffect onanimation={Boolean(total === loaded)}>l</DivEffect>

    <SphereRight onanimation={Boolean(total === loaded)}>

    </SphereRight >
    <SphereLeft onanimation={Boolean(total === loaded)}>
    {total === loaded ? (
        <h1>Ready</h1>
      ) : (
        <h1> Loadin :{progress.toString().slice(0, 5)}%</h1>
      )}
    </SphereLeft >

  </div></>)
}

export default App
