import React, { FC, useCallback, useEffect } from 'react';
import { BasketList, ListOption, ListOptionSumValue, Wrapper } from './style';
import { BasketItem } from '../../atoms/BasketItem';
import { useAppDispatch, useSelectorTyped } from '../../../store';
import { basketDelete } from '../../../reducers/basket-slice';
import { ButtonDelete } from '../../atoms/ButtonDelete';
import { ItemType } from '../../../types';
import { getGoodsDataListSort } from '../../../common/utils';
import { useToastNotify } from '../../../common/hooks/use-toast-notify';

interface IBasketProps {
  order: ItemType[];
  setOrderDataList: (value: ItemType[]) => void;
  orderDataList: ItemType[];
}

export const Basket: FC<IBasketProps> = ({ order, setOrderDataList, orderDataList }) => {
  const { selectOption } = useSelectorTyped(({ sort }) => sort);
  const dispatch = useAppDispatch();
  const toastNotify = useToastNotify();

  const totalPrice = order.reduce((sum, el) => {
    if (el.quantity) {
      return sum + el.price * el.quantity;
    }
    return 0;
  }, 0);

  const handleClick = useCallback(() => {
    dispatch(basketDelete([]));
    toastNotify({ title: 'Корзина пуста', type: 'success' });
  }, [dispatch, toastNotify]);

  useEffect(() => {
    getGoodsDataListSort({
      selectOption,
      goodsDataList: order,
      setGoodsDataListValue: setOrderDataList,
    });
  }, [selectOption, order, setOrderDataList]);

  return (
    <BasketList>
      {orderDataList.length ? (
        <>
          {orderDataList.map((item) => (
            <BasketItem key={item.id} {...item} />
          ))}
          <ListOption>
            <ListOptionSumValue>
              Общая стоймость: {totalPrice} ₽
            </ListOptionSumValue>
            {orderDataList.length > 1 && (
              <Wrapper>
                <ButtonDelete onClick={handleClick}>&times;</ButtonDelete>
              </Wrapper>
            )}
          </ListOption>
        </>
      ) : (
        <ListOption>Корзина пуста</ListOption>
      )}
    </BasketList>
  );
};
