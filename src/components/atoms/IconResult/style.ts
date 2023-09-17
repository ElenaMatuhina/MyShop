import styled from 'styled-components';

export const IconWrapper = styled.div<{ minHeight?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: ${({ minHeight }) => minHeight}px;

  i {
    font-size: 60px;
    color: #ddd;
    border-radius: 50%;
    padding: 10px;
    border: 3px solid #9e9e9e;
  }
`;

export const IconErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.span`
  font-size: 17px;
  line-height: 24px;
  font-weight: 400;
  color: #626c77;
  margin-top: 10px;
`;
