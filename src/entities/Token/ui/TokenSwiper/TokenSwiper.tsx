"use client";

import { GenNumber, Token } from "@/shared/types";

import { Swiper } from "@/shared/ui/Swiper";
import { TokenCard, TokenSkeletonCard } from "@/entities/Token";

type TokenSwiperProps = {
  className?: string;
  tokens?: Token[];
};

const getSkeletonTokens = () =>
  [...Array(8)].map((_, key) => ({
    id: key,
    footerText: `STAKED NFT`,
  }));

export const TokenSwiper = (props: TokenSwiperProps) => {
  const { className, tokens } = props;

  const swiperContent = tokens?.length ? (
    <Swiper
      onSwipe={() => {}}
      sliderItems={tokens}
      SlideComponent={TokenCard}
    />
  ) : (
    <Swiper
      onSwipe={() => {}}
      sliderItems={getSkeletonTokens()}
      SlideComponent={TokenSkeletonCard}
    />
  );

  return swiperContent;
};
