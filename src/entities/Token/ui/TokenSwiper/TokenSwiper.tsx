"use client";

import { Token } from "@/shared/types";

import { Swiper } from "@/shared/ui/Swiper";
import { TokenCard, TokenSkeletonCard } from "@/entities/Token";
import { PlaceholderItem } from "../../types/PlaceholderItem";

type TokenSwiperProps = {
  className?: string;
  tokens?: Token[];
  placeholderItems: PlaceholderItem[];
};

export const TokenSwiper = (props: TokenSwiperProps) => {
  const { className, tokens, placeholderItems } = props;

  const swiperContent = tokens?.length ? (
    <Swiper
      onSwipe={() => {}}
      sliderItems={tokens}
      SlideComponent={TokenCard}
    />
  ) : (
    <Swiper
      onSwipe={() => {}}
      sliderItems={placeholderItems}
      SlideComponent={TokenSkeletonCard}
    />
  );

  return swiperContent;
};
