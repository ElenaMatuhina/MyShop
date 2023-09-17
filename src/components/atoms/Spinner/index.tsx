import React, { FC } from 'react';

import { ReactComponent as SpinnerWhite } from '../Icons/commonIcons/spinner.svg';
import { SpinnerIconWrapper } from './SpinnerIconWrapper';
import type { Size } from './SpinnerIconWrapper';

export interface ISpinnerProps {
  /** Размер компонента */
  size?: Size;
}

export const Spinner: FC<ISpinnerProps> = ({ size = 'big' }) => {
  return (
    <SpinnerIconWrapper size={size}>
      <SpinnerWhite />
    </SpinnerIconWrapper>
  );
};
