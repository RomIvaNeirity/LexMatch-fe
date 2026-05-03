import { configureStore } from "@reduxjs/toolkit";
import { lexMatchApi } from "../api/baseApi";

export const store = configureStore({
  reducer: {
    [lexMatchApi.reducerPath]: lexMatchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lexMatchApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
