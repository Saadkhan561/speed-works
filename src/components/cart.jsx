// CSS IN shop.css FILE
import React from "react";
import './cart.css'

const Cart = () => {
  return (
    <>
      <div className="shop-div">
        <h1 id="shop-tag">Cart</h1>
        <p id="p-tag">
          <a id="anchor" href="/">
            home
          </a>
          <img
            src="./assets/right-link-arrow.png"
            alt=""
            height={15}
            width={15}
          />
          Cart
        </p>
      </div>
      <div className="cart-main-div">
        <div className="footer-cart-div">
          Your cart is currently empty<br />
          <a id="store-link" href="/shop">
            Browse Store
          </a>
          <h1 id="status-tag">New In Store</h1>
        </div>
        <div className="cart-card-div">
            <div className="cart-card">
                <h2 id="title">Hand Brake</h2>
                <p id="price-tag">$846.2</p>
                <button className="footer-cart-button">Add to cart</button>
            </div>
            <div className="cart-card">
                <h2 id="title">Hand Brake</h2>
                <p id="price-tag">$846.2</p>
                <button className="footer-cart-button">Add to cart</button>
            </div>
            <div className="cart-card">
                <h2 id="title">Hand Brake</h2>
                <p id="price-tag">$846.2</p>
                <button className="footer-cart-button">Add to cart</button>
            </div>
            <div className="cart-card">
                <h2 id="title">Hand Brake</h2>
                <p id="price-tag">$846.2</p>
                <button className="footer-cart-button">Add to cart</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
