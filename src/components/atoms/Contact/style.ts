import styled from 'styled-components';

export const CartButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #ffff;

  text-decoration: none;
  color: #000;

  &:hover {
    box-shadow: 0px 0px 6px 2px #039be5;
  }
`;

export const WrapperContact = styled.div`
  display: flex;
  margin-left: 20px;
`;
