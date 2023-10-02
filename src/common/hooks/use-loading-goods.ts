import {  useState,useEffect } from 'react';
import { ItemType } from '../../types';
import { useSelectorTyped } from '../../store';
import { getSelectGoodsDataList } from '../utils/getSelectGoodsDataList';

export const useGoods = (): [ItemType[], ItemType[]] => {
  const [goodsDataList, setGoodsDataList] = useState<ItemType[]>([]);
  const [basketDataList, setBasketDataList] = useState<ItemType[]>([]);
  const { goods } = useSelectorTyped(({ goodsList }) => goodsList);
  const { multipleSelectOption, selectOption } = useSelectorTyped(
    ({ sort }) => sort
  );
  const { order } = useSelectorTyped(({ basket }) => basket);

  useEffect(() => { 
    getSelectGoodsDataList(
      goods,
      multipleSelectOption,
      selectOption,
      setGoodsDataList,
      setBasketDataList,
      order
    );
  }, [
    goods,
    multipleSelectOption,
    selectOption,
    setGoodsDataList,
    setBasketDataList,
    order,
  ]);

  return [goodsDataList, basketDataList];
};
