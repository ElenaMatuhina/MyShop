import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL, API_KEY } from '../config';
import { Status, ItemData, Extra } from 'types';

export const goodsLoading = createAsyncThunk<
  { data: ItemData },
  undefined,
  {
    state: { goodsList: GoodsSlice };
    extra: Extra;
    rejectValue: string;
  }
>(
  '@@goods/load-goods',
  async (_, { extra: { client, api }, rejectWithValue }) => {
    try {
      const response = await client.get(API_URL, {
        headers: { Authorization: API_KEY },
      });
      return response;
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message);
      return rejectWithValue('Unknown error');
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        goodsList: { status },
      } = getState();
      if (status === 'loading') {
        return false;
      }
    },
  }
);

type GoodsSlice = {
  status: string;
  error: string | null;
  goods: any;
};

const initialState: GoodsSlice = {
  status: 'idle',
  error: null,
  goods: [],
};

export const goodsSlice = createSlice({
  name: '@@goods',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(goodsLoading.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(goodsLoading.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Cannot load data';
      })
      .addCase(goodsLoading.fulfilled, (state, action) => {
        state.status = 'recieved';
        state.goods = action.payload.data; //(data.featured)
      });
  },
});


export const goodsReducer = goodsSlice.reducer;
