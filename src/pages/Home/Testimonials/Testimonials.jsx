import SectionTitle from "../../../components/SectionTitle/SectionTitle";

 import React, { useRef, useState } from "react";
 // Import Swiper React components
 import { Swiper, SwiperSlide } from "swiper/react";
 // Import Swiper styles
 import "swiper/css";
 import "swiper/css/navigation";
 // import required modules
 import { Navigation } from "swiper/modules";


const Testimonials = () => {
    return (
      <div>
        <SectionTitle
          heading={"What  Our Client Say"}
          subHeading={"Testimonials"}
        />

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
           
        </Swiper>
      </div>
    );
};

export default Testimonials;