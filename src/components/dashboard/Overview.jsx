import React, { useState } from 'react';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import AssetTable from '../AssestCoin';
import { DepositModal, WithDrawModal } from '../Modal';
import { IoMdSearch } from "react-icons/io";


const Overview = () => {
  const [deposit, setDeposit] = useState(false);
  const [withdraw, setWithdraw] = useState(false);

  const handleClose = () => {
    setDeposit(false);
  }

  const handleWithdrawClose = () => {
    setWithdraw(false);
  }

  return (
    <>
      <div className="h-screen mt-[90px]">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between mx-[10px] bg-[#18191D] rounded-[5px] px-[30px] py-[30px]">
          <div className='order-2 sm:order-2 md:order-1 lg:order-1'>
            <h1 className="text-white text-[40px] order-1">Overview</h1>
            <p className="text-[16px] text-[#B1B5C4] font-[600]">
              Total Balance
            </p>
            <p className=" flex gap-[7px] items-center text-[28px] text-white font-[700]">
              0.361{' '}
              <span className="bg-[#58BD7D] px-[9px] py-[4px] text-[13px] rounded-[5px] text-[#234238]">
                BTC
              </span>
            </p>
            <p className="text-[18px] text-[#B1B5C4] font-[400]">$21,552.06</p>
          </div>

          <div className='order-1 sm:order-1 md:order-2 lg:order-2 flex items-center'>
            <input
              type="text"
              placeholder="Search coin"
              className="border-gray-600 border-[2px] py-[6px] w-[17rem] rounded-[50px] bg-inherit pl-[10px] text-[15px]"
            />
            <IoMdSearch className='text-gray-500 absolute right-[22rem] lg:right-12' size={22}/>
          </div>
        </div>

        <div className=" mt-[20px] mx-[10px]">
          <h1 className="text-[16px] text-[#B1B5C4] font-[600] px-[30px]">
            Account Balances
          </h1>
          <div className="bg-[rgb(24,25,29)] rounded-[5px] px-[30px] py-[30px]">
            <div className="flex justify-between border-b border-b-gray-600 pb-[30px]">
              <p className="text-[#B1B5C4] flex gap-[25px] items-center font-[600]">
                {' '}
                <div className="h-[12px] w-[12px] bg-[#FFD166] rounded"></div>{' '}
                Spot
              </p>
              <p className=" flex gap-[7px] items-center text-[18px] text-white font-[700]">
                0 BTC
              </p>
            </div>
            <div className="flex gap-[10px] pt-[34px]">
              <button className="text-white border-gray-600 border-[2px] py-[6px] px-[20px] flex items-center gap-[10px] rounded-[50px]"
              onClick={() => {setDeposit(!deposit)}}
              >
                Deposit
                <IoArrowForwardCircleSharp className="text-gray-600" />
              </button>

              <button className="text-white border-gray-600 border-[2px] py-[6px] px-[20px] flex items-center gap-[10px] rounded-[50px]"
              onClick={() => {setWithdraw(!withdraw)}}
              >
                Withdraw
                <IoArrowForwardCircleSharp className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* <div className=" mt-[20px] mx-[10px]">
          <h1 className="text-[16px] text-[#B1B5C4] font-[600] px-[30px]">
            Account Balances
          </h1>
          <div className="bg-[rgb(24,25,29)] rounded-[5px] py-[30px]">
            <table className="text-white px-[30px] whitespace-nowrap">
              <thead>
                <tr className="border-b border-b-gray-600">
                  <th className="text-left pb-[20px]">Asset</th>
                  <th className="text-right pb-[20px]">Spot Balance</th>
                  <th className="text-right pb-[20px]">On orders</th>
                  <th className="text-right pb-[20px]">Available balance</th>
                  <th className="text-right pb-[20px]">Total Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-left pb-[20px]">BTC</td>
                  <td className="text-right pb-[20px]">0.0000btc</td>
                  <td className="text-right pb-[20px]">0.0000btc</td>
                  <td className="text-right pb-[20px]">0.0000btc</td>
                  <td className="text-right pb-[20px]">0.0000btc</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
        <AssetTable />
      </div>

      <div>
        {deposit && (
          <div>
            <DepositModal handleClose={handleClose}/>
          </div>
        )}
      </div>
      <div>
        {withdraw && (
          <div>
            <WithDrawModal handleClose={handleWithdrawClose}/>
          </div>
        )}
      </div>
    </>
  );
};

export default Overview;
