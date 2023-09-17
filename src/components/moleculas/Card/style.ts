import styled from 'styled-components';

export const CardWrapper = styled.div<{ loading?: string }>`
  display: flex;
  flex-direction: column;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  transition: 0.2s;

  position: relative;

  background-color: ${({ loading }) =>
    loading ? 'rgba(29, 32, 35, 0.1)' : 'inherit'};

  img {
    width: 100%;
  }

  &:hover {
    transform: translateY(-0.5%);
    box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.2);
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px;
`;

export const TextTitle = styled.span`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 0.6rem;
  color: #000000;
`;

export const Text = styled.span`
  font-size: 17px;
  line-height: 24px;
  font-weight: 400;
  color: #626c77;
`;

export const TextPrice = styled.span`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: #000000;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 20px 20px;
  border-top: 1px solid #e0e0e0;
`;

export const ButtonShoppingWrapper = styled.div`
  width: 120px;
  height: 40px;
  position: relative;
`;

export const ButtonShopping = styled.button<{ selectedProduct: boolean }>`
  width: 120px;
  height: 40px;

  cursor: pointer;
  outline: none;
  transition: 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;


  background: ${({ selectedProduct }) =>
    selectedProduct ? '#26a69a' : 'rgb(81, 92, 102)'};
  box-shadow: 0 1px rgb(255 255 255 / 20%) inset, 0 3px 5px rgb(0 1 6 / 50%),
    0 0 1px 1px rgb(0 1 6 / 20%);

  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;

  svg {
    position: absolute;
    left: 0;
    top: 0;
    fill: none;
    stroke: #fff;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 1s ease-in-out;
  }

  &:hover {
    transition: 1s ease-in-out;
    background: #26a69a;
    color: white;
  }

  &:hover svg {
    stroke-dashoffset: -480;
  }

  &:active {
    background: linear-gradient(rgb(250, 250, 250), rgb(235, 235, 235));
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5) inset,
      0 1px 1px 1px rgba(255, 255, 255, 0.4), 0 -1px 1px 1px rgba(0, 0, 0, 0.1);
    transition: none;
    color: black;
    cursor: pointer;
  }
`;

export const SpinnerWrapper = styled.div<{ minHeight?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  min-height: ${({ minHeight }) => minHeight}px;
`;
