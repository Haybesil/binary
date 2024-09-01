import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Overview from '../components/dashboard/Overview';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="bg-[#141416] h-[550vh] flex w-[100%]">
        <div className="w-[19%]  hidden sm:hidden md:block lg:block">
          <Sidebar />
        </div>
        <div className="w-[100%] sm:w-[100%] md:w-[81%] lg:w-[81%]">
          <Overview />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
