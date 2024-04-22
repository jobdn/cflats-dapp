import classes from "./TokensTab.module.scss";

import { useAppSelector } from "@/shared/hooks/redux";

import { TabsHeader } from "./TabsHeader/TabsHeader";
import { TabsPanel } from "./TabsPanel/TabsPanel";
import { TabsPanelContent } from "./TabsPanelContent/TabsPanelContent";
import { selectGen } from "@/entities/Wallet";

type TokensTabProps = {
  className?: string;
};

export const TokensTab = (props: TokensTabProps) => {
  const { className } = props;

  const genTab = useAppSelector(selectGen);

  return (
    <div className={classes.tabsWrapper}>
      <TabsHeader className={classes.tabsHeader} />

      <TabsPanel value={genTab} index={0} className={classes.tabPanel}>
        <TabsPanelContent gen={genTab} />
      </TabsPanel>
      <TabsPanel value={genTab} index={1} className={classes.tabPanel}>
        <TabsPanelContent gen={genTab} />
      </TabsPanel>
    </div>
  );
};
