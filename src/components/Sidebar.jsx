import React from 'react';
import { Deposit, Withdraw } from './Buttons';

const Sidebar = () => {
  return (
    <>
      <div className=" mt-[90px] pt-[60px] h-screen bg-[#18191D]  ml-[10px] rounded-[5px]">
        <div className='flex flex-col gap-[30px] pl-[50px] pb-[60px]'>
          <p className="text-white flex gap-[25px] items-center font-[600]">
            {' '}
            <div className="h-[12px] w-[12px] bg-[#FCFCFD] rounded"></div>{' '}
            Overview
          </p>
          <p className="text-[#B1B5C4] flex gap-[25px] items-center font-[600]">
            {' '}
            <div className="h-[12px] w-[12px] bg-[#58BD7D] rounded"></div>{' '}
            Convert
          </p>
          <p className="text-[#B1B5C4] flex gap-[25px] items-center font-[600]">
            {' '}
            <div className="h-[12px] w-[12px] bg-[#627EEA] rounded"></div>{' '}
            Staking
          </p>
        </div>
        <div className='border-b border-b-gray-600'></div>
        <div className='flex flex-col gap-[20px] pl-[40px] mt-[100px]'>
            <Deposit/>
            <Withdraw/>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
