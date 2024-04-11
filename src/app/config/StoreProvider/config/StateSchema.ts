import { setupStore } from "./setupStore";

import { WalletState } from "@/entities/Wallet";
import { TokensViewState } from "@/features/ToggleTokensView";

declare global {
  export type AppStore = ReturnType<typeof setupStore>;
  export type AppDispatch = AppStore["dispatch"];
  export type RootState = ReturnType<AppStore["getState"]>;
  export interface StateSchema {
    wallet: WalletState;
    tokensView: TokensViewState;
  }
}
