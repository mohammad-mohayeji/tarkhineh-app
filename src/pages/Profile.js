import React, { useEffect, useState } from "react";

import { NavLink, Navigate, json, useNavigate } from "react-router-dom";
import { useGetCookie } from "../hooks/useGetCookie"
import ProfileSidebar from "../components/ProfileSidebar";
import axios from "axios";

// import img
import user from "../assets/images/user.png";

// import icons
import { Edit, User, Wallet2, Heart, Location, LogoutCurve, HambergerMenu } from "iconsax-react";
import { toast } from "react-toastify";
import convertNumberToPersian from "../convertNumberToPersian";

export default function Profile() {
  const [showProfileSidebar, setShowProfileSidebar] = useState(false)
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({});
  const userToken = useGetCookie("userToken");

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      setUsers(res.data);
    })
  }, []);

  useEffect(()=> {
      setFormData(users.find((user)=> user.token === userToken));
  }, [users])

  const logoutHandler = () => {
    document.cookie = "userToken=; expires=Thu, 18 Dec 2013 12:00:00 UTC";
    navigate("/");
  };

  const changeHandler = (e)=> {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const submitHandler = ()=> {
    const userID = formData.id;
    console.log(userID);
    axios.put(`http://localhost:5000/users/${userID}`, {...formData}).then((res)=> {
      if(res.status === 200) {
        toast("اطلاعات با موفقیت ثبت شد.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: "success",
        });
      }
    }).catch((err)=> {
      console.log(err);
      toast("ثبت اطلاعات با شکست مواجه شد!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "error",
      });
    })
  }

  // convert numbers to persian
  convertNumberToPersian();

  return (
    <div>
      {useGetCookie("userToken") ? (
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
                    <span className="text-sm text-gray-400">{formData?.phonenumber}</span>
                  </div>
                </div>
                <hr />
                <div className="py-4">
                  <ul className="flex flex-col">
                    <li className="text-primary ">
                      <NavLink className="flex items-center py-2 px-1 hover:bg-tint-100 rounded">
                        <span>
                          <User className="w-5 h-5 ml-1" />
                        </span>
                        <span>پروفایل</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="flex items-center py-2 px-1 hover:bg-tint-100 rounded">
                        <span>
                          <Wallet2 className="w-5 h-5 ml-1" />
                        </span>
                        <span>پیگیری سفارشات</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="flex items-center py-2 px-1 hover:bg-tint-100 rounded">
                        <span>
                          <Heart className="w-5 h-5 ml-1" />
                        </span>
                        <span>علاقمندی ها</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="flex items-center py-2 px-1 hover:bg-tint-100 rounded">
                        <span>
                          <Location className="w-5 h-5 ml-1" />
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
                          <LogoutCurve className="w-5 h-5 ml-1" />
                        </span>
                        <span>خروج</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[65%] lg:w-[70%] xl:w-[75%]">
              <div className="border border-gray-300 rounded-lg p-4">
                <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                  <h2 className="text-xl font-semibold text-gray-700">
                    پروفایل من
                  </h2>
                  <button onClick={(e)=> setShowProfileSidebar(!showProfileSidebar)} className="md:hidden">
                    <HambergerMenu className="w-6 h-6 text-primary"/>
                  </button>
                </div>
                <div className="p-8">
                  <form className="flex items-center flex-wrap gap-6" autoComplete="false">
                    <div className="flex flex-col gap-y-2 w-[100%] sm:w-[45%]">
                      <label htmlFor="firstName">نام:</label>
                      <input value={formData?.firstname} onChange={changeHandler} id="firstName" name="firstname" type="text" placeholder="نام" className="w-[100%] p-2 border border-gray-200 rounded focus:outline-none placeholder:text-sm text-sm md:text-base md:placeholder:text-base" />
                    </div>
                    <div className="flex flex-col gap-y-2 w-[100%] sm:w-[45%]">
                      <label htmlFor="lastName">نام خانوادگی:</label>
                      <input value={formData?.lastname} onChange={changeHandler} id="lastName" name="lastname" type="text" placeholder="نام خانوادگی" className="w-[100%] p-2 border border-gray-200 rounded focus:outline-none placeholder:text-sm text-sm md:text-base md:placeholder:text-base" />
                    </div>
                    <div className="flex flex-col gap-y-2 w-[100%] sm:w-[45%]">
                      <label htmlFor="email">آدرس ایمیل:</label>
                      <input value={formData?.email} onChange={changeHandler} id="email" name="email" type="text" placeholder="آدرس ایمیل" className="w-[100%] p-2 border border-gray-200 rounded focus:outline-none placeholder:text-sm text-sm md:text-base md:placeholder:text-base" />
                    </div>
                    <div className="flex flex-col gap-y-2 w-[100%] sm:w-[45%]">
                      <label htmlFor="phoneNumber">شماره تلفن:</label>
                      <input value={formData?.phonenumber} onChange={changeHandler} id="phoneNumber" name="phonenumber" type="text" placeholder="شماره تلفن" className="w-[100%] p-2 border border-gray-200 rounded focus:outline-none placeholder:text-sm text-sm md:text-base md:placeholder:text-base" />
                    </div>
                    <div className="flex flex-col gap-y-2 w-[100%] sm:w-[45%]">
                      <label htmlFor="address">آدرس محل سکونت:</label>
                      <input value={formData?.address} onChange={changeHandler} id="address" type="text" name="address" placeholder="آدرس محل سکونت" className="w-[100%] p-2 border border-gray-200 rounded focus:outline-none placeholder:text-sm text-sm md:text-base md:placeholder:text-base" />
                    </div>
                    <div className="flex flex-col gap-y-2 w-[100%] sm:w-[45%]">
                      <label htmlFor="username">نام کاربری:</label>
                      <input value={formData?.username} onChange={changeHandler} id="username" type="text" name="username" placeholder="نام کاربری" className="w-[100%] p-2 border border-gray-200 rounded focus:outline-none placeholder:text-sm text-sm md:text-base md:placeholder:text-base" />
                    </div>
                    <button type="button" onClick={submitHandler} className="flex items-center justify-center text-xs md:text-base text-primary p-2 w-[75%] sm:w-full max-w-[280px] border border-primary rounded mx-auto mt-4">
                      <Edit className="w-4 h-4 md:w-5 md:h-5 ml-2"/>
                      ویرایش اطلاعات شخصی
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <ProfileSidebar showProfileSidebar={showProfileSidebar} setShowProfileSidebar={setShowProfileSidebar} logoutHandler={logoutHandler}/>
        </section>
      ) : (
        <Navigate to="/register" />
      )}
    </div>
  );
}
