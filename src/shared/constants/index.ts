import { zeroAddress, Abi } from "viem";

// JSON Abis
import CryptoflatsDappAbi from "@/abi/CryptoflatsDappAbi.json";
import CryptoflatsDatabaseAbi from "@/abi/CryptoflatsDatabaseAbi.json";
import CryptoflatsStakingAbi from "@/abi/CryptoflatsStakingAbi.json";
import CryptoflatsExchangeAbi from "@/abi/CryptoflatsExchangeAbi.json";
import CryptoflatsTokenAbi from "@/abi/CryptoflatsTokenAbi.json";
import CryptoflatsNftAbi from "@/abi/CryptoflatsNftAbi.json";
import CryptoflatsTerritoryAbi from "@/abi/CryptoflatsTerritoryAbi.json";

// ABIS
export const ABI_TOKEN: Abi = CryptoflatsTokenAbi as Abi;
export const ABI_GEN_NFT: Abi = CryptoflatsNftAbi as Abi;
export const ABI_TERRITORY: Abi = CryptoflatsTerritoryAbi as Abi;
export const ABI_STAKING: Abi = CryptoflatsStakingAbi as Abi;
export const ABI_EXCHANGE: Abi = CryptoflatsExchangeAbi as Abi;
export const ABI_DAPP: Abi = CryptoflatsDappAbi as Abi;
export const ABI_DATABASE: Abi = CryptoflatsDatabaseAbi as Abi;

// Mainnet addresses
export const CRYPTOFLATS_TOKEN_ADDRESS =
  "0x42b5A36f9A6bb2686824df4F5106fF3aa5d52ac8";
export const CRYPTOFLATS_GEN0_ADDRESS =
  "0x12dF79C44f40c372F03d06476a575B4Eb20D29d7";
export const CRYPTOFLATS_GEN1_ADDRESS =
  "0x005fD2E3fb1A0EE98CA2BC9c57797212134b98d8";
export const CRYPTOFLATS_GEN2_ADDRESS = zeroAddress;
export const CRYPTOFLATS_GEN3_ADDRESS = zeroAddress;
export const CRYPTOFLATS_GEN4_ADDRESS = zeroAddress;
export const CRYPTOFLATS_GEN5_ADDRESS = zeroAddress;

export const CRYPTOFLATS_CFLATS_DATABASE =
  "0x1632D6e5d3B9203250678a0E2e397B06745b9686";
export const CRYPTOFLATS_CFLATS_TERRITORY =
  "0xbfCf8110bd0038159A8107AD403a761307A924b0";
export const CRYPTOFLATS_CFLATS_EXCHANGE =
  "0xe65Da3f60Aa334A2c8D797137aDDFb34Bf204908";
export const CRYPTOFLATS_CFLATS_STAKING =
  "0xf2DDF01e54F00656a7d427E2d8DA33B8c885aaD3";
export const CRYPTOFLATS_CFLATS_DAPP =
  "0xfE4a040c247252A26cd95c83Eddd1423a682e8Dc";
export const CRYPTOFLATS_TEAM_WALLET =
  "0x1d6B3E373B947319a4B76A851bb17C1dEcCADb1D";

// Testnet addresses
export const CRYPTOFLATS_TOKEN_ADDRESS_TESTNET =
  "0xf512a4eC8E13864D6B783E44A4691cAB37D41F88";
export const CRYPTOFLATS_GEN0_ADDRESS_TESTNET =
  "0xd7bae42d03b179a87efe91c807b8c730dba4240d";
export const CRYPTOFLATS_GEN1_ADDRESS_TESTNET = zeroAddress;
export const CRYPTOFLATS_GEN2_ADDRESS_TESTNET = zeroAddress;
export const CRYPTOFLATS_GEN3_ADDRESS_TESTNET = zeroAddress;
export const CRYPTOFLATS_GEN4_ADDRESS_TESTNET = zeroAddress;
export const CRYPTOFLATS_GEN5_ADDRESS_TESTNET = zeroAddress;

export const CRYPTOFLATS_CFLATS_DATABASE_TESTNET =
  "0xC8B7A76843b108b9a726737cc94384Bc391c7DB3";
export const CRYPTOFLATS_CFLATS_TERRITORY_TESTNET =
  "0xC5412d8674c101aA433435f4394310799361A167";
export const CRYPTOFLATS_CFLATS_EXCHANGE_TESTNET =
  "0xa3EE1975bFc0d8569a2630db64df5a2C72eE9Ee9";
export const CRYPTOFLATS_CFLATS_STAKING_TESTNET =
  "0x29f335320b530aa83380fE8386A34F782C9Ae980";
export const CRYPTOFLATS_CFLATS_DAPP_TESTNET =
  "0x32825B4414432b16f544C6ca68d89030D7D1863e";
export const CRYPTOFLATS_TEAM_WALLET_TESTNET =
  "0xeA6CD0F2e39A7b86FD42454970De661DA4674f54";
