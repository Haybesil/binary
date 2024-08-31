import React, { useState } from 'react';
import {
  Div,
  Form,
  Header,
  LeftSide,
  RightSide,
  Wrapper,
  Label,
  Input,
  SubmitButton,
  SH1,
  AH1,
} from '../ui/Styles';
import { RiEyeCloseLine } from 'react-icons/ri';
import { FaRegEye } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';
import Image from '../../assets/header-hero.png';
import Logo from '../../assets/logo10.png';
import { toSignInWithEmailAndPassword } from '../firebase/Auth';
import { useAuth } from '../contexts/authContext';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const Spinner = ({ size = 30, color = '#000' }) => {
    return (
      <div
        className="animate-spin"
        style={{
          height: size,
          width: size,
          border: `4px solid ${color}`,
          borderTop: `4px solid transparent`,
          borderRadius: '50%',
        }}
      ></div>
    );
  };

  const { userLoggedIn } = useAuth();
  const { currentUser } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!isSigningIn) {
      try {
      setIsSigningIn(true);
      await toSignInWithEmailAndPassword(email, password);
      toast.success(`Login successful, Welcome back!`);
    } catch (error) {
      toast.error(`There was an error logging in! Error: ${error.message}`);
    } finally {
      setIsSigningIn(false);
      setLoading(false);
     }
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={'/dashboard'} replace={true} />}
      <div data-aos="flip-left">
        <div className="flex justify-center sm:justify-center lg:justify-start">
          <Link
            to="/"
            className="absolute text-white flex items-center text-[30px] pt-[40px] pl-[20px]"
          >
            <img src={Logo} alt="Wezudex Logo" />
            Binary
          </Link>
        </div>

        <Wrapper>
          <LeftSide>
            <Link
              to="/"
              className="flex items-center text-[30px] pt-[40px] pl-[20px]"
            >
              <img src={Logo} alt="Wezudex Logo" />
              Binary
            </Link>
            <img
              src={Image}
              alt="Binary Hero"
              className="ml-[220px] h-[700px]"
            />
          </LeftSide>
          <RightSide>
            <Header>
              <SH1
                style={{
                  fontSize: '45px',
                  fontWeight: '700',
                  color: 'white',
                  paddingTop: '80px',
                }}
                className="sm:text-center"
              >
                Sign in
              </SH1>
              <AH1
                style={{
                  fontWeight: '300',
                  color: 'white',
                }}
                className="sm:text-center whitespace-nowrap"
              >
                Don't have an account?{' '}
                <Link to="/signup">Sign up for free</Link>{' '}
              </AH1>
            </Header>
            <Form onSubmit={handleLogin}>
              <Label>EMAIL</Label>
              <Div className="mb-[25px]">
                <Input
                  className="px-3 focus:outline-none"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  name="email"
                  required
                />
              </Div>
              <Label>PASSWORD</Label>
              <Div className="relative mb-[25px]">
                <Input
                  className="px-3 focus:outline-none"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />

                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-[280px] pr-3 flex items-center focus:outline-none text-gray-200"
                >
                  {showPassword ? <FaRegEye /> : <RiEyeCloseLine />}
                </button>
              </Div>

              <Div>
                <SubmitButton
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center w-full h-10 bg-blue-500 text-white rounded"
                >
                  {loading ? <Spinner size={20} color="#fff" /> : 'Login'}
                </SubmitButton>
              </Div>
            </Form>
          </RightSide>
        </Wrapper>
      </div>
    </>
  );
};

export default SignIn;
