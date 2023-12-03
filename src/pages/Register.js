import { useState } from "react";

import SignupModal from "../components/SignupModal";
import LoginModal from "../components/LoginModal";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Register() {
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <div className="flex justify-center items-center px-6 py-10">
      <div className="bg-white rounded-md shadow-lg border border-gray-200 w-full max-w-[560px] relative">
        <div className="w-48 border border-gray-200 rounded-md absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 overflow-hidden">
          <button onClick={(e)=> {
            setShowLoginModal(true);
            setShowSignUpModal(false);
          }} className={`${showLoginModal ? "bg-primary text-white" : "bg-white text-primary"} w-1/2 p-2 transition-colors duration-200`}>ورود</button>
          <button onClick={(e)=> {
            setShowSignUpModal(true);
            setShowLoginModal(false);
          }} className={`${showSignUpModal ? "bg-primary text-white" : "bg-white text-primary"} w-1/2 p-2 transition-colors duration-200`}>ثبت نام</button>
        </div>
        {showSignUpModal && <SignupModal />}
        {showLoginModal && <LoginModal />}
      </div>
    </div>
  );
}
