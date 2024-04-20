"use client";

import clsx from "clsx";
import classes from "./MobileLayout.module.scss";

import { MobileHeader } from "@/widgets/MobileHeader";
import { TokenActionsList } from "@/widgets/TokenActionsList";
import { TokensTab } from "@/widgets/TokensTab";
import { EarningStats } from "@/widgets/EarningStats";
import { UserStats } from "@/widgets/UserStats";
import { LandList } from "@/widgets/LandList";

interface MobileLayoutProps {
  className?: string;
}

export const MobileLayout = (props: MobileLayoutProps) => {
  const { className } = props;

  return (
    <div className={clsx(className)}>
      <MobileHeader />
      <TokenActionsList />
      <TokensTab />

      <div className={classes.downSection}>
        <div className={classes.statsWrapper}>
          <EarningStats className={classes.earnStats} />
          <UserStats className={classes.userStats} />
        </div>
        <LandList />
      </div>
    </div>
  );
};
