import clsx from "clsx";

import classes from "./TokenCollection.module.scss";

import { ViewType } from "../../types/TokenCollectionView";
import { GenNumber, Token } from "@/shared/types";
import { TokenList } from "../TokenList/TokenList";
import { TokenSwiper } from "../TokenSwiper/TokenSwiper";
import { PlaceholderItem } from "../../types/PlaceholderItem";

interface TokenCollectionProps {
  tokens?: Token[];
  title: string;
  subTitle?: string;
  view: ViewType;
  className?: string;
  collectionClassName?: string;
  placeholderItems: PlaceholderItem[];
}

export const TokenCollection = (props: TokenCollectionProps) => {
  const {
    className,
    view,
    tokens,
    title,
    subTitle,
    collectionClassName,
    placeholderItems,
  } = props;

  return (
    <div className={clsx(className)}>
      <h2 className={classes.title}>
        {title} {subTitle && <span> | {subTitle}</span>}
      </h2>

      {view === "all" && (
        <TokenList
          items={tokens}
          className={collectionClassName}
          placeholderItems={placeholderItems}
        />
      )}
      {view === "swiper" && (
        <TokenSwiper
          tokens={tokens}
          className={collectionClassName}
          placeholderItems={placeholderItems}
        />
      )}
    </div>
  );
};
