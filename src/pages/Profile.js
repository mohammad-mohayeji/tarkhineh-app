import React, { useState } from "react";

import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { isLoggedin } from "../utils";

import user from "../assets/images/user.png";
import {
  UserIcon,
  BanknotesIcon,
  HeartIcon,
  MapPinIcon,
  ArrowLeftOnRectangleIcon,
  PencilIcon,
  EllipsisHorizontalIcon
} from "@heroicons/react/24/outline";
import ProfileSidebar from "../components/ProfileSidebar";

export default function Profile() {
  const [showProfileSidebar, setShowProfileSidebar] = useState(false)
  const navigate = useNavigate();

  const logoutHandler = () => {
    document.cookie = "username=; expires=Thu, 18 Dec 2013 12:00:00 UTC";
    navigate("/");
  };

  return (
    <div>
      {isLoggedin() ? (
        <section className="container">
          <div className="flex py-10 gap-x-5">
            <div className="hidden md:block md:w-[35%] lg:w-[30%] xl:w-[25%]">
              <div className="border border-gray-300 rounded-lg p-4">
                <div className="flex items-center gap-x-5 mb-3">
                  <div className="border border-gray-400 rounded-full">
                    <img src={user} alt="" />
                  </div>
                  <div>
                    <p className="mt-3 mb-1 font-medium">کاربر ترخینه</p>
                    <span className="text-sm text-gray-400">۰۹۱۳۱۲۳۴۵۶۷</span>
                  </div>
                </div>
                <hr />
                <div className="py-4">
                  <ul className="flex flex-col">
                    <li className="text-primary ">
                      <NavLink className="flex items-center py-2 px-1 hover:bg-tint-100 rounded">
                        <span>
                          <UserIcon className="w-5 h-5 ml-1" />
                        </span>
                        <span>پروفایل</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="flex items-center py-2 px-1 hover:bg-tint-100 rounded">
                        <span>
                          <BanknotesIcon className="w-5 h-5 ml-1" />
                        </span>
                        <span>پیگیری سفارشات</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="flex items-center py-2 px-1 hover:bg-tint-100 rounded">
                        <span>
                          <HeartIcon className="w-5 h-5 ml-1" />
                        </span>
                        <span>علاقمندی ها</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="flex items-center py-2 px-1 hover:bg-tint-100 rounded">
                        <span>
                          <MapPinIcon className="w-5 h-5 ml-1" />
                        </span>
                        <span>آدرس های من</span>
                      </NavLink>
                    </li>
                    <li className="text-red-600">
                      <button
                        onClick={logoutHandler}
                        className="w-full flex items-center py-2 px-1 hover:bg-tint-100 rounded"
                      >
                        <span>
                          <ArrowLeftOnRectangleIcon className="w-5 h-5 ml-1" />
                        </span>
                        <span>خروج</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[65%] lg:w-[70%] xl:w-[75%]">
              <div className="border border-gray-300 rounded-lg p-4 min-h-[480px]">
                <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                  <h2 className="text-xl font-semibold text-gray-700">
                    پروفایل من
                  </h2>
                  <button onClick={(e)=> setShowProfileSidebar(!showProfileSidebar)} className="md:hidden">
                    <EllipsisHorizontalIcon className="w-6 h-6 text-primary"/>
                  </button>
                </div>
                <div className="p-8">
                  <form className="flex items-center flex-wrap gap-6 mb-10">
                    <input type="text" placeholder="نام" className="w-[100%] sm:w-[45%] p-2 border border-gray-200 rounded focus:outline-none placeholder:text-sm text-sm md:text-base md:placeholder:text-base" />
                    <input type="text" placeholder="نام خانوادگی" className="w-[100%] sm:w-[45%] p-2 border border-gray-200 rounded focus:outline-none placeholder:text-sm text-sm md:text-base md:placeholder:text-base" />
                    <input type="text" placeholder="آدرس ایمیل" className="w-[100%] sm:w-[45%] p-2 border border-gray-200 rounded focus:outline-none placeholder:text-sm text-sm md:text-base md:placeholder:text-base" />
                    <input type="text" placeholder="شماره تلفن" className="w-[100%] sm:w-[45%] p-2 border border-gray-200 rounded focus:outline-none placeholder:text-sm text-sm md:text-base md:placeholder:text-base" />
                    <input type="text" placeholder="تاریخ تولد" className="w-[100%] sm:w-[45%] p-2 border border-gray-200 rounded focus:outline-none placeholder:text-sm text-sm md:text-base md:placeholder:text-base" />
                    <input type="text" placeholder="نام کاربری" className="w-[100%] sm:w-[45%] p-2 border border-gray-200 rounded focus:outline-none placeholder:text-sm text-sm md:text-base md:placeholder:text-base" />
                  </form>
                    <button className="flex items-center justify-center text-xs md:text-base text-primary p-2 w-[75%] sm:w-full max-w-[280px] border border-primary rounded mx-auto">
                      <PencilIcon className="w-4 h-4 md:w-5 md:h-5 ml-2"/>
                      ویرایش اطلاعات شخصی
                    </button>
                </div>
              </div>
            </div>
          </div>
          <ProfileSidebar showProfileSidebar={showProfileSidebar} setShowProfileSidebar={setShowProfileSidebar} logoutHandler={logoutHandler}/>
        </section>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}
