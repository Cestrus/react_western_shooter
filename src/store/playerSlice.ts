import { createSlice } from '@reduxjs/toolkit';

export interface IPlayerState {
  gameIsOver: boolean;
  name: string;
}

const initialState: IPlayerState = {
  gameIsOver: false,
  name: 'John Doo',
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setGameIsOver: (state) => {
      state.gameIsOver = true;
    },
    setNewGame: (state) => {
      state.gameIsOver = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGameIsOver, setNewGame } = playerSlice.actions;

export default playerSlice.reducer;
