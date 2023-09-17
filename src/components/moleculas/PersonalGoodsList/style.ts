import styled from 'styled-components';
import { MOBILE_480 } from '../../../common/media';

export const GoodListTitle = styled.h3`
  padding-bottom: 10px;
  margin: 0 auto 20px;
  text-align: center;
  position: relative;
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

  @media ${MOBILE_480} {
    font-size: 26px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;
