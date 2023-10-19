import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// import icons
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";

import convertNumberToPersian from "../convertNumberToPersian";
import { GlobalContext } from "../GlobalContextProvider";
import ProductCard from "../components/ProductCard";
import MainSlider from "../components/MainSlider";
import BranchSlider from "../components/BranchSlider";
import CommentCard from "../components/CommentCard";
import Carousel from "../components/Carousel";

import { SwiperSlide } from "swiper/react";

export default function BranchPage() {
  const branchID = useParams().branchID;
  const {
    info,
    comments,
    persianFoods,
    desserts,
    foreignFoods,
    setInfo,
    setComments,
    setPersianFoods,
    setDesserts,
    setForeignFoods,
  } = useContext(GlobalContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/info`)
      .then((res) => {
        setInfo(res.data);
        return axios.get(`http://localhost:5000/comments`);
      })
      .then((res) => {
        setComments(res.data);
        return axios.get(`http://localhost:5000/foods?_page=1&limit=6`);
      })
      .then((res) => {
        setPersianFoods(res.data);
        return axios.get(`http://localhost:5000/desserts?_page=1&limit=6`);
      })
      .then((res) => {
        setDesserts(res.data);
        return axios.get(`http://localhost:5000/foods?_page=3&limit=6`);
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
          <h4 className="text-2xl font-bold mb-6">غذا های ایرانی</h4>
          <div className="">
            <Carousel
              responsive={{
                1280: { slidesPerView: 4 },
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
            >
              {persianFoods.map((item) => (
                <SwiperSlide key={item.id} >
                  <ProductCard item={item} />
                </SwiperSlide>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="bg-primary py-8 mb-10">
        <div className="container 2xl:max-w-screen-2xl">
          <h4 className="text-white text-2xl font-bold mb-6">دسر ها</h4>
          <div>
            <Carousel
              responsive={{
                1280: { slidesPerView: 4 },
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
            >
              {desserts.map((item) => (
                <SwiperSlide key={item.id} >
                  <ProductCard item={item} />
                </SwiperSlide>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div className="container 2xl:max-w-screen-2xl mt-9">
          <h4 className="text-2xl font-bold mb-6">غذا های غیر ایرانی</h4>
          <div className="mb-7">
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
              <ClipboardDocumentListIcon className="w-6 h-6" />
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
        <h2 className="font-bold text-2xl text-center text-gray-700 mb-4">
          نظرات کاربران
        </h2>
        <div className="container">
          <Carousel responsive={{ 1024: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }}>
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
