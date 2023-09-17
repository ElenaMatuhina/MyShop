import styled from 'styled-components';
import { MOBILE_660 } from '../../../../common/media';

export const GoodListWrapper = styled.main<{ paddingTop?: number }>`
  @media ${MOBILE_660} {
    padding-top: ${({ paddingTop }) => paddingTop}px;
  }
`;
