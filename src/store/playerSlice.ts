import { createSlice } from '@reduxjs/toolkit';

export interface IPlayerState {
  gameIsOver: boolean;
  name: string;
  isAuthorized: boolean;
}

const initialState: IPlayerState = {
  gameIsOver: false,
  name: '',
  isAuthorized: false,
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
    setPlayerName: (state, action) => {
      state.name = action.payload;
    },
    setIsAuthorized: (state, action) => {
      state.isAuthorized = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGameIsOver, setNewGame, setPlayerName, setIsAuthorized } = playerSlice.actions;

export default playerSlice.reducer;
