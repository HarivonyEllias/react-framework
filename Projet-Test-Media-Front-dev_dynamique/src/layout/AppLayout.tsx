import Sidebar from '../components/Sidebar.tsx';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout: React.FC = () => {
  return (
    <>
      <div className='font-poppins flex flex-col md:flex-row'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
