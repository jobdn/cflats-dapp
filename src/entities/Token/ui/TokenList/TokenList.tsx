import { GenNumber, Token } from "@/shared/types";
import { TokenCard } from "../TokenCard/TokenCard";

import classes from "./TokenList.module.scss";
import { TokenSkeletonCard } from "../TokenSkeletonCard/TokenSkeletonCard";
import clsx from "clsx";

interface TokenListProps {
  items?: Token[];
  className?: string;
}

const getSkeletonTokens = () =>
  [...Array(100)].map((_, key) => ({
    id: key,
    footerText: `STAKED NFT`,
  }));

export const TokenList = (props: TokenListProps) => {
  const { items, className } = props;

  const listContent = items?.length
    ? items.map((item) => <TokenCard key={item.id} {...item} />)
    : getSkeletonTokens().map((item) => (
        <TokenSkeletonCard key={item.id} {...item} />
      ));

  return <ul className={clsx(classes.list, className)}>{listContent}</ul>;
};
