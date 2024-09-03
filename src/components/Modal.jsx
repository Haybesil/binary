import React, { useState, useRef } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { EditCourse, Input, InputWrapper, SubmitButton } from './ui/Styles';
import DepositImg from '../assets/Deposit.png';
import Address from '../assets/BitcoinAdd.jpg';
import { MdContentCopy } from 'react-icons/md';
import { toast } from 'react-toastify';

const Spinner = ({ size = 30, color = '#000' }) => {
  return (
    <div
      className="animate-spin"
      style={{
        height: size,
        width: size,
        border: `4px solid #1DAEEF`,
        borderTop: `2px solid transparent`,
        borderRadius: '50%',
      }}
    ></div>
  );
};

export const DepositModal = ({ handleClose }) => {
  const [selectedCoin, setSelectedCoin] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [loadingCoin, setLoadingCoin] = useState(false);
  const [loadingNetwork, setLoadingNetwork] = useState(false);
  const [isNetworkModalOpen, setIsNetworkModalOpen] = useState(false);

  const textRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textRef.current.innerText)
      .then(() => {
        toast.success('Text copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  const coins = ['BTC-Bitcoin'];
  const banks = ['Bitcoin'];

  const handleCoinChange = (e) => {
    setLoadingCoin(true);
    setSelectedCoin(e.target.value);
    // Simulate a delay for loading (e.g., fetching data)
    setTimeout(() => {
      setLoadingCoin(false);
    }, 1000); // 1 second delay
  };

  const handleNetworkChange = (e) => {
    setLoadingNetwork(true);
    setSelectedNetwork(e.target.value);
    // Simulate a delay for loading (e.g., fetching data)
    setTimeout(() => {
      setLoadingNetwork(false);
      setIsNetworkModalOpen(true);
    }, 1000); // 1 second delay
  };

  const closeNetworkModal = () => {
    setIsNetworkModalOpen(false);
  };

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
        <EditCourse onChange={handleCoinChange}>
          <option value="">Select a coin...</option>
          {coins.map((coin, index) => (
            <option key={index} value={coin}>
              {coin}
            </option>
          ))}
        </EditCourse>

        {loadingCoin && (
          <div className="flex justify-center mt-4">
            <Spinner />
          </div>
        )}

        {!loadingCoin && selectedCoin && (
          <EditCourse onChange={handleNetworkChange}>
            <option value="">Select a network...</option>
            {banks.map((bank, index) => (
              <option key={index} value={bank}>
                {bank}
              </option>
            ))}
          </EditCourse>
        )}

        {loadingNetwork && (
          <div className="flex justify-center mt-4">
            <Spinner />
          </div>
        )}

        {isNetworkModalOpen && (
          <div className="absolute bottom-[0px]  bg-[#1B1B1B] rounded-[10px] text-white py-[40px] px-[20px]">
            <button onClick={closeNetworkModal}>
              <IoMdCloseCircleOutline size={20} />
            </button>
            <div className="">
              <img
                src={Address}
                alt=""
                className="rounded-tr-[10px] rounded-tl-[10px]"
              />
              <div className="flex flex-col items-end">
                <button
                  onClick={handleCopy}
                  className="text-black bg-white px-[10px] py-[10px] rounded-[50%] text-[20px]"
                >
                  <MdContentCopy />
                </button>
                <p ref={textRef} className="text-center font-[100]">
                  bc1q5dxf8k6syrfwz4zh57q8gyjss3zvgg323jpz7n
                </p>
              </div>
            </div>
          </div>
        )}
      </InputWrapper>
    </div>
  );
};

export const WithDrawModal = ({ handleClose }) => {
  const [selectedCoin, setSelectedCoin] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [loadingCoin, setLoadingCoin] = useState(false);
  const [loadingNetwork, setLoadingNetwork] = useState(false);
  const [isNetworkModalOpen, setIsNetworkModalOpen] = useState(false);

  const handleCoinChange = (e) => {
    setLoadingCoin(true);
    setSelectedCoin(e.target.value);
    // Simulate a delay for loading (e.g., fetching data)
    setTimeout(() => {
      setLoadingCoin(false);
    }, 1000); // 1 second delay
  };

  const handleNetworkChange = (e) => {
    setLoadingNetwork(true);
    setSelectedNetwork(e.target.value);
    // Simulate a delay for loading (e.g., fetching data)
    setTimeout(() => {
      setLoadingNetwork(false);
      setIsNetworkModalOpen(true);
    }, 1000); // 1 second delay
  };

  const closeNetworkModal = () => {
    setIsNetworkModalOpen(false);
  };

  const withdrawal = () => {
    // Simulate a withdrawal request
    console.log(`Withdrawal request for ${selectedCoin} on ${selectedNetwork}`);
    toast.error(
      `Withdrawal request failed for ${selectedCoin}, you must make a deposit to withdraw!`
    );
    setIsNetworkModalOpen(false);
  };

  const coins = ['BTC-Bitcoin'];
  const banks = ['Bitcoin'];

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
        <EditCourse onChange={handleCoinChange}>
          <option value="">Select a coin to withdraw...</option>
          {coins.map((coin, index) => (
            <option key={index} value={coin} className="">
              {coin}
            </option>
          ))}
        </EditCourse>

        {loadingCoin && (
          <div className="flex justify-center mt-4">
            <Spinner />
          </div>
        )}

        {!loadingCoin && selectedCoin && (
          <EditCourse onChange={handleNetworkChange}>
            <option value="">Select a network...</option>
            {banks.map((bank, index) => (
              <option key={index} value={bank}>
                {bank}
              </option>
            ))}
          </EditCourse>
        )}

        {loadingNetwork && (
          <div className="flex justify-center mt-4">
            <Spinner />
          </div>
        )}

        {isNetworkModalOpen && (
          <div className="absolute bottom-[140px]  bg-[#1B1B1B] rounded-[10px] text-white py-[40px] px-[50px]">
            <button
              onClick={closeNetworkModal}
              className="relative right-[45px] bottom-[35px] "
            >
              <IoMdCloseCircleOutline size={20} />
            </button>
            <div className="flex flex-col items-center gap-[20px]">
              <input
                type="text"
                placeholder="Input your wallet address"
                className="py-[8px] pl-[3px] rounded w-[260px] text-[15px] border"
                style={{
                  background: 'none',
                }}
                required
              />
              <button
                className="bg-[#1DAEEF] py-[5px] px-[40px] rounded"
                onClick={withdrawal}
              >
                Withdraw
              </button>
            </div>
          </div>
        )}
      </InputWrapper>
    </div>
  );
};

