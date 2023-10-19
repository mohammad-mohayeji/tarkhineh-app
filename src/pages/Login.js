import logo from "../assets/images/logo.svg";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submitHandler = () => {
    if (username === "admin" && password === "12345") {
      document.cookie = "username=admin";
      navigate("/profile");
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
    <div className="flex justify-center items-center px-6 py-10">
      <div className="bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden w-full max-w-[560px]">
        <div className="px-5 py-10 flex flex-col items-center">
          <div className="w-full mb-6 relative">
            <img src={logo} alt="" className="max-w-[120px] mx-auto" />
            {/* <p className="text-gray-700 text-lg font-semibold text-center mb-3">ورود به پروفایل</p> */}
          </div>
          <div className="w-full">
            <form>
              <div className="flex flex-col gap-y-4">
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
            ورود و عضویت در ترخینه به منزله قبول <b className="text-primary">قوانین و مقررات</b> است.
          </span>
        </div>
      </div>
    </div>
  );
}
