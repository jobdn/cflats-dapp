"use client";

import Image from "next/image";
import clsx from "clsx";
import { useAccount, useDisconnect } from "wagmi";

import { Button } from "@/shared/ui/Button";

import exitIcon from "../images/exit.svg";

import classes from "./Playground.module.scss";
import { walletActions } from "@/entities/Wallet";
import { useAppDispatch } from "@/shared/hooks/redux";

type PlaygroundProps = {
  className?: string;
};

export const Playground = (props: PlaygroundProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const handleDisconnect = () => {
    dispatch(walletActions.resetAllTokens());
    disconnect();
  };

  return (
    <div className={clsx(classes.playground, className)}>
      <Button
        color="purple"
        variant="rounded"
        className={classes.button}
        title={isConnected ? "Try playground" : "Connect wallet"}
      >
        {isConnected ? "PLAYGROUND" : "CONNECT WALLET"}
      </Button>

      <Button
        variant="empty"
        onClick={handleDisconnect}
        title="Exit from wallet"
      >
        <Image src={exitIcon} alt="Exit icon" />
      </Button>
    </div>
  );
};
