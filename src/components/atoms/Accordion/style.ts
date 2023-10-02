import styled, { css, keyframes } from 'styled-components';

const overlayAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  margin-bottom: 20px;
  border-bottom: 2px solid #000;
  outline: none;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
  padding: 16px;
  border-radius: 16px;

  &:hover {
    background-color: #f2f3f7;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowToDownWrapper = styled.div<{ isOpen: boolean }>`
  svg {
    transition: all 0.6s;
    transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : 0)});
  }
`;

export const Text = styled.span`
  font-size: 24px;
  line-height: 28px;
  font-weight: 400;
  color: #000000;
  margin-left: 12px;

  &:hover {
    color: #009387;
  }
`;

export const ContentOwnerWrapper = styled.div<{ opened: boolean }>`
  display: flex;
  margin: 16px 0;
  flex-direction: column;

  ${({ opened }) =>
    opened &&
    css`
      transition: all 0.8s ease-in-out;
      animation: ${overlayAnimation} 0.8s 1; /* Указываем название анимации, её время и количество повторов*/
      animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
    `}
`;
