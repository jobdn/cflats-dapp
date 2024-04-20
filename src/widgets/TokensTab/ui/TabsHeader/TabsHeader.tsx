import clsx from "clsx";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import classes from "./TabsHeader.module.scss";

import "./MuiOverrides.css";

import { GenNumber } from "@/shared/types";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { selectGen, walletActions } from "@/entities/Wallet";

interface TabsHeaderProps {
  className?: string;
}

export const TabsHeader = (props: TabsHeaderProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const tab = useAppSelector(selectGen);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(walletActions.setGen(newValue as GenNumber));
  };

  return (
    <div className={clsx(classes.tabsHeader, className)}>
      <Tabs
        value={tab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable token tabs"
        classes={{
          scroller: classes.scroller,
          indicator: classes.activeTab,
          flexContainer: classes.flexContainer,
        }}
      >
        {genList.map((gen) => (
          <Tab
            key={gen.id}
            disableRipple
            classes={{ root: classes.tabRoot }}
            label={gen.genName}
            // disabled={gen.disabled}
          />
        ))}
      </Tabs>
      <CustomTabsIndicator tabValue={tab} tabsAmount={genList.length} />
    </div>
  );
};

interface CustomTabsIndicatorProps {
  tabValue: number;
  tabsAmount: number;
}

const CustomTabsIndicator = (props: CustomTabsIndicatorProps) => {
  const { tabsAmount, tabValue } = props;
  return (
    <div className={classes.tabsIndicator}>
      {[...Array(tabsAmount)].map((_, i) => (
        <div
          className={classes.bullet}
          style={{ background: i <= tabValue ? "#D9D9D9" : "#737272" }}
          key={i}
        ></div>
      ))}
    </div>
  );
};

type GenTabItem = { genName: string; id: number; disabled?: boolean };

const genList: GenTabItem[] = [
  { genName: "GEN#0", id: 0 },
  { genName: "GEN#1", id: 1 },
  { genName: "GEN#2", id: 2, disabled: true },
  { genName: "GEN#3", id: 3, disabled: true },
  { genName: "GEN#4", id: 4, disabled: true },
  { genName: "GEN#5", id: 5, disabled: true },
  { genName: "GEN#X", id: 6, disabled: true },
];
