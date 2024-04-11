"use client";

import { GenNumber } from "@/shared/types";

import classes from "./GenTokenSwiper.module.scss";
import { useAppSelector } from "@/shared/hooks/redux";
import { Swiper } from "@/shared/Swiper";
import { tokensSelector } from "@/entities/Wallet";
import { TokenCard, TokenSkeletonCard } from "@/entities/Token";

type GenTokenSwiperProps = {
  gen: GenNumber;
  title: string;
  subTitle?: string;
  className?: string;
};

const getSkeletonTokens = (gen: GenNumber) =>
  [...Array(8)].map((_, key) => ({
    id: key,
    footerText: `NFT GEN#${gen}`,
  }));

export const GenTokenSwiper = (props: GenTokenSwiperProps) => {
  const { gen, title, className, subTitle } = props;

  const genTokens = useAppSelector((state) => tokensSelector(state, gen));

  const swiperContent = genTokens?.length ? (
    <Swiper
      className={classes.swiper}
      onSwipe={() => {}}
      sliderItems={genTokens}
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
