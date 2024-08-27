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
} from '../ui/Styles';
import { RiEyeCloseLine } from 'react-icons/ri';
import { FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Image from '../../assets/header-hero.png';
import Logo from '../../assets/logo10.png';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <LeftSide>
        <Link
          to="/"
          className="flex items-center text-[30px] pt-[40px] pl-[20px]"
        >
          <img src={Logo} alt="Wezudex Logo" />
          Wezudex
        </Link>
        <img src={Image} alt="Binary Hero" className="ml-[220px] h-[700px]" />
      </LeftSide>
      <RightSide>
        <Header>
          <h1
            style={{
              fontSize: '45px',
              fontWeight: '700',
              color: 'white',
              paddingTop: '100px',
            }}
          >
            Sign in
          </h1>
          <h1
            style={{
              fontSize: '18px',
              fontWeight: '300',
              color: 'white',
            }}
          >
            Don't have an account? <Link to="/signup">Sign up for free</Link>{' '}
          </h1>
        </Header>
        <Form>
          <Label>EMAILssssssssss</Label>
          <Div className="mb-[25px]">
            <Input
              className="px-3 focus:outline-none"
              type="email"
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
            <SubmitButton>Login</SubmitButton>
          </Div>
        </Form>
      </RightSide>
    </Wrapper>
  );
};

export default SignIn;