// export const WithDrawModal = ({ handleClose }) => {
//   const [loading, setLoading] = useState(false);
//   const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);

//   const coins = ['BTC-Bitcoin'];

//   const handleCoinChange = (e) => {
//     if (e.target.value) {
//       setLoading(true);
//       // Simulate a delay for loading
//       setTimeout(() => {
//         setLoading(false);
//         setWithdrawModalOpen(true);
//       }, 1000); // 1 second delay
//     }
//   };

//   const closeWithdrawModal = () => {
//     setWithdrawModalOpen(false);
//   };

//   return (
//     <div>
//       <InputWrapper>
//         <button
//           onClick={handleClose}
//           style={{
//             position: 'absolute',
//             top: '10px',
//             right: '10px',
//             border: 'none',
//             color: 'white',
//             fontSize: '20px',
//             cursor: 'pointer',
//           }}
//         >
//           <IoMdCloseCircleOutline size={30} />
//         </button>
//         <img src={DepositImg} alt="" className="h-[200px]" />
//         <h1 className="text-center text-white text-[20px]">
//           Select a coin to withdraw funds
//         </h1>
//         <EditCourse onChange={handleCoinChange}>
//           <option value="">Select a coin to withdraw...</option>
//           {coins.map((coin, index) => (
//             <option key={index} value={coin}>
//               {coin}
//             </option>
//           ))}
//         </EditCourse>

//         {loading && (
//           <div className="flex justify-center mt-4">
//             <Spinner /> {/* Replace with your spinner component */}
//           </div>
//         )}

//         {isWithdrawModalOpen && (
//           <div className="modal">
//             {/* Your modal content here */}
//             <h2 className="text-center">Withdrawal Details</h2>
//             <button onClick={closeWithdrawModal}>Close Modal</button>
//           </div>
//         )}
//       </InputWrapper>
//     </div>
//   );
// };
