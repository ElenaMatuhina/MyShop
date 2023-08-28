import styled from 'styled-components';
import { MOBILE_660 } from 'common/media';

export const FooterWrapper = styled.footer<{ paddingBottom?: number }>`
  display: flex;
  flex-direction: column;

  @media ${MOBILE_660} {
    padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgb(255, 255, 255);
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;

  @media ${MOBILE_660} {
    flex-direction: column;
  }
`;

export const Li = styled.li`
  display: inline-block;
  vertical-align: top;
  text-align: center;

  @media ${MOBILE_660} {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }
`;

export const Link = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 15px;
  color: palevioletred;
`;

export const LinkWrapper = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 15px;
  color: palevioletred;
  position: relative;

  &:hover:before {
    position: absolute;
    content: '';
    width: calc(100% - (10px * 2));
    height: 2px;
    bottom: 0;
    background: #fff;
  }
`;

export const Label = styled.span`
  text-transform: uppercase;
  align-items: center;
  color: white;
  line-height: 17px;
  font-size: 14px;
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;
  text-decoration: none;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  position: relative;
`;

export const Text = styled.span`
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: white;
  line-height: 24px;
  font-size: 14px;
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  position: relative;
`;

export const LabelText = styled.a`
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: white;
  line-height: 24px;
  font-size: 14px;
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;
  text-decoration: none;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  position: relative;
  white-space: nowrap;

  &:hover {
    color: white;
  }

  &:hover:before {
    position: absolute;
    content: '';
    width: calc(100% + (1px * 2));
    height: 2px;
    bottom: -6px;
    background: #fff;
  }
`;

export const LabelTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PhonesTextDivide = styled.div`
  display: flex;
  margin-right: 4px;
  margin-left: 4px;
  margin-top: 7px;
  color: white;
  line-height: 24px;
  font-size: 14px;
  font-weight: 400;
`;

export const LabelTextValue = styled.span`
  align-items: center;
  color: white;
  line-height: 24px;
  font-size: 14px;
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  position: relative;
`;

export const FooterHh = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  font-size: 20px;
  line-height: 40px;
  border-radius: 25px;
  text-align: center;
  background-color: #ffffff;
  color: #000;
  font-weight: 700;
  font-style: normal;
  text-indent: 1px;
  font-family: 'PT Sans', Arial, sans-serif;
  text-decoration: none;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: white;
  font-size: 14px;
  font-weight: 400;
`;
