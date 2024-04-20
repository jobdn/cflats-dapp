"use client";

import classes from "./TokenSkeletonCard.module.scss";

import clsx from "clsx";
import { memo } from "react";

export interface TokenSkeletonCardProps {
  footerText: string;
  className?: string;
}

export const TokenSkeletonCard = memo((props: TokenSkeletonCardProps) => {
  const { className, footerText } = props;

  return (
    <div className={clsx(classes.skeleton, className)}>
      <div className={classes.hero}></div>

      <div className={classes.footer}>{footerText}</div>
    </div>
  );
});

TokenSkeletonCard.displayName = "TokenSkeletonCard";
