import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';


SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

export const RecomendedSlider = ({ categories }) => {

  return (
    <div className="relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 6,
          },
        }}

        navigation={true}

        navigationClass="swiper-button-container"

        paginationClass="swiper-pagination-bullets"
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide  key={category.id}>
            <div className="bg-white  mt-5 p-10 flex-col flex justify-start space-y-7 ">
                <div className="bg-transparent">
              <img
                className="mx-auto  object-contain rounded-lg"
                src={category.image}
                alt={category.name}
              />
              </div>
              <h3 className="text-3xl mt-4 font-semibold">
                {category.name}
              </h3>
              <h3 className="text-3xl mt-4 font-semibold justify-start">
                AED {category.price}.00
              </h3>
              <div className="flex flex-row space-x-3">
              <p className="text-xl text-gray-400 line-through
">{category.original}</p>
              <p  className=" text-green-400 font-extrabold text-2xl">{category.discount}% OFF</p>
              </div>

              <div className="flex flex-row justify-between">
                <img src={category.express}
                alt={category.name} className="h-10" />
                <div className="flex flex-row space-x-3 justify-center">
                    <div className="bg-green-900 px-5 rounded-xl">
                <h1 className="text-white text-2xl font-bold ">{category.ratings}</h1>
                </div>
                <p className="text-2xl ">({category.reviews})</p>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

