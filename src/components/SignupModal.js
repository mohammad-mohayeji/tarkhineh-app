import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalContext } from "../GlobalContextProvider";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

// import logo
import logo from "../assets/images/logo.svg";

// import icons
import { TickCircle, CloseCircle } from "iconsax-react";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function SignupModal() {
  const { users } = useContext(GlobalContext);

  const userRef = useRef();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const navigate = useNavigate();
  const submitHandler = () => {
    const existingUser = users.find((user)=> user.username === username)
    if(existingUser) {
      toast("این نام کاربری از قبل رزرو شده است!", {
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
    } else {
      const token = uuidv4();
      console.log(token);
      axios.post("https://tarkhineh-restful-api.vercel.app/users/", {
        username,
        password: pwd,
        token
      }).then(()=> {
        toast("ثبت نام با موفقیت انجام شد.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: "success",
        });
        document.cookie=`userToken=${token}`
        navigate("/profile");
      }).catch(()=> {
        toast("ثبت نام با شکست همراه بود!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: "error",
        });
      })
      setUsername("");
      setPwd("");
      setMatchPwd("");
    }
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(username);
    console.log(result);
    console.log(username);
    setValidUsername(result);
  }, [username]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);
  
  return (
    <div className="px-5 py-10 flex flex-col items-center">
      <div className="w-full mb-6 relative">
        <img src={logo} alt="" className="max-w-[120px] mx-auto" />
      </div>
      <div className="w-full">
        <form>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center">
                <label htmlFor="username">نام کاربری: </label>
                {validUsername && (
                  <TickCircle className="w-5 h-5 mr-1 text-primary" />
                )}
                {!validUsername && !username == "" && (
                  <CloseCircle className="w-5 h-5 mr-1 text-red-500" />
                )}
              </div>
              <input id="username" ref={userRef} onChange={(e) => setUsername(e.target.value)} value={username} type="text" autoComplete="off" className="w-full border border-gray-300 rounded-md p-2 text-sm placeholder:text-sm focus:outline-none" placeholder="نام کاربری"/>
              <p className={`${ validUsername || username === "" ? "hidden" : "" } mr-1 text-[11px] text-red-500`}>
                نام کاربری باید بین ۴ الی ۲۳ کاراکتر باشد.
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center">
                <label htmlFor="password">رمز عبور:</label>
                {validPwd && (
                  <TickCircle className="w-5 h-5 mr-1 text-primary" />
                )}
                {!validPwd && !pwd == "" && (
                  <CloseCircle className="w-5 h-5 mr-1 text-red-500" />
                )}
              </div>
              <input id="password" onChange={(e) => setPwd(e.target.value)} value={pwd} type="password" className="w-full border border-gray-300 rounded-md p-2 text-sm placeholder:text-sm focus:outline-none" placeholder="رمز عبور"/>
              <p className={`${ validPwd || pwd === "" ? "hidden" : "" } mr-1 text-[11px] text-red-500`}>
                رمز عبور باید بین ۸ الی ۲۴ کاراکتر باشد و باید شامل حداقل یک حرف
                بزرگ، یک حرف کوچک، یک عدد و یک کاراکتر خاص مانند !@#$% باشد.
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center">
                <label htmlFor="matchPassword">تکرار رمز عبور:</label>
                {validMatch && pwd !== "" && (
                  <TickCircle className="w-5 h-5 mr-1 text-primary" />
                )}
                {!validMatch && matchPwd !== "" && (
                  <CloseCircle className="w-5 h-5 mr-1 text-red-500" />
                )}
              </div>
              <input id="matchPassword" onChange={(e) => setMatchPwd(e.target.value)} value={matchPwd} type="password" className="w-full border border-gray-300 rounded-md p-2 text-sm placeholder:text-sm focus:outline-none" placeholder="تکرار رمز عبور"/>
              <p className={`${ validMatch || matchPwd === "" ? "hidden" : "" } mr-1 text-[11px] text-red-500`}>
                تکرار رمز عبور اشتباه است.
              </p>
            </div>
              <button disabled={!validUsername || !validPwd || !validMatch} onClick={submitHandler} className="w-full bg-primary text-white font-medium rounded-md p-2 disabled:bg-opacity-50" type="button">
                ثبت نام
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
