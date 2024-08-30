import React from "react";
import SampleChat from "../sampleChat/SampleChat";

const TrademarketView = () => {
  const data = [
    {
      id: 1,
      name: "Bitcoin BTC",
      price: "$62,964",
      change: "-2.33%",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    },
    {
      id: 2,
      name: "Ethereum ETH",
      price: "$2,686.56",
      change: "-3.02%",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    },
    {
      id: 3,
      name: "Ripple XRP",
      price: "$0.59",
      change: "-2.37%",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
    },
    {
      id: 4,
      name: "Bitcoin Cash BCH",
      price: "$342.6",
      change: "-4.51%",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png",
    },
    {
      id: 5,
      name: "Litecoin LTC",
      price: "$63.52",
      change: "-2.59%",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png",
    },
    {
      id: 5,
      name: "Litecoin LTC",
      price: "$63.52",
      change: "-4.59%",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png",
    },
    {
      id: 5,
      name: "Litecoin LTC",
      price: "$63.52",
      change: "-7.59%",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png",
    },
  ];

  return (
    <div className="text-white p-4 lg:p-6 rounded-lg shadow-md">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-0">Market trend</h2>
        <button className="text-white border-2 border-white px-4 py-2 rounded-2xl hover:bg-gray-700">
          View more
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-gray-400 text-xs lg:text-base">
              <th className="py-2 px-2 lg:py-2 lg:px-4 text-left">#</th>
              <th className="py-2 px-2 lg:py-2 lg:px-4 text-left">Name</th>
              <th className="py-2 px-2 lg:py-2 lg:px-4 text-left">Price</th>
              <th className="py-2 px-2 lg:py-2 lg:px-4 text-left">24h change</th>
              <th className="py-2 px-2 lg:py-2 lg:px-4 text-left">Chart</th>
              <th className="py-2 px-2 lg:py-2 lg:px-4 text-left">Trade</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b text-xs lg:text-xl border-gray-800">
                <td className="py-4 px-2 lg:py-12 lg:px-4">{item.id}</td>
                <td className="py-4 px-2 lg:py-12 lg:px-4 flex items-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-4 h-4 lg:w-6 lg:h-6 mr-2"
                  />
                  <span className="whitespace-nowrap">{item.name}</span>
                </td>
                <td className="py-4 px-2 lg:py-4 lg:px-4 whitespace-nowrap">{item.price}</td>
                <td className="py-4 px-2 lg:py-4 lg:px-4 text-red-500 whitespace-nowrap">{item.change}</td>
                <td className="py-4 px-2 lg:py-4 lg:px-4">
                  <div className="w-20 h-6 lg:w-30 lg:h-8 rounded-md">
                    <SampleChat />
                  </div>
                </td>
                <td className="py-4 px-2 lg:py-4 lg:px-4">
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
                    Trade
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrademarketView;
