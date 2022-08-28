import styled, { keyframes } from 'styled-components'

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
  animation-delay: 4s;
`

export const SceneDiv = styled.div`
  height: 100vh;
  width: 80%;
  padding: 5;
  margin: auto;
  z-index: 5;
  position: relative;
  opacity: 0;
  transition: opacity;
  transition-timing-function: ease;
  animation: ${(props) => (props.onanimation ? opacitytrans : 'none')} 5s linear
    forwards;
`
export const SphereLeft = styled.div`
  position: absolute;
  width: 500px;
  height: 100%;
  z-index: 10;
  right: 50%;
  top: 0px;
  background-image: url('/assets/sphere-blue.png');
  background-size: 500px;
  background-repeat: no-repeat;
  background-position: 250px;
  animation: ${(props) => (props.onanimation ? moveToLeft : 'none')} 3s ease-in
    forwards;
  @media (max-width: 600px) {
    width: 300px;
    background-size: 300px;
    background-position: 150px;
  }
`
export const SphereRight = styled.div`
  text-align: center;
  position: absolute;
  width: 500px;
  height: 100%;
  z-index: 10;
  left: 50%;
  top: 0%;
  background-image: url('/assets/sphere-blue.png');
  background-size: 500px;
  background-repeat: no-repeat;
  background-position: -250px;
  animation: ${(props) => (props.onanimation ? moveToRight : 'none')} 3s ease-in
    forwards;
  @media (max-width: 600px) {
    width: 300px;
    background-size: 300px;
    background-position: -150px;
  }
`
export const NavSection = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  z-index: 11;
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
  text-align: center;
  list-style: none;
  display: inline-block;
  backface-visibility: hidden;
  margin: 10px 20px -30px 20px;
  padding: 2px 5px;
  border-radius: 5%;
  border: 1px solid black;
  background-color: #eed09d;
  background-image: radial-gradient(rgba(2, 0, 36, 0.2) 1px, transparent 1px);
  background-position: 0 0, 10px 10px;
  background-size: 5px 5px;
  position: relative;
  transform: perspective(600px) rotateX(-180deg) translateY(100%);
  @media (max-width: 400px) {
    margin: 10px 5px -30px 5px;
  }
`
export const ListNav = styled.ul`
  background-color: #d48435;
  padding: 0px 5px;
  transform: translateX(200%);
  border: 1px solid black;
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
  height: 40rem;
  z-index: 4;
  padding: 0 0;
  object-fit: cover;
  @media (max-width: 960px) {
    height: auto;
    width: 100%;
  }
`
export const Article = styled.article`
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  @media (max-width: 960px) {
    padding: 0 20px;
    flex-direction: column;
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

const moveToRight = keyframes`
 0% {
    left: 50%;
    transform: scale(1);
  }
  100% {
    left:100%;
    opacity: 0;
  }
`
const moveToLeft = keyframes`
 0% {
    right: 50%;
  }
  100% {
    right:100%;
    opacity: 0;
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
