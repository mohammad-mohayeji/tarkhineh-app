import React, { useContext, useEffect } from "react";

// import icons
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";

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
            <h3 className="text-xl font-semibold text-center mb-4">
              {item.title}
            </h3>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-x-2 mb-2">
                <button>
                  <HeartIcon className="w-5 h-5 text-gray-400" />
                </button>
                <span className="text-xs text-gray-400">
                  افزودن به علاقمندی ها
                </span>
              </div>
              <div className="flex items-center gap-x-2 text-sm">
                <span>
                  <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </span>
                <span className="font-semibold">۴</span>
                <span className="text-gray-400">(۵۰ امتیاز)</span>
              </div>
            </div>
            <div>
              <p className="font-semibold text-lg text-gray-00">
                {numberWithCommas(item.price)} تومان
              </p>
            </div>
          </div>
          <div>
            <button onClick={(e)=> increaseQuantityHandler(item)} className="bg-primary text-white font-medium text-center w-full rounded-md py-3">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
