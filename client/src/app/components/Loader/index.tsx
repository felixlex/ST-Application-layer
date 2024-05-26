import React from 'react'
import { styled } from 'styled-components'

const Loader: React.FC = () => {
  return <Container />
}

const Container = styled.div`
  margin: 4px 0 0 2px;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(0, 0, 0, 0);
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  border-radius: 50%;
  transform: rotate(30deg);
  animation: animate 0.7s linear infinite;

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Loader
