import React from 'react';
import './footer.css';
import Footer from './footer';
import Navbar from './navbar';

const Layout = () => {
  return (
    <div className='main-layout'>
      <Navbar />
      <Footer />
    </div>
  );
};

export default Layout;
