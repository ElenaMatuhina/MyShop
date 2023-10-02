import styled from 'styled-components';
import { MOBILE_660 } from '../../../common/media';

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eee;

  @media ${MOBILE_660} {
    flex-direction: column;
    > div:last-child {
      margin-top: 0;
    }
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 20px;
  width: 100%;
`;

export const SelectTitle = styled.p`
  color: #000;
  margin-top: 0;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
`;
