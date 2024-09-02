import React, { useState, useEffect } from 'react';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import AssetTable from '../AssestCoin';
import { DepositModal, WithDrawModal } from '../Modal';
import { IoMdSearch } from "react-icons/io";
import { useSelector } from 'react-redux';
import { auth, firestore } from '../firebase/Firebase'; // Import Firestore
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore';

const Overview = () => {
  const [deposit, setDeposit] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [wallet, setWallet] = useState({ balance: 0.000, currency: 'BTC' });
  const [loading, setLoading] = useState(true);

  // Get promoValue from Redux state
  const promoValue = useSelector((state) => state.promoValue);

  useEffect(() => {
    const fetchWalletData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDocRef = doc(firestore, `users/${user.uid}`);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log('Fetched wallet data:', userData.wallet);
            setWallet(userData.wallet + promoValue || { balance: 0, currency: 'BTC' });
          } else {
            console.log('No wallet data found for user.');
            setWallet({ balance: 0, currency: 'BTC' });
          }
        } catch (error) {
          console.error('Error fetching wallet data:', error);
        } finally {
          setLoading(false);
        }
      } else {
        console.log('No user is logged in.');
        setLoading(false);
      }
    };

    fetchWalletData();
  }, []);

  const updateWalletBalance = async (amount) => {
    const user = auth.currentUser;
    if (user) {
      try {
        const userDocRef = doc(firestore, `users/${user.uid}`);
        await updateDoc(userDocRef, {
          'wallet.balance': increment(amount)
        });
        setWallet(prevWallet => ({
          ...prevWallet,
          balance: prevWallet.balance + promoValue
        }));
      } catch (error) {
        console.error('Error updating wallet balance:', error);
      }
    } else {
      console.log('No user is logged in.');
    }
  };

  const handleClose = () => setDeposit(false);
  const handleWithdrawClose = () => setWithdraw(false);

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
              {loading ? 'Loading...' : (
                <>
                  {wallet.balance +  (promoValue || 0.00)}
                  <span className="bg-[#58BD7D] px-[9px] py-[4px] text-[13px] rounded-[5px] text-[#234238]">
                    {wallet.currency}
                  </span>
                </>
              )}
            </p>
            <p className="text-[18px] text-[#B1B5C4] font-[400]">
              {loading ? 'Loading...' : wallet.balance + (promoValue || 0.00)}
            </p>
          </div>

          <div className='order-1 sm:order-1 md:order-2 lg:order-2 flex items-center'>
            <input
              type="text"
              placeholder="Search coin"
              className="border-gray-600 border-[2px] py-[6px] w-[17rem] rounded-[50px] bg-inherit pl-[10px] text-[15px]"
            />
            <IoMdSearch className='text-gray-500  right-[22rem] lg:right-12' size={22}/>
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
                {loading ? 'Loading...' : wallet.balance + (promoValue || 0)} {wallet.currency}
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
          <DepositModal handleClose={handleClose} updateWallet={updateWalletBalance} />
        )}

        {withdraw && (
          <WithDrawModal handleClose={handleWithdrawClose} updateWallet={updateWalletBalance} />
        )}
      </div>
    </>
  );
};

export default Overview;
