import { createSlice } from '@reduxjs/toolkit';

import { BULLETS_IN_GUN, BULLETS_VALUE } from '../utils/constants';

export interface IBulletsState {
  bulletsValue: number;
  isGunEmpty: boolean;
}

const initialState: IBulletsState = {
  bulletsValue: BULLETS_VALUE - BULLETS_IN_GUN,
  isGunEmpty: false,
};

export const bulletsSlice = createSlice({
  name: 'bullets',
  initialState,
  reducers: {
    setIsGunEmpty: (state) => {
      state.isGunEmpty = !state.isGunEmpty;
    },
    reloadGun: (state) => {
      const bullets = state.bulletsValue - BULLETS_IN_GUN;
      state.bulletsValue = bullets > 0 ? bullets : 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsGunEmpty, reloadGun } = bulletsSlice.actions;

export default bulletsSlice.reducer;
