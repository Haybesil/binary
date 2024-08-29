import React from "react";
import Footer from "../footer/Footer";

const MarketTable = () => {
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
      id: 6,
      name: "Dogecoin DOGE",
      price: "$0.10",
      change: "+0.87%",
      low24h: "$0.10",
      high24h: "$0.10",
      volume: "76351675.11",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
    },
  ];

  return (
    <>
      <div className="app text-white lg:px-28 lg:py-60 shadow-md">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-5xl font-bold">Market</h2>
        </div>
        <div className="overflow-hidden">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-gray-400">
                <th className="py-2 px-4 text-left">#</th>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Last price</th>
                <th className="py-2 px-4 text-left">24h change</th>
                <th className="py-2 px-4 text-left">Low 24H</th>
                <th className="py-2 px-4 text-left">High 24H</th>
                <th className="py-2 px-4 text-left">Volume 24H</th>
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
                  <td
                    className={`py-4 px-4 ${
                      item.change.startsWith("-")
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {item.change}
                  </td>
                  <td className="py-4 px-4">{item.low24h}</td>
                  <td className="py-4 px-4">{item.high24h}</td>
                  <td className="py-4 px-4">{item.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketTable;
