import React, { FC } from 'react';

import { IconWrapper, IconErrorWrapper, Text } from './style';
import { ReactComponent as VisibilityOff } from '../../atoms/Icons/headerIcons/visibility-off.svg';

interface IIconResultProps {
  fullBackground: string;
  name: string;
  minHeight?: number;
  iconError?: boolean;
}

const IconResult: FC<IIconResultProps> = ({ fullBackground, name, minHeight, iconError }) => {
  return (
    <IconWrapper $minHeight={minHeight}>
      {iconError ? (
        <IconErrorWrapper>
          <VisibilityOff />
          <Text>Фото временно отсутствует</Text>
        </IconErrorWrapper>
      ) : (
        <img src={fullBackground} alt={name} />
      )}
    </IconWrapper>
  );
};

IconResult.defaultProps = {
  iconError: false,
  minHeight: 50,
};

export { IconResult };
