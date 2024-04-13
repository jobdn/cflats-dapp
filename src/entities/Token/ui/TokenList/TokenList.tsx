import { GenNumber, Token } from "@/shared/types";
import { TokenCard } from "../TokenCard/TokenCard";

import classes from "./TokenList.module.scss";
import { TokenSkeletonCard } from "../TokenSkeletonCard/TokenSkeletonCard";

interface TokenListProps {
  title: string;
  subTitle?: string;
  items?: Token[];
  gen: GenNumber;
  className?: string;
}

const getSkeletonTokens = (gen: GenNumber) =>
  [...Array(8)].map((_, key) => ({
    id: key,
    footerText: `NFT GEN#${gen}`,
  }));

export const TokenList = (props: TokenListProps) => {
  const { items, gen, title, subTitle, className } = props;

  const listContent = items?.length
    ? items.map((item) => <TokenCard key={item.id} {...item} />)
    : getSkeletonTokens(gen).map((item) => (
        <TokenSkeletonCard key={item.id} {...item} />
      ));

  return (
    <div className={className}>
      <h2 className={classes.title}>
        {title} <span> | {subTitle}</span>
      </h2>
      <ul className={classes.list}>{listContent}</ul>
    </div>
  );
};
