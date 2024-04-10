import { useEffect, useState } from "react";
import { Connector, useConnect } from "wagmi";
import { config } from "@/shared/config/wagmi";

import walletConnectImg from "../../images/coins/walletconnect_logo.png";
import metamaskImg from "../../images/coins/metamask_logo.png";
import safepalImg from "../../images/coins/safepal_logo.png";
import coinbaseImg from "../../images/coins/coinbase_logo.png";
import Image from "next/image";

import classes from "./WalletItem.module.scss";

export interface WalletItemProps {
  connector: Connector;
  closeModal: () => void;
}

export function WalletItem(props: WalletItemProps) {
  const { connector, closeModal } = props;
  const { connectAsync } = useConnect({ config });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function getProvider() {
      const provider = await connector.getProvider();
      setReady(!!provider);
    }

    getProvider();
  }, [connector]);

  const walletLogo: string =
    connector.icon ?? iconImgByName[connector.name.toLowerCase()];

  const handleClick = async () => {
    await connectAsync({ connector });

    closeModal();
  };

  return (
    <button
      disabled={!ready}
      onClick={handleClick}
      className={classes.walletItem}
    >
      <Image width={30} height={30} src={walletLogo} alt={"Wallet ICO"} />
      <span>{connector.name}</span>
    </button>
  );
}

const iconImgByName: any = {
  walletconnect: walletConnectImg.src,
  metamask: metamaskImg.src,
  "coinbase wallet": coinbaseImg.src,
  safepal: safepalImg.src,
};
