import React, { useContext } from "react";
import { numberWithCommas } from "../numberWithCommas";
import { GlobalContext } from "../GlobalContextProvider";

// import icons
import { Star1 } from "iconsax-react";

export default function MenuProductCard({ item }) {
  const {increaseQuantityHandler} = useContext(GlobalContext);

  return (
    <div>
      <div className="flex border border-gray-200 rounded-lg overflow-hidden relative">
        <div className="w-full max-w-[120px] sm:max-w-[170px]">
          <img src={item.imgURL} className="object-cover" alt="" />
        </div>
        <div className="px-3 py-3 w-full">
          <div className="flex flex-col gap-x-4 mb-3">
            <div>
              <h4 className="text-sm sm:text-lg lg:text-base xl:text-lg font-semibold text-gray-800 mb-3">
                {item.title}
              </h4>
            </div>
            <div className="flex items-center justify-between min-h-[40px]">
              <p className="w-[65%] xl:w-[70%] text-[10px] sm:text-sm lg:text-[13px] xl:text-sm text-gray-700">
                {item.ingredient}
              </p>
              <p className="w-[35%] xl:w-[30%] text-[11px] sm:text-lg lg:text-[15px] xl:text-lg text-left">
                {numberWithCommas(item.price)} تومان
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-x-1">
            <div className="flex items-center">
              <Star1 className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
              <Star1 className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
              <Star1 className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
              <Star1 className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
              <Star1 className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
            </div>
            <button onClick={(e)=> increaseQuantityHandler(item)} className="w-full text-[8px] sm:text-sm xl:text-base max-w-[200px] sm:max-w-[245px] lg:max-w-[130px] xl:max-w-[245px] bg-primary text-white p-2 rounded-md">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
