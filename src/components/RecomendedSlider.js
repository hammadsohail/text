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
          1120: {
            slidesPerView: 4,
          },
          2000: {
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
            <div className="bg-white  mt-5 p-5 flex-col flex space-y-7 ">
            <div className="bg-red-500">
  <img
    className="w-full h-full align-start object-contain rounded-lg"
    src={category.image}
    alt={category.name}
  />
</div>
              <p className="text-xl mt-4 font-semibold line-clamp-1">
                {category.name}
              </p>
              <h3 className="text-xl mt-4 font-semibold justify-start">
                AED {category.price}.00
              </h3>
              <div className="flex flex-row space-x-3">
              <p className="text-xl text-gray-400 line-through
">{category.original}</p>
              <p  className=" text-green-400 font-extrabold text-2xl ">{category.discount}% OFF</p>
              </div>

              <div className="flex flex-row justify-between">
                <img src={category.express}
                alt={category.name} className="h-6" />
                <div className="flex flex-row space-x-3 justify-center">
                    <div className="bg-green-900 px-5 rounded-xl">
                <h1 className="text-white text-xl font-bold ">{category.ratings}</h1>
                </div>
                <p className="text-xl ">({category.reviews})</p>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

