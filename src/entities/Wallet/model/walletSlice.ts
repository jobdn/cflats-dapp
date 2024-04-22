import { GenNumber, Token } from "@/shared/types";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchTokensByGen } from "./thunks/fetchTokensByGen";

type GenTokensMap = Partial<Record<GenNumber, Token[]>>;

export interface WalletState {
  tokens: GenTokensMap;
  stakedTokens: GenTokensMap;
  isConnected: boolean;
  gen: GenNumber;
}

const initialState: WalletState = {
  tokens: {},
  stakedTokens: {},
  isConnected: false,
  gen: 0,
};

const walletSlice = createSlice({
  name: "walletSlice",
  initialState,
  reducers: {
    resetAllTokens(state) {
      state.tokens = {};
    },
    setGen(state, action: PayloadAction<GenNumber>) {
      state.gen = action.payload;
    },
  },

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

const tokensSelector = (state: StateSchema) => state.wallet.tokens;
const stakedTokensSelector = (state: StateSchema) => state.wallet.stakedTokens;
const genSelector = (state: StateSchema, gen: GenNumber) => gen;

export const selectTokens = createSelector(
  [tokensSelector, genSelector],
  (tokens, gen) => tokens[gen] || []
);

export const selectStakedTokens = createSelector(
  [stakedTokensSelector, genSelector],
  (stakedTokens, gen) => stakedTokens[gen] || []
);

export const selectGen = (state: StateSchema) => state.wallet.gen;
