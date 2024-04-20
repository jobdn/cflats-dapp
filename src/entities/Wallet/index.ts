import { Wallet } from "./ui/Wallet/Wallet";
export {
  type WalletState,
  walletActions,
  walletReducer,
  selectTokens,
  selectStakedTokens,
  selectGen,
} from "./model/walletSlice";
export default Wallet;
