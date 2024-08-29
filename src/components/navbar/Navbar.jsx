import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo10.png";

const Navbar = () => {
  const location = useLocation(); // Get the current location

  return (
    <div>
      <div className="app fixed z-50 top-0 w-full flex lg:px-28 h-20 items-center border-b border-[#9fa8bf6c] text-[#9FA8BF] justify-between">
        <Link to="/">
          <div className="flex items-center gap-3 border-r pr-5 border-[#b9bfcf78]">
            <img src={Logo} alt="Wezudex Logo" className="h-8" />
            <span className="text-lg text-white font-bold">Binary</span>
          </div>
        </Link>
        <div className="navs flex items-center gap-12">
          <ul className="flex items-center gap-12 font-semibold">
            <li
              className={`hover:cursor-pointer ${
                location.pathname === "/trade" ? "border-b-2 border-[#7669FE]" : ""
              } transition duration-300`}
            >
              <Link to="/trade">Trade</Link>
            </li>
            <li
              className={`hover:cursor-pointer ${
                location.pathname === "/buycrypto"
                  ? "border-b-2 border-[#7669FE]"
                  : ""
              } transition duration-300`}
            >
              <Link to="/buycrypto">Buy Crypto</Link>
            </li>
            <li
              className={`hover:cursor-pointer ${
                location.pathname === "/terms"
                  ? "border-b-2 border-[#7669FE]"
                  : ""
              } transition duration-300`}
            >
              <Link to="/terms">Terms of Use</Link>
            </li>
            <li
              className={`hover:cursor-pointer ${
                location.pathname === "/policy"
                  ? "border-b-2 border-[#7669FE]"
                  : ""
              } transition duration-300`}
            >
              <Link to="/policy">Privacy Policy</Link>
            </li>
            <li
              className={`hover:cursor-pointer ${
                location.pathname === "/markets"
                  ? "border-b-2 border-[#7669FE]"
                  : ""
              } transition duration-300`}
            >
              <Link to="/markets">Markets</Link>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <span className="hover:cursor-pointer font-semibold">NFT</span>
            <button className="border-none bg-[#8071FE] py-[1.5px] text-center text-white px-3 rounded-md">
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
