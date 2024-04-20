import { ViewType } from "@/entities/Token";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TokensViewState {
  view: ViewType;
}

const initialState: TokensViewState = {
  view: "swiper",
};

const tokensViewSlice = createSlice({
  name: "tokensViewSlice",
  initialState,
  reducers: {
    setTabView(state, action: PayloadAction<ViewType>) {
      state.view = action.payload;
    },
  },
});

export const { actions: tokensViewActions, reducer: tokensViewReducer } =
  tokensViewSlice;

export const selectView = (state: StateSchema) => state.tokensView.view;
