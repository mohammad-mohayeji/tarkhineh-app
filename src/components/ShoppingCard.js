import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../GlobalContextProvider";
import { numberWithCommas } from "../numberWithCommas";
import convertNumberToPersian from "../convertNumberToPersian";

// import icons
import { Trash, Add, Minus } from "iconsax-react";

export default function ShoppingCard({item}) {
  const {increaseQuantityHandler, decreaseQuantityHandler, removeFromCartHandler} = useContext(GlobalContext)
  useEffect(()=> {
    convertNumberToPersian()
  })

  return (
    <div className="bg-gray-100 sm:bg-white border border-gray-300 rounded-md flex items-center overflow-hidden">
      <div className="hidden sm:block w-full max-w-[170px]">
        <img src={item.imgURL} className="w-full object-cover" alt=""/>
      </div>
      <div className="w-full p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="md:text-xl font-semibold text-gray-800">{item.title}</h2>
          <button onClick={(e)=> removeFromCartHandler(item)}>
            <Trash className="w-5 h-5 md:w-6 md:h-6 hover:text-primary transition duration-200" />
          </button>
        </div>
        <div className="hidden sm:block min-h-[46px]">
          <p className="text-sm text-gray-400">
            {item.ingredient}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="bg-tint-100 text-primary flex items-center gap-1.5 rounded p-1">
              <button onClick={(e)=> increaseQuantityHandler(item)}>
                <Add className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <span className="text-sm md:text-base w-4 text-center">{item.quantity}</span>
              <button onClick={(e)=> decreaseQuantityHandler(item)}>
                {item.quantity > 1 && (<Minus className="w-4 h-4 md:w-5 md:h-5" />)}
                {item.quantity === 1 && (<Trash className="w-4 h-4 md:w-5 md:h-5" />)}
              </button>
            </div>
          </div>
          <div>
            <span className="md:text-xl text-gray-800">{numberWithCommas(item.price)} تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}
