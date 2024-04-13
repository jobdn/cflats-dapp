"use client";

import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import clsx from "clsx";

import classes from "./TokensTab.module.scss";
import "./MuiOverrides.css";

import { TokenSwiper } from "@/entities/Token/index";
import { useAppSelector } from "@/shared/hooks/redux";
import { selectView } from "@/features/ToggleTokensView";
import { TokenList } from "@/entities/Token";
import { tokensSelector } from "@/entities/Wallet";
import { GenNumber } from "@/shared/types";

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
  const [genTab, setGenTab] = useState<GenNumber>(0);
  const view = useAppSelector(selectView);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setGenTab(newValue as GenNumber);
  };

  const genTokens = useAppSelector((state) => tokensSelector(state, genTab));

  return (
    <div className={classes.tabsWrapper}>
      <div className={classes.tabs}>
        <Tabs
          value={genTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable token tabs"
          classes={{
            indicator: classes.indicator,
            flexContainer: classes.flexContainer,
            scroller: classes.scroller,
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
        <CustomTabsIndicator tabValue={genTab} tabsAmount={genList.length} />
      </div>
      <CustomTabPanel value={genTab} index={0}>
        {view === "swiper" && (
          <>
            <TokenSwiper
              gen={0}
              title="Your NFT collection of GEN#0"
              subTitle="Each NFT can be staked to earn CFLAT token"
              className={classes.tokens}
              tokens={genTokens}
            />
            <TokenSwiper
              gen={0}
              title="Staked NFT of GEN#0"
              subTitle="Each NFT can be claimed to return in wallet with CFLAT token"
              className={classes.stakedTokens}
              tokens={genTokens}
            />
          </>
        )}

        {view === "all" && (
          <TokenList
            title={"Your NFT collection of GEN#0 / Staked"}
            subTitle="Each NFT can be claimed to return in wallet with CFLAT token"
            items={genTokens}
            gen={0}
            className={classes.list}
          />
        )}
      </CustomTabPanel>
      <CustomTabPanel value={genTab} index={1}>
        {view === "swiper" && (
          <>
            <TokenSwiper
              gen={1}
              title="Your NFT collection of GEN#1"
              subTitle="Each NFT can be staked to earn CFLAT token"
              className={classes.tokens}
            />
            <TokenSwiper
              gen={1}
              title="Staked NFT of GEN#1"
              subTitle="Each NFT can be claimed to return in wallet with CFLAT token"
              className={classes.stakedTokens}
            />
          </>
        )}

        {view === "all" && (
          <TokenList
            title="Your NFT collection of GEN#1 / Staked"
            subTitle="Each NFT can be claimed to return in wallet with CFLAT token"
            items={genTokens}
            gen={0}
          />
        )}
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
