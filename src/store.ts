import { combineReducers, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from './config';
import { goodsReducer } from './reducers/good-slice';
import { basketReducer } from './reducers/basket-slice';
import { sortReducer } from './reducers/sort-slice';
import { toastReducer } from './reducers/toast-slice';
import { useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({
  goodsList: goodsReducer,
  basket: basketReducer,
  sort: sortReducer,
  toast: toastReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export function useSelectorTyped<TSelected>(cb: (state: RootState) => TSelected): TSelected {
  return useSelector<RootState, TSelected>(cb);
}
