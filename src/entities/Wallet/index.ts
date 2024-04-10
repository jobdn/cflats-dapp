import { Wallet } from "./ui/Wallet/Wallet";
export {
  type WalletState,
  walletActions,
  walletReducer,
  tokensSelector,
} from "./model/walletSlice";
export default Wallet;
