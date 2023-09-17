import { ISelectOption } from '../../reducers/sort-slice';
import { ItemType } from '../../types';

export type IGoodsDataListSort = {
  selectOption: ISelectOption | undefined;
  goodsDataList: ItemType[];
  setGoodsDataListValue: (value: ItemType[]) => void;
};

export const getGoodsDataListSort = ({
  selectOption,
  goodsDataList,
  setGoodsDataListValue,
}: IGoodsDataListSort) => {
  if (selectOption && selectOption.value === 'ascending') {
    const arrayForSort = [...goodsDataList];
    arrayForSort.sort(
      (a: ItemType, b: ItemType) =>
        parseFloat(String(a.price)) - parseFloat(String(b.price))
    );

    setGoodsDataListValue(arrayForSort);
  } else if (selectOption && selectOption.value === 'descending') {
    const arrayForSort = [...goodsDataList];
    arrayForSort.sort(
      (a: ItemType, b: ItemType) =>
        parseFloat(String(b.price)) - parseFloat(String(a.price))
    );

    setGoodsDataListValue(arrayForSort);
  } else {
    setGoodsDataListValue(goodsDataList);
  }
};