import { NavLink } from "react-router-dom";
import user from "../assets/images/user.png";

import {
    UserIcon,
    BanknotesIcon,
    HeartIcon,
    MapPinIcon,
    ArrowLeftOnRectangleIcon,
  } from "@heroicons/react/24/outline";

export default function ProfileSidebar({ showProfileSidebar, setShowProfileSidebar, logoutHandler }) {
  return (
    <aside className="sidebar">
      <div onClick={(e)=> setShowProfileSidebar(false)} className={`${ !showProfileSidebar ? "hidden" : ""} absolute inset-0 z-[1100] w-full min-h-screen backdrop-blur`}></div>
      <div className={`${ showProfileSidebar ? "right-0 opacity-100 visible" : "-right-[100%] opacity-0 invisible"} fixed top-0 w-[250px] h-screen bg-white z-[1200] transition-all duration-500 shadow-2xl`}>
        <div>
          <div className="flex items-center gap-x-5 py-2 px-4">
            <div className="border border-gray-400 rounded-full">
              <img src={user} alt="" className="max-w-[70px]"/>
            </div>
            <div>
              <p className="mt-3 mb-1 font-medium">کاربر ترخینه</p>
              <span className="text-sm text-gray-400">۰۹۱۳۱۲۳۴۵۶۷</span>
            </div>
          </div>
          <hr />
        </div>
        <ul className="text-sm p-3">
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
    </aside>
  );
}
