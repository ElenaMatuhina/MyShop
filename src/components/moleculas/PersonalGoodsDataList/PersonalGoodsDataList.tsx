import React, { FC, useEffect, useState } from 'react';
import { ItemType } from '../../../types';
import { PersonalGoodsList } from '../PersonalGoodsList';
import { Pagination } from '../../atoms/Pagination';
import { TextSearch } from './style';
import { useSelectorTyped } from '../../../store';


interface IPersonalGoodsDataListProps {
  title: string;
  dataList: ItemType[];
}

const PersonalGoodsDataList: FC<IPersonalGoodsDataListProps> = ({
  title,
  dataList,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentGoods, setCurrentGoods] = useState<ItemType[]>([]);
  const [goodsPerPage] = useState<number>(6);
  const { isLoading } = useSelectorTyped(({ goodsList }) => goodsList);

  useEffect(() => {
    const lastGoodsIndex = currentPage * goodsPerPage;
    const firstGoodsIndex = lastGoodsIndex - goodsPerPage;
    const currentGoodsValue = dataList.slice(firstGoodsIndex, lastGoodsIndex);
    setCurrentGoods(currentGoodsValue);

    if (currentPage > 1 && currentGoodsValue?.length === 0) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage, goodsPerPage, dataList]);

  const localStorageCurrentPage = localStorage.getItem('currentPage');

  useEffect(() => {
    if (localStorageCurrentPage) {
      const localStorageCurrentPageValue = Number(localStorageCurrentPage);
      setCurrentPage(localStorageCurrentPageValue);
    }
  }, [localStorageCurrentPage]);

  return (
    <>
      <PersonalGoodsList title={title} dataList={currentGoods} />
      {dataList.length > goodsPerPage && (
        <Pagination
          goodsPerPage={goodsPerPage}
          totalGoods={dataList.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
      {dataList.length === 0 && isLoading && (
        <TextSearch>
          <p>Совпадений нет!</p>
        </TextSearch>
      )}
    </>
  );
};


export {PersonalGoodsDataList}

 
