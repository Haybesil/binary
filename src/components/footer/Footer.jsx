import React from "react";
import Logo from "../../assets/logo10.png";
import bestchance from "../../assets/bestchange.png";

const Footer = () => {
  return (
    <footer className="app px-8 lg:px-32 border-t border-[#353945] h-fit py-14 text-white">
      <div className="   md:px-12">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Company Name */}
          <div className="flex gap-3">
            <img src={Logo} alt="Wezudex Logo" className="h-8" />
            <span className="text-lg font-bold">Binary-Investment</span>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 text-center md:text-left">
            <div>
              <h4 className="text-gray-400 font-semibold mb-5">COMPANY</h4>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    About us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-400 font-semibold mb-5">LEGAL</h4>
              <ul className=" flex flex-col gap-5">
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Risk Warning
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-400 font-semibold mb-5">SERVICE</h4>
              <ul className=" flex flex-col gap-5">
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Fees
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Referrals
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-400 font-semibold mb-5">HELP</h4>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img src={bestchance} alt="" />
          </div>
        </div>

        {/* Copyright and Additional Info */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center md:text-center">
          <p className="text-gray-500">
            Copyright © 2024 Wezudex. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
