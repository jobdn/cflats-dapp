"use client";

import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import clsx from "clsx";

import classes from "./TokensTab.module.scss";
import "./MuiOverrides.css";

import { GenTokenSwiper } from "@/widgets/GenTokenSwiper";

type TokensTabProps = {
  className?: string;
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

export const TokensTab = (props: TokensTabProps) => {
  const { className } = props;
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div className={classes.tabsWrapper}>
      <div className={classes.tabs}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable token tabs"
          classes={{
            indicator: classes.indicator,
            flexContainer: classes.flexContainer,
          }}
        >
          {genList.map((gen) => (
            <Tab
              key={gen.id}
              disableRipple
              classes={{ root: classes.tabRoot }}
              label={gen.genName}
              disabled={gen.disabled}
            />
          ))}
        </Tabs>
        <CustomTabsIndicator tabValue={tabValue} tabsAmount={genList.length} />
      </div>
      <CustomTabPanel value={tabValue} index={0}>
        <GenTokenSwiper
          gen={0}
          title="Your NFT collection of GEN#0"
          subTitle="Each NFT can be staked to earn CFLAT token"
          className={classes.tokens}
        />
        <GenTokenSwiper
          gen={0}
          title="Staked NFT of GEN#0"
          subTitle="Each NFT can be claimed to return in wallet with CFLAT token"
          className={classes.stakedTokens}
        />
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={1}>
        <GenTokenSwiper
          gen={1}
          title="Your NFT collection of GEN#1"
          subTitle="Each NFT can be staked to earn CFLAT token"
          className={classes.tokens}
        />
        <GenTokenSwiper
          gen={1}
          title="Staked NFT of GEN#1"
          subTitle="Each NFT can be claimed to return in wallet with CFLAT token"
          className={classes.stakedTokens}
        />
      </CustomTabPanel>
    </div>
  );
};

export interface CustomTabsIndicatorProps {
  tabValue: number;
  tabsAmount: number;
}

export const CustomTabsIndicator = (props: CustomTabsIndicatorProps) => {
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

interface CustomTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  className?: string;
}

function CustomTabPanel(props: CustomTabPanelProps) {
  const { children, value, index, className, ...otherProps } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`token-tabpanel-${index}`}
      aria-labelledby={`token-tab-${index}`}
      className={clsx(classes.tabPanel, className)}
      {...otherProps}
    >
      {value === index && <>{children}</>}
    </div>
  );
}
