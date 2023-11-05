import React, { useState, useEffect } from 'react';
import { useGoods } from '../../../../common/hooks/use-loading-goods';
import { Container } from '../../../atoms/Container';

import { GoodListWrapper } from './style';
import { Toast } from '../../../atoms/Toast';
import { useSelectorTyped } from '../../../../store';
import { ItemType } from '../../../../types';
import { PersonalGoodsDataList } from '../../../moleculas/PersonalGoodsDataList';

const GoodSection = () => {
  const { searchShopFilter } = useSelectorTyped(({ sort }) => sort);
  const { isLoading } = useSelectorTyped(({ goodsList }) => goodsList);
  const [goodsDataList] = useGoods();
  const [headerHeight, setHeaderHeight] = useState<number>(72);
  const [goodsDataListFilter, setGoodsDataListFilter] = useState<ItemType[]>([]);

  useEffect(() => {
    const header = document?.querySelector('[data-header]');
    if (header) {
      setHeaderHeight(header.clientHeight);
    }
  }, []);

  useEffect(() => {
    if (searchShopFilter && goodsDataList) {
      const goodsDataListFilterValue = goodsDataList.filter((item) =>
        item.name.toLowerCase().includes(searchShopFilter)
      );
      setGoodsDataListFilter(goodsDataListFilterValue);
    } else {
      setGoodsDataListFilter([]);
    }
  }, [goodsDataList, searchShopFilter]);

  return (
    <>
      <Toast />
      <GoodListWrapper $paddingTop={headerHeight}>
        <Container>
          {goodsDataList.length !== 0 && searchShopFilter === '' && (
            <PersonalGoodsDataList title="Купи и стань игроком номер 1" dataList={goodsDataList} />
          )}
          {searchShopFilter !== '' && (
            <PersonalGoodsDataList title="Результат поиска" dataList={goodsDataListFilter} />
          )}
          {(goodsDataList.length === 0 || isLoading) && <h1>НЕТ ДАННЫХ</h1>}
        </Container>
      </GoodListWrapper>
    </>
  );
};

export { GoodSection };
