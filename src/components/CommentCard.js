import React from "react";

import customer from "../assets/images/customer.png";

export default function CommentCard({ item }) {
  return (
    <div>
      <div className="flex items-center gap-x-2 border border-gray-400 rounded-lg p-4">
        <div className="w-[27%] flex flex-col items-center">
          <img
            src={item.userIMG}
            alt=""
            className="rounded-full w-[60px] h-[60px] lg:w-20 lg:h-20 xl:w-24 xl:h-24 mb-2"
          />
          <span className="text-center text-gray-500 text-xs font-medium lg:text-sm mb-1">
            {item.username}
          </span>
          <p className="text-center text-gray-500 text-xs font-medium lg:text-sm">
            {item.date}
          </p>
        </div>
        <div className="w-[73%]">
          <p className="text-sm font-medium lg:font-semibold text-justify">
            {item.comment}
          </p>
        </div>
      </div>
    </div>
  );
}
