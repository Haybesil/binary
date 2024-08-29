import React from "react";
import moonpay from "../../assets/moonpay.png";
import transak from "../../assets/transak.png";
import phemex from "../../assets/phemex.png";
import ramp from "../../assets/ramp.png";
import bitpay from "../../assets/bitpay.png";
import changely from "../../assets/changely.png";
import simplex from "../../assets/simplex.png";
import banx from "../../assets/banx.png";
import mecury from "../../assets/mecury.png";
import coingate from "../../assets/coingate.png";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const BuyCrypto = () => {
  const CryptoBuy = (props) => {
    return (
      <>
        <div className="flex flex-col sm:flex-row items-center justify-between py-8 px-6 sm:px-10 rounded-[36px] bg-[#1F2026]">
          <div className="mb-4 sm:mb-0">
            <img src={props.img} alt="" />
          </div>
          <div className="text-base sm:text-xl text-[#9FA8BF] sm:w-[60%] text-center sm:text-left">
            {props.text}
          </div>
          <button className="mt-4 sm:mt-0 text-white border-2 py-3 px-6 sm:px-8 rounded-[30px] border-[#787E90] text-sm sm:text-lg font-medium hover:bg-white hover:text-black hover:border-none">
            See more
          </button>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="app h-fit py-36 lg:py-60 px-4 sm:px-10 lg:px-36">
        <div className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white pb-6 sm:pb-10">
          Buy crypto
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10">
          <CryptoBuy
            img={moonpay}
            text="MoonPay offers a fast and simple way to buy and sell cryptocurrencies. Buy crypto with credit card, bank transfers or Apple Pay today."
          />
          <CryptoBuy
            img={transak}
            text="MoonPay offers a fast and simple way to buy and sell cryptocurrencies. Buy crypto with credit card, bank transfers or Apple Pay today."
          />
          <CryptoBuy
            img={simplex}
            text="MoonPay offers a fast and simple way to buy and sell cryptocurrencies. Buy crypto with credit card, bank transfers or Apple Pay today."
          />
          <CryptoBuy
            img={mecury}
            text="MoonPay offers a fast and simple way to buy and sell cryptocurrencies. Buy crypto with credit card, bank transfers or Apple Pay today."
          />
          <CryptoBuy
            img={coingate}
            text="MoonPay offers a fast and simple way to buy and sell cryptocurrencies. Buy crypto with credit card, bank transfers or Apple Pay today."
          />
          <CryptoBuy
            img={banx}
            text="MoonPay offers a fast and simple way to buy and sell cryptocurrencies. Buy crypto with credit card, bank transfers or Apple Pay today."
          />
          <CryptoBuy
            img={bitpay}
            text="MoonPay offers a fast and simple way to buy and sell cryptocurrencies. Buy crypto with credit card, bank transfers or Apple Pay today."
          />
          <CryptoBuy
            img={changely}
            text="MoonPay offers a fast and simple way to buy and sell cryptocurrencies. Buy crypto with credit card, bank transfers or Apple Pay today."
          />
          <CryptoBuy
            img={phemex}
            text="MoonPay offers a fast and simple way to buy and sell cryptocurrencies. Buy crypto with credit card, bank transfers or Apple Pay today."
          />
          <CryptoBuy
            img={ramp}
            text="MoonPay offers a fast and simple way to buy and sell cryptocurrencies. Buy crypto with credit card, bank transfers or Apple Pay today."
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BuyCrypto;
