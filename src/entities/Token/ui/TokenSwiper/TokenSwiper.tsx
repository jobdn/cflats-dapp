"use client";

import { GenNumber, Token } from "@/shared/types";

import { Swiper } from "@/shared/ui/Swiper";
import { TokenCard, TokenSkeletonCard } from "@/entities/Token";

type TokenSwiperProps = {
  gen: GenNumber;
  className?: string;
  tokens?: Token[];
};

const getSkeletonTokens = (gen: GenNumber) =>
  [...Array(8)].map((_, key) => ({
    id: key,
    footerText: `NFT GEN#${gen}`,
  }));

export const TokenSwiper = (props: TokenSwiperProps) => {
  const { gen, className, tokens } = props;

  const swiperContent = tokens?.length ? (
    <Swiper
      onSwipe={() => {}}
      sliderItems={tokens}
      SlideComponent={TokenCard}
    />
  ) : (
    <Swiper
      onSwipe={() => {}}
      sliderItems={getSkeletonTokens(gen)}
      SlideComponent={TokenSkeletonCard}
    />
  );

  return swiperContent;
};
