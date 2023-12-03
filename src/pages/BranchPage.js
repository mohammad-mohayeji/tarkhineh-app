import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import icons
import { Note } from "iconsax-react";

import convertNumberToPersian from "../convertNumberToPersian";
import ProductCard from "../components/ProductCard";
import MainSlider from "../components/MainSlider";
import BranchSlider from "../components/BranchSlider";
import CommentCard from "../components/CommentCard";
import Carousel from "../components/Carousel";

import { SwiperSlide } from "swiper/react";

export default function BranchPage() {
  const [comments, setComments] = useState([]);
  const [info, setInfo] = useState({});
  const [persianFoods, setPersianFoods] = useState([]);
  const [foreignFoods, setForeignFoods] = useState([]);
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/info`)
      .then((res) => {
        setInfo(res.data);
        return axios.get(`http://localhost:5000/comments`);
      })
      .then((res) => {
        setComments(res.data);
        return axios.get(`http://localhost:5000/foods?_page=1&_limit=6`);
      })
      .then((res) => {
        setPersianFoods(res.data);
        return axios.get(`http://localhost:5000/desserts?_page=1&_limit=6`);
      })
      .then((res) => {
        setDesserts(res.data);
        return axios.get(`http://localhost:5000/foods?_page=3&_limit=6`);
      })
      .then((res) => {
        setForeignFoods(res.data);
      });
  }, []);

  useEffect(() => {
    convertNumberToPersian();
  });

  return (
    <div>
      <MainSlider />
      <div className="mb-10">
        <div className="container 2xl:max-w-screen-2xl mt-9">
          <h4 className="md:text-2xl font-bold mb-6">غذا های ایرانی</h4>
          <div className="px-6 md:px-0">
            <Carousel
              responsive={{
                1280: { slidesPerView: 4 },
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
            >
              {persianFoods.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard item={item} />
                </SwiperSlide>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="bg-primary py-8 mb-10">
        <div className="container 2xl:max-w-screen-2xl">
          <h4 className="text-white md:text-2xl font-bold mb-6">دسر ها</h4>
          <div className="px-6 md:px-0">
            <Carousel
              responsive={{
                1280: { slidesPerView: 4 },
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
            >
              {desserts.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard item={item} />
                </SwiperSlide>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div className="container 2xl:max-w-screen-2xl mt-9">
          <h4 className="md:text-2xl font-bold mb-6">غذا های غیر ایرانی</h4>
          <div className="mb-7 px-6 md:px-0">
            <Carousel
              responsive={{
                1280: { slidesPerView: 4 },
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
            >
              {foreignFoods.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard item={item} />
                </SwiperSlide>
              ))}
            </Carousel>
          </div>
          <Link
            to={`/branches/${info.branchNameEN}/menu/foods`}
            className="mx-auto flex items-center justify-between text-primary border border-primary rounded-md p-3 max-w-[190px]"
          >
            <span>
              <Note className="w-6 h-6" />
            </span>
            <span className="font-medium">مشاهده منوی کامل</span>
          </Link>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
          شعبه {info.branchName}
        </h2>
        <BranchSlider info={info} />
      </div>

      <div className="py-5">
        <h2 className="font-bold md:text-2xl text-center text-gray-700 mb-4">
          نظرات کاربران
        </h2>
        <div className="container">
          <Carousel
            responsive={{ 1024: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }}
          >
            {comments.map((item) => (
              <SwiperSlide key={item.id}>
                <CommentCard item={item} />
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
