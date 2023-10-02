import styled from 'styled-components';
import { MOBILE_660 } from '../../../common/media';

export const WrapperHeader = styled.div`
  width: 100%;
  position: relative;
  display: none;

  @media ${MOBILE_660} {
    display: flex;
    position: fixed;
    border-top: 2px solid #fff;
    bottom: 0;
  }
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const HeaderMain = styled.div`
  display: flex;
  align-items: center;
`;
