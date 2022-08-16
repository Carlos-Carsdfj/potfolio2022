import { useProgress } from '@react-three/drei'
import { DivEffect,SceneDiv, SphereLeft, SphereRight, CircuitBackground } from './Styled'
import './App.css'
import  Scene  from './components/Scene'

function App(){
  const { progress, total, loaded } = useProgress()

  return (<div className='container'>

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
    <CircuitBackground>

    </CircuitBackground>
  </div>)
}

export default App
