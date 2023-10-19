import { useState } from "react";
import logo from "../assets/images/logo.svg";

import { XMarkIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function LoginModal({ showModal, setShowModal }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    if (username === "admin" && password === "12345") {
      document.cookie = "username=admin";
      navigate("/profile");
      setShowModal(false);
      setUsername("");
      setPassword("");
    } else {
      Swal.fire({
        icon: "error",
        text: "نام کاربری یا رمز عبور اشتباه است!",
        confirmButtonText: "بستن",
      });
    }
  };
  return (
    <div
      className={`${
        !showModal ? "hidden" : ""
      } absolute z-50 top-[350%] left-1/2 -translate-x-1/2 -translate-y-1/2`}
    >
      <div className="bg-white rounded-md shadow-lg overflow-hidden w-[390px]">
        <div className="p-5 flex flex-col items-center">
          <div className="w-full mb-4 relative">
            <img src={logo} alt="" className="max-w-[120px] mx-auto" />
            {/* <p className="text-gray-700 text-lg font-semibold text-center mb-3">ورود به پروفایل</p> */}
            <button
              onClick={(e) => setShowModal(false)}
              className="absolute top-0 left-0"
            >
              <XMarkIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <div className="w-full">
            <form>
              <div className="flex flex-col gap-y-2">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm placeholder:text-sm focus:outline-none"
                  placeholder="نام کاربری"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm placeholder:text-sm focus:outline-none"
                  placeholder="رمز عبور"
                />
                <button
                  onClick={submitHandler}
                  className="w-full bg-primary text-white rounded-md p-2"
                  type="button"
                >
                  ورود
                </button>
              </div>
            </form>
          </div>
          <span className="text-xs text-center mt-4">
            ورود و عضویت در ترخینه به منزله قبول قوانین و مقررات است.
          </span>
        </div>
      </div>
    </div>
  );
}
