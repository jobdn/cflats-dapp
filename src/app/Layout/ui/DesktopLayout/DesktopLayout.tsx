"use client";

import clsx from "clsx";
import classes from "./Desktop.module.scss";

import { selectView } from "@/features/ToggleTokensView";
import { useAppSelector } from "@/shared/hooks/redux";
import { TokenActionsList } from "@/widgets/TokenActionsList";
import { selectGen } from "@/entities/Wallet";
import { TabsHeader } from "@/widgets/TokensTab";
import { Playground } from "@/features/Playground";
import { EarningStats } from "@/widgets/EarningStats";
import { TabsPanel } from "@/widgets/TokensTab/ui/TabsPanel/TabsPanel";
import { TabsPanelContent } from "@/widgets/TokensTab/ui/TabsPanelContent/TabsPanelContent";
import { UserStats } from "@/widgets/UserStats";
import { LandList } from "@/widgets/LandList";
import dynamic from "next/dynamic";

interface DesktopLayoutProps {
  className?: string;
}

const Wallet = dynamic(() => import("../../../../entities/Wallet"), {
  ssr: false,
});

export const DesktopLayout = (props: DesktopLayoutProps) => {
  const view = useAppSelector(selectView);
  const genTab = useAppSelector(selectGen);

  const { className } = props;

  return (
    <div className={clsx(classes.layout, className)}>
      <header className={classes.header}>
        <Wallet balancePosition="right" />
        <TabsHeader className={classes.tabsHeader} />
        <Playground className={classes.playground} />
      </header>
      <main className={clsx(classes.content, classes[`content_${view}`])}>
        <div className={classes.left}>
          <TokenActionsList />
          <EarningStats />
        </div>

        <div className={classes.middle}>
          <TabsPanel value={genTab} index={0} className={classes.tabPanel}>
            <TabsPanelContent gen={genTab} />
          </TabsPanel>
          <TabsPanel value={genTab} index={1} className={classes.tabPanel}>
            <TabsPanelContent gen={genTab} />
          </TabsPanel>
        </div>

        <div className={classes.right}>
          <UserStats className={classes.userStats} />
          <LandList />
        </div>
      </main>
    </div>
  );
};
