import React from "react";
import { Link } from "react-router-dom";

import defaultIMG from "../assets/images/defaultBranchIMG.png"

// import icons
import { ArrowLeft2 } from "iconsax-react";

export default function RestaurantCard({branchName, branchNameEN, branchIMG = defaultIMG, address = "به زودی ..."}) {
  return (
    <div className="group overflow-hidden">
      <div className="border border-gray-400 flex flex-row md:flex-col rounded-lg  md:h-[450px] lg:h-[390px] relative overflow-hidden">
        <div className="w-[35%] md:w-full">
          <img src={branchIMG} className="h-full md:h-[280px] lg:h-[220px] w-full object-cover" alt="" />
        </div>
        <div className="w-[65%] md:w-full p-4 flex flex-col justify-center">
          <h3 className="text-[15px] font-medium sm:text-xl sm:font-semibold text-center text-gray-800 mb-3 md:mt-6 md:group-hover:mt-0 transition-all duration-300">
            {typeof(branchName) !== "undefined" ? (<>شعبه {branchName}</>):(<>به زودی ...</>)}
          </h3>
          <p className="text-center text-[12px] sm:text-[15px] sm:font-medium text-gray-500 mb-4">
            {address}
          </p>
          <Link to={typeof(branchNameEN) !== "undefined" ? `branches/${branchNameEN}` : ""} className="md:opacity-0 md:invisible md:absolute md:-bottom-[100%] md:left-1/2 md:-translate-x-1/2 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:bottom-0 flex justify-between items-center border border-shade-200 rounded-md py-1 md:py-2 px-4 max-w-[130px] mx-auto transition-all duration-300 md:mb-4 text-shade-200 hover:border-primary hover:bg-primary hover:text-white">
            <span className="text-xs sm:text-sm">صفحه شعبه</span>
            <span>
              <ArrowLeft2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}