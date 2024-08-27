import React from "react";
import i2img from "../../assets/i2.png";
const CryptoSection = () => {
  return (
    <div className="app flex flex-col lg:flex-row items-center justify-between text-white py-20 px-10 lg:px-40">
      <div>
        <img src={i2img} alt="" />
      </div>

      {/* Right Content Section */}
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-center">
        <h2 className="text-4xl font-bold mb-6">
          Buy crypto in a way convenient for you
        </h2>
        <p className="text-gray-400 text-xl mb-6">
          The best way to receive, send and trade cryptocurrency. We support any
          payment types.
        </p>
        <button className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300 mx-auto">
          Get started now
        </button>
      </div>
    </div>
  );
};

export default CryptoSection;
