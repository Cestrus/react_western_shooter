import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BULLETS_IN_GUN, BULLETS_VALUE } from '../utils/constants';

export enum ShootingType {
  MISSING,
  HIT,
  SILENCE,
}

export type ShotCoordType = {
  top: number;
  left: number;
};

export interface IShootingState {
  bulletsValue: number;
  bulletsInGun: number;
  isGunEmpty: boolean;
  shootResult: ShootingType;
  shotCoord: ShotCoordType | null;
}

const initialState: IShootingState = {
  bulletsValue: BULLETS_VALUE - BULLETS_IN_GUN,
  bulletsInGun: BULLETS_IN_GUN,
  isGunEmpty: false,
  shootResult: ShootingType.SILENCE,
  shotCoord: null,
};

export const shootingSlice = createSlice({
  name: 'shooting',
  initialState,
  reducers: {
    setIsGunEmpty: (state) => {
      state.isGunEmpty = !state.isGunEmpty;
    },
    reloadGun: (state) => {
      // Todo reloading throw timer
      const bullets = state.bulletsValue - BULLETS_IN_GUN;
      state.bulletsValue = bullets > 0 ? bullets : 0;
    },
    addBulletInGun: (state) => {
      const bullets = ++state.bulletsInGun;
      state.bulletsInGun = bullets <= BULLETS_IN_GUN ? bullets : BULLETS_IN_GUN;
    },
    removeBulletFromGun: (state) => {
      const bullets = --state.bulletsInGun;
      state.bulletsInGun = bullets > 0 ? bullets : 0;
    },
    hitTarget: (state) => {
      state.shootResult = ShootingType.HIT;
    },
    missTarget: (state) => {
      state.shootResult = ShootingType.MISSING;
    },
    silence: (state) => {
      state.shootResult = ShootingType.SILENCE;
    },
    setShotCoord: (state, action: PayloadAction<ShotCoordType>) => {
      state.shotCoord = {
        top: action.payload.top,
        left: action.payload.left,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsGunEmpty, reloadGun, addBulletInGun, removeBulletFromGun, hitTarget, missTarget, setShotCoord } =
  shootingSlice.actions;

export default shootingSlice.reducer;
