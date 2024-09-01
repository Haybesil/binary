import React from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { EditCourse, InputWrapper } from './ui/Styles';
import DepositImg from '../assets/Deposit.png';

export const DepositModal = ({ handleClose }) => {
  const coins = [
    'BTC-Bitcoin',
    'ETH-Ethereum',
    'USDT-Tether',
    'BNB-Binance coin',
    'USDC-USD coin',
    'TRX-Tron',
  ];

  const banks = [
    'MoonPay (Visa/Mastercard)',
    'Transak(Visa/Mastercard, CashApp, Google/Apple Pay)',
    'CoinGate',
    'Simplex',
    'Banxa',
    'Bitpay',
    'Changelly',
    'Phemex',
    'Ramp',
    'Mercuryo',
  ];

  return (
    <div>
      <InputWrapper>
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            border: 'none',
            color: 'white',
            fontSize: '20px',
            cursor: 'pointer',
          }}
        >
          <IoMdCloseCircleOutline size={30} />
        </button>
        <img src={DepositImg} alt="" className="h-[200px]" />
        <h1 className="text-center text-white text-[20px]">
          Select a coin to see the corresponding deposit address
        </h1>
        <EditCourse>
          <option value="">Select a coin...</option>
          {coins.map((coin, index) => (
            <option key={index} value={coin} className=''>
              {coin}
            </option>
          ))}
        </EditCourse>
        <h1 className="text-white text-left text-[20px]">
          Deposit via Bank Card
        </h1>
        <EditCourse>
          <option value="">Select a service...</option>
          {banks.map((bank, index) => (
            <option key={index} value={bank} className=''>
              <div className="">{bank}</div>
            </option>
          ))}
        </EditCourse>
      </InputWrapper>
    </div>
  );
};


export const WithDrawModal = ({ handleClose }) => {
    const coins = [
      'BTC-Bitcoin',
    //   'ETH-Ethereum',
    //   'USDT-Tether',
    //   'BNB-Binance coin',
    //   'USDC-USD coin',
    //   'TRX-Tron',
    ];
  
  
    return (
      <div>
        <InputWrapper>
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              border: 'none',
              color: 'white',
              fontSize: '20px',
              cursor: 'pointer',
            }}
          >
            <IoMdCloseCircleOutline size={30} />
          </button>
          <img src={DepositImg} alt="" className="h-[200px]" />
          <h1 className="text-center text-white text-[20px]">
            Select a coin to withdraw to funds
          </h1>
          <EditCourse>
            <option value="">Select a coin to withdraw...</option>
            {coins.map((coin, index) => (
              <option key={index} value={coin} className=''>
                {coin}
              </option>
            ))}
          </EditCourse>
        </InputWrapper>
      </div>
    );
  };
