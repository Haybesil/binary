import React from "react";
import Footer from "./footer/Footer";


const AssetTable = () => {
  const data = [
    {
      id: 1,
      name: "Bitcoin BTC",
      price: "$59,113.99",
      change: "-0.29%",
      low24h: "$57,860.00",
      high24h: "$60,234.98",
      volume: "2242689127.06",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    },
    {
      id: 2,
      name: "Ethereum ETH",
      price: "$2,526.59",
      change: "+2.77%",
      low24h: "$2,418.80",
      high24h: "$2,554.60",
      volume: "1148755511.98",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    },
    {
      id: 3,
      name: "Litecoin LTC",
      price: "$61.89",
      change: "+2.55%",
      low24h: "$59.40",
      high24h: "$62.38",
      volume: "24279127.77",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png",
    },
    {
      id: 4,
      name: "Ripple XRP",
      price: "$0.57",
      change: "+0.74%",
      low24h: "$0.56",
      high24h: "$0.58",
      volume: "182063487.57",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
    },
    {
      id: 5,
      name: "Bitcoin Cash BCH",
      price: "$322.00",
      change: "-0.40%",
      low24h: "$314.20",
      high24h: "$330.70",
      volume: "15585658.33",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png",
    },
    {
      id: 6,
      name: "Dogecoin DOGE",
      price: "$0.10",
      change: "+0.87%",
      low24h: "$0.10",
      high24h: "$0.10",
      volume: "76351675.11",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
    },

    {
      id: 7,
      name: "Matic",
      price: "$0.10",
      change: "+0.87%",
      low24h: "$0.10",
      high24h: "$0.10",
      volume: "76351675.11",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
    },
    {
      id: 8,
      name: "Solana",
      price: "$0.10",
      change: "+0.87%",
      low24h: "$0.10",
      high24h: "$0.10",
      volume: "76351675.11",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
    },
    {
      id: 9,
      name: "Polka Dot",
      price: "$0.10",
      change: "+0.87%",
      low24h: "$0.10",
      high24h: "$0.10",
      volume: "76351675.11",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png",
    },
    {
      id: 10,
      name: "Avax",
      price: "$0.10",
      change: "+0.87%",
      low24h: "$0.10",
      high24h: "$0.10",
      volume: "76351675.11",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png",
    },
    {
      id: 11,
      name: "Shiba Inu",
      price: "$0.10",
      change: "+0.87%",
      low24h: "$0.10",
      high24h: "$0.10",
      volume: "76351675.11",
      icon: " https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png",
    },
    {
      id: 12,
      name: "Chain Link",
      price: "$0.10",
      change: "+0.87%",
      low24h: "$0.10",
      high24h: "$0.10",
      volume: "76351675.11",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
    },
    {
      id: 13,
      name: "Uniswap",
      price: "$0.10",
      change: "+0.87%",
      low24h: "$0.10",
      high24h: "$0.10",
      volume: "76351675.11",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png",
    },
    {
      id: 14,
      name: "Wrapped BNB",
      price: "$0.10",
      change: "+0.87%",
      low24h: "$0.10",
      high24h: "$0.10",
      volume: "76351675.11",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png",
    },
    {
      id: 15,
      name: "Cosmos",
      price: "$0.10",
      change: "+0.87%",
      low24h: "$0.10",
      high24h: "$0.10",
      volume: "76351675.11",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png",
    },
    {
      id: 16,
      name: "AlgoRand",
      price: "$0.10",
      change: "+0.87%",
      low24h: "$0.10",
      high24h: "$0.10",
      volume: "76351675.11",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/4030.png",
    },
    {
      id: 17,
      name: "Stellar XLM",
      price: "$0.10",
      change: "+0.87%",
      low24h: "$0.10",
      high24h: "$0.10",
      volume: "76351675.11",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/512.png",
    },
  ];


  return (
    <>
      <div className="text-white mt-[5px] bg-[#18191D] rounded-[5px] mx-[10px]">
        <div className="flex justify-between items-center mb-8 lg:mb-16">
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-gray-400">
                <th className="py-2 px-2 lg:py-2 lg:px-4 text-left text-xs lg:text-base">Asset</th>
                <th className="py-2 px-2 lg:py-2 lg:px-4 text-left text-xs lg:text-base">Spot balance</th>
                <th className="py-2 px-2 lg:py-2 lg:px-4 text-left text-xs lg:text-base">On orders</th>
                <th className="py-2 px-2 lg:py-2 lg:px-4 text-left text-xs lg:text-base">Available balance</th>
                <th className="py-2 px-2 lg:py-2 lg:px-4 text-left text-xs lg:text-base">Total balance</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-b text-xs lg:text-xl border-gray-800">
                  <td className="py-4 px-2 lg:py-12 lg:px-4 flex items-center">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-4 h-4 lg:w-6 lg:h-6 mr-2"
                    />
                    {item.name}
                  </td>
                  <td className="py-4 px-2 lg:py-4 lg:px-4">{item.price}</td>
                  <td
                    className={`py-4 px-2 lg:py-4 lg:px-4 ${
                      item.change.startsWith("-")
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {item.change}
                  </td>
                  <td className="py-4 px-2 lg:py-4 lg:px-4">{item.low24h}</td>
                  <td className="py-4 px-2 lg:py-4 lg:px-4">{item.high24h}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default AssetTable;