"use client";

import classes from "./TokenSkeletonCard.module.scss";

import blankFlatImg from "./images/blank_flat.png";
import Image from "next/image";
import clsx from "clsx";

export interface TokenSkeletonCardProps {
  footerText: string;
  className?: string;
}

export function TokenSkeletonCard(props: TokenSkeletonCardProps) {
  const { className, footerText } = props;

  return (
    <div className={clsx(classes.skeleton, className)}>
      <div className={classes.hero}></div>

      <div className={classes.footer}>{footerText}</div>
    </div>
  );
}
