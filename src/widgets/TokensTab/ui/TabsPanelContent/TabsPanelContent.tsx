import clsx from "clsx";
import classes from "./TabsPanelContent.module.scss";
import { TokenCollection, ViewType, getSkeletonData } from "@/entities/Token";
import { GenNumber, Token } from "@/shared/types";
import { useAppSelector } from "@/shared/hooks/redux";
import { selectStakedTokens, selectTokens } from "@/entities/Wallet";
import { selectView } from "@/features/ToggleTokensView";

interface TabsPanelContentProps {
  className?: string;
  gen: GenNumber;
}

export const TabsPanelContent = (props: TabsPanelContentProps) => {
  const { className, gen } = props;

  const view = useAppSelector(selectView);

  const genTokens = useAppSelector((state) => selectTokens(state, gen));
  const stakedTokens = useAppSelector((state) =>
    selectStakedTokens(state, gen)
  );

  const tabContent = () => {
    if (view === "all") {
      const items = [...(genTokens || []), ...(stakedTokens || [])];
      // const items: Token[] = [];

      return (
        <TokenCollection
          tokens={items}
          view={view}
          title={`Your NFT collection of GEN#${gen} / Staked`}
          className={classes.list}
          collectionClassName={classes.listContent}
          placeholderItems={getSkeletonData("STAKED NFT", 50)}
        />
      );
    }

    return (
      <>
        <TokenCollection
          tokens={genTokens}
          view={view}
          title={`Your NFT collection of GEN#${gen}`}
          subTitle="Each NFT can be staked to earn CFLAT token"
          className={classes.tokens}
          placeholderItems={getSkeletonData(`NFT GET#${gen}`, 8)}
        />

        <TokenCollection
          tokens={stakedTokens}
          view={view}
          title={`Staked NFT collection of GEN#${gen}`}
          subTitle="Each NFT can be claimed to return in wallet with CFLAT token"
          className={classes.stakedTokens}
          placeholderItems={getSkeletonData("STAKED NFT", 8)}
        />
      </>
    );
  };

  return <>{tabContent()}</>;
};
