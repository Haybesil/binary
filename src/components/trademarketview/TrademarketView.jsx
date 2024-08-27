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
    <div className=" text-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-5xl font-bold">Market trend</h2>
        <button className="text-white border-2 border-white px-4 py-2 rounded-2xl hover:bg-gray-700">
          View more
        </button>
      </div>
      <div className="overflow-hidden">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-gray-400">
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">24h change</th>
              <th className="py-2 px-4 text-left">Chart</th>
              <th className="py-2 px-4 text-left">Trade</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b text-xl border-gray-800">
                <td className="py-12 px-4">{item.id}</td>
                <td className="py-12 px-4 flex items-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-6 h-6 mr-2"
                  />
                  {item.name}
                </td>
                <td className="py-4 px-4">{item.price}</td>
                <td className="py-4 px-4 text-red-500">{item.change}</td>
                <td className="py-4 px-4">
                  <div className="w-30 h-8 rounded-md">
                    <SampleChat />
                  </div>
                </td>
                <td className="py-4 px-4">
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
