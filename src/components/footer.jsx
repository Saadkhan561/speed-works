import React from 'react';

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className='logo-name'>Logo Name</div>
      <div className='icon-div'>
        <button className='social-button'>
          {' '}
          <img src='./assets/facebook.png' alt='' />
        </button>
        <button className='social-button'>
          {' '}
          <img src='./assets/instagram.png' alt='' />
        </button>
      </div>
      <div className='link-div'>
        <h2 id='link-id'>Links</h2>
        <ul className='footer-ul'>
          <li className='footer-li'>
            <a href='#'>Home</a>
          </li>
          <li className='footer-li'>
            <a href='#'>Return Policy</a>
          </li>
          <li className='footer-li'>
            <a href='#'>Privacy Policy</a>
          </li>
          <li className='footer-li'>
            <a href='#'>Terms & Conditions</a>
          </li>
          <li className='footer-li'>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
      <div className='footer-account-div'>
        <h2 id='account-id'>My Account</h2>
        <ul className='footer-ul'>
          <li className='footer-li'>
            <a href='#'>Cart</a>
          </li>
          <li className='footer-li'>
            <a href='#'>Checkout</a>
          </li>
          <li className='footer-li'>
            <a href='#'>My account</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
