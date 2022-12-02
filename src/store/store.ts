import { configureStore } from '@reduxjs/toolkit';
import shootingReducer from './shootingSlice';
import moneyReducer from './moneySlice';
import playerReducer from './playerSlice';
import targetsReducer from './targetsSlice';

export const store = configureStore({
  reducer: {
    money: moneyReducer,
    shooting: shootingReducer,
    player: playerReducer,
    targets: targetsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
