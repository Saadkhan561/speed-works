import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="main-footer-1">
        <div className="logo-name">Logo Name</div>
        <div className="icon-div">
          <button className="social-button">
            {" "}
            <img src="./assets/facebook.png" alt="" />
          </button>
          <button className="social-button">
            {" "}
            <img src="./assets/instagram.png" alt="" />
          </button>
        </div>
        <div className="link-div">
          <h2 id="link-id">Links</h2>
          <ul className="footer-ul">
            <li className="footer-li">
              <a href="/">Home</a>
            </li>
            <li className="footer-li">
              <a href="/return_policy">Return Policy</a>
            </li>
            <li className="footer-li">
              <a href="/privacy_policy">Privacy Policy</a>
            </li>
            <li className="footer-li">
              <a href="/terms&conditions">Terms & Conditions</a>
            </li>
            <li className="footer-li">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-account-div">
          <h2 id="account-id">My Account</h2>
          <ul className="footer-ul">
            <li className="footer-li">
              <a href="/cart">Cart</a>
            </li>
            <li className="footer-li">
              <a href="#">Checkout</a>
            </li>
            <li className="footer-li">
              <a href="#">My account</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-footer-2">
        <div className="footer-row">
          <div className="logo-name">Logo Name</div>
          <div className="icon-div">
            <button className="social-button">
              {" "}
              <img src="./assets/facebook.png" alt="" />
            </button>
            <button className="social-button">
              {" "}
              <img src="./assets/instagram.png" alt="" />
            </button>
          </div>
        </div>
        <div className="footer-row">
          <div className="link-div">
            <h2 id="link-id">Links</h2>
            <ul className="footer-ul">
              <li className="footer-li">
                <a href="/">Home</a>
              </li>
              <li className="footer-li">
                <a href="/return_policy">Return Policy</a>
              </li>
              <li className="footer-li">
                <a href="/privacy_policy">Privacy Policy</a>
              </li>
              <li className="footer-li">
                <a href="/terms&conditions">Terms & Conditions</a>
              </li>
              <li className="footer-li">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-account-div">
            <h2 id="account-id">My Account</h2>
            <ul className="footer-ul">
              <li className="footer-li">
                <a href="/cart">Cart</a>
              </li>
              <li className="footer-li">
                <a href="#">Checkout</a>
              </li>
              <li className="footer-li">
                <a href="#">My account</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
