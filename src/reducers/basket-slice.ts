import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemType } from '../types';

type BasketType = {
  order: ItemType[];
  isOpenedModal: boolean;
  alertName: string;
};

const initialState: BasketType = {
  order: [],
  isOpenedModal: false,
  alertName: '',
};

const basketSlice = createSlice({
  name: '@@basket',
  initialState,
  reducers: {
    openedModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenedModal = action.payload;
    },
    loadBasket: (state, action: PayloadAction<ItemType[]>) => {
      state.order = action.payload;
    },
    addToBasket: (state, action: PayloadAction<ItemType>) => {
      state.alertName = action.payload.name;
      const itemBasket = state.order.find((item) => item.id === action.payload.id);
      if (itemBasket?.quantity) {
        itemBasket.quantity++;
      } else {
        state.order.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromBasket: (state, action: PayloadAction<string>) => {
      const removeItem = state.order.filter((item) => item.id !== action.payload);
      state.order = removeItem;
    },
    basketDelete: (state, action) => {
      state.order = [];
    },
    incQuantity: (state, action: PayloadAction<string>) => {
      const item = state.order.find((item) => item.id === action.payload);
      if (item?.quantity) {
        item.quantity++;
      }
    },
    decQuantity: (state, action: PayloadAction<string>) => {
      const item = state.order.find((item) => item.id === action.payload);
      if (item?.quantity) {
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      }
    },
    closeAlert: (state, action) => {
      state.alertName = '';
    },
  },
});

export const {
  openedModal,
  loadBasket,
  addToBasket,
  removeFromBasket,
  basketDelete,
  incQuantity,
  decQuantity,
  closeAlert,
} = basketSlice.actions;

export const basketReducer = basketSlice.reducer;