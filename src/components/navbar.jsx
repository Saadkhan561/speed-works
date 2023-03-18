import React, { useState } from 'react';

const Navbar = () => {
  const [categoryDiv, setCategoryDiv] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <div className={sideBar ? 'opacity' : ''}>
        <div className='navbar-main-1'>
          <div className='logo-div-1'>Logo Name</div>
          <div className='search-bar-div'>
            <div className='search-bar-sub-div'>
              <input
                className='search-field'
                type='text'
                placeholder='search here'
              />
              <button className='search-button'>
                <img src='./assets/search.png' alt='' height={20} width={20} />
              </button>
            </div>
          </div>
          <div className='account-div'>
            <div className='account-sub-div'>
              <div>
                <img src='./assets/profile.png' alt='' height={45} width={45} />
              </div>
              <div id='account-sub-div2'>
                <p id='login-here'>login here</p>
                <p id='my-account'>
                  <b>My Account</b>
                </p>
              </div>
            </div>
          </div>
          <div className='cart-div'>
            <div className='account-sub-div'>
              <div>
                <img src='./assets/cart.png' alt='' height={45} width={45} />
              </div>
              <div id='account-sub-div2'>
                <p id='login-here'>Shopping Cart</p>
                <p id='my-account'>
                  <b>$ 0.00</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='navbar-main-2'>
          <div className='account-div'>
            <div className='account-sub-div'>
              <div>
                <img src='./assets/profile.png' alt='' height={45} width={45} />
              </div>
              <div id='account-sub-div2'>
                <p id='login-here'>login here</p>
                <p id='my-account'>
                  <b>My Account</b>
                </p>
              </div>
            </div>
          </div>
          <div className='cart-div'>
            <div className='account-sub-div'>
              <div>
                <img src='./assets/cart.png' alt='' height={45} width={45} />
              </div>
              <div id='account-sub-div2'>
                <p id='login-here'>Shopping Cart</p>
                <p id='my-account'>
                  <b>$ 0.00</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='sub-navbar-1'>
          <div className='category-button-div'>
            <button
              className='category-button'
              onClick={() => setCategoryDiv(!categoryDiv)}
            >
              <div className='category-button-sub-div'>
                <div>
                  <img src='./assets/category-bar.png' alt='' />
                </div>
                <div id='category-text'>Shop By Category</div>
              </div>
            </button>
            <div
              className={categoryDiv ? 'category-list' : 'category-list-hidden'}
            >
              <ul className='category-ul'>
                <li className='category-li'>
                  <a href='#'>BATTERIES/CHARGERS</a>
                </li>
                <li className='category-li'>
                  <a href='#'>BRAKES</a>
                </li>
                <li className='category-li'>
                  <a href='#'>ENGINE</a>
                </li>
                <li className='category-li'>
                  <a href='#'>FUEL</a>
                </li>
                <li className='category-li'>
                  <a href='#'>HEADS/PORTING SERVICE</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='nav-ul-div'>
            <ul className='nav-ul'>
              <li className='nav-li'>
                <a>Home</a>
              </li>

              <li className='nav-li'>
                <a>Shop</a>
              </li>

              <li className='nav-li'>
                <a>Return Policy</a>
              </li>

              <li className='nav-li'>
                <a>Terms & Conditions</a>
              </li>

              <li className='nav-li'>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='sub-navbar-2'>
          <div className='logo-div-2'>Logo Name</div>
          <div>
            <button
              className='sidebar-button'
              onClick={() => setSideBar(!sideBar)}
            >
              <img
                src='./assets/options-bar.png'
                alt=''
                height={30}
                width={30}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          sideBar ? 'sub-navbar-sidebar-div' : 'sub-navbar-sidebar-div-hidden'
        }
      >
        <div className='sidebar-logo-div'>
          <div id='logo-2'>Logo Name</div>
          <button id='sidebar-img-button' onClick={() => setSideBar(!sideBar)}>
            <img
              id='sidebar-img'
              src='./assets/right-arrow.png'
              height={20}
              width={20}
            ></img>
          </button>
        </div>
        <div>
          <ul className='sub-navbar-sidebar-ul'>
            <li className='sub-navbar-sidebar-li'>
              <a href='#'>Home</a>
            </li>
            <li className='sub-navbar-sidebar-li'>
              <a href='#'>Shop</a>
            </li>
            <li className='sub-navbar-sidebar-li'>
              <a href='#'>Terms & Conditions</a>
            </li>
            <li className='sub-navbar-sidebar-li'>
              <a href='#'>Return Policy</a>
            </li>
            <li className='sub-navbar-sidebar-li'>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
