import { useRef, useEffect } from 'react'
import useSize from './utils//useSize'
import { useProgress } from '@react-three/drei'
import { DivEffect,SceneDiv,  Loader, NavSection, ListNav, ItemNav, DivLoader, ImageRender, Article1 } from './Styled'
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
      <ItemNav>SKILLS</ItemNav>
      <ItemNav>SOCIAL MEDIA</ItemNav>
      <ItemNav>PROJECTS</ItemNav>
    </ListNav>
  </NavSection>
  
   <section className='container'>
   {  <DivLoader>
    <Loader loader={progress.toString().slice(0, 5)}  isLoader={total !== loaded} 
    ><p>{Math.trunc(progress.toString())}%</p></Loader>
    </DivLoader>}
    <SceneDiv 
      ref={target}
    onanimation={Boolean(total === loaded)}>


  
      <Scene
      screensize={size?.width > 600? 1 : 0.5 }
      />
      
    </SceneDiv >
    <DivEffect onanimation={Boolean(total === loaded)}>l</DivEffect>

  </section >

    {total === loaded ? <><span style={{height:'300px', display:'block'}}></span>
  <section className='container'>
  <Article1>
  <ImageRender src='/assets/render2.png' alt='Skills' ></ImageRender>
  <p>
        Esto y aquello puede ser lo otro pero si no lo es es un caos vavavavavavavava 
  </p>
  </Article1>      

  </section></>
  : ''  
}
  

  </>)
}

export default App
