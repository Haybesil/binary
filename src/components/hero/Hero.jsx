import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide1 from '../../assets/header-hero.png';
import Slide2 from '../../assets/2.png';
import Slide3 from '../../assets/1.png';
import Slide4 from '../../assets/4.png';
import Slide5 from '../../assets/5.png';
import Slide6 from '../../assets/3.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { toSignOut } from '../firebase/Auth';

const slides = [
  {
    id: 1,
    title: 'Be calm about your cryptocurrency assets',
    description: 'The best way to receive and send cryptocurrency.',
    image: Slide1,
    buttonText: 'Sign Up',
  },
  {
    id: 2,
    title: 'Professional Technical Support Center 24/7',
    description:
      'A team of specialists around the clock will help and answer any question.',
    image: Slide2,
    buttonText: 'Sign Up',
  },
  {
    id: 3,
    title: 'Crypto Trading with a Leading exchange',
    description:
      'Fast transactions, minimal commission, many different tokens, easy and intuitive functionality.',
    image: Slide3,
    buttonText: 'Sign Up',
  },
  {
    id: 4,
    title: 'Security',
    description:
      'Secure Asset Fund for users with a capital of more than $400 million, two-factor protection, improved encryption of your transaction data.',
    image: Slide4,
    buttonText: 'Sign Up',
  },
  {
    id: 5,
    title: 'Platform Volumes',
    description:
      'Quarterly trading volume is $137 billion, the most popular trading pair is BTC/USD ($42 billion).<',
    image: Slide5,
    buttonText: 'Sign Up',
  },
  {
    id: 6,
    title: 'Explore the crypto world',
    description: '150+ countries of the world trust and trade with us.',
    image: Slide6,
    buttonText: 'Sign Up',
  },
  // Add more slides here
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const { userLoggedIn } = useAuth();

  return (
    <section className="app lg:pt-0 pt-44 overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div className="flex flex-col md:flex-row items-center h-screen">
              <div className="w-full md:w-[64%] lg:px-28 md:px-12 px-6 text-center md:text-left">
                <h1
                  className="text-3xl md:text-6xl text-white font-bold mb-6"
                  data-aos="fade-up"
                >
                  {slide.title}
                </h1>
                <p className="text-gray-400 mb-6" data-aos="fade-down">
                  {slide.description}
                </p>
                {userLoggedIn ? (
                  <>
                     <Link to='/dashboard' className="bg-blue-700 text-white px-[20px] py-[10px] rounded-[50px]">
                    Go to wallet
                  </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/signup"
                      className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-500 transition"
                      data-aos="fade-down"
                    >
                      {slide.buttonText}
                    </Link>
                  </>
                )}
              </div>
              <div
                className="lg:w-[30%] md:w-[30%] mt-10 md:mt-0"
                data-aos="fade-right"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover w-[85vw] lg:w-full h-full opacity-80 animate-bounce-slow"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
