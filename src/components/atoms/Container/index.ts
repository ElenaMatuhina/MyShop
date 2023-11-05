import styled from 'styled-components';

export const Container = styled.div<{ $padding?: string }>`
  max-width: 960px;
  margin: 0 auto;
  padding: ${({ $padding }) => $padding || '20px'};
`;
