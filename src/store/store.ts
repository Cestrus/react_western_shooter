import { configureStore } from '@reduxjs/toolkit';
import bulletsReducer from './bulletsSlice';
import moneyReducer from './moneySlice';
import playerSlice from './playerSlice';

export const store = configureStore({
  reducer: {
    money: moneyReducer,
    bullets: bulletsReducer,
    player: playerSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
