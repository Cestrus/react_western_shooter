import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ShotState {}

const initialState: ShotState = {};

export const shotSlice = createSlice({
  name: 'shot',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = shotSlice.actions;

export default shotSlice.reducer;
