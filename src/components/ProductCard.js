import React, { useContext, useEffect } from "react";

// import icons
import { Heart, Star1 } from "iconsax-react";

import { numberWithCommas } from "../numberWithCommas";
import { GlobalContext } from "../GlobalContextProvider";

export default function ProductCard({ item }) {
  const {increaseQuantityHandler} = useContext(GlobalContext);

  return (
    <div className="card">
      <div className="rounded-lg border overflow-hidden border-gray-300 bg-white">
        <div className="w-full h-[255px]">
          <img
            src={item.imgURL}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="p-4">
          <div>
            <h3 className="text-sm md:text-xl font-semibold text-center mb-4">
              {item.title}
            </h3>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-x-2 mb-2">
                <button>
                  <Heart className="w-5 h-5 text-gray-400" />
                </button>
                <span className="text-[10px] md:text-xs text-gray-400">
                  افزودن به علاقمندی ها
                </span>
              </div>
              <div className="flex items-center gap-x-2 text-xs md:text-sm">
                <span>
                  <Star1 className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </span>
                <span className="font-semibold">۴</span>
                <span className="text-gray-400">(۵۰ امتیاز)</span>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[13px] md:text-lg text-gray-00">
                {numberWithCommas(item.price)} تومان
              </p>
            </div>
          </div>
          <div>
            <button onClick={(e)=> increaseQuantityHandler(item)} className="bg-primary text-white text-sm md:text-base font-medium text-center w-full rounded-md py-3">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
