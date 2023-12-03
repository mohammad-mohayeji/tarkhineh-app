import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import branchslider1 from "../assets/images/branch_picture.png";
import branchslider2 from "../assets/images/branch_picture2.png";

// import icons
import { Location, Call, Clock, ArrowLeft2, ArrowRight2 } from "iconsax-react";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundRepeat: "no-repeat",
  backgroundPostion: "center center",
  backgroundSize: "cover",
  height: "350px",
};

const slideImages = [
  { url: branchslider1},
  { url: branchslider2},
];

const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }} className="ml-4">
      <ArrowLeft2 className="text-white" />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }} className="mr-4">
      <ArrowRight2 className="text-white" />
    </button>
  ),
};

export default function BranchSlider({info}) {
  return (
    <div className="slide-container relative">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="relative">
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))}
      </Slide>
      <div className="bg-white p-5 rounded-md w-full max-w-[320px] sm:max-w-[500px] md:max-w-[620px] lg:max-w-[800px] border-2 border-primary absolute left-1/2 top-[100%] -translate-x-1/2 -translate-y-1/2 z-[100]">
        <div className="flex flex-row flex-wrap lg:flex-nowrap gap-y-4 lg:gap-10 text-gray-700">
            <div className="w-full lg:w-[33.3%] flex flex-row lg:flex-col items-center gap-y-2 gap-x-2">
                <span><Location className="w-5 h-5 sm:w-7 sm:h-7"/></span>
                <p className="text-[10px] sm:text-sm md:text-base font-semibold sm:font-bold text-center">{info.address}</p>
            </div>
            <div className="w-[44%] lg:w-[33.3%] flex flex-row lg:flex-col items-center gap-x-2 flex-auto">
                <span className="mb-2"><Call className="w-5 h-5 sm:w-7 sm:h-7 "/></span>
                <p className="text-sm sm:text-base md:text-lg font-semibold sm:font-bold">{info.tel}</p>
            </div>
            <div className="w-[52%] lg:w-[33.3%] flex flex-row lg:flex-col items-center gap-y-2 gap-x-2">
                <span><Clock className="w-5 h-5 sm:w-7 sm:h-7"/></span>
                <p className="text-[10px] sm:text-sm md:text-base font-semibold sm:font-bold text-center">همه‌روزه از ساعت ۱۲ الی ۲۳</p>
            </div>
        </div>
      </div>
    </div>
  )
}
