import React, { useEffect, useState } from "react";
import MainSlider from "../components/MainSlider";
import { Link } from "react-router-dom";

// import icons
import { Profile2User, MenuBoard, HomeWifi, TrendUp, ArrowLeft2 } from "iconsax-react";

// import images
import mainCourse from "../assets/images/mainCourse.png"
import appetizer from "../assets/images/appetizer_.png"
import dessert from "../assets/images/dessert_.png"
import beverage from "../assets/images/beverage_.png"

import RestaurantCard from "../components/RestaurantCard";
import axios from "axios";
import MenuCard from "../components/MenuCard";

export default function Home() {
  const[info, setInfo] = useState([])
  useEffect(()=> {
    axios.get('http://localhost:5000/info').then((res)=> {
      setInfo(res.data)
    })
  }, [])

  return (
    <section className="">
      <MainSlider />
      <div className="py-7">
        <div className="container">
          <h2 className="text-lg md:text-2xl font-bold text-center mb-16">
            منوی رستوران
          </h2>
          <div className="grid items-center grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-[120px] pt-10">
            <MenuCard title="غذای اصلی" img={mainCourse}/>
            <MenuCard title="پیش غذا" img={appetizer}/>
            <MenuCard title="دسر" img={dessert}/>
            <MenuCard title="نوشیدنی" img={beverage}/>
          </div>
        </div>
      </div>
      <div className="my-8" style={{ backgroundImage: "url(https://s6.uupload.ir/files/about_yjy8.png)", backgroundSize: "cover",}}>
        <div className="container">
          <div className="text-white flex flex-col gap-y-10 lg:flex-row gap-x-[150px] py-8">
            <div className="lg:w-[50%] flex flex-col">
              <h4 className="md:text-2xl font-medium md:font-bold mb-5">
                رستوران های زنجیره ای ترخینه
              </h4>
              <p className="text-justify text-sm md:text-lg leading-8 mb-4">
                مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
                ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
                رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل
                بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و
                درخور شان شما عزیزان ارائه دهیم.
              </p>
              <Link className="flex items-center justify-between text-sm md:text-base border border-white rounded-md py-2 px-4 w-[185px] self-end hover:border-primary hover:bg-primary transition duration-200">
                <span>اطلاعات بیشتر</span>
                <span>
                  <ArrowLeft2 className="w-5 h-5" />
                </span>
              </Link>
            </div>
            <div className="lg:w-[50%] flex justify-center items-center flex-wrap gap-y-6">
              <div className="w-[50%] flex flex-col justify-center items-center">
                <span className="mb-2">
                  <Profile2User className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </span>
                <p className="text-sm md:text-base">پرسنلی مجرب و حرفه ای</p>
              </div>
              <div className="w-[50%] flex flex-col justify-center items-center">
                <span className="mb-2">
                  <TrendUp className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </span>
                <p className="text-sm md:text-base">کیفیت بالای غذا ها</p>
              </div>
              <div className="w-[50%] flex flex-col justify-center items-center">
                <span className="mb-2">
                  <HomeWifi className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </span>
                <p className="text-sm md:text-base">محیطی دلنشین و آرام</p>
              </div>
              <div className="w-[50%] flex flex-col justify-center items-center">
                <span className="mb-2">
                  <MenuBoard className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </span>
                <p className="text-sm md:text-base">منوی متنوع</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="container">
          <h2 className="text-center text-lg md:text-2xl font-bold mb-6">
            ترخینه گردی
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              <RestaurantCard {...info}/>
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
          </div>
        </div>
      </div>
    </section>
  );
}
