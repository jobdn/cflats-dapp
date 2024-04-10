import { Address, zeroAddress } from "viem";
import {
  CRYPTOFLATS_TOKEN_ADDRESS,
  CRYPTOFLATS_TOKEN_ADDRESS_TESTNET,
} from "../constants";

export const getTokenAddress = (chainId?: number): Address => {
  const chainIdNormal = chainId ?? 1;
  let tokenAddress: Address = zeroAddress;

  if (chainIdNormal === 1) {
    tokenAddress = CRYPTOFLATS_TOKEN_ADDRESS;
  } else if (chainId === 80001) {
    tokenAddress = CRYPTOFLATS_TOKEN_ADDRESS_TESTNET;
  }

  return tokenAddress;
};
