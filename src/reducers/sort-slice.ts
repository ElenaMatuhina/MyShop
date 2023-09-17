import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemType } from '../types';
import { SELECT_GOODS_LIST } from '../common/constants/settings';

export type ISelectOption = {
  label: string;
  value: string | number;
};

type ISortType = {
  order: ItemType[];
  isOpenedModal: boolean;
  multipleSelectOption: ISelectOption[];
  selectOption: ISelectOption | undefined;
  searchShopFilter: string;
};

const initialState: ISortType = {
  order: [],
  isOpenedModal: false,
  multipleSelectOption: [SELECT_GOODS_LIST[0]],
  selectOption: undefined,
  searchShopFilter: '',
};

const sortSlice = createSlice({
  name: '@@sort',
  initialState,
  reducers: {
    setMultipleSelectOption: (state, action: PayloadAction<ISelectOption[]>) => {
      state.multipleSelectOption = action.payload;
    },
    setSelectOption: (state, action: PayloadAction<ISelectOption | undefined>) => {
      state.selectOption = action.payload;
    },
    setSearchShopFilter: (state, action: PayloadAction<string>) => {
      state.searchShopFilter = action.payload;
    },
  },
});

export const { setMultipleSelectOption, setSelectOption, setSearchShopFilter } = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
