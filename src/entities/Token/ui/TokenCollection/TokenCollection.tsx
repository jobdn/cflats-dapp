import clsx from "clsx";

import classes from "./TokenCollection.module.scss";

import { ViewType } from "../../types/TokenCollectionView";
import { GenNumber, Token } from "@/shared/types";
import { TokenList } from "../TokenList/TokenList";
import { TokenSwiper } from "../TokenSwiper/TokenSwiper";

interface TokenCollectionProps {
  tokens?: Token[];
  title: string;
  subTitle?: string;
  view: ViewType;
  gen: GenNumber;
  className?: string;
  collectionClassName?: string;
}

export const TokenCollection = (props: TokenCollectionProps) => {
  const { className, view, tokens, title, subTitle, gen, collectionClassName } =
    props;

  return (
    <div className={clsx(className)}>
      <h2 className={classes.title}>
        {title} {subTitle && <span> | {subTitle}</span>}
      </h2>

      {view === "all" && (
        <TokenList gen={gen} items={tokens} className={collectionClassName} />
      )}
      {view === "swiper" && (
        <TokenSwiper
          tokens={tokens}
          gen={gen}
          className={collectionClassName}
        />
      )}
    </div>
  );
};
