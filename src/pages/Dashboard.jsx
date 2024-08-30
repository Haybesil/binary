import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Overview from '../components/dashboard/Overview';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="bg-[#141416] flex w-[100%]">
        <div className="w-[19%]">
          <Sidebar />
        </div>
        <div className="w-[81%]">
          <Overview />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
