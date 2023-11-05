import { useState, useEffect } from 'react';

import { loadBasket } from '../../reducers/basket-slice';
import { useAppDispatch } from '../../store';
import { ItemType } from '../../types';

export default function useOrderDataList() {
  const localStorageBasketOrderDataList = localStorage.getItem('basketOrderDataList');
  const [orderDataListValue, setOrderDataList] = useState<ItemType[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorageBasketOrderDataList) {
      const localStorageBasketOrderDataListValue = JSON.parse(localStorageBasketOrderDataList);

      setOrderDataList(localStorageBasketOrderDataListValue);
      dispatch(loadBasket(localStorageBasketOrderDataListValue));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return orderDataListValue;
}
