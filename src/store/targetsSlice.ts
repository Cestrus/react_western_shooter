import { createSlice } from '@reduxjs/toolkit';

import { ITargetPlate, initialPlates, getTarget } from '../model/gameModel';

export interface ITargetState {
  allTargets: ITargetPlate[];
  currTarget: ITargetPlate;
}

const initialState: ITargetState = {
  allTargets: initialPlates(),
  currTarget: { id: -1 },
};

export const targetsSlice = createSlice({
  name: 'targets',
  initialState,
  reducers: {
    setTargetPlate: (state) => {
      state.currTarget = getTarget();
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTargetPlate } = targetsSlice.actions;
export default targetsSlice.reducer;
