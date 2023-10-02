import styled, { keyframes } from 'styled-components';
import { MOBILE_480 } from '../../../common/media';

export const GoodListTitle = styled.h3`
  padding-bottom: 10px;
  margin: 0 auto 20px;
  text-align: center;
  position: relative;
  font-family: 'Roboto', sans-serif;
  color: #434b4d;
  font-size: 2.92rem;
  font-weight: bold;
  line-height: 110%;

  @media ${MOBILE_480} {
    font-size: 26px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;
