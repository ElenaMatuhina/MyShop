import React, { FC, useEffect, useState } from 'react';

import { PaginationContainer, UL, LI, Reduction } from './style';
import { getCommonIcon } from '../Icons';
import useWindowDimensions from '../../../common/hooks/use-window-dimensions';
import {
  getPaginationLimit,
  IPaginationLimitProps,
} from '../../../common/utils/getPaginationLimit';

interface IPaginationProps {
  goodsPerPage: number;
  totalGoods: number;
  setCurrentPage: (value: number) => void;
  currentPage: number;
}

export const Pagination: FC<IPaginationProps> = ({
  goodsPerPage,
  totalGoods,
  setCurrentPage,
  currentPage,
}) => {
  const [pageNumbersLimit, setPageNumbersLimit] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [isReduction, setIsReduction] = useState<boolean | null>(false);
  const { width } = useWindowDimensions();

  const paginate = (number: number) => {
    setCurrentPage(number);
    localStorage.setItem('currentPage', String(number));
  };
  const nextPage = () => {
    const currentPageMore = currentPage + 1;
    setCurrentPage(currentPageMore);
    localStorage.setItem('currentPage', String(currentPageMore));
  };
  const prevPage = () => {
    const currentPageLess = currentPage - 1;
    setCurrentPage(currentPageLess);
    localStorage.setItem('currentPage', String(currentPageLess));
  };

  const LeftIcon = getCommonIcon('leftIcon');
  const RightIcon = getCommonIcon('rightIcon');

  useEffect(() => {
    getPaginationLimit({
      currentPage,
      setPageNumbersValue: setPageNumbers,
      setPageNumbersLimit,
      setIsReduction,
      isReduction,
      totalGoods,
      goodsPerPage,
    } as IPaginationLimitProps);
  }, [
    width,
    pageNumbers.length,
    currentPage,
    isReduction,
    totalGoods,
    goodsPerPage,
    setPageNumbers,
  ]);

  return (
    <PaginationContainer>
      <UL data-ul>
        {currentPage !== 1 && pageNumbers.length >= 3 && (
          <LI onClick={prevPage}>
            <LeftIcon />
          </LI>
        )}

        {isReduction && (
          <>
            <LI active={currentPage === 1} onClick={() => paginate(1)}>
              <span>1</span>
            </LI>
            {currentPage >= 4 && <Reduction />}
          </>
        )}

        {pageNumbersLimit.length !== 0 &&
          pageNumbersLimit.map((item: number) => (
            <LI
              key={item}
              active={currentPage === item}
              onClick={() => paginate(item)}
            >
              <span>{item}</span>
            </LI>
          ))}

        {isReduction && (
          <>
            {currentPage <= pageNumbers.length - 3 && <Reduction />}
            <LI
              active={currentPage === pageNumbers.length}
              onClick={() => paginate(pageNumbers.length)}
            >
              <span>{pageNumbers.length}</span>
            </LI>
          </>
        )}

        {pageNumbers.length !== currentPage && pageNumbers.length >= 3 && (
          <LI onClick={nextPage}>
            <RightIcon />
          </LI>
        )}
      </UL>
    </PaginationContainer>
  );
};
