import styled from 'styled-components';
import { MOBILE_660 } from 'common/media';

export const Container = styled.div<{ padding?: string }>`
  max-width: 960px;
  margin: 0 auto;
  padding: ${({ padding }) => padding || '20px'};

  @media ${MOBILE_660} {
    width: 100%;
  }
`;
