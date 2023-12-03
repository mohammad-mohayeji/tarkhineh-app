import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import slider1 from "../assets/images/slider.png";
import slider2 from "../assets/images/slider2.png";
import slider3 from "../assets/images/slider3.png";

// import icons
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

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
  { url: slider3, caption: "لذت غذای سالم و گیاهی را با ترخینه تجربه کنید‌" },
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

export default function MainSlider() {
  return (
    <div className="slide-container">
      <Slide {...properties} duration={3000}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
              <span className="text-white text-sm sm:text-xl lg:text-3xl font-medium sm:font-bold">
                {slideImage.caption}
              </span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
