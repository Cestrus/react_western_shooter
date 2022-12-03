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
  isReloading: boolean;
  shootResult: ShootingType;
  shotCoord: ShotCoordType | null;
}

const initialState: IShootingState = {
  bulletsValue: BULLETS_VALUE - BULLETS_IN_GUN,
  bulletsInGun: BULLETS_IN_GUN,
  isReloading: false,
  shootResult: ShootingType.SILENCE,
  shotCoord: null,
};

export const shootingSlice = createSlice({
  name: 'shooting',
  initialState,
  reducers: {
    addBulletInGun: (state) => {
      if (state.isReloading) {
        const bullets = state.bulletsInGun + 1;
        state.bulletsInGun = bullets <= BULLETS_IN_GUN ? bullets : BULLETS_IN_GUN;
        if (bullets === BULLETS_IN_GUN) state.isReloading = false;
      }
    },
    removeBulletFromGun: (state) => {
      const bullets = state.bulletsInGun - 1;
      state.bulletsInGun = bullets > 0 ? bullets : 0;
    },
    removeBulletsValue: (state) => {
      const bulletsValue = state.bulletsValue - BULLETS_IN_GUN;
      state.bulletsValue = bulletsValue >= 0 ? bulletsValue : 0;
      if (bulletsValue >= 0) {
        state.isReloading = true;
      }
    },
    hitTarget: (state) => {
      state.shootResult = ShootingType.HIT;
    },
    missTarget: (state) => {
      state.shootResult = ShootingType.MISSING;
    },
    setShotCoord: (state, action: PayloadAction<ShotCoordType>) => {
      state.shotCoord = {
        top: action.payload.top,
        left: action.payload.left,
      };
    },
    setFullGun: (state) => {
      state.bulletsValue = BULLETS_VALUE - BULLETS_IN_GUN;
      state.bulletsInGun = BULLETS_IN_GUN;
      state.isReloading = false;
      state.shootResult = ShootingType.SILENCE;
      state.shotCoord = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  // setIsGunEmpty,
  addBulletInGun,
  removeBulletFromGun,
  hitTarget,
  missTarget,
  setShotCoord,
  removeBulletsValue,
  setFullGun,
} = shootingSlice.actions;

export default shootingSlice.reducer;
