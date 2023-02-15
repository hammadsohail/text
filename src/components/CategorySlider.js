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
        spaceBetween={20}
        slidesPerView={12}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
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
        paginationClass="swiper-pagination-bullets"
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide  key={category.id}>
            <div className="mb-10 mt-5 flex-col flex items-center ">
              <img
                className="mx-auto h-48 w-48 object-contain rounded-full"
                src={category.image}
                alt={category.name}
              />
              <h3 className="text-3xl mt-4 font-extrabold">
                {category.name}
              </h3>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

