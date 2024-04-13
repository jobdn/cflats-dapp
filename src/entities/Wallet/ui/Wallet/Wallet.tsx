"use client";

import { useAccount, useChainId, useClient } from "wagmi";
import { useEffect, useState } from "react";
import Image from "next/image";

import notConnectedSrc from "../../images/not_connected.svg";
import defaultAvatarSrc from "../../images/account_default.svg";

import classes from "./Wallet.module.scss";
import { useWalletBalance } from "../../hooks/useWalletBalance";
import dynamic from "next/dynamic";
import { useAppDispatch } from "@/shared/hooks/redux";
import { fetchTokensByGen } from "../../model/thunks/fetchTokensByGen";

import { config } from "@/shared/config/wagmi";
import clsx from "clsx";

const ConnectWalletModal = dynamic(
  () => import("../ConnectWalletModal/ConnectWalletModal"),
  { ssr: false }
);

type WalletProps = {
  className?: string;
  balancePosition?: "left" | "right";
};

export const Wallet = (props: WalletProps) => {
  const { balancePosition = "left", className } = props;
  const [walletModal, setWalletModal] = useState(false);

  const currentChainId = useChainId();
  const { isConnected } = useAccount();

  const accountSrc = isConnected ? defaultAvatarSrc : notConnectedSrc;

  const dispatch = useAppDispatch();
  const client = useClient({
    chainId: currentChainId as 1 | 80001 | undefined,
    config,
  });

  useEffect(() => {
    if (isConnected) {
      dispatch(fetchTokensByGen({ gen: 0, chain: currentChainId, client }));
    }
  }, [client, currentChainId, dispatch, isConnected]);

  const handleConnect = () => {
    if (!isConnected) setWalletModal(!walletModal);
  };

  return (
    <div className={clsx(classes.wallet, className)}>
      {balancePosition === "left" && <Balance isConnected={isConnected} />}
      <button onClick={handleConnect}>
        <Image
          src={accountSrc}
          width={40}
          height={40}
          alt="Not connected image"
        />
      </button>

      {balancePosition === "right" && <Balance isConnected={isConnected} />}

      <ConnectWalletModal
        modalIsOpen={walletModal}
        onClose={() => setWalletModal(false)}
      />
    </div>
  );
};

const Balance = (props: { isConnected: boolean }) => {
  const { isConnected } = props;
  const { balance } = useWalletBalance();

  return (
    <span className={classes.balance}>
      TOKENS:
      {isConnected ? ` ${balance} CFLAT` : " N/A"}
    </span>
  );
};
