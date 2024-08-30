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
import { Link } from 'react-router-dom';
import Image from '../../assets/header-hero.png';
import Logo from '../../assets/logo10.png';


const SignUp = () => {
  const Spinner = () => {
    return (
      <div>
        <h1 className="h-[30px] w-[30px] bg-gray-600"></h1>
      </div>
    );
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  return (
    <div className="justify-center">
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
          <img src={Image} alt="Binary Hero" className="ml-[220px] h-[700px]" />
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
              Sign Up
            </SH1>
            <AH1
              style={{
                fontWeight: '300',
                color: 'white',
              }}
              className="sm:text-center whitespace-nowrap"
            >
              Already have an account? <Link to="/signin">Login</Link>
            </AH1>
          </Header>
          <Form>
            <Label>EMAIL</Label>
            <Div className="mb-[25px]">
              <Input
                className="px-3 focus:outline-none"
                type="email"
                placeholder="Email address"
                name="email"
                required
              />
            </Div>
            <Label>PASSWORD</Label>
            <Div className="relative mb-[25px]">
              <Input
                className="px-3 focus:outline-none"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                required
              />

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-[3rem] sm:right-[80px] md:right-[130px] lg:right-[280px] pr-3 flex items-center focus:outline-none text-gray-200"
              >
                {showPassword ? <FaRegEye /> : <RiEyeCloseLine />}
              </button>
            </Div>
            <Label>CONFIRM PASSWORD</Label>
            <Div className="relative mb-[20px]">
              <Input
                className="px-3 focus:outline-none"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="confirm Password"
                required
              />

              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-[3rem] sm:right-[80px] md:right-[130px] lg:right-[280px] pr-3 flex items-center text-gray-200 focus:outline-none"
              >
                {showConfirmPassword ? <FaRegEye /> : <RiEyeCloseLine />}
              </button>
            </Div>

            <Div
              style={{
                display: 'flex',
                gap: '10px',
              }}
            >
              <input
                style={{
                  marginBottom: '22px',
                  transform: 'scale(1.5)',
                }}
                type="checkbox"
              />

              <p className="text-[18px] font-[600] text-gray-300 ">
                By signing up I agree that I’m 18 years of age or <br /> older,
                to the{' '}
                <span className="text-white">Terms of Use, Privacy Policy</span>
              </p>
            </Div>

            <Div>
              <Link to='/dashboard'>
              <SubmitButton disabled={loading}>
                {loading ? ( 
                  <Spinner size={20} color={'#fff'} /> 
                ):( 
                  'Continue'
                )}
              </SubmitButton>
              </Link>
            </Div>
          </Form>
        </RightSide>
      </Wrapper>
    </div>
  );
};

export default SignUp;
