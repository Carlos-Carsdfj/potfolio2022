import { useRef } from 'react'
import useSize from './utils//useSize'
import { useProgress } from '@react-three/drei'
import { DivEffect,SceneDiv, SphereLeft, SphereRight, NavSection, ListNav, ItemNav } from './Styled'
import './App.css'
import  Scene  from './components/Scene'

function App(){
  const target = useRef(null)
  const size = useSize(target)
  const { progress, total, loaded } = useProgress()
  return (<>
  <NavSection
  
    ><ListNav
    onanimation={Boolean(total === loaded)}
    >
      <ItemNav>Social media</ItemNav>
      <ItemNav>About me</ItemNav>
      <ItemNav>projects</ItemNav>
    </ListNav>
  </NavSection>
   <div className='container'>

    <SceneDiv 
      ref={target}
    onanimation={Boolean(total === loaded)}>
      <Scene
      screensize={size?.width > 600? 1 : 0.5 }
      />
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
