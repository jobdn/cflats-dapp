import { FunctionComponent } from "react";
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Scrollbar, Grid } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import clsx from "clsx";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/grid";

import classes from "./Swiper.module.scss";
import "./SwiperOverrides.css";

interface SwiperProps<T> {
  onSwipe: (...args: any[]) => void;
  sliderItems: T[];
  SlideComponent: FunctionComponent<T>;
  className?: string;
  slideClassName?: string;
}

export const Swiper = <T extends { id: number }>(props: SwiperProps<T>) => {
  const { sliderItems, SlideComponent, className, slideClassName } = props;
  const handleSwipe = (swiper: SwiperType) => {
    props.onSwipe();
  };

  return (
    <ReactSwiper
      className={clsx(classes.swiper, className)}
      onSlideChange={handleSwipe}
    >
      {sliderItems.map((item) => (
        <SwiperSlide
          className={clsx(classes.slide, slideClassName)}
          key={item.id}
          {...swiperConfig}
        >
          <SlideComponent {...item} />
        </SwiperSlide>
      ))}
    </ReactSwiper>
  );
};

const swiperConfig = {
  breakpoints: {
    360: {
      slidesPerView: 2,
      grid: { rows: 2, fill: "row" },
      spaceBetween: 23,
    },
    768: {
      grid: { rows: 1 },
      slidesPerView: 4,
      spaceBetween: 37,
    },
  },
  pagination: {
    enabled: true,
    type: "bullets",
    clickable: true,
    bulletClass: classes.bullet,
    bulletActiveClass: classes.bullet_active,
  },
  modules: [Grid, Pagination, Scrollbar],
};
