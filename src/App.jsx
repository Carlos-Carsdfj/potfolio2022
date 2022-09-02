import { useRef, useEffect } from 'react'
import useSize from './utils//useSize'
import { useProgress } from '@react-three/drei'
import { DivEffect,SceneDiv, Nav, ListNav, ItemNav,  Bg, Article2,  ImageRender, Article1 } from '/src/Styled'
import { Instagram, Twitter, Gmail, Linkedin, Github } from './components/Svgs'
import  Scene  from './components/Scene'


function App(){
  const target = useRef(null)
  const size = useSize(target)
  const { errors, total, loaded } = useProgress()
  if(errors.length>0){
    console.log('ERROR :',errors)
  }
  return (<>
  <Nav
  
    ><ListNav
    onanimation={Boolean(total === loaded)}
    >
      <Bg/>
      <ItemNav>
        <a href='#'>ME</a>
      </ItemNav>
      <ItemNav>
        <a href='#skills-section'>SKILLS</a>
      </ItemNav>
      <ItemNav>
        <a href='#social-section'>SOCIAL MEDIA</a>
      </ItemNav>
      <ItemNav>
        <a href='#social-section'>PROJECTS</a>
      </ItemNav>
    </ListNav>
  </Nav>
  
   <section className='container'>
    <SceneDiv 
      ref={target}
    onanimation={Boolean(total === loaded)}>
      <Scene
      screensize={size?.width > 600? 1 : 0.5 }
      />
      
    </SceneDiv >
    <DivEffect onanimation={Boolean(total === loaded)}>l</DivEffect>

  </section >

 <span style={{height:'300px', display:'block'}}></span>
  <section className='container' id='skills-section' >
  <Article1>
  <ImageRender src='https://res.cloudinary.com/darvaxtkj/image/upload/w_600,h_600,c_scale/v1661997544/images/render2_nlzjyn.png' alt='Skills' ></ImageRender>
  <div><h2>MIS CONOCIMIENTOS</h2>
  <p>
        Mis experiencas se basan en varios pequeños trabajos que he realizado en modo de aprendizaje autonomo
        al igual que en la suma de  muchas horas de lectura y   videos de varios creadores de contenido que concidero de muy buena   calidad. 
        Mi camino me ha llevado desde <strong>Html</strong>, <strong>Css</strong> , <strong>Javascript</strong>, Consumo de  <strong>APi Rest</strong> hasta <strong>React</strong>, 
        <strong>Node.js</strong>,  <strong>Next.js</strong>, <strong>Gatsby</strong>, <strong>GraphQl</strong>,       
  </p>
  </div>
  </Article1>      
  </section>
  <span style={{height:'300px', display:'block'}}></span>
  <section className='container' id='social-section' >
  <Article2>
   
    <div><h2>EN TODOS LADOS</h2>
  <p>
       Como el universo mismo, me encuentro en constante expancion de mis redes sociales, por cierto no necesito lentes pero a que si me quedan?
  </p>
  <a href='https://www.instagram.com/carlos_ferreira93/' rel='nofollow noopener noreferrer' target='_blank' ><Instagram/></a>
   <a href='https://twitter.com/ferreira_jardin/' rel='nofollow noopener noreferrer' target='_blank' ><Twitter/></a> 
   <a href='mailto:cardfj@gmail.com' rel='nofollow noopener noreferrer' ><Gmail/></a> 
   <a href='https://www.linkedin.com/in/carlos-ferreira-jardin-799bb0145/' rel='nofollow noopener noreferrer' target='_blank'><Linkedin/></a>
   <a href='https://github.com/Carlos-Carsdfj' rel='nofollow noopener noreferrer' target='_blank'><Github/></a>
  </div>
  <ImageRender src='https://res.cloudinary.com/darvaxtkj/image/upload/w_600,h_600,c_scale/v1662120679/images/renderTransparent_a5stuf.png' alt='Skills' ></ImageRender>
  </Article2>
  </section>
  <span style={{height:'300px', display:'block'}}></span>
  </>)
}

export default App
