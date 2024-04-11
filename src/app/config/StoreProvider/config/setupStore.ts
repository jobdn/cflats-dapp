import { walletReducer } from "@/entities/Wallet";
import { tokensViewReducer } from "@/features/ToggleTokensView";
import { configureStore } from "@reduxjs/toolkit";

export const setupStore = (initialState: StateSchema) => {
  return configureStore({
    reducer: {
      wallet: walletReducer,
      tokensView: tokensViewReducer,
    },
  });
};
