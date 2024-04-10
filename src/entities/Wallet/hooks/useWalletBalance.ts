import { getTokenAddress } from "@/shared/utils/getTokenAddress";

import { zeroAddress } from "viem";
import { useLayoutEffect, useState } from "react";
import { useAccount, useChainId } from "wagmi";
import { getBalance } from "@wagmi/core";
import { config } from "@/shared/config/wagmi";

export const useWalletBalance = () => {
  const [balance, setBalance] = useState(0);

  const { address } = useAccount();
  const currentChainId = useChainId();
  const tokenAddress = getTokenAddress(currentChainId);

  useLayoutEffect(() => {
    async function getUserBalance() {
      try {
        const result = await getBalance(config, {
          token: tokenAddress,
          address: address ?? zeroAddress,
          unit: 8,
        });
        setBalance(Number(result.value));
      } catch (e) {
        console.log(e);
      }
    }

    getUserBalance();
  }, [address, tokenAddress]);

  return { balance, setBalance };
};
