export interface IPaginationLimitProps {
  currentPage: number;
  setPageNumbersValue: (value: number[]) => void;
  setPageNumbersLimit: (value: number[]) => void;
  setIsReduction: (value: boolean | null) => void;
  isReduction: boolean;
  totalGoods: number;
  goodsPerPage: number;
}

export const getPaginationLimit = ({
  currentPage,
  setPageNumbersValue,
  setPageNumbersLimit,
  setIsReduction,
  isReduction,
  totalGoods,
  goodsPerPage,
}: IPaginationLimitProps) => {
  let pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalGoods / goodsPerPage); i++) {
    pageNumbers.push(i);
  }

  setPageNumbersValue(pageNumbers);

  const windowUl = document?.querySelector('[data-ul]');

  const isReductionValue =
    windowUl && windowUl.clientWidth - 200 < 42 * (pageNumbers.length + 2);
  setIsReduction(isReductionValue);

  if (isReduction) {
    const pageNumbersLimitValue = pageNumbers;
    const pageNumbersLimit =
      pageNumbersLimitValue.filter(
        (item: number) => item !== 1 && item !== pageNumbersLimitValue.length
      ) || [];

    const filtered = pageNumbersLimit.filter((n: number) => {
      if (currentPage <= 2) {
        return n > 0 && n < 4;
      }
      if (currentPage > pageNumbersLimit.length) {
        return (
          n > pageNumbersLimit.length - 1 && n < pageNumbersLimit.length + 2
        );
      }

      const currentPageMin =
        currentPage >= n ? Math.abs(currentPage - 2) : currentPage;
      const currentPageMax =
        currentPage <= n ? Math.abs(currentPage + 2) : currentPage;

      return n > currentPageMin && n < currentPageMax;
    });
    setPageNumbersLimit(filtered);
  } else {
    setPageNumbersLimit(pageNumbers);
  }
};
