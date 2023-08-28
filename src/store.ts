import { combineReducers, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from './config';
import { useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({});

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
export const useAppDispatch: () => AppDispatch = useDispatch;

export function useSelectorTyped<TSelected>(
  cb: (state: RootState) => TSelected
): TSelected {
  return useSelector<RootState, TSelected>(cb);
}



