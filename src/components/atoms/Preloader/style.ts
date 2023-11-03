import styled, { keyframes } from 'styled-components';

const prel = keyframes`
  0% {
        left: 0;
        transform: translateX(-100%);
      }
      100% {
        left: 100%;
        transform: translateX(0%);
      }
`;

export const PreloaderContainer = styled.span`
  display: block;
  position: relative;
  height: 12px;
  width: 80%;
  border: 1px solid #fff;
  border-radius: 10px;
  overflow: hidden;
  &::after {
    content: '';
    width: 40%;
    height: 100%;
    background: #ff3d00;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    animation: ${prel} 2s linear infinite;
  }
`;
