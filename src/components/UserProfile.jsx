import React from "react";
import { LuUser2 } from "react-icons/lu";
import { TbKeyboard } from "react-icons/tb";
import { Si2Fas } from "react-icons/si";
import { MdOutlineComputer } from "react-icons/md";
import { MdDone } from "react-icons/md";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { useAuth } from "./contexts/authContext";


const UserProfile = () => {
  const UserProfileMain = () => {

    const {currentUser} = useAuth();
    return (
      <div className="">
        <div className=" rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">{currentUser.email}</h2>
            <p className="text-gray-400">{currentUser.email}</p>
            <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold text-red-600 bg-red-200 rounded-full">
              Not verified
            </span>
          </div>

          <div className="mb-6">
            <h3 className="text-white text-lg font-semibold mb-4">
              Change name
            </h3>
            <input
              type="text"
              className="-2xlw-full p-3 rounded-2xl bg-[#18191D] border border-[#353945] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={currentUser.email}
            />
            <button className="mt-4 w-full bg-[#1FAEEE] hover:bg-blue-600 text-white font-semibold py-3 rounded-2xl transition duration-200">
              Save name
            </button>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Change password
            </h3>
            <input
              type="password"
              className="w-full p-3 mb-4 rounded-2xl bg-[#18191D] border border-[#353945] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Current password"
            />
            <input
              type="password"
              className="w-full p-3 mb-4 rounded-2xl bg-[#18191D] border border-[#353945] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="New password"
            />
            <input
              type="password"
              className="w-full p-3 mb-4 rounded-2xl bg-[#18191D] border border-[#353945] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm password"
            />
            <button className="w-full bg-[#1FAEEE] hover:bg-blue-600 text-white font-semibold py-3 rounded-2xl transition duration-200">
              Save password
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
    <Navbar/>
      <div className="app">
        <div className=" flex px-5 pt-20 lg:pt-0 lg:my-20 lg:px-28 h-40 justify-between items-center border-b border-[#9fa8bf6c]">
          <div className=" text-3xl lg:text-5xl text-white font-medium">
            Promo code
          </div>
          <div className=" text-[#9FA8BF] text-sm hover:cursor-pointer font-medium">
            Home
          </div>
        </div>

        <div className=" px-5 gap-10 pt-10 lg:px-28 flex flex-col lg:flex-row lg:justify-between pb-40">
          <div className="leftbar grid gap-3 grid-cols-2 lg:flex lg:flex-col lg:gap-7 lg:w-[25%] text-[#9fa8bf6c]">
            <div className=" flex gap-4 text-white">
              <LuUser2 size="25" />
              <p className=" ">Profile</p>
            </div>

            <div className=" flex gap-4">
              <TbKeyboard size="25" />
              <p className=" ">Promo Code</p>
            </div>

            <div className=" flex gap-4">
              <Si2Fas size="25" />
              <p className=" ">2FA</p>
            </div>

            <div className=" flex gap-4">
              <MdDone size="25" />
              <p className=" ">KYC</p>
            </div>

            <div className=" hidden lg:block border-b border-[#9fa8bf6c]"></div>

            <div className=" flex gap-4">
              <MdOutlineComputer size="25" />
              <p className=" ">Session</p>
            </div>

            <div className=" border-b border-[#9fa8bf6c]"></div>
          </div>
          <div className="rightbar px-6 lg:px-12 py-8 bg-[#18191D] lg:h-fit lg:w-[60%] rounded-2xl shadow-md">
            <UserProfileMain />
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default UserProfile;