import { useContext, useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.svg";
import { GlobalContext } from "../GlobalContextProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function LoginModal() {
  const userRef = useRef();
  const { users } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    const existingUser = users.find((user) => user.username === username && user.password === password);
    if (existingUser) {
      toast("ورود موفقیت آمیز بود!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "success",
      });
      document.cookie=`userToken=${existingUser.token}`;
      navigate('/profile');
    } else {
      toast("نام کاربری یا رمز عبور اشتباه است!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "error",
      });
    }
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);
  return (
    <div className="px-5 py-10 flex flex-col items-center">
      <div className="w-full mb-6 relative">
        <img src={logo} alt="" className="max-w-[120px] mx-auto" />
      </div>
      <div className="w-full">
        <form>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="username">نام کاربری: </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                ref={userRef}
                type="text"
                autoComplete="off"
                className="w-full border border-gray-300 rounded-md p-2 text-sm placeholder:text-sm focus:outline-none"
                placeholder="نام کاربری"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="password">رمز عبور:</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                className="w-full border border-gray-300 rounded-md p-2 text-sm placeholder:text-sm focus:outline-none"
                placeholder="رمز عبور"
              />
            </div>
            <button disabled={!username || !password} onClick={submitHandler} className="w-full bg-primary text-white font-medium rounded-md p-2 disabled:bg-opacity-50" type="button">
              ورود
            </button>
          </div>
        </form>
      </div>
      <span className="text-xs text-center mt-4">
        ورود و عضویت در ترخینه به منزله قبول{" "}
        <b className="text-primary">قوانین و مقررات</b> است.
      </span>
    </div>
  );
}
