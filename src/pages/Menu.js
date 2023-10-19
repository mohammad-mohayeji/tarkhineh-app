import React, { useContext, useEffect } from "react";
import MenuBar from "../components/MenuBar";
import SortBar from "../components/SortBar";

import notFound from "../assets/images/notFound.png";

// import icons
import MenuProductCard from "../components/MenuProductCard";
import axios from "axios";
import { GlobalContext } from "../GlobalContextProvider";
import FoodList from "../components/FoodList";
import { useParams } from "react-router-dom";

export default function Menu() {
  const foodCategory = useParams().foodCategory;
  const { sortType, products, setProducts } = useContext(GlobalContext);

  useEffect(() => {
    if (sortType === "mostPopular") getData("popularity", "desc");
    else if (sortType === "bestSeller") getData("sold", "desc");
    else if (sortType === "mostExpensive") getData("price", "desc");
    else if (sortType === "cheapest") getData("price", "asc");
  }, [foodCategory, sortType]);

  const getData = (sort, order) => {
    axios
      .get(
        `http://localhost:5000/${foodCategory}?_sort=${sort}&_order=${order}`
      )
      .then((res) => {
        setProducts(res.data);
      });
  };

  const searchBoxHandler = (e) => {
    axios
      .get(`http://localhost:5000/${foodCategory}?q=${e.target.value}`)
      .then((res) => {
        setProducts(res.data);
      });
  };

  let title =
    foodCategory === "foods"
      ? "غذای اصلی"
      : foodCategory === "appetizers"
      ? "پیش غذا"
      : foodCategory === "desserts"
      ? "دسر"
      : "نوشیدنی";

  return (
    <section>
      <MenuBar />
      <SortBar searchBoxHandler={searchBoxHandler} />
      <FoodList title={title}>
        {products.map((item) => (
          <MenuProductCard item={item} />
        ))}
      </FoodList>
      {!products.length && (
        <div className="flex flex-col justify-center items-center pt-4 pb-10">
          <p className="text-xl mb-6">موردی با این مشخصات پیدا نکردیم !</p>
          <img src={notFound} alt=""/>
        </div>
      )}
    </section>
  );
}
