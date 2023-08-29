import styled from 'styled-components';
import { MOBILE_480 } from '../../../common/media';

export const LogoLook = styled.div`
  display: flex;
  align-items: center;
  color: rgb(43, 48, 55);
  line-height: 52px;
  font-size: 38px;
  font-family: 'Exo 2', sans-serif;
  white-space: nowrap;
  text-transform: uppercase;
  text-shadow: 1px 1px white, 1px -1px white, -1px 1px white, -1px -1px white,
    3px 3px 6px rgba(0, 0, 0, 0.5);

  @media ${MOBILE_480} {
    font-size: 26px;
  }
`;
