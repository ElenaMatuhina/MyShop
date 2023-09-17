import { ISelectOption } from '../../reducers/sort-slice';
import { ItemType } from '../../types';
import { getGoodsDataListSort } from './getGoodsDataListSort';

export const getGoodsDataList = (
  selectOption: ISelectOption | undefined,
  goodsDataListValue: ItemType[],
  setGoodsDataList: (value: ItemType[]) => void,
  setBasketDataList: (value: ItemType[]) => void,
  order: ItemType[]
) => {
  if (order.length !== 0) {
    getGoodsDataListSort({
      selectOption,
      goodsDataList: order,
      setGoodsDataListValue: setBasketDataList,
    });
  } else {
    setBasketDataList(order);
  }

 

  getGoodsDataListSort({
    selectOption,
    goodsDataList: goodsDataListValue,
    setGoodsDataListValue: setGoodsDataList,
  });
};