import { getBalance } from "@wagmi/core";
import {
  useAccount,
  useChainId,
  useConnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import { getTokenAddress } from "@/shared/utils/getTokenAddress";

import { config } from "@/shared/config/wagmi";
import { zeroAddress } from "viem";
import { useLayoutEffect, useState } from "react";
import Image from "next/image";

import notConnectedSrc from "../images/not_connected.svg";
import defaultAvatarSrc from "../images/account_default.png";

type AccountProps = {};

const useUserBalance = () => {};

export const Account = (props: AccountProps) => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });
  console.log(ensAvatar);

  const currentChainId = useChainId();
  const tokenAddress = getTokenAddress(currentChainId);
  const [userBalance, setUserBalance] = useState(0);
  //   const { disconnect } = useDisconnect();
  const { connectors, connect } = useConnect({ config });

  useLayoutEffect(() => {
    async function setBalance() {
      try {
        const result = await getBalance(config, {
          token: tokenAddress,
          address: address ?? zeroAddress,
          unit: 8,
        });
        setUserBalance(Number(result.value));
      } catch (e) {
        console.log(e);
      }
    }

    setBalance();
  }, []);

  const accountSrc = isConnected
    ? ensAvatar || defaultAvatarSrc
    : notConnectedSrc;

  return (
    <div>
      <Image
        src={accountSrc}
        width={30}
        height={30}
        alt="Not connected image"
      />
    </div>
  );
};
