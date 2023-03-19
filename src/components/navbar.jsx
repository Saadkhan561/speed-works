import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [categoryDiv, setCategoryDiv] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [account, setAccount] = useState(false);
  const [cart, setCart] = useState(false);

  const navigate = useNavigate()

  return (
    <>
      <div className={sideBar ? "opacity" : ""}>
        <div className="navbar-main-1">
          <div className="logo-div-1">Logo Name</div>
          <div className="search-bar-div">
            <div className="search-bar-sub-div">
              <input
                className="search-field"
                type="text"
                placeholder="search here"
              />
              <button className="search-button">
                <img src="./assets/search.png" alt="" height={20} width={20} />
              </button>
            </div>
          </div>
          <div className="account-div">
            <div className="account-sub-div">
              <button
                className="account-button"
                onClick={() => setAccount(!account)}
              >
                <img src="./assets/profile.png" alt="" height={45} width={45} />
              </button>
              <div id="account-sub-div2">
                <p id="login-here">login here</p>
                <p id="my-account">
                  <b>My Account</b>
                </p>
              </div>
              <div
                className={account ? "create-acc-div-1" : "create-acc-div-hidden"}
              >
                <h4 id="login-div">Login to your account</h4>
                <form className="account-form" action="">
                  <div className="input-div">
                    {" "}
                    <label htmlFor="email">Username or email address</label>
                    <input className="input-field" type="email" id="email" />
                  </div>
                  <div className="input-div">
                    <label htmlFor="password">Password</label>
                    <input
                      className="input-field"
                      type="password"
                      id="password"
                    />
                  </div>
                  <div id="check-box-div">
                    <input
                      type="checkbox"
                      id="checkbox"
                      className="check-input"
                    />
                    <label className="check-label" htmlFor="checkbox">
                      Register
                    </label>
                  </div>
                </form>
                <button className="submit-button" type="submit">
                  SUBMIT
                </button>
                <div className="forgotpass-div">
                  <a>Register</a> | <a>Forgot Password</a>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-div">
            <div className="account-sub-div">
              <button className="cart-button" onClick={() => setCart(!cart)}>
                <img src="./assets/cart.png" alt="" height={45} width={45} />
              </button>
              <div id="account-sub-div2">
                <p id="login-here">Shopping Cart</p>
                <p id="my-account">
                  <b>$ 0.00</b>
                </p>
              </div>
            </div>
            <div className={cart?"cart-product-div-1":'cart-product-div-hidden'}>
              <ul className="product-ul">
                <li className="product-li"><a href="#">Product</a></li>
                <li className="product-li"><a href="#">Product</a></li>
                <li className="product-li"><a href="#">Product</a></li>
                <li className="product-li"><a href="#">Product</a></li>
                <li className="product-li"><a href="#">Product</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-main-2">
          <div className="account-div">
            <div className="account-sub-div">
              <button
                className="account-button"
                onClick={() => setAccount(!account)}
              >
                <img src="./assets/profile.png" alt="" height={45} width={45} />
              </button>
              <div id="account-sub-div2">
                <p id="login-here">login here</p>
                <p id="my-account">
                  <b>My Account</b>
                </p>
              </div>
              <div
                className={account ? "create-acc-div-2" : "create-acc-div-hidden"}
              >
                <h4 id="login-div">Login to your account</h4>
                <form className="account-form" action="">
                  <div className="input-div">
                    {" "}
                    <label htmlFor="email">Username or email address</label>
                    <input className="input-field" type="email" id="email" />
                  </div>
                  <div className="input-div">
                    <label htmlFor="password">Password</label>
                    <input
                      className="input-field"
                      type="password"
                      id="password"
                    />
                  </div>
                  <div id="check-box-div">
                    <input
                      type="checkbox"
                      id="checkbox"
                      className="check-input"
                    />
                    <label className="check-label" htmlFor="checkbox">
                      Register
                    </label>
                  </div>
                </form>
                <button className="submit-button" type="submit">
                  SUBMIT
                </button>
                <div className="forgotpass-div">
                  <a>Register</a> | <a>Forgot Password</a>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-div">
            <div className="account-sub-div">
            <button className="cart-button" onClick={() => setCart(!cart)}>
                <img src="./assets/cart.png" alt="" height={45} width={45} />
              </button>
              <div id="account-sub-div2">
                <p id="login-here">Shopping Cart</p>
                <p id="my-account">
                  <b>$ 0.00</b>
                </p>
              </div>
            </div>
          </div>
          <div className={cart?"cart-product-div-2":'cart-product-div-hidden'}>
              <ul className="product-ul">
                <li className="product-li"><a href="#">Product</a></li>
                <li className="product-li"><a href="#">Product</a></li>
                <li className="product-li"><a href="#">Product</a></li>
                <li className="product-li"><a href="#">Product</a></li>
                <li className="product-li"><a href="#">Product</a></li>
              </ul>
            </div>
        </div>
        <hr />
        <div className="sub-navbar-1">
          <div className="category-button-div">
            <button
              className="category-button"
              onClick={() => setCategoryDiv(!categoryDiv)}
            >
              <div className="category-button-sub-div">
                <div>
                  <img src="./assets/category-bar.png" alt="" />
                </div>
                <div id="category-text">Shop By Category</div>
              </div>
            </button>
            <div
              className={categoryDiv ? "category-list" : "category-list-hidden"}
            >
              <ul className="category-ul">
                <li className="category-li">
                  <a href="#">BATTERIES/CHARGERS</a>
                </li>
                <li className="category-li">
                  <a href="#">BRAKES</a>
                </li>
                <li className="category-li">
                  <a href="#">ENGINE</a>
                </li>
                <li className="category-li">
                  <a href="#">FUEL</a>
                </li>
                <li className="category-li">
                  <a href="#">HEADS/PORTING SERVICE</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-ul-div">
            <ul className="nav-ul">
              <li className="nav-li">
                <a href="/">Home</a>
              </li>

              <li className="nav-li">
                <a href="/shop">Shop</a>
              </li>

              <li className="nav-li">
                <a href="/return_policy">Return Policy</a>
              </li>

              <li className="nav-li">
                <a href="/terms&conditions">Terms & Conditions</a>
              </li>

              <li className="nav-li">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sub-navbar-2">
          <div className="logo-div-2">Logo Name</div>
          <div>
            <button
              className="sidebar-button"
              onClick={() => setSideBar(!sideBar)}
            >
              <img
                src="./assets/options-bar.png"
                alt=""
                height={30}
                width={30}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          sideBar ? "sub-navbar-sidebar-div" : "sub-navbar-sidebar-div-hidden"
        }
      >
        <div className="sidebar-logo-div">
          <div id="logo-2">Logo Name</div>
          <button id="sidebar-img-button" onClick={() => setSideBar(!sideBar)}>
            <img
              id="sidebar-img"
              src="./assets/right-arrow.png"
              height={20}
              width={20}
            ></img>
          </button>
        </div>
        <div>
          <ul className="sub-navbar-sidebar-ul">
            <li className="sub-navbar-sidebar-li">
              <a href="#">Home</a>
            </li>
            <li className="sub-navbar-sidebar-li">
              <a href="#">Shop</a>
            </li>
            <li className="sub-navbar-sidebar-li">
              <a href="#">Terms & Conditions</a>
            </li>
            <li className="sub-navbar-sidebar-li">
              <a href="#">Return Policy</a>
            </li>
            <li className="sub-navbar-sidebar-li">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
