import { ComponentType } from 'react';

import { ReactComponent as Info } from './commonIcons/info.svg';
import { ReactComponent as ErrorIcon } from './commonIcons/error.svg';
import { ReactComponent as Success } from './commonIcons/success.svg';

import { ReactComponent as LeftIcon } from './commonIcons/left.svg';
import { ReactComponent as RightIcon } from './commonIcons/right.svg';
import { ReactComponent as DeleteIcon } from './commonIcons/delete.svg';
import { ReactComponent as SearchIcon } from './commonIcons/search.svg';

const toastIcons = {
  info: Info,
  success: Success,
  error: ErrorIcon,
};

const commonIcons = {
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  delete: DeleteIcon,
  search: SearchIcon,
};

type IconComponent = ComponentType<{
  color?: string;
}>;

export const getToastIcon = (id: keyof typeof toastIcons): IconComponent =>
  toastIcons[id];
export const getCommonIcon = (id: keyof typeof commonIcons): IconComponent =>
  commonIcons[id];
