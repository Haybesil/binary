import React from "react";
import S1 from "../../assets/s1.svg";
import S2 from "../../assets/s2.svg";
import S3 from "../../assets/s3.svg";
import S4 from "../../assets/s4.svg";

const steps = [
  {
    id: 1,
    title: "Register",
    description:
      "Registration is a very easy process. Follow step by step and sign in.",
    icon: S1,
  },
  {
    id: 2,
    title: "Start trading",
    description: "We support all types of cryptocurrency.",
    icon: S2,
  },
  {
    id: 3,
    title: "Type promo code",
    description: "Use promo code to increase your income.",
    icon: S3,
  },
  {
    id: 4,
    title: "Earn money",
    description: "Earn money on our platform safely and legally.",
    icon: S4,
  },
];

const HowItWorks = () => {
  return (
    <div className="app text-white lg:pt-20 lg:pb-60 pt-10 pb-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold">How it works</h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-8 lg:space-y-0" data-aos="flip-left">
        {steps.map((step) => (
          <div key={step.id} className="text-center w-full lg:w-auto">
            <div className="mb-8 lg:mb-16">
              <img src={step.icon} alt={step.title} className="h-16 mx-auto" />
            </div>
            <h3 className="text-sm text-[#787E90] font-semibold">{`Step ${step.id}`}</h3>
            <h4 className="text-xl mt-4 lg:mt-10 text-[#787E90]">{step.title}</h4>
            <p className="text-base mt-2 px-4 lg:px-0">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
