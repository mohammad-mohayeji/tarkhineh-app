import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContextProvider";
import ShoppingCard from "../components/ShoppingCard";

// import icons
import { Trash, Warning2 } from "iconsax-react";

import emptyCartBg from "../assets/images/emptyCartBg.png";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../numberWithCommas";

export default function Cart() {
  const { cartItems, setCartItems } = useContext(GlobalContext);
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.price * item.quantity,
    0
  )

  return (
    <section className="py-6">
      {!cartItems.length && (
        <div className="container">
          <div className="flex justify-center items-center border border-gray-300 rounded-lg h-[400px]">
            <div className="max-w-[370px] h-[300px] flex flex-col gap-y-8 justify-center items-center" style={{ background: `url(${emptyCartBg})`, backgroundRepeat: "no-repeat", backgroundPosition: 'center center'}}>
                <h4 className="text-gray-700 text-sm md:text-xl">شما درحال حاضر هیچ سفارشی ثبت نکرده اید!</h4>
                <Link to='/branches/Ekbatan/menu/foods' className="border border-primary bg-white text-primary text-sm md:text-base font-semibold rounded py-2 px-6">منوی رستوران</Link>
            </div>
          </div>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="container">
          <h1 className="flex items-center text-white gap-x-2 mb-5">
            <span className="font-semibold text-lg bg-primary rounded p-2">
              سبد خرید
            </span>
          </h1>
          <div className="flex justify-between flex-col lg:flex-row gap-y-6">
            <div className="w-full lg:w-[54%]">
              <div className="border border-gray-300 rounded-lg p-5 max-h-[350px] md:max-h-[430px] overflow-y-auto">
                <div className=" flex flex-col gap-y-4">
                  {cartItems.map((item) => (
                    <ShoppingCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[44%]">
              <div className="border border-gray-300 rounded-lg p-5">
                <div className="flex flex-col gap-y-3">
                  <div className="flex items-center justify-between border-b-2 border-gray-300 pb-3">
                    <h4 className="font-semibold text-gray-800">سبد خرید</h4>
                    <button>
                      <Trash onClick={(e)=> setCartItems([])} className="w-5 h-5 md:w-6 md:h-6 hover:text-primary transition duration-200" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between border-b-2 border-gray-300 pb-3">
                    <span className="text-sm font-semibold text-gray-800">تخفیف محصولات:</span>
                    <span className="text-gray-500">۰ تومان</span>
                  </div>
                  <div className="border-b-2 border-gray-300 pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-gray-800">هزینه ارسال:</span>
                      <span className="text-gray-500">۰ تومان</span>
                    </div>
                    <div className="flex gap-x-2  text-yellow-600">
                      <span>
                        <Warning2 className="w-5 h-5" />
                      </span>
                      <span className="text-xs">
                        هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال
                        انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pb-3">
                    <span className="text-sm font-semibold text-gray-800">
                      مبلغ قابل پرداخت:
                    </span>
                    <span className="text-primary md:text-lg font-semibold">{numberWithCommas(totalPrice)} تومان</span>
                  </div>
                  <div>
                    <button className="w-full bg-primary text-white rounded-md py-2">
                      ادامه خرید
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
