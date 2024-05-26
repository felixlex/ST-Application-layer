import { styled } from 'styled-components'

export default {
  ModalWrapper: styled.div<{ $open: boolean }>`
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    background-image: url("https://i.imgur.com/YiqZI2r.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: fixed;
    opacity: 0;
    pointer-events: none;
    transition: 0.2s;
    height: 100%;
    width: 100%;

    @media (max-width: 1100px) {
      height: 100vh;
      border-radius: 0px;
      width: 100vw;
    }

    ${(props) =>
      props.$open &&
      `
      opacity: 1;
      overflow: auto;
      pointer-events: all;
  `}
  `,

  ModalContent: styled.div<{ $open: boolean }>`
    max-width: fit-content;
    margin: 0 40px;
    border-radius: 10px;
    transform: scale(0.2);
    transition: transform 0.2s;
    padding: 35px;

    ${(props) => props.$open && 'transform: scale(1);'}
  `,
}
