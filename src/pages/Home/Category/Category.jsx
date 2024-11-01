// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Category.css";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <figure>
              <img className="category-img" src={slider1} alt="" />
            </figure>
            <p className=" md:text-3xl text-xl   -mt-11 md:-mt-20 uppercase text-white text-center category-p">
              salad
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure>
              <img className="category-img" src={slider2} alt="" />
            </figure>
            <p className=" md:text-3xl text-xl   -mt-11 md:-mt-20 uppercase text-white text-center category-p">
              soups
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure>
              <img className="category-img" src={slider3} alt="" />
            </figure>
            <p className=" md:text-3xl text-xl   -mt-11 md:-mt-20 uppercase text-white text-center category-p">
              Pizzas
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure>
              <img className="category-img" src={slider4} alt="" />
            </figure>
            <p className=" md:text-3xl text-xl   -mt-11 md:-mt-20 uppercase text-white text-center category-p">
              desserts
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure>
              <img className="category-img" src={slider5} alt="" />
            </figure>
            <p className=" md:text-3xl text-xl   -mt-11 md:-mt-20 uppercase text-white text-center category-p">
              salad
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
