import React from 'react';

const Footer = () => {
    return ( 
        <div className='main-footer'>
            <div>Logo Name</div>
            <div>
                <img src="./assets/facebook.png" alt="" />
                <img src="./assets/instagram.png" alt="" />
            </div>
            <div>
                <h5>Links</h5>
                <ul>
                    <li>Home</li>
                    <li>Return Policy</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h5>My Account</h5>
                <ul>
                    <li>Cart</li>
                    <li>Checkout</li>
                    <li>My account</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;