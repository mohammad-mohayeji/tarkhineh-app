import React, { useContext } from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { GlobalContext } from "../GlobalContextProvider";

export default function SortBar({searchBoxHandler}) {
  const {sortType, setSortType} = useContext(GlobalContext);
  let active = "bg-primary text-white"

  return (
    <div className="mb-4">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-y-4">
          <div className="w-full xl:max-w-[600px]">
            <ul className="flex items-center justify-center lg:justify-start gap-x-4 w-full">
              <li>
                <button onClick={(e)=> setSortType(e.target.id)} id="mostPopular" className={`${sortType === "mostPopular" ? `${active}` : ''} flex items-center justify-between text-[10px] sm:text-sm lg:text-[15px] xl:text-base bg-gray-200 rounded-full px-2 py-[2px] w-full max-w-[140px]`}>
                  محبوب ترین
                  <span>
                    <ChevronLeftIcon className="w-2 h-2 sm:w-4 sm:h-4" />
                  </span>
                </button>
              </li>
              <li>
                <button onClick={(e)=> setSortType(e.target.id)} id="bestSeller" className={`${sortType === "bestSeller" ? `${active}` : ''} flex items-center justify-between text-[10px] sm:text-sm lg:text-[15px] xl:text-base bg-gray-200 rounded-full px-2 py-[2px] w-full max-w-[140px]`}>
                  پر فروش ترین
                  <span>
                    <ChevronLeftIcon className="w-2 h-2 sm:w-4 sm:h-4" />
                  </span>
                </button>
              </li>
              <li>
                <button onClick={(e)=> setSortType(e.target.id)} id="mostExpensive" className={`${sortType === "mostExpensive" ? `${active}` : ''} flex items-center justify-between text-[10px] sm:text-sm lg:text-[15px] xl:text-base bg-gray-200 rounded-full px-2 py-[2px] w-full max-w-[140px]`}>
                  گران ترین
                  <span>
                    <ChevronLeftIcon className="w-2 h-2 sm:w-4 sm:h-4" />
                  </span>
                </button>
              </li>
              <li>
                <button onClick={(e)=> setSortType(e.target.id)} id="cheapest" className={`${sortType === "cheapest" ? `${active}` : ''} flex items-center justify-between text-[10px] sm:text-sm lg:text-[15px] xl:text-base bg-gray-200 rounded-full px-2 py-[2px] w-full max-w-[140px]`}>
                  ارزان ترین
                  <span>
                    <ChevronLeftIcon className="w-2 h-2 sm:w-4 sm:h-4" />
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full lg:max-w-[400px] xl:max-w-[600px]">
            <div className="flex items-center bg-white border border-gray-200 p-2 rounded-md">
              <input onChange={searchBoxHandler} type="text" placeholder="جستجو" className="focus:outline-0 w-full"/>
              <span>
                <MagnifyingGlassIcon className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
