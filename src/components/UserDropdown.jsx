import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/authContext';
import { toSignOut } from './firebase/Auth';

const UserDropdown = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div
        style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          backgroundColor: '#23262f',
          boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
          zIndex: 1,
          marginTop: '20px',
          paddingInline: '60px',
          paddingBlock: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          borderRadius: '10px',
        }}
      >
        <div style={{ borderBottom: '1px solid gray' }}>
          <Link
            to="/profile"
            style={{
              display: 'block',
              padding: '8px',
              color: 'white',
              width: '100%',
            }}
          >
            Profile{' '}
            <span className="block text-[12px] text-[#9FA8BF]">
              Account details
            </span>
          </Link>
        </div>
        <div style={{ borderBottom: '1px solid gray' }}>
          <Link
            to="/promocode"
            style={{
              display: 'block',
              padding: '8px',
              whiteSpace: 'nowrap',
              color: 'white',
              width: '100%',
            }}
          >
            Promo code{' '}
            <span className="block text-[12px] text-[#9FA8BF]">
              Increase your volume
            </span>
          </Link>
        </div>
        <div style={{ borderBottom: '1px solid gray' }}>
          <Link
            to="/transaction"
            style={{
              display: 'block',
              padding: '8px',
              whiteSpace: 'nowrap',
              color: 'white',
              width: '100%',
            }}
          >
            Transaction{' '}
            <span className="block text-[12px] text-[#9FA8BF]">
              Transaction history
            </span>
          </Link>
        </div>
        <div>
          {userLoggedIn ? (
            <>
              <button
                onClick={() => {
                  toSignOut().then(() => {
                    navigate('/signin');
                  });
                }}
                className="text-white text-[14px]"
                style={{
                  display: 'block',
                  padding: '8px',
                  width: '100%',
                  textAlign: 'left',
                  border: 'none',
                }}
              >
                Log Out
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
