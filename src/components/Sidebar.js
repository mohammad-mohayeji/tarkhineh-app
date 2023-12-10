import React, { useState } from "react";

import background from "../assets/images/sbheader.png";
import logo from "../assets/images/logo2.svg";
import { Link } from "react-router-dom";


// import icons
import { Home, HomeHashtag, MenuBoard, Profile2User, CallCalling, ArrowDown2, Add } from "iconsax-react";

export default function Sidebar({ info ,showSidebar, setShowSidebar}) {
  const[showAccordion, setShowAccordion] = useState(false);
  const[showAccordion2, setShowAccordion2] = useState(false);
  

  return (
    <aside className="sidebar">
      <div className={`${showSidebar ? "right-0 opacity-100 visible" : "-right-[100%] opacity-0 invisible"} fixed top-0 w-[250px] h-screen bg-white z-20 transition-all duration-500 shadow-2xl`}>
        <div style={{ background: `url(${background})`, backgroundSize: "cover" }} className="py-6 px-3 flex items-center justify-between">
          <div>
            <img src={logo} alt="" className="w-auto object-cover" />
          </div>
          <button onClick={(e)=> setShowSidebar(false)}>
            <Add className="text-white text-lg rotate-45"/>
          </button>
        </div>
        <ul className="text-sm p-3">
          <li>
            <Link to="/" className="flex items-center gap-x-2 py-2 border-b border-gray-400">
              <span><Home className="w-5 h-5 text-shade-200"/></span>
              <span>صفحه اصلی</span>
            </Link>
          </li>
          <li className={`${!showAccordion ? 'h-[37px]' : 'h-[195px]'} transition-all duration-300`}>
            <button onClick={(e)=> setShowAccordion(!showAccordion)} className="w-full flex items-center justify-between py-2 border-b border-gray-400">
              <div className="flex items-center gap-x-2">
                <span><HomeHashtag className="w-5 h-5 text-shade-200"/></span>
                <span>شعبه</span>
              </div>
              <span><ArrowDown2 className={`${!showAccordion ? '' : 'rotate-180'} w-3 h-3 transition duration-300`}/></span>
            </button>
            <div className={`${!showAccordion ? 'invisible opacity-0 h-0' : 'visible opacity-100 h-[145px]'} transition-all duration-300`}>
              <div className={`${!showAccordion ? 'invisible opacity-0' : 'visible opacity-100 delay-75'} transition-all duration-300  w-full px-2 my-2`}>
                <ul>
                  <li><Link to={`branches/${info.branchNameEN}`} className="block p-2 border-b border-gray-200">اکباتان</Link></li>
                  <li><Link className="block p-2 border-b border-gray-200">به زودی ...</Link></li>
                  <li><Link className="block p-2 border-b border-gray-200">به زودی ...</Link></li>
                  <li><Link className="block p-2">به زودی ...</Link></li>
                </ul>
              </div>
            </div>
          </li>
          <li className={`${!showAccordion2 ? 'h-[37px]' : 'h-[195px]'} transition-all duration-300`}>
            <button onClick={(e)=> setShowAccordion2(!showAccordion2)} className="w-full flex items-center justify-between py-2 border-b border-gray-400">
              <div className="flex items-center gap-x-2">
                <span><MenuBoard className="w-5 h-5 text-shade-200"/></span>
                <span>منو</span>
              </div>
              <span><ArrowDown2 className={`${!showAccordion2 ? '' : 'rotate-180'} w-3 h-3 transition duration-300`}/></span>
            </button>
            <div className={`${!showAccordion2 ? 'invisible opacity-0 h-0' : 'visible opacity-100 h-[145px]'} transition-all duration-300`}>
              <div className={`${!showAccordion2 ? 'invisible opacity-0' : 'visible opacity-100 delay-75'} transition-all duration-300  w-full px-2 my-2`}>
                <ul>
                  <li><Link to={`branches/${info.branchNameEN}/menu/foods`} className="block p-2 border-b border-gray-200">غذای اصلی</Link></li>
                  <li><Link to={`branches/${info.branchNameEN}/menu/appetizers`} className="block p-2 border-b border-gray-200">پیش غذا</Link></li>
                  <li><Link to={`branches/${info.branchNameEN}/menu/desserts`} className="block p-2 border-b border-gray-200">دسر</Link></li>
                  <li><Link to={`branches/${info.branchNameEN}/menu/drinks`} className="block p-2">نوشیدنی</Link></li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <Link className="flex items-center gap-x-2 py-2 border-b border-gray-400">
              <span><Profile2User className="w-5 h-5 text-shade-200"/></span>
              <span>درباره ما</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-x-2 py-2">
              <span><CallCalling className="w-5 h-5 text-shade-200"/></span>
              <span>تماس با ما</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
