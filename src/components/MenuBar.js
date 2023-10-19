import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuBar() {
  return (
    <nav className="bg-gray-200 py-4 mb-4">
      <div className="container">
        <ul className="flex items-center gap-x-6 text-gray-500 text-sm sm:text-base md:text-lg">
          <li>
            <NavLink to="/branches/Ekbatan/menu/foods" className="nav-link">غذای اصلی</NavLink>
          </li>
          <li>
            <NavLink to="/branches/Ekbatan/menu/appetizers" className="nav-link">پیش غذا</NavLink>
          </li>
          <li>
            <NavLink to="/branches/Ekbatan/menu/desserts" className="nav-link">دسر</NavLink>
          </li>
          <li>
            <NavLink to="/branches/Ekbatan/menu/drinks" className="nav-link">نوشیدنی</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
