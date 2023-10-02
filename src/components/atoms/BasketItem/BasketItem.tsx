import React from 'react';
import { useRemoveBasket } from '../../../common/hooks/use-remove-basket';
import { useIncQuan } from '../../../common/hooks/use-inc-quantity';
import { useDecQuantity } from '../../../common/hooks/use-dec-quantity';

import { ListOption, ListOptionManage, ListOptionManageExposure, Text} from './style';
import { ButtonDelete } from '../../atoms/ButtonDelete';
import { useToastNotify } from '../../../common/hooks/use-toast-notify';
import { ReactComponent as Plus } from '../../atoms/Icons/headerIcons/plus.svg';
import { ReactComponent as Minus } from '../../atoms/Icons/headerIcons/minus.svg';

type BasketItemType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export const BasketItem = ({ id, name, price, quantity }: BasketItemType) => {
  const [decQuan] = useDecQuantity(id);
  const [incQuan] = useIncQuan(id);
  const [removeItem] = useRemoveBasket(id);
  const toastNotify = useToastNotify();

  const getRemoveItem = () => {
    removeItem();
    toastNotify({ title: 'Удалено из карзины', text: name, type: 'success' });
  };

  return (
    <ListOption>
      {name} x {quantity} = {price * quantity} ₽
      <ListOptionManage>
        <ListOptionManageExposure onClick={incQuan}>
          <Plus />
        </ListOptionManageExposure>
        <Text>{quantity}</Text>
        <ListOptionManageExposure disable={quantity === 1} onClick={decQuan}>
        <Minus/>
        </ListOptionManageExposure>

        <ButtonDelete onClick={getRemoveItem}>&times;</ButtonDelete>
      </ListOptionManage>
    </ListOption>
  );
};
