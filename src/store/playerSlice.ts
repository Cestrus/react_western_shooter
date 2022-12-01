import { createSlice } from '@reduxjs/toolkit';

export interface IPlayerState {
  gameIsOver: boolean;
  name: string;
  isAuthorized: boolean;
  isPaused: boolean;
}

const initialState: IPlayerState = {
  gameIsOver: false,
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
    setIsPaused: (state) => {
      state.isPaused = true;
    },
    setPlaying: (state) => {
      state.isPaused = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGameIsOver, setNewGame, setPlayerName, setIsAuthorized, setIsPaused, setPlaying } =
  playerSlice.actions;

export default playerSlice.reducer;
