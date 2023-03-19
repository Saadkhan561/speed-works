import {React, useState} from 'react';
import './footer.css';
import Footer from './footer';
import Navbar from './navbar';
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className='main-layout'>
      <Navbar/>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
