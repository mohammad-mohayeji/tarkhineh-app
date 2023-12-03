import React, { useContext, useEffect } from "react";
import MenuBar from "../components/MenuBar";
import SortBar from "../components/SortBar";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../GlobalContextProvider";
import FoodList from "../components/FoodList";
import axios from "axios";

import notFound from "../assets/images/notFound.png";

// import icons
import MenuProductCard from "../components/MenuProductCard";
import { ImSpinner2 } from "react-icons/im";

export default function Menu() {
  const foodCategory = useParams().foodCategory;
  const { sortType, products, setProducts, loading, setLoading } =
    useContext(GlobalContext);

  useEffect(() => {
    if (sortType === "mostPopular") getData("popularity", "desc");
    else if (sortType === "bestSeller") getData("sold", "desc");
    else if (sortType === "mostExpensive") getData("price", "desc");
    else if (sortType === "cheapest") getData("price", "asc");
  }, [foodCategory, sortType]);

  const getData = (sort, order) => {
    setLoading(true);
    axios.get(`http://localhost:5000/${foodCategory}?_sort=${sort}&_order=${order}`).then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
  };

  const searchBoxHandler = (e) => {
    setLoading(true)
    axios.get(`http://localhost:5000/${foodCategory}?q=${e.target.value}`).then((res) => {
        setProducts(res.data);
        setLoading(false)
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
      {loading && (
        <div>
          <ImSpinner2
            size={40}
            className="text-primary animate-spin mx-auto my-52"
          />
        </div>
      )}
      {!loading && (
        <FoodList title={title}>
          {products.map((item) => (
            <MenuProductCard item={item} />
          ))}
        </FoodList>
      )}
      {!products.length && (
        <div className="flex flex-col justify-center items-center pt-4 pb-10">
          <p className="text-xl mb-6">موردی با این مشخصات پیدا نکردیم !</p>
          <img src={notFound} alt="notFound" />
        </div>
      )}
    </section>
  );
}
