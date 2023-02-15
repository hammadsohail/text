import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';


SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

export const CategorySlider = ({ categories }) => {

  return (
    <div className="relative">
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        breakpoints={{
          640: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 11,
          },
          1024: {
            slidesPerView: 11,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}

        navigationclass="swiper-button-container"

        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide  key={category.id}>
            <div className="mt-5 mb-20">
              <img
                className="object-contain"
                src={category.image}
                alt={category.name}
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

