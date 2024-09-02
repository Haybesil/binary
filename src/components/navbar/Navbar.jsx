import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon
import Logo from '../../assets/logo10.png';
import { useAuth } from '../contexts/authContext';
import { toSignOut } from '../firebase/Auth';
import { FaRegUser } from 'react-icons/fa6';
import UserDropdown from '../UserDropdown';

const Navbar = () => {
  const location = useLocation(); // Get the current location
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <div>
      <div className="app px-5 fixed z-50 top-0 w-full flex lg:px-28 h-20 items-center border-b border-[#9fa8bf6c] text-[#9FA8BF] justify-between">
        <Link to="/">
          <div className="flex items-center gap-3 border-r pr-5 border-[#b9bfcf78]">
            <img src={Logo} alt="Wezudex Logo" className="h-8" />
            <span className="text-lg text-white font-bold">Binary</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex items-center gap-12 font-semibold">
            <li
              className={`hover:cursor-pointer ${
                location.pathname === '/trade'
                  ? 'border-b-2 border-[#7669FE]'
                  : ''
              } transition duration-300`}
            >
              <Link to="/trade">Trade</Link>
            </li>
            <li
              className={`hover:cursor-pointer ${
                location.pathname === '/buycrypto'
                  ? 'border-b-2 border-[#7669FE]'
                  : ''
              } transition duration-300`}
            >
              <Link to="/buycrypto">Buy Crypto</Link>
            </li>
            <li
              className={`hover:cursor-pointer ${
                location.pathname === '/terms'
                  ? 'border-b-2 border-[#7669FE]'
                  : ''
              } transition duration-300`}
            >
              <Link to="/terms">Terms of Use</Link>
            </li>
            <li
              className={`hover:cursor-pointer ${
                location.pathname === '/policy'
                  ? 'border-b-2 border-[#7669FE]'
                  : ''
              } transition duration-300`}
            >
              <Link to="/policy">Privacy Policy</Link>
            </li>
            <li
              className={`hover:cursor-pointer ${
                location.pathname === '/markets'
                  ? 'border-b-2 border-[#7669FE]'
                  : ''
              } transition duration-300`}
            >
              <Link to="/markets">Markets</Link>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <span className="hover:cursor-pointer font-semibold">NFT</span>
            <button className="border-none bg-[#8071FE] py-[1.5px] text-center text-white px-3 rounded-md">
              soon
            </button>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3 font-semibold">
          {userLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                className="bg-[#1DAEEF] text-white px-[20px] py-[10px] rounded-[50px] text-[14px]"
              >
                Wallet
              </Link>
              <div style={{ position: 'relative' }}>
                <button onClick={toggleDropdown}>
                  <FaRegUser size={25} />
                </button>
                {isProfileOpen && <UserDropdown />}
              </div>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="hover:cursor-pointer bg-[#1FAEEE] rounded-2xl text-white hover:bg-blue-800 px-5 py-2 hover:border-2 hover:border-[#41444bbb] whitespace-nowrap"
              >
                Sign up
              </Link>
              <Link
                to="/signin"
                className="hover:cursor-pointer border-2 border-[#787E90] rounded-2xl text-white hover:bg-white hover:text-black hover:border-none px-5 py-2"
              >
                Login
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaBars className="text-white text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="app lg:hidden absolute top-20 left-0 w-full h-screen bg-[#1F2026] z-40"
          data-aos="flip-left"
        >
          <ul className="flex flex-col items-center gap-8 text-white py-6">
            <li
              className={`hover:cursor-pointer ${
                location.pathname === '/trade'
                  ? 'border-b-2 border-[#7669FE]'
                  : ''
              } transition duration-300`}
              data-aos="fade-up"
            >
              <Link to="/trade">Trade</Link>
            </li>
            <li
              className={`hover:cursor-pointer ${
                location.pathname === '/buycrypto'
                  ? 'border-b-2 border-[#7669FE]'
                  : ''
              } transition duration-300`}
              data-aos="fade-down"
            >
              <Link to="/buycrypto">Buy Crypto</Link>
            </li>
            <li
              className={`hover:cursor-pointer ${
                location.pathname === '/terms'
                  ? 'border-b-2 border-[#7669FE]'
                  : ''
              } transition duration-300`}
              data-aos="fade-up"
            >
              <Link to="/terms">Terms of Use</Link>
            </li>
            <li
              className={`hover:cursor-pointer ${
                location.pathname === '/policy'
                  ? 'border-b-2 border-[#7669FE]'
                  : ''
              } transition duration-300`}
              data-aos="fade-down"
            >
              <Link to="/policy">Privacy Policy</Link>
            </li>
            <li
              className={`hover:cursor-pointer ${
                location.pathname === '/markets'
                  ? 'border-b-2 border-[#7669FE]'
                  : ''
              } transition duration-300`}
              data-aos="fade-up"
            >
              <Link to="/markets">Markets</Link>
            </li>
            <div className="flex flex-col gap-[20px] items-center">
              {userLoggedIn ? (
                <>
                  <div style={{ position: 'relative' }}>
                    <button onClick={toggleDropdown}>
                      <FaRegUser size={25} />
                    </button>
                    {isProfileOpen && <UserDropdown />}
                  </div>

                  <Link
                    to="/dashboard"
                    className="bg-blue-700 text-white px-[20px] py-[5px] rounded"
                  >
                    Wallet
                  </Link>

                  <button
                    onClick={() => {
                      toSignOut().then(() => {
                        navigate('/signin');
                      });
                    }}
                    className="bg-red-700 text-white px-[20px] py-[5px] rounded"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="hover:cursor-pointer bg-[#1FAEEE] rounded-2xl text-white hover:bg-blue-800 px-5 py-2 hover:border-2 hover:border-[#41444bbb] whitespace-nowrap"
                  >
                    Sign up
                  </Link>
                  <Link
                    to="/signin"
                    className="hover:cursor-pointer border-2 border-[#787E90] rounded-2xl text-white hover:bg-white hover:text-black hover:border-none px-5 py-2"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
