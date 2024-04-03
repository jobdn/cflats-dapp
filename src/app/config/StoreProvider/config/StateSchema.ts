import { AccountState } from "@/entities/Account";
import { setupStore } from "./setupStore";

declare global {
  export type AppStore = ReturnType<typeof setupStore>;
  export type AppDispatch = AppStore["dispatch"];
  export interface StateSchema {
    account: AccountState;
  }
}
