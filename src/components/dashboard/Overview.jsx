import React, { useState, useEffect } from 'react';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import AssetTable from '../AssestCoin';
import { DepositModal, WithDrawModal } from '../Modal';
import { IoMdSearch } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { auth } from '../firebase/Firebase';
import { fetchWalletData, saveWalletData } from '../firebase/Service';

const Overview = () => {
  const [deposit, setDeposit] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [wallet, setWallet] = useState({ balance: 0.0, currency: 'BTC' });
  const [loading, setLoading] = useState(true);

  const promoValue = useSelector((state) => state.promoValue);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      fetchWalletData(user.uid).then((walletData) => {
        if (walletData) {
          setWallet(walletData);
        } else {
          // Initialize wallet with default values if no data exists
          setWallet({ balance: 0, currency: 'BTC', promoApplied: false });
        }
        setLoading(false);
      });
    }
  }, []);

  const updateWalletBalance = async (amount) => {
    const user = auth.currentUser;
    if (user) {
      const newBalance = wallet.balance + amount + promoValue;

      // Update the wallet in Firestore
      await saveWalletData(user.uid, newBalance, wallet.currency, true);

      // Update the local state
      setWallet((prevState) => ({ ...prevState, balance: newBalance }));
    }
  };

  const handleClose = () => setDeposit(false);
  const handleWithdrawClose = () => setWithdraw(false);

  return (
    <>
      <div className="h-screen mt-[90px]">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between mx-[10px] bg-[#18191D] rounded-[5px] px-[30px] py-[30px]">
          <div className="order-2 sm:order-2 md:order-1 lg:order-1">
            <h1 className="text-white text-[40px] order-1">Overview</h1>
            <p className="text-[16px] text-[#B1B5C4] font-[600]">
              Total Balance
            </p>
            <p className="flex gap-[7px] items-center text-[28px] text-white font-[700]">
              {loading ? (
                'Loading...'
              ) : (
                <>
                  {wallet.balance}
                  <span className="bg-[#58BD7D] px-[9px] py-[4px] text-[13px] rounded-[5px] text-[#234238]">
                    {wallet.currency}
                  </span>
                </>
              )}
            </p>
            <p className="text-[18px] text-[#B1B5C4] font-[400]">
              {loading ? 'Loading...' : wallet.balance}
            </p>
          </div>

          <div className="order-1 sm:order-1 md:order-2 lg:order-2 flex items-center">
            <input
              type="text"
              placeholder="Search coin"
              className="border-gray-600 border-[2px] py-[6px] w-[17rem] rounded-[50px] bg-inherit pl-[10px] text-[15px]"
            />
            <IoMdSearch
              className="text-gray-500 absolute right-[22rem] lg:right-12"
              size={22}
            />
          </div>
        </div>

        <div className="mt-[20px] mx-[10px]">
          <h1 className="text-[16px] text-[#B1B5C4] font-[600] px-[30px]">
            Account Balances
          </h1>
          <div className="bg-[rgb(24,25,29)] rounded-[5px] px-[30px] py-[30px]">
            <div className="flex justify-between border-b border-b-gray-600 pb-[30px]">
              <p className="text-[#B1B5C4] flex gap-[25px] items-center font-[600]">
                <div className="h-[12px] w-[12px] bg-[#FFD166] rounded"></div>
                Spot
              </p>
              <p className="flex gap-[7px] items-center text-[18px] text-white font-[700]">
                {loading ? 'Loading...' : wallet.balance}{' '}
                {wallet.currency}
              </p>
            </div>
            <div className="flex gap-[10px] pt-[34px]">
              <button
                className="text-white border-gray-600 border-[2px] py-[6px] px-[20px] flex items-center gap-[10px] rounded-[50px]"
                onClick={() => setDeposit(true)}
              >
                Deposit
                <IoArrowForwardCircleSharp className="text-gray-600" />
              </button>

              <button
                className="text-white border-gray-600 border-[2px] py-[6px] px-[20px] flex items-center gap-[10px] rounded-[50px]"
                onClick={() => setWithdraw(true)}
              >
                Withdraw
                <IoArrowForwardCircleSharp className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <AssetTable />

        {deposit && (
          <DepositModal
            handleClose={handleClose}
            updateWallet={(amount) => updateWalletBalance(amount)}
          />
        )}

        {withdraw && (
          <WithDrawModal
            handleClose={handleWithdrawClose}
            updateWallet={(amount) => updateWalletBalance(-amount)}
          />
        )}
      </div>
    </>
  );
};

export default Overview;
