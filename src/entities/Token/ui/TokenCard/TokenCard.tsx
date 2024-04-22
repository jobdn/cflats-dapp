"use client";

import { Checkbox } from "@/shared/ui/Checkbox";
import classes from "./TokenCard.module.scss";

import etherscanLogoImg from "./images/etherscan-logo.svg";
import grayEtherscanLogoImg from "./images/gray-etherscan-logo.svg";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import type { Token } from "@/shared/types";
import { memo } from "react";

export interface TokenCardProps extends Token {
  className?: string;
}

export const TokenCard = memo((props: TokenCardProps) => {
  const { rarity = "silver", imgSrc, genNumber, name, id, className } = props;

  return (
    <div className={clsx(classes.card, classes[`card_${rarity}`], className)}>
      <div className={classes.hero}>
        <p className={classes.gen}>
          <span>Gen#</span>
          <span>{genNumber}</span>
        </p>
        <p className={classes.name}>{name}</p>
        <Checkbox className={classes.checkbox} />

        <div className={classes.bgGradient}></div>

        <Image
          src={imgSrc}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          alt="Card Hero"
        />
      </div>

      <div className={classes.footer}>
        <div>
          <div>
            <span className={classes.id}>NFT ID: </span>
            <strong>{id}</strong>
          </div>
          <div className={classes.rarity}>
            <span>Rarity: </span>
            <strong>{rarity}</strong>
          </div>
        </div>

        <Link href={"/"} target="_blank">
          <Image
            src={rarity === "diamond" ? etherscanLogoImg : grayEtherscanLogoImg}
            width={15}
            height={15}
            alt="Etherscan logo"
            className={classes.etherscanLogo}
          />
        </Link>
      </div>
    </div>
  );
});

TokenCard.displayName = "TokenCard";
