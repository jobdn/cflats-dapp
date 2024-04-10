import { ABI_GEN_NFT } from "@/shared/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Address, Client, getContract } from "viem";
import { useChainId, useClient } from "wagmi";
import { getAccount } from "@wagmi/core";

import { config } from "@/shared/config/wagmi";
import { fetchTokenDataByIdAndGenNumber } from "@/shared/utils/fetchTokenDataByIdAndGenNumber";
import { GenNumber } from "@/shared/types";
import { getNFTAddressByGenNumber } from "@/shared/utils/genNFTAddressByGenNumber";

export const fetchTokensByGen = createAsyncThunk(
  "fetchTokensByGen",
  async (args: { gen: GenNumber; chain: number; client: Client }) => {
    const { gen, chain, client } = args;

    const { address } = getAccount(config);
    const tokenAddress: Address = getNFTAddressByGenNumber(gen, chain);
    const contractGen = getContract({
      abi: ABI_GEN_NFT,
      address: tokenAddress,
      client: client,
    });

    try {
      const tokenHoldings =
        (await contractGen.read.getHoldingIdsByAccountAddress([
          address,
        ])) as Array<bigint>;
      tokenHoldings.sort((a: bigint, b: bigint) => Number(a - b));

      const nftMetadataArray: any = [];
      for (let i = 0; i < tokenHoldings.length; i++) {
        const tokenId = tokenHoldings[i];
        nftMetadataArray.push(
          fetchTokenDataByIdAndGenNumber(gen, Number(tokenId))
        );
      }

      const collectedMetadata = await Promise.all(nftMetadataArray);

      return { tokens: collectedMetadata, gen };
    } catch (e) {
      throw new Error("Data can't be fetched");
    }
  }
);
