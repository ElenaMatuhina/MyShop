import styled from 'styled-components';

export const ListOption = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid #d1d1d1;
  width: 100%;

  color: #000;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;

  &:last-child {
    border-bottom: none;
  }

  background-color: #eee;
`;

export const ListOptionManage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
`;

export const ListOptionManageExposure = styled.div<{ disable?: boolean }>`
  display: flex;
  align-items: center;
  padding: 7px;
  width: 32px;
  height: 32px;
  justify-content: center;
  margin-left: 10px;

  background: #f3f0f1;
  position: relative;
  background: #f3f0f1;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  opacity: ${({ disable }) => (disable ? 0.3 : 1)};
  
  span {
    line-height: 22px;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
  }
  
  box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
  6px 6px 10px rgba(0, 0, 0, 0.2);
  color: #000;
  &:hover {
    opacity: 0.3;
    box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
    6px 6px 10px rgba(0, 0, 0, 0.2);
  }
  &:active {
    opacity: 1;
    box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
    inset 8px 8px 16px rgba(0, 0, 0, 0.1);
    color: #79e3b6;
  }
`;

export const Text = styled.span`
  line-height: 22px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  margin-left: 10px;
`;
