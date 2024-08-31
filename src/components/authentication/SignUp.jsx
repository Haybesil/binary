import React, { useState } from "react";
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
} from "../ui/Styles";
import { RiEyeCloseLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import Image from "../../assets/header-hero.png";
import Logo from "../../assets/logo10.png";
import { useAuth } from "../contexts/authContext";
import { toCreateUserWithEmailandPassword } from "../firebase/Auth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
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

  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { userLoggedIn } = useAuth()

  

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(!isRegistering) {
      try {
      setIsRegistering(true)
      await toCreateUserWithEmailandPassword(email, password);
      toast.success(`Sign up successful, Welcome!`);
      } catch (error) {
        toast.error(`There was an error signing up! Error: ${error.message}`);
      } finally {
        setLoading(false);
        setIsRegistering(false);
       }
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  return (
    <>
      {userLoggedIn && (<Navigate to={'/dashboard'} replace={true}/>)}

    <div className="justify-center h-screen" data-aos="flip-right">
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
                fontSize: "45px",
                fontWeight: "700",
                color: "white",
                paddingTop: "80px",
              }}
              className="sm:text-center"
            >
              Sign Up
            </SH1>
            <AH1
              style={{
                fontWeight: "300",
                color: "white",
              }}
              className="sm:text-center whitespace-nowrap"
            >
              Already have an account? <Link to="/signin">Login</Link>
            </AH1>
          </Header>
          <Form onSubmit={handleSignup}>
            <Label>EMAIL</Label>
            <Div className="mb-[25px]">
              <Input
                className="px-3 focus:outline-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                name="email"
                required
              />
            </Div>
            <Label>PASSWORD</Label>
            <Div className="relative mb-[25px]">
              <Input
                className="px-3 focus:outline-none"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
                display: "flex",
                gap: "10px",
              }}
            >
              <input
                style={{
                  marginBottom: "22px",
                  transform: "scale(1.5)",
                }}
                type="checkbox"
                required
              />

              <p className="text-[18px] font-[600] text-gray-300 ">
                By signing up I agree that I’m 18 years of age or <br /> older,
                to the{" "}
                <Link to='/terms' className="text-white">Terms of Use, Privacy Policy</Link>
              </p>
            </Div>

            <Div>
            <SubmitButton
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center w-full h-10 bg-blue-500 text-white rounded"
                >
                  {loading ? <Spinner size={20} color="#fff" /> : 'Sign Up'}
                </SubmitButton>
            </Div>
          </Form>
        </RightSide>
      </Wrapper>
    </div>
    </>
  );
};

export default SignUp;
