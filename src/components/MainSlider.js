import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

import slider1 from "../assets/images/slider.png";
import slider2 from "../assets/images/slider2.png";
import slider3 from "../assets/images/slider3.png";
import testSlider from "../assets/images/testSlider.png"

// import custom navigation buttons
import SliderNavBtns from "./SliderNavBtns";

const divStyle = {
  height: "380px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "no-repeat center center fixed",
  backgroundSize: "cover",
  WebkitBackgroundSize: "cover",
  MozBackgroundSize: "cover",
  OBackgroundSize: "cover",
};

const slideImages = [
  { url: slider1, caption: "تجربه غذای سالم و گیاهی به سبک ترخینه" },
  { url: slider2, caption: "طعم بی نظیر طبیعت" },
  { url: testSlider, caption: "لذت غذای سالم و گیاهی را با ترخینه تجربه کنید‌" },
];

export default function MainSlider() {
  return (
    <Swiper autoplay={{ delay: 3000, disableOnInteraction: false }} modules={[Autoplay]} className="mySwiper relative">
      {slideImages.map((slideImage, index) => (
          <SwiperSlide key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
              <span className="text-white text-sm sm:text-xl lg:text-3xl font-medium sm:font-bold">
                {slideImage.caption}
              </span>
            </div>
          </SwiperSlide>
      ))}
      <SliderNavBtns />
    </Swiper>
  );
}
