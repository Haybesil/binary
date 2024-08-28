import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo10.png";

const Navbar = () => {
  return (
    <div>
      <div className="app fixed z-50 top-0 w-full flex lg:px-44 h-20 items-center border-b gap-16 text-[#9FA8BF]">
        <div className="logo pr-5 border-r border-r-[#9FA8BF]">
          <img src={Logo} alt="" />
        </div>
        <div className="navs flex items-center gap-12">
          <ul className=" flex items-center gap-12 font-semibold">
            <li className=" hover:cursor-pointer">Trade</li>
            <Link to="/buycrypto" className=" hover:cursor-pointer">
              Buy Crypto
            </Link>
            <li className=" hover:cursor-pointer">Terms of Use</li>
            <li className=" hover:cursor-pointer">Privacy Policy</li>
            <li className=" hover:cursor-pointer">Markets</li>
          </ul>

          <div className="flex items-center gap-2">
            <span className="hover:cursor-pointer font-semibold">NFT</span>
            <button className=" border-none bg-[#8071FE] py-[1.5px] text-center text-white px-3 rounded-md">
              soon
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 font-semibold">
          <Link
            to="/signup"
            className="hover:cursor-pointer bg-[#1FAEEE] rounded-2xl text-white hover:bg-blue-800 px-5 py-2 hover:border-2 hover:border-[#41444bbb] whitespace-nowrap"
          >
            Sign up
          </Link>
          <Link
            to="/signin"
            className="hover:cursor-pointer border-2 border-[#787E90] rounded-2xl text-white hover:bg-white hover:text-black hover:border-none px-5 py-2"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
