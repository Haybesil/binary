import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import TrademarketView from "../../components/trademarketview/TrademarketView";
import CryptoSection from "../../components/crypsection/CryptoSection";
import HowItWorks from "../../components/howitworks/HowItWorks";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="bg-[#141416] px-36 py-8 h-fit">
        <TrademarketView />
      </div>
      <CryptoSection />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Home;
