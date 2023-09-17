import styled, { css } from 'styled-components';

export const ListOption = styled.li<{
  selected?: boolean;
  highlighted?: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 0.25em 0.5em;
  cursor: pointer;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }

  background-color: ${({ selected }) => selected && 'hsl(209, 11%, 36%)'};
  ${({ highlighted }) =>
    highlighted &&
    css`
      background-color: hsl(209, 11%, 56%);
      color: white;
    `}
`;

export const CheckboxIcon = styled.div<{ checked: boolean }>`
  display: inline;
  cursor: pointer;

  display: inline-block;
  transition: all 0.2s;
  position: relative;
  padding-left: 20px;

  &:before {
    position: absolute;
    left: 0;
    display: inline-block;
    font-weight: 900;
    font-size: 14px;
    content: '\\002B';
    transition: transform 0.3s ease-in-out;

    ${({ checked }) =>
      checked &&
      css`
        color: #4caf50;
        content: '\\2713';
        transform: rotate(-360deg);
        transition: transform 0.3s ease-in-out;
      `};
  }
`;
