import React, { FC } from 'react';

import { IconWrapper, IconErrorWrapper, Text } from './style';

interface IIconResultProps {
  fullBackground: string;
  name: string;
  minHeight: number;
  iconError: boolean;
}

const IconResult: FC<IIconResultProps> = ({
  fullBackground,
  name,
  minHeight,
  iconError = false,
}) => {
  return (
    <IconWrapper minHeight={minHeight}>
      {iconError ? (
        <IconErrorWrapper>
          <i className="material-icons">visibility_off</i>
          <Text>Фото временно отсутствует</Text>
        </IconErrorWrapper>
      ) : (
        <img src={fullBackground} alt={name} />
      )}
    </IconWrapper>
  );
};


export { IconResult };
