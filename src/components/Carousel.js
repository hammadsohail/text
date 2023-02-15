import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';


export const ImageSwiper = ({ images }) => {
  const swiperRef = useRef(null);

  return (
    <Swiper

      ref={swiperRef}
      navigation={true}

      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img className="h-full sm:h-full w-full object-fit"  src={image.src} alt={image.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};



