import logo from "../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContextProvider";
import axios from "axios";

// import icons
import { ShoppingCart, User, ArrowDown2 } from "iconsax-react";

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
          <button onClick={(e) => setShowSidebar(true)} className="flex flex-col gap-y-1 lg:hidden">
            <span className="w-5 h-[2px] sm:w-7 sm:h-[3px] rounded-xl bg-shade-200"></span>
            <span className="w-5 h-[2px] sm:w-7 sm:h-[3px] rounded-xl bg-shade-200"></span>
            <span className="w-5 h-[2px] sm:w-7 sm:h-[3px] rounded-xl bg-shade-200"></span>
          </button>
          <Link to="/">
            <img src={logo} className="max-w-[100px] md:max-w-[155px]" alt="" />
          </Link>
          <ul className="hidden lg:flex items-center gap-x-5">
            <li>
              <NavLink to="/" className="text-gray-500 hover:text-shade-200 hover:font-bold transition-all duration-100">
                صفحه اصلی
              </NavLink>
            </li>
            <li>
              <div className="relative group cursor-pointer">
                <div className="flex items-center">
                  <span className="text-gray-500 hover:text-shade-200 hover:font-bold transition-all duration-100">
                    شعبه
                  </span>
                  <span>
                    <ArrowDown2 className="w-3 h-3 mr-1" />
                  </span>
                </div>
                <div className="absolute top-[200%] left-0 z-40 invisible opacity-0 group-hover:top-[120%] group-hover:visible group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white shadow-md border border-gray-300 rounded-md w-36 text-gray-600 overflow-hidden">
                    <ul>
                      <li>
                        <Link to={`branches/${info.branchNameEN}`} className="block p-2 border-b border-gray-200 hover:bg-tint-100 transition duration-300">
                          {info.branchName}
                        </Link>
                      </li>
                      <li>
                        <Link className="block p-2 border-b border-gray-200 hover:bg-tint-100 transition duration-300">
                          به زودی ...
                        </Link>
                      </li>
                      <li> 
                        <Link className="block p-2 border-b border-gray-200 hover:bg-tint-100 transition duration-300">
                          به زودی ...
                        </Link>
                      </li>
                      <li>
                        <Link className="block p-2 hover:bg-tint-100 transition duration-300">
                          به زودی ...
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center relative group cursor-pointer">
                <div className="flex items-center">
                  <span className="text-gray-500 hover:text-shade-200 hover:font-bold transition-all duration-100">
                    منو
                  </span>
                  <ArrowDown2 className="w-3 h-3 mr-1" />
                </div>
                <div className="absolute top-[200%] right-0 z-40 invisible opacity-0 group-hover:top-[120%] group-hover:visible group-hover:opacity-100 transition-all duration-300">
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
              <NavLink className="text-gray-500 hover:text-shade-200 hover:font-bold transition-all duration-100">
                اعطای نمایندگی
              </NavLink>
            </li>
            <li>
              <NavLink className="text-gray-500 hover:text-shade-200 hover:font-bold transition-all duration-100">
                درباره ما
              </NavLink>
            </li>
            <li>
              <NavLink className="text-gray-500 hover:text-shade-200 hover:font-bold transition-all duration-100">
                تماس با ما
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-x-1.5">
            <NavLink to="cart" className="cart-link bg-tint-100 rounded p-1 relative">
              <ShoppingCart className="cart-icon w-[18px] h-[18px] md:w-[28px] md:h-[28px] text-primary" />
              {cartItems.length > 0 && (
                <div className="w-3 h-3 md:w-4 md:h-4 bg-tint-600 text-[10px] md:text-xs text-white rounded-full absolute -top-1.5 -right-1.5 flex justify-center items-center">
                  {cartItems.length}
                </div>
              )}
            </NavLink>
            <NavLink to="profile" className="cart-link bg-tint-100 rounded p-1">
              <User className="cart-icon w-[18px] h-[18px] md:w-[28px] md:h-[28px] text-primary" />
            </NavLink>
          </div>
        </div>
      </div>
      <Sidebar info={info} showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    </nav>
  );
}
