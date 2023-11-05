import React from 'react';
import { useRemoveBasket } from '../../../common/hooks/use-remove-basket';
import { useIncQuan } from '../../../common/hooks/use-inc-quantity';
import { useDecQuantity } from '../../../common/hooks/use-dec-quantity';

import { ItemType } from '../../../types';

import {
  ListOption,
  ListOptionManage,
  ListOptionManageExposure,
  Text,
  NameItem,
  WrapperIcon,
  WrapperText,
  TextDescription,
  Wrapper,
  ButtonDeleteWrapper,
} from './style';

import { ButtonDelete } from '../../atoms/ButtonDelete';
import { IconResult } from '../../atoms/IconResult';

import { useToastNotify } from '../../../common/hooks/use-toast-notify';

import { ReactComponent as Plus } from '../../atoms/Icons/headerIcons/plus.svg';
import { ReactComponent as Minus } from '../../atoms/Icons/headerIcons/minus.svg';

export const BasketItem = ({
  id,
  name,
  price,
  quantity,
  full_background,
  description,
}: ItemType) => {
  const [decQuan] = useDecQuantity(id);
  const [incQuan] = useIncQuan(id);
  const [removeItem] = useRemoveBasket(id);
  const toastNotify = useToastNotify();

  const getRemoveItem = () => {
    removeItem();
    toastNotify({ title: 'Удалено из карзины', text: name, type: 'success' });
  };

  const totalPriceItem = (price * quantity).toLocaleString();

  return (
    <ListOption>
      <Wrapper>
        <WrapperIcon>
          <IconResult fullBackground={full_background} name={name} />
        </WrapperIcon>
        <WrapperText>
          <NameItem type="mobile">{totalPriceItem} ₽</NameItem>
          <span>{name}</span>
          <TextDescription>{description}</TextDescription>
        </WrapperText>
      </Wrapper>
      <ListOptionManage>
        <ListOptionManageExposure onClick={incQuan}>
          <Plus />
        </ListOptionManageExposure>
        <Text>{quantity}</Text>
        <ListOptionManageExposure $disable={quantity === 1} onClick={decQuan}>
          <Minus />
        </ListOptionManageExposure>
      </ListOptionManage>
      <NameItem>{totalPriceItem} ₽</NameItem>
      <ButtonDeleteWrapper>
        <ButtonDelete onClick={getRemoveItem}>&times;</ButtonDelete>
      </ButtonDeleteWrapper>
    </ListOption>
  );
};
