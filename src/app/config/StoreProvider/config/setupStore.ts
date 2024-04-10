import { walletReducer } from "@/entities/Wallet";
import { configureStore } from "@reduxjs/toolkit";

export const setupStore = (initialState: StateSchema) => {
  return configureStore({
    reducer: {
      wallet: walletReducer,
    },
    // preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            // api,
            chain: undefined,
          },
        },
      }).concat(),
  });
};
