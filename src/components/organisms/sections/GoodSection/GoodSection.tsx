import React, { useState, useEffect } from 'react';
import { useGoods } from '../../../../common/hooks/use-loading-goods';
import { Container } from '../../../atoms/Container';

import { GoodListWrapper } from './style';
import { Toast } from '../../../atoms/Toast';
import { Accordion } from '../../../atoms/Accordion';
import { useSelectorTyped } from '../../../../store';
import { ItemType } from '../../../../types';
import { PersonalGoodsDataList } from '../../../moleculas/PersonalGoodsDataList';
import { PersonalGoodsList } from '../../../moleculas/PersonalGoodsList';

const GoodSection = () => {
  const { searchShopFilter } = useSelectorTyped(({ sort }) => sort);
  const [goodsDataList, basketDataList] = useGoods();
  const [headerHeight, setHeaderHeight] = useState<number>(72);
  const [goodsDataListFilter, setGoodsDataListFilter] = useState<ItemType[]>(
    []
  );
  const [isOpenAccordion, setIsOpenAccordion] = useState<boolean>(false);

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

  useEffect(() => {
    if (basketDataList.length === 0) {
      setIsOpenAccordion(false);
    }
  }, [basketDataList, setIsOpenAccordion]);

  if (!goodsDataList.length && !basketDataList.length) {
    return <h2>Nothing here</h2>;
  }

  return (
    <>
      <Toast />
      <GoodListWrapper paddingTop={headerHeight}>
        <Container>
          {basketDataList.length !== 0 && (
            <Accordion
              titleText="Посмотреть выбранные товары"
              isOpenAccordion={isOpenAccordion}
              setIsOpenAccordion={setIsOpenAccordion}
            >
              <PersonalGoodsList dataList={basketDataList} basket />
            </Accordion>
          )}
          {goodsDataList.length !== 0 && searchShopFilter === '' && (
            <PersonalGoodsDataList
              title="Купи и стань игроком номер 1"
              dataList={goodsDataList}
            />
          )}
          {searchShopFilter !== '' && (
            <PersonalGoodsDataList
              title="Результат поиска"
              dataList={goodsDataListFilter}
            />
          )}
        </Container>
      </GoodListWrapper>
    </>
  );
};;

export { GoodSection };
