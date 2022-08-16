import styled, { keyframes } from 'styled-components'

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
    transform: rotate(0deg);
    transform: scale(1);
    top: 0%;
  }

  100% {
    left:100%;
    top: 100%;
    opacity: 0;
    transform: rotate(90deg);
  }

`
const moveToLeft = keyframes`
 0% {
    right: 50%;
    transform: rotate(0deg);
    top: 0%;
  }

  100% {
    right:100%;
    top: 100%;
    opacity: 0;
    transform: rotate(-90deg);
  }

`

const cicleSize = keyframes`
  0% {
    clip-path:circle(2%);
  }

  10% {
    clip-path:circle(4%);
  }
  40% {
    clip-path:circle(11%);
  }
  50% {
    clip-path:circle(13%)
  }
  100% {
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
  animation: ${(props) => (props.onanimation ? cicleSize : 'none')} 3s linear
    forwards;
  animation-delay: 4s;
`

export const SceneDiv = styled.div`
  height: 100vh;
  width: 100%;
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
  animation: ${(props) => (props.onanimation ? moveToLeft : 'none')} 7s linear
    forwards;
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
  animation: ${(props) => (props.onanimation ? moveToRight : 'none')} 7s linear
    forwards;
`
export const NavSection = styled.nav`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  overflow: hidden;
  flex-direction: row-reverse;
  display: flex;
  flex-grow: 5px;
  justify-content: space-between;
`
export const ListNav = styled.ul`
  background-color: rgba(200, 100, 100, 1);
  padding: 0px 5px;
  transform: translateX(200%);
  background-image: radial-gradient(rgba(2, 0, 36, 0.2) 2px, transparent 1px);
  background-position: 5px, 5px;
  background-size: 5px 5px;
  border: 1px solid black;

  animation: ${(props) => (props.onanimation ? outOfWall : 'none')} 5s linear
    forwards;
  & i {
    animation: ${(props) => (props.onanimation ? moveAndRotataX : 'none')} 5s
      linear forwards;
  }
`

export const ItemNav = styled.i`
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
  z-index: 11;
  transform: perspective(600px) rotateX(-180deg) translateY(100%);
`
