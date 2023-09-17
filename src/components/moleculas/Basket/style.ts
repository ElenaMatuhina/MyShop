import styled from 'styled-components';

export const BasketList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const ListOption = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-bottom: 2px solid #d1d1d1;
  width: 100%;
  position: relative;

  color: #000;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;

  &:last-child {
    border-bottom: none;
  }

  background-color: #eee;
`;

export const ListOptionSumValue = styled.div`
  border: 4px double #5a5a5a;
  border-width: 0px 0px 4px 0px;
`;

export const Wrapper = styled.div`
  position: absolute;
  right: 20px;
`;
