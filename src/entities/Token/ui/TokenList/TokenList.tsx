import { GenNumber, Token } from "@/shared/types";
import { TokenCard } from "../TokenCard/TokenCard";

import classes from "./TokenList.module.scss";
import { TokenSkeletonCard } from "../TokenSkeletonCard/TokenSkeletonCard";
import clsx from "clsx";
import { getSkeletonData } from "../../lib/getSkeletonData";
import { PlaceholderItem } from "../../types/PlaceholderItem";

interface TokenListProps {
  items?: Token[];
  className?: string;
  placeholderItems: PlaceholderItem[];
}

export const TokenList = (props: TokenListProps) => {
  const { items, className, placeholderItems } = props;

  const listContent = items?.length
    ? items.map((item) => <TokenCard key={item.id} {...item} />)
    : placeholderItems.map((item) => (
        <TokenSkeletonCard key={item.id} {...item} />
      ));

  return <ul className={clsx(classes.list, className)}>{listContent}</ul>;
};
