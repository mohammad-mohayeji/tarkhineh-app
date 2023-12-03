import React from "react";
import { Link } from "react-router-dom";

export default function MenuCard({ title, img }) {
  let foodCategory =
    title === "غذای اصلی"
      ? "foods"
      : title === "پیش غذا"
      ? "appetizers"
      : title === "دسر"
      ? "desserts"
      : "drinks";
  return (
    <div className="relative h-[90px] sm:h-[120px] bg-primary rounded-lg">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2">
        <img src={img} className="" alt="" />
      </div>
      <Link to={`/branches/Ekbatan/menu/${foodCategory}`}
        className="w-[120px] md:w-[155px] bg-gray-100 py-1.5 rounded-md text-center text-sm md:text-base absolute left-1/2 -translate-x-1/2 top-[100%] -translate-y-1/2 hover:text-primary"
      >
        {title}
      </Link>
    </div>
  );
}
