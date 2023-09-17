import { ItemType, ItemData } from '../../types';
import { getGoodsDataList } from './getGoodsDataList';
import { ISelectOption } from '../../reducers/sort-slice';

export const getSelectGoodsDataList = (
  goods: ItemData,
  multipleSelectOption: ISelectOption[],
  selectOption: ISelectOption | undefined,
  setGoodsDataList: (value: ItemType[]) => void,
  setBasketDataList: (value: ItemType[]) => void,
  order: ItemType[]
) => {
  const goodsDaily = goods && goods?.daily?.length !== 0 ? goods.daily : [];
  const goodsFeatured = goods && goods?.featured?.length !== 0 ? goods?.featured : [];
  const goodsOffers = goods && goods?.offers?.length !== 0 ? goods?.offers : [];
  const goodsSpecialFeatured =
    goods && goods?.daispecialFeaturedly?.length !== 0 ? goods?.specialFeatured : [];

  const arrGoodsDataList = [
    {
      id: 'daily',
      typeData: goodsDaily,
    },
    {
      id: 'featured',
      typeData: goodsFeatured,
    },
    {
      id: 'offers',
      typeData: goodsOffers,
    },
    {
      id: 'specialFeatured',
      typeData: goodsSpecialFeatured,
    },
  ];

  if (multipleSelectOption.length !== 0) {
    const goodsDataFilter = multipleSelectOption?.map(
      (item) => arrGoodsDataList?.filter((itemF) => itemF?.id === item?.value)[0]
    );

    const goodsDataListValue = goodsDataFilter.map((item) => item?.typeData).flat();

    return getGoodsDataList(
      selectOption,
      goodsDataListValue,
      setGoodsDataList,
      setBasketDataList,
      order
    );
  } else {
    const goodsDataListValue = arrGoodsDataList.map((item) => item?.typeData).flat();

    return getGoodsDataList(
      selectOption,
      goodsDataListValue,
      setGoodsDataList,
      setBasketDataList,
      order
    );
  }
};
