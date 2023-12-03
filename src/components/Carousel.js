// Import Swiper React components
import { Swiper } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import CarouselNavBtns from "./CarouselNavBtns";


export default function Carousel({ children, responsive }) {
  return (
    <Swiper
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Autoplay]}
      spaceBetween={20}
      breakpoints={{
        ...responsive,
      }}
      className="mySwiper"
    >
      {children}
      <CarouselNavBtns />
    </Swiper>
  );
}
