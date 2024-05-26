import { styled } from 'styled-components'

export default {
  TooltipWrapper: styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    width:100%
  `,

  Tip: styled.div<{ $open: boolean }>`
    position: absolute;
    width:100%
    top: calc(100% + 6px);
    font-size: 12px;
    background-color: #fff;
    color: #000;
    border-radius: 5px;
    border: 1px solid #ddd;
    z-index: 10;
    pointer-events: none;
    transition:
      opacity 0.1s,
      transform 0.15s !important;
    opacity: 0;
    padding: 1px 7px;
    transform-origin: top;
    transform: scale(0);
    z-index: 100;

    ${(p) =>
      p.$open &&
      `
    opacity: 1;
    transform: scale(1);
  `}
  `,
}
