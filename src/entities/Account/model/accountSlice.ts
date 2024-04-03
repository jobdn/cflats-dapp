import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AccountState {
  isConnected: boolean;
}

const initialState: AccountState = { isConnected: false };

const accountSlice = createSlice({
  name: "accountSlice",
  initialState,
  reducers: {
    setIsConnected: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
  },
});

export const { actions: accountActions, reducer: accountReducer } =
  accountSlice;
