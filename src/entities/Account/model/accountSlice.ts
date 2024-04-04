import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AccountState {
  isConnected: boolean;
  userBalance: string;
}

const initialState: AccountState = { isConnected: false, userBalance: "" };

const accountSlice = createSlice({
  name: "accountSlice",
  initialState,
  reducers: {
    setIsConnected: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
  },

  extraReducers: (builder) => {},
});

export const { actions: accountActions, reducer: accountReducer } =
  accountSlice;
