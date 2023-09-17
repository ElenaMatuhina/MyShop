import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Person } from '../components/atoms/Toast/Toast';

type IToastType = {
  toastList: Person[];
};

const initialState: IToastType = {
  toastList: [],
};

const toastSlice = createSlice({
  name: '@@toast',
  initialState,
  reducers: {
    setToastList: (state, action: PayloadAction<Person[]>) => {
      state.toastList = action.payload;
    },
  },
});

export const { setToastList } = toastSlice.actions;
export const toastReducer = toastSlice.reducer;

