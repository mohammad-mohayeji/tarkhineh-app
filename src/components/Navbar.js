import logo from "../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContextProvider";
import axios from "axios";

// import icons
import {
  ShoppingCartIcon,
  UserIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [info, setInfo] = useState({});
  const { cartItems } = useContext(GlobalContext);

  useEffect(() => {
    axios.get("http://localhost:5000/info").then((res) => {
      setInfo(res.data);
    });
  }, []);

  return (
    <nav className="navbar bg-white shadow sticky top-0 z-[1000]">
      <div className="container 2xl:max-w-screen-2xl">
        <div className="py-4 flex items-center justify-between">
          <button
            onClick={(e) => setShowSidebar(true)}
            className="flex flex-col gap-y-1 lg:hidden"
          >
            <span className="w-5 h-[2px] sm:w-7 sm:h-[3px] rounded-xl bg-shade-200"></span>
            <span className="w-5 h-[2px] sm:w-7 sm:h-[3px] rounded-xl bg-shade-200"></span>
            <span className="w-5 h-[2px] sm:w-7 sm:h-[3px] rounded-xl bg-shade-200"></span>
          </button>
          <Link to="/">
            <img src={logo} className="max-w-[100px] md:max-w-[155px]" alt="" />
          </Link>
          <ul className="hidden lg:flex items-center gap-x-5">
            <li>
              <NavLink
                to="/"
                className="text-gray-500 hover:text-shade-200 hover:font-bold transition-all duration-200"
              >
                صفحه اصلی
              </NavLink>
            </li>
            <li>
              <div className="relative group">
                <div className="flex items-center">
                  <span className="text-gray-500 hover:text-shade-200 hover:font-bold transition-all duration-200">
                    شعبه
                  </span>
                  <span>
                    <ChevronDownIcon className="w-3 h-3 mr-1" />
                  </span>
                </div>
                <div className="absolute top-[120%] left-0 z-40 hidden group-hover:block">
                  <div className="bg-white shadow-md border border-gray-300 rounded-md w-36 text-gray-600 overflow-hidden">
                    <ul>
                      <li>
                        <Link
                          to={`branches/${info.branchNameEN}`}
                          className="block p-2 border-b border-gray-200 hover:bg-tint-100 transition duration-300"
                        >
                          {info.branchName}
                        </Link>
                        <Link className="block p-2 border-b border-gray-200 hover:bg-tint-100 transition duration-300">
                          به زودی ...
                        </Link>
                        <Link className="block p-2 border-b border-gray-200 hover:bg-tint-100 transition duration-300">
                          به زودی ...
                        </Link>
                        <Link className="block p-2 border-b border-gray-200 hover:bg-tint-100 transition duration-300">
                          به زودی ...
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center relative group">
                <div className="flex items-center">
                  <span className="text-gray-500 hover:text-shade-200 hover:font-bold transition-all duration-200">
                    منو
                  </span>
                  <ChevronDownIcon className="w-3 h-3 mr-1" />
                </div>
                <div className="absolute top-[120%] right-0 z-40 hidden group-hover:block">
                  <div className="bg-white shadow-md border border-gray-300 rounded-md w-36 text-gray-600">
                    <ul>
                      <li>
                        <Link
                          to={`branches/${info.branchNameEN}/menu/foods`}
                          className="block p-2 border-b border-gray-200 hover:bg-tint-100 transition duration-300"
                        >
                          غذای اصلی
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`branches/${info.branchNameEN}/menu/appetizers`}
                          className="block p-2 border-b border-gray-200 hover:bg-tint-100 transition duration-300"
                        >
                          پیش غذا
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`branches/${info.branchNameEN}/menu/desserts`}
                          className="block p-2 border-b border-gray-200 hover:bg-tint-100 transition duration-300"
                        >
                          دسر
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`branches/${info.branchNameEN}/menu/drinks`}
                          className="block p-2 hover:bg-tint-100 transition duration-300"
                        >
                          نوشیدنی
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <NavLink className="text-gray-500 hover:text-shade-200 hover:font-bold transition-all duration-200">
                اعطای نمایندگی
              </NavLink>
            </li>
            <li>
              <NavLink className="text-gray-500 hover:text-shade-200 hover:font-bold transition-all duration-200">
                درباره ما
              </NavLink>
            </li>
            <li>
              <NavLink className="text-gray-500 hover:text-shade-200 hover:font-bold transition-all duration-200">
                تماس با ما
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-x-1.5">
            <NavLink
              to="cart"
              className="cart-link bg-tint-100 rounded p-1 relative"
            >
              <ShoppingCartIcon className="cart-icon w-[18px] h-[18px] md:w-[30px] md:h-[30px] text-primary" />
              {cartItems.length > 0 && (
                <div className="w-3 h-3 md:w-4 md:h-4 bg-tint-600 text-[10px] md:text-xs text-white rounded-full absolute -top-1.5 -right-1.5 flex justify-center items-center">
                  {cartItems.length}
                </div>
              )}
            </NavLink>
            <NavLink to="profile" className="cart-link bg-tint-100 rounded p-1">
              <UserIcon className="cart-icon w-[18px] h-[18px] md:w-[30px] md:h-[30px] text-primary" />
            </NavLink>
          </div>
        </div>
      </div>
      <Sidebar
        info={info}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      {/* <div className={`${!showModal ? 'hidden': ''} w-full h-[100vh] absolute backdrop-blur`}></div> */}
      {/* <LoginModal showModal={showModal} setShowModal={setShowModal}/> */}
    </nav>
  );
}
