import styled from 'styled-components';
import { MOBILE_660 } from '../../../common/media';

export const ListOption = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 16px;
  position: relative;
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

  @media ${MOBILE_660} {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  flex: 1 0;
  width: 0;
  display: flex;

  @media ${MOBILE_660} {
    width: 100%;
    margin-bottom: 16px;
  }
`;

export const ButtonDeleteWrapper = styled.div`
  position: absolute;
  right: 16px;

  @media ${MOBILE_660} {
    top: 16px;
  }
`;

export const NameItem = styled.div<{ type?: string }>`
  flex: 1 0;
  display: ${({ type }) => (type === 'mobile' ? 'none' : 'flex')};
  justify-content: end;
  width: 100%;
  margin-right: 30px;

  @media ${MOBILE_660} {
    display: ${({ type }) => (type !== 'mobile' ? 'none' : 'flex')};
    flex: none;
    justify-content: start;
    margin-bottom: 6px;
  }
`;

export const TextDescription = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #626c77;
`;

export const WrapperIcon = styled.div`
  display: flex;
  margin-right: 10px;
  img {
    width: 50px;
    height: 50px;

    @media ${MOBILE_660} {
      width: 110px;
      height: 110px;
    }
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-right: 20px;
`;

export const ListOptionManage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px 0 50px;

  @media ${MOBILE_660} {
    width: 100%;
    justify-content: start;
    margin-left: 20px;
  }
`;

export const ListOptionManageExposure = styled.div<{ $disable?: boolean }>`
  display: flex;
  align-items: center;
  padding: 7px;
  width: 22px;
  height: 22px;
  justify-content: space-around;

  background: #f3f0f1;
  position: relative;
  background: #f3f0f1;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  opacity: ${({ $disable }) => ($disable ? 0.3 : 1)};

  span {
    line-height: 22px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }

  box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
  color: #000;
  &:hover {
    opacity: 0.3;
    box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
  }
  &:active {
    opacity: 1;
    box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5), inset 8px 8px 16px rgba(0, 0, 0, 0.1);
    color: #79e3b6;
  }
`;

export const Text = styled.span`
  min-width: 20px;
  text-align: center;
  line-height: 22px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  margin: 0 10px;
`;
