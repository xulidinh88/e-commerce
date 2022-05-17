import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import { arrayEight } from '@constants';
import { ComponentCard } from '@components';
import { IProducts, IProduct } from '@types';

export const ComponentBestSellew = (props: IProducts) => {
  const { products } = props;
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      slidesPerView={4}
      centeredSlides
      centeredSlidesBounds={false}
      loop={true}
      spaceBetween={30}
      slideToClickedSlide={true}
    >
      {products.map((product: IProduct, index: number) => {
        return (
          <SwiperSlide key={index}>
            <ComponentCard product={product} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
