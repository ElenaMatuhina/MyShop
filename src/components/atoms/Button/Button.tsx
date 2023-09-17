import React, { FC, PropsWithChildren } from 'react';
import { ButtonWrapper, Label } from './style';



interface IButtonProps {
  title: string;
  handleClick: () => void;
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
  title,
  handleClick,
  children,
}) => {
  return (
    <ButtonWrapper type="submit" onClick={handleClick}>
      {children}
      {title && <Label>{title}</Label>}
    </ButtonWrapper>
  );
};


