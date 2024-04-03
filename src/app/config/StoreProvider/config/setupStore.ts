import { accountReducer } from "@/entities/Account";
import { configureStore } from "@reduxjs/toolkit";

export const setupStore = (initialState: StateSchema) => {
  return configureStore({
    reducer: {
      account: accountReducer,
    },
    preloadedState: initialState,
  });
};
