import { GenNumber, Token } from "@/shared/types";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchTokensByGen } from "./thunks/fetchTokensByGen";

type GenTokensMap = Partial<Record<GenNumber, Token[]>>;

export interface WalletState {
  tokens: GenTokensMap;
  stakedTokens: Token[];
  isConnected: boolean;
}

const initialState: WalletState = {
  tokens: {},
  stakedTokens: [],
  isConnected: false,
};

const walletSlice = createSlice({
  name: "walletSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchTokensByGen.pending, (state, action) => {});
    builder.addCase(fetchTokensByGen.fulfilled, (state, action) => {
      const { gen, tokens } = action.payload;

      state.tokens[gen] = tokens;
    });
    builder.addCase(fetchTokensByGen.rejected, (state, action) => {});
  },
});

export const { actions: walletActions, reducer: walletReducer } = walletSlice;

const selectTokens = (state: StateSchema) => state.wallet.tokens;
const selectGen = (state: StateSchema, gen: GenNumber) => gen;

export const tokensSelector = createSelector(
  [selectTokens, selectGen],
  (tokens, gen) => tokens[gen]
);
