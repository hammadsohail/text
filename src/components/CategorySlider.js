import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

export const CategorySlider = ({ categories }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 8,
          },
          1280: {
            slidesPerView: 11,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}

        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="mt-5 w-28 mb-10">
              <img className={`object-contain sm:h-30 w-30  ${isMobile ? 'h-24 w-24' : 'h-40 w-40'} `} src={category.image} alt={category.name} />
            </div>
            {isMobile ? ( <div className="mt-5 w-28 mb-10">
              <img className="object-contain h-24 w-24" src={category.image} alt={category.name} />
            </div>)
            :false}

          </SwiperSlide>

        ))}
      </Swiper>

    </div>
  );
};
