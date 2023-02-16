import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from "next/image";

export const ImageSwiper = ({ images }) => {
  const swiperRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <div className="relative flex flex-row flex-nowrap bg-[#F3E030] justify-between">

        <div className="w-2/3 flex justify-center flex-grow">
          <Swiper
            className="h-full"
          ref={swiperRef}
            slidesPerView={1}
            spaceBetween={2}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img className="h-full w-full object-cover" src={image.src} alt={image.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {!isMobile && (
  <div className="flex flex-row  items-center w-full md:w-auto">
    <div className="w-1/2 md:w-auto">
      <Image
        src="https://f.nooncdn.com/mpcms/EN0001/assets/c6f2bd47-5eca-4908-b3a5-d377e231622a.png"
        layout="responsive"
        width={400}
        height={200}
      />
    </div>
    <div className="w-1/2 md:w-auto">
      <Image
        src="https://f.nooncdn.com/mpcms/EN0001/assets/4b795127-3b55-499d-831b-a361e0eae5b0.png"
        layout="responsive"
        width={400}
        height={200}
      />
    </div>
  </div>
)}


      </div>
    </>
  );
};
