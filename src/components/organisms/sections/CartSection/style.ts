import styled, { css } from 'styled-components';

export const CartButton = styled.div<{ openedModal: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #ffff;
  position: relative;

  &:hover {
    box-shadow: 0px 0px 6px 2px #039be5;
  }

  &:active {
    box-shadow: 0px 0px 6px 2px #039be5;
    transition: 0.3s ease-in-out;
  }

  ${({ openedModal }) =>
    openedModal &&
    css`
      box-shadow: 0px 0px 6px 2px #039be5;
    `}
`;

export const Wrapper = styled.div`
  display: flex;
  margin-left: 20px;
`;

export const TextWrapper = styled.div<{
  minHeight?: number;
  cutQuantity?: boolean;
}>`
  position: absolute;
  bottom: 26px;
  left: 26px;

  min-width: 20px;
  height: ${({ minHeight }) => (minHeight ? minHeight + 2 : 20)}px;
  border: 1px solid #ffffff;
  background-color: #ff0032;
  border-radius: 50%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding: 2px;

  ${({ cutQuantity }) =>
    cutQuantity &&
    css`
      max-width: 24px;
    `}
`;

export const Text = styled.span<{ cutQuantity?: boolean }>`
  font-size: 12px;
  line-height: 24px;
  font-weight: 500;
  color: #fff;

  ${({ cutQuantity }) =>
    cutQuantity &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;
