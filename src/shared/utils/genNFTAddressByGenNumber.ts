import { Address, zeroAddress } from "viem";
import {
  CRYPTOFLATS_GEN0_ADDRESS,
  CRYPTOFLATS_GEN1_ADDRESS,
  CRYPTOFLATS_GEN2_ADDRESS,
  CRYPTOFLATS_GEN3_ADDRESS,
  CRYPTOFLATS_GEN4_ADDRESS,
  CRYPTOFLATS_GEN5_ADDRESS,
  CRYPTOFLATS_GEN0_ADDRESS_TESTNET,
  CRYPTOFLATS_GEN1_ADDRESS_TESTNET,
  CRYPTOFLATS_GEN2_ADDRESS_TESTNET,
  CRYPTOFLATS_GEN3_ADDRESS_TESTNET,
  CRYPTOFLATS_GEN4_ADDRESS_TESTNET,
  CRYPTOFLATS_GEN5_ADDRESS_TESTNET,
} from "../constants";

export const getNFTAddressByGenNumber = (
  genNumber?: number,
  chainId?: number
): Address => {
  const genNumberNormal = genNumber ?? 0;
  const chainIdNormal = chainId ?? 1;
  let tokenAddress: Address = zeroAddress;

  if (chainIdNormal === 1) {
    switch (genNumberNormal) {
      case 0:
        tokenAddress = CRYPTOFLATS_GEN0_ADDRESS;
        break;
      case 1:
        tokenAddress = CRYPTOFLATS_GEN1_ADDRESS;
        break;
      case 2:
        tokenAddress = CRYPTOFLATS_GEN2_ADDRESS;
        break;
      case 3:
        tokenAddress = CRYPTOFLATS_GEN3_ADDRESS;
        break;
      case 4:
        tokenAddress = CRYPTOFLATS_GEN4_ADDRESS;
        break;
      case 5:
        tokenAddress = CRYPTOFLATS_GEN5_ADDRESS;
        break;
    }
  } else if (chainId === 80001) {
    switch (genNumberNormal) {
      case 0:
        tokenAddress = CRYPTOFLATS_GEN0_ADDRESS_TESTNET;
        break;
      case 1:
        tokenAddress = CRYPTOFLATS_GEN1_ADDRESS_TESTNET;
        break;
      case 2:
        tokenAddress = CRYPTOFLATS_GEN2_ADDRESS_TESTNET;
        break;
      case 3:
        tokenAddress = CRYPTOFLATS_GEN3_ADDRESS_TESTNET;
        break;
      case 4:
        tokenAddress = CRYPTOFLATS_GEN4_ADDRESS_TESTNET;
        break;
      case 5:
        tokenAddress = CRYPTOFLATS_GEN5_ADDRESS_TESTNET;
        break;
    }
  }

  return tokenAddress;
};
