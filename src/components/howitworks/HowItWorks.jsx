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
    <div className="app text-white lg:pt-20 lg:pb-60">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">How it works</h2>
      </div>
      <div className="flex justify-center items-center space-x-8">
        {steps.map((step) => (
          <div key={step.id} className="text-center">
            <div className="mb-16">
              <img src={step.icon} alt={step.title} className="h-16 mx-auto" />
            </div>
            <h3 className="text-sm text-[#787E90] font-semibold">{`Step ${step.id}`}</h3>
            <h4 className="text-xl mt-10 text-[#787E90] ">{step.title}</h4>
            <p className="text-base w-[17.5vw] mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
