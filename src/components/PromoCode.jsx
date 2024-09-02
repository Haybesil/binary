import React, { useState } from 'react';
import { LuUser2 } from 'react-icons/lu';
import { TbKeyboard } from 'react-icons/tb';
import { Si2Fas } from 'react-icons/si';
import { MdOutlineComputer, MdDone } from 'react-icons/md';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setPromoValue } from './redux/Action';

const PromoCode = () => {
  const [promoInput, setPromoInput] = useState('');
  const dispatch = useDispatch();

  const code = 'AQUAZ';
  const value = 0.36595957; 

  const handleApplyPromoCode = () => {
    if (promoInput === code) {
      dispatch(setPromoValue(value));
      toast.success(`Promo code actvated successfully!`);
    } else {
      toast.error('Invalid promo code');
    }
  };

  return (
    <>
      <Navbar />
      <div className="app">
        <div className=" flex px-5 pt-20 lg:pt-0 lg lg:my-20 lg:px-28 h-40 justify-between items-center border-b border-[#9fa8bf6c]">
          <div className=" text-3xl lg:text-5xl text-white font-medium">
            Promo code
          </div>
          <div className=" text-[#9FA8BF] text-sm hover:cursor-pointer font-medium">
            Home
          </div>
        </div>

        <div className=" px-5 gap-10 pt-10 lg:px-28 flex flex-col lg:flex-row lg:justify-between pb-40">
          <div className="leftbar grid gap-3 grid-cols-2 lg:flex lg:flex-col lg:gap-7 lg:w-[25%] text-[#9fa8bf6c]">
            <div className=" flex gap-4">
              <LuUser2 size="25" />
              <p className=" ">Profile</p>
            </div>

            <div className=" flex gap-4 text-white">
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
          <div className="rightbar px-6 lg:px-12 py-8 bg-[#18191D] lg:h-[70vh] lg:w-[60%] rounded-2xl shadow-md">
            <div className=" flex flex-col gap-6">
              <h2 className="text-yellow-500 text-4xl font-bold mb-2">PROMO CODE</h2>
              <p className="text-gray-400 mb-6">
                You'll increase your deposit and incomes.
              </p>
              <div className="bg-[#23262F] p-6 flex flex-col gap-8 rounded-2xl">
                <label
                  className="text-white text-xl lg:text-3xl font-semibold mb-2 block whitespace-nowrap"
                  htmlFor="promo"
                >
                  Type promo code below
                </label>
                <p className="text-white text-sm font-semibold mb-3">
                  YOUR PROMO CODE
                </p>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter a promo code..."
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-md border-none outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <button
                className="mt-6 border border-[#787E91] w-fit py-3 px-8 text-white font-light rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                onClick={handleApplyPromoCode}
              >
                ACTIVATE A PROMO CODE
              </button>
              
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PromoCode;
