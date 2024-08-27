import React from 'react';
import arrow from '../../assets/arrowu.svg'; // Update the path as needed

const ScrollBtn = () => {
  // Handler to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  return (
    <div
      className="btnbounce bg-[#D4D5D9] p-2 rounded-full animate-bounce-slow cursor-pointer"
      onClick={scrollToTop}
    >
      <img src={arrow} alt="Arrow" />
    </div>
  );
};

export default ScrollBtn;
