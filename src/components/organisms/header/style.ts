import styled from 'styled-components';
import { MOBILE_660 } from '../../../common/media';
import { Z_INDEX_HEADER } from '../../../common/constants/zIndex';

export const WrapperHeader = styled.header`
  width: 100%;
  position: relative;
  z-index: ${Z_INDEX_HEADER};

  @media ${MOBILE_660} {
    position: fixed;
    border-bottom: 2px solid #fff;
  }
`;

export const HideMobile = styled.div`
  display: flex;

  @media ${MOBILE_660} {
    display: none;
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