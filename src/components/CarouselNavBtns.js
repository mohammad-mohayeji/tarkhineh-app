import { useSwiper } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function CarouselNavBtns() {
  const swiper = useSwiper();

  return (
    <div className="flex justify-center items-center gap-x-4 mt-6">
      <button
        onClick={(e) => swiper.slidePrev()}
        className="bg-white p-1.5 border border-gray-300 rounded-full"
      >
        <ChevronRightIcon className="w-6 h-6 text-gray-600" />
      </button>
      <button
        onClick={(e) => swiper.slideNext()}
        className="bg-white p-1.5 border border-gray-300 rounded-full"
      >
        <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
}
