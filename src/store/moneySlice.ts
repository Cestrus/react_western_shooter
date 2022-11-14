import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IMoneyState {
  moneyValue: number;
}

const initialState: IMoneyState = {
  moneyValue: 0,
};

export const moneySlice = createSlice({
  name: 'money',
  initialState,
  reducers: {
    addMoneyValue: (state, action: PayloadAction<number>) => {
      state.moneyValue += action.payload;
    },
    resetMoneyValue: (state) => {
      state.moneyValue = 0;
    },
    removeMoneyValue: (state, action: PayloadAction<number>) => {
      const value = state.moneyValue - action.payload;
      state.moneyValue = value < 0 ? 0 : value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMoneyValue, resetMoneyValue, removeMoneyValue } = moneySlice.actions;

export default moneySlice.reducer;
