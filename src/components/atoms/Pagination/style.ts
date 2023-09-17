import styled, { css } from 'styled-components';
import { MOBILE_480 } from '../../../common/media';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
`;

export const UL = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin: 0;
  padding: 20px 0;
  position: relative;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    white 17%,
    white 83%,
    rgba(255, 255, 255, 0) 100%
  );

  &::before {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 17%,
      rgba(0, 0, 0, 0.1) 83%,
      rgba(0, 0, 0, 0) 100%
    );
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    width: 100%;
    top: -1px;
  }

  &::after {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 17%,
      rgba(0, 0, 0, 0.1) 83%,
      rgba(0, 0, 0, 0) 100%
    );
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    width: 100%;
    bottom: -1px;
  }
`;

export const LI = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 7px;
  width: 32px;
  height: 32px;
  justify-content: center;
  margin: 0 5px;

  background: #f3f0f1;
  position: relative;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  span {
    line-height: 22px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }

  box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
    6px 6px 10px rgba(0, 0, 0, 0.2);
  color: #000;
  &:hover {
    opacity: 0.5;
    box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
      6px 6px 10px rgba(0, 0, 0, 0.2);
  }
  &:active {
    opacity: 1;
    box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
      inset 8px 8px 16px rgba(0, 0, 0, 0.1);
    color: #79e3b6;
  }

  ${({ active }) =>
    active &&
    css`
      background: rgba(0, 0, 0, 0.1);
      font-weight: 700;
      width: 38px;
      height: 38px;
      span {
        font-size: 18px;
      }
      opacity: 1;
    `}

  @media ${MOBILE_480} {
    width: 26px;
    height: 26px;

    span {
      font-size: 14px;
    }

    svg {
      width: 26px;
      height: 26px;
    }

    &:hover {
      opacity: 1;
    }

    ${({ active }) =>
      active &&
      css`
        font-weight: 700;
        width: 30px;
        height: 30px;
        opacity: 1;
        span {
          font-size: 16px;
        }
      `}
  }
`;

export const Reduction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 32px;
  height: 32px;

  @media ${MOBILE_480} {
    width: 26px;
    height: 26px;
  }

  &:after {
    position: absolute;
    content: '...';
    color: #000;
    font-size: 32px;
    margin: 0 5px;
    bottom: 0;
    @media ${MOBILE_480} {
      font-size: 26px;
      margin: 0 2px;
    }
  }
`;
