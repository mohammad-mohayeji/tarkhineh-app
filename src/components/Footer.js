import React, { useEffect, useState } from "react";

import footer from "../assets/images/footer.png";
import { Link } from "react-router-dom";
import axios from "axios";

import { LiaTelegram } from "react-icons/lia";
import { SlSocialInstagram } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";

export default function Footer() {
  const [info, setInfo] = useState({});
  useEffect(() => {
    axios.get("http://localhost:5000/info").then((res) => {
      setInfo(res.data);
    });
  }, []);

  return (
    <footer
      style={{ background: `url(${footer})`, backgroundSize: "cover" }}
      className="py-6"
    >
      <div className="container">
        <div className="flex flex-wrap gap-y-10 text-white">
          <div className="w-[50%] lg:w-[25%]">
            <h4 className="text-base font-medium sm:text-xl sm:font-bold mb-4">
              دسترسی آسان
            </h4>
            <ul className="flex flex-col gap-y-4 text-sm sm:text-base">
              <li>
                <Link className="hover:text-primary transition duration-200">پرسش های متداول</Link>
              </li>
              <li>
                <Link className="hover:text-primary transition duration-200">قوانین ترخینه</Link>
              </li>
              <li>
                <Link className="hover:text-primary transition duration-200">حریم خصوصی</Link>
              </li>
              <li className="flex items-center gap-x-4 text-xl sm:text-3xl">
                <Link className="hover:text-primary transition duration-200">
                  <TfiTwitter />
                </Link>
                <Link className="hover:text-primary transition duration-200">
                  <SlSocialInstagram />
                </Link>
                <Link className="hover:text-primary transition duration-200">
                  <LiaTelegram />
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[50%] lg:w-[25%]">
            <h4 className="text-base font-medium sm:text-xl sm:font-bold mb-4">
              شعبه های ترخینه
            </h4>
            <ul className="flex flex-col gap-y-4 text-sm sm:text-base">
                <li>
                  <Link to={`branches/${info.branchNameEN}`} className="hover:text-primary transition duration-200">
                    شعبه {info.branchName}
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition duration-200">
                    به زودی ...
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition duration-200">
                    به زودی ...
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition duration-200">
                    به زودی ...
                  </Link>
                </li>
            </ul>
          </div>
          <div className="hidden md:block md:w-full lg:w-[50%]">
            <h4 className="text-xl font-bold mb-4">پیام به ترخینه</h4>
            <form className="flex flex-col gap-y-6">
              <div className="flex gap-x-4">
                <div className="w-[50%] h-[150px] flex flex-col justify-between">
                  <input type="text" placeholder="نام و نام خانوادگی" className="w-full outline-none bg-transparent p-2 placeholder:text-white border border-gray-500 rounded-md"/>
                  <input type="text" placeholder="شماره تماس" className="w-full outline-none bg-transparent p-2 placeholder:text-white border border-gray-500 rounded-md"/>
                  <input type="text" placeholder="آدرس ایمیل" className="w-full outline-none bg-transparent p-2 placeholder:text-white border border-gray-500 rounded-md"/>
                </div>
                <div className="w-[50%] h-[150px]">
                  <textarea name="message" id="" placeholder="پیام شما" className="resize-none w-full h-full outline-none bg-transparent p-3 placeholder:text-white border border-gray-500 rounded-md"></textarea>
                </div>
              </div>
              <button type="button" className="w-[180px] border border-gray-500 rounded-md py-2 self-end hover:border-primary hover:bg-primary transition duration-200">
                ارسال پیام
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
