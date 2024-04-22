import { GenNumber, Token } from "@/shared/types";
import { TokenCard } from "../TokenCard/TokenCard";

import classes from "./TokenList.module.scss";
import { TokenSkeletonCard } from "../TokenSkeletonCard/TokenSkeletonCard";
import clsx from "clsx";

interface TokenListProps {
  items?: Token[];
  gen: GenNumber;
  className?: string;
}

const getSkeletonTokens = (gen: GenNumber) =>
  [...Array(100)].map((_, key) => ({
    id: key,
    footerText: `NFT GEN#${gen}`,
  }));

export const TokenList = (props: TokenListProps) => {
  const { items, gen, className } = props;

  const listContent = items?.length
    ? items.map((item) => <TokenCard key={item.id} {...item} />)
    : getSkeletonTokens(gen).map((item) => (
        <TokenSkeletonCard key={item.id} {...item} />
      ));

  return <ul className={clsx(classes.list, className)}>{listContent}</ul>;
};
