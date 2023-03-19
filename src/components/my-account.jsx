import React from 'react';
import './my-account.css';

const MyAccount = () => {
  return (
    <>
      <div className='shop-div'>
        <h1 id='shop-tag'>My Account</h1>
        <p id='p-tag'>
          <a id='anchor' href='/'>
            home
          </a>
          <img
            src='./assets/right-link-arrow.png'
            alt=''
            height={15}
            width={15}
          />
          My Account
        </p>
      </div>
      <div className='form-main-div'>
        <form action='/' className='login-account-form'>
          <div className='login-tag'>
            <h2>Login</h2>
          </div>
          <div className='login-input-div'>
            <label htmlFor='email address' className='login-input-label'>
              Username or email address
            </label>
            <input type='email' className='login-input-field' />
          </div>
          <div className='login-input-div'>
            <label htmlFor='password' className='login-input-label'>
              Password
            </label>
            <input type='password' className='login-input-field' />
          </div>
          <div className='check-box'>
            <input type='checkbox' />
            <p id='check-box-label'>Remember Me</p>
          </div>
          <div className='login-button-div'>
            <button className='login-button'>Login</button>
          </div>
          <div id='forgot-pass-tag'>
            <a href='#'> Forgot password?</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyAccount;
