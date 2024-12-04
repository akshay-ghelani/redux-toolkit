import { configureStore } from '@reduxjs/toolkit';
import counterslice from './slice/slices';

export const store = configureStore({
    reducer: {
        counter:counterslice,
    },
  });

export default store;