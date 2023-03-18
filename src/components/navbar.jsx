import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar-sub-div">Logo Name</div>
      <div className="search-bar-div">
        <div className="search-bar-sub-div">
            <input className="search-field" type="text" placeholder="search here"/>
            <button className="search-button">Search</button>
        </div>
      </div>
      <div className="navbar-sub-div">Account</div>
      <div className="navbar-sub-div">Shopping Cart</div>
    </div>
  );
};

export default Navbar;
