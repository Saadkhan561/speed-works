import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import './products.css';

const Products = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='shop-div'>
        <h1 id='shop-tag'>Products</h1>
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
          <a id='anchor' href='/shop'>
            products
          </a>
          <img
            src='./assets/right-link-arrow.png'
            alt=''
            height={15}
            width={15}
          />
          product title
        </p>
      </div>
      <div className='product-main-div'>
        <div className='product-sub-div'>
          <div
            className='product-card-div'
            onClick={() => navigate('/product-desc')}
          >
            <img id='product-img' src='./assets/product.jpg' alt='' />
            <h2 id='tag'>Title</h2>
            <h4 id='img-tag'>$654.6</h4>
            <div className='product-button-div'>
              <button className='product-button'>Add to cart</button>
            </div>
          </div>
          <div
            className='product-card-div'
            onClick={() => navigate('/product-desc')}
          >
            <img id='product-img' src='./assets/product.jpg' alt='' />
            <h2 id='tag'>Title</h2>
            <h4 id='img-tag'>$654.6</h4>
            <div className='product-button-div'>
              <button className='product-button'>Add to cart</button>
            </div>
          </div>
          <div
            className='product-card-div'
            onClick={() => navigate('/product-desc')}
          >
            <img id='product-img' src='./assets/product.jpg' alt='' />
            <h2 id='tag'>Title</h2>
            <h4 id='img-tag'>$654.6</h4>
            <div className='product-button-div'>
              <button className='product-button'>Add to cart</button>
            </div>
          </div>
          <div
            className='product-card-div'
            onClick={() => navigate('/product-desc')}
          >
            <img id='product-img' src='./assets/product.jpg' alt='' />
            <h2 id='tag'>Title</h2>
            <h4 id='img-tag'>$654.6</h4>
            <div className='product-button-div'>
              <button className='product-button'>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
