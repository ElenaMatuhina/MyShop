import React from 'react';

import { SelectContainer, SelectWrapper, SelectTitle } from './style';

import { Select } from '../../atoms/Select/Select';
import { ISelectOption } from '../../../reducers/sort-slice';

export type ISelectProps = {
  setSelectOptionMultiple: (value: ISelectOption[]) => void;
  selectOptionMultiple: ISelectOption[];
  setSelectOptionSort: (value: ISelectOption | undefined) => void;
  selectOptionSort: ISelectOption | undefined;
  optionsGoodsList: ISelectOption[];
  optionsPrice: ISelectOption[];
};

export const SelectSection = ({
  setSelectOptionMultiple,
  selectOptionMultiple,
  setSelectOptionSort,
  selectOptionSort,
  optionsGoodsList,
  optionsPrice,
}: ISelectProps) => (
  <SelectContainer>
    <SelectWrapper>
      <SelectTitle>Выберите тип продукта</SelectTitle>
      <Select
        multiple
        options={optionsGoodsList}
        selectOption={selectOptionMultiple}
        onChange={(options) => setSelectOptionMultiple(options)}
        defaultText="Не выбран тип"
      />
    </SelectWrapper>
    <SelectWrapper>
      <SelectTitle>Сортировка по цене</SelectTitle>
      <Select
        options={optionsPrice}
        selectOption={selectOptionSort}
        onChange={(options) => setSelectOptionSort(options)}
        defaultText="Не выбрана сортировка"
      />
    </SelectWrapper>
  </SelectContainer>
);
