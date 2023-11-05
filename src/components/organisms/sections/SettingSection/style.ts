import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const spinBack = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

export const SettingWrapper = styled.div<{ $openedModal: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #ffff;

  &:hover {
    box-shadow: 0px 0px 6px 2px #039be5;
    transition: 0.3s ease-in-out;
  }

  ${({ $openedModal }) =>
    $openedModal &&
    css`
      box-shadow: 0px 0px 6px 2px #039be5;
    `}
`;

export const SettingIconWrapper = styled.div<{ $openedModal: boolean }>`
  display: flex;
  width: 36px;
  height: 36px;
  cursor: pointer;
  animation: ${spin} 10s linear infinite;
  border-radius: 50%;

  & svg {
    fill: #000;
  }

  &:hover {
    animation: ${spinBack} 10s linear infinite;
  }

  ${({ $openedModal }) =>
    $openedModal &&
    css`
      animation: ${spinBack} 10s linear infinite;
    `}
`;

export const Wrapper = styled.div`
  display: flex;
  margin-left: 20px;
`;
