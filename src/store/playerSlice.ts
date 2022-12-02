import { createSlice } from '@reduxjs/toolkit';

export interface IPlayerState {
  gameIsOver: boolean;
  name: string;
  isAuthorized: boolean;
  isPaused: boolean;
}

const initialState: IPlayerState = {
  gameIsOver: true,
  name: '',
  isAuthorized: false,
  isPaused: true,
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
    setPauseOn: (state) => {
      state.isPaused = true;
    },
    setPauseOff: (state) => {
      if (state.gameIsOver) {
        state.gameIsOver = false;
      }
      state.isPaused = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGameIsOver, setNewGame, setPlayerName, setIsAuthorized, setPauseOn, setPauseOff } =
  playerSlice.actions;

export default playerSlice.reducer;
