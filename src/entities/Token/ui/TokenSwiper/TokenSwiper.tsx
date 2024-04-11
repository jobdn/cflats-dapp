"use client";

import { GenNumber, Token } from "@/shared/types";

import classes from "./TokenSwiper.module.scss";
import { Swiper } from "@/shared/Swiper";
import { TokenCard, TokenSkeletonCard } from "@/entities/Token";

type TokenSwiperProps = {
  gen: GenNumber;
  title: string;
  subTitle?: string;
  className?: string;
  tokens?: Token[];
};

const getSkeletonTokens = (gen: GenNumber) =>
  [...Array(8)].map((_, key) => ({
    id: key,
    footerText: `NFT GEN#${gen}`,
  }));

export const TokenSwiper = (props: TokenSwiperProps) => {
  const { gen, title, className, subTitle, tokens } = props;

  const swiperContent = tokens?.length ? (
    <Swiper
      className={classes.swiper}
      onSwipe={() => {}}
      sliderItems={tokens}
      SlideComponent={TokenCard}
    />
  ) : (
    <Swiper
      className={classes.swiper}
      onSwipe={() => {}}
      sliderItems={getSkeletonTokens(gen)}
      SlideComponent={TokenSkeletonCard}
    />
  );

  return (
    <section className={className}>
      <h2 className={classes.title}>
        {title} <span> | {subTitle}</span>
      </h2>
      {swiperContent}
    </section>
  );
};
