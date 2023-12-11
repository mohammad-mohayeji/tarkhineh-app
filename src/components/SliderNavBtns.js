import { useSwiper } from "swiper/react";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

export default function SliderNavBtns() {
  const swiper = useSwiper();

  return (
    <div className="w-full flex justify-between items-center gap-x-4 absolute top-1/2 -translate-y-1/2 z-20">
      <button onClick={(e) => swiper.slidePrev()}>
        <ArrowRight2 className="w-6 h-6 md:w-8 md:h-8 text-white mr-4" />
      </button>
      <button onClick={(e) => swiper.slideNext()}>
        <ArrowLeft2 className="w-6 h-6 md:w-8 md:h-8 text-white ml-4" />
      </button>
    </div>
  );
}
