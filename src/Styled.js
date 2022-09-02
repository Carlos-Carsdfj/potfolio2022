import styled, { keyframes } from 'styled-components'

export const DivLoader = styled.div`
  position: absolute;
  display: grid;
  place-content: center;
  top: 0px;
  height: 100%;
  width: 100%;
  background: transparent;
`
export const Loader = styled.span`
  display: grid;
  place-content: center;
  position: relative;
  width: 300px;
  height: 300px;
  color: white;
  z-index: 11;
  border-radius: 50%;
  box-shadow: inset 0 0 20px -5px rgba(255, 255, 255, 0.5),
    inset 0 -40px 40px -20px rgba(255, 255, 255, 0.5);
  background: linear-gradient(rgba(2, 0, 36, 0.5) 300px, transparent 0)
    no-repeat;
  background-position: 0px ${(props) => (-300 / 100) * props.loader + 300}px;
  transition: background-position 0.5s linear, display 5s linear;
  &:before {
    position: absolute;
    content: '';
    width: 40%;
    height: 25%;
    top: 20px;
    left: 10px;
    z-index: 11;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: rotate(-45deg);
  }
`
export const DivEffect = styled.div`
  height: 100%;
  width: 100%;
  background-color: transparent;
  background-image: radial-gradient(rgba(2, 0, 36, 0.5) 5px, transparent 5px),
    radial-gradient(rgba(2, 0, 36, 0.5) 5px, transparent 5px);
  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;
  z-index: 3;
  position: absolute;
  left: 0%;
  top: 0%;
  clip-path: circle(2%);
  transition-property: clip-path;
  transition-duration: 5s;
  transition-timing-function: ease;
  opacity: 0;
  animation: ${(props) => (props.onanimation ? cicleSize : 'none')} 3s linear
    forwards;
  animation-delay: 2s;
`
export const SceneDiv = styled.div`
  height: 100vh;
  width: 80%;
  padding: 5;
  margin: auto;
  z-index: 5;
  position: relative;
  transition: opacity;
  transition-timing-function: ease;
  animation: ${(props) => (props.onanimation ? opacitytrans : 'none')} 2s linear
    forwards;
`
export const Nav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
  overflow: hidden;
  @media (max-width: 960px) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 400px) {
    justify-content: center;
    position: absolute;
    top: 0px;
  }
`
export const ItemNav = styled.i`
  position: relative;
  color: white;
  text-align: center;
  list-style: none;
  display: inline-block;
  backface-visibility: hidden;
  margin: 10px 20px -30px 20px;
  padding: 2px 5px;
  border-radius: 5%;
  border: 1px solid black;
  background-color: #7373fb;
  position: relative;
  & a {
    text-decoration: none;
    color: white;
  }
  transform: perspective(600px) rotateX(-180deg) translateY(100%);
  @media (max-width: 400px) {
    margin: 10px 5px -30px 5px;
  }
`
export const Bg = styled.div`
  position: absolute;
  background: #7373fb;
  filter: blur(10px);
  width: 90%;
  height: 80%;
  top: 10%;
  left: 5%;
  background: blur;
`
export const ListNav = styled.ul`
  background-color: #150f7a7d;
  padding: 0px 5px;
  transform: translateX(200%);
  border: 1px solid #0000004d;
  border-radius: 3%;
  animation: ${(props) => (props.onanimation ? outOfWall : 'none')} 5s linear
    forwards;
  & ${ItemNav} {
    animation: ${(props) => (props.onanimation ? moveAndRotataX : 'none')} 5s
      linear forwards;
  }
`
export const ImageRender = styled.img`
  width: auto;
  height: 30rem;
  z-index: 4;
  padding: 0 0;
  object-fit: cover;
  @media (max-width: 960px) {
    height: auto;
    width: 100%;
  }
`
export const Article = styled.article`
  display: grid;
  place-content: center;
  text-indent: 2rem;
  text-align: center;
  color: white;
  font-size: 2rem;
  height: 100%;
  padding: 0 30px;
  @media (max-width: 960px) {
    padding: 0 20px;
  }
  & strong {
    font-size: 1.6rem;
    position: relative;
    color: #f88c2f;
    text-shadow: 0 0 30px #ffffffb2;
  }
  & p {
    font-size: 1.5rem;
    padding: 0 10px;
  }
`

export const Article1 = styled(Article)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 960px) {
    padding: 0 20px;
    flex-direction: column;
    justify-content: center;
  }
`
export const Article2 = styled(Article)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  & svg {
    width: 4rem;
    height: 4rem;
    margin: auto 5px;
  }
  @media (max-width: 960px) {
    padding: 0 20px;
    flex-direction: column-reverse;
    justify-content: center;
  }
`
// ONLY ANIMATIONS

const outOfWall = keyframes`
   0% {
    transform: translateX(200%);
  }
  
  100% {
    transform: translateX(0%);
  }
`
const moveAndRotataX = keyframes`
   0% {
    transform: perspective(600px) rotateX(-180deg) translateY(100%);
  }
  100% {
    transform: rotateX(0deg);
    transform :translateY(0%);
    transform: perspective(600px);
    transform-origin: 100% 50%;
    transform-style: preserve-3d;
  }
`

const cicleSize = keyframes`
  0% {
    opacity: 0;
    clip-path:circle(2%);
  }
  10% {
    opacity: 0.5;
    clip-path:circle(4%);
  }
  40% {
    opacity: 1;
    clip-path:circle(11%);
  }
  50% {
    opacity: 1;

    clip-path:circle(13%)
  }
  100% {
    opacity: 1;

    clip-path:circle(20%);
  }
`

const opacitytrans = keyframes`
  0% {
    opacity:0;
  }
  10% {
    opacity:0.04;
  }
  40% {
    opacity:0.11;
  }
  50% {
    opacity:0.15
  }
  100% {
    opacity: 1;
  }
`
