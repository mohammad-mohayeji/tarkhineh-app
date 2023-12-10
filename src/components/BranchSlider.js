import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

// import custom navigation buttons
import SliderNavBtns from "./SliderNavBtns";

// import icons
import { Location, Call, Clock } from "iconsax-react";

import branchslider1 from "../assets/images/branch_picture.png";
import branchslider2 from "../assets/images/branch_picture2.png";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundRepeat: "no-repeat",
  backgroundPostion: "center center",
  backgroundSize: "cover",
  height: "350px",
};

const slideImages = [{ url: branchslider1 }, { url: branchslider2 }];

export default function BranchSlider({ info }) {
  return (
   <div className="relative">
    <Swiper autoplay={{ delay: 3000, disableOnInteraction: false }} modules={[Autoplay]} className="mySwiper">
      {slideImages.map((slideImage, index) => (
        <SwiperSlide key={index} >
          <div className="relative">
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        </SwiperSlide>
      ))}
      <SliderNavBtns />
    </Swiper>
    <div className="bg-white p-5 rounded-md w-full max-w-[320px] sm:max-w-[500px] md:max-w-[620px] lg:max-w-[800px] border-2 border-primary absolute left-1/2 top-[100%] -translate-x-1/2 -translate-y-1/2 z-[100]">
        <div className="flex flex-row flex-wrap lg:flex-nowrap gap-y-4 lg:gap-10 text-gray-700">
          <div className="w-full lg:w-[33.3%] flex flex-row lg:flex-col items-center gap-y-2 gap-x-2">
            <span>
              <Location className="w-5 h-5 sm:w-7 sm:h-7" />
            </span>
            <p className="text-[10px] sm:text-sm md:text-base font-semibold sm:font-bold text-center">
              {info.address}
            </p>
          </div>
          <div className="w-[44%] lg:w-[33.3%] flex flex-row lg:flex-col items-center gap-x-2 flex-auto">
            <span className="mb-2">
              <Call className="w-5 h-5 sm:w-7 sm:h-7 " />
            </span>
            <p className="text-sm sm:text-base md:text-lg font-semibold sm:font-bold">
              {info.tel}
            </p>
          </div>
          <div className="w-[52%] lg:w-[33.3%] flex flex-row lg:flex-col items-center gap-y-2 gap-x-2">
            <span>
              <Clock className="w-5 h-5 sm:w-7 sm:h-7" />
            </span>
            <p className="text-[10px] sm:text-sm md:text-base font-semibold sm:font-bold text-center">
              همه‌روزه از ساعت ۱۲ الی ۲۳
            </p>
          </div>
        </div>
    </div>
   </div> 
  );
}
