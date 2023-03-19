import React from 'react';
import { useNavigate } from 'react-router-dom';
import './shop.css';

const Shop = () => {
  const navigate = useNavigate();
  return (
    <div className='shop-main'>
      <div className='shop-div'>
        <h1 id='shop-tag'>Shop</h1>
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
          Shop
        </p>
      </div>
      <div className='shop-card-main-div-1'>
        <div className='shop-card-div' onClick={() => navigate('/products')}>
          <img className='shop-card-img' src='./assets/product.jpg' alt='' />
          <h1>Title (5)</h1>{' '}
        </div>
        <div className='shop-card-div' onClick={() => navigate('/products')}>
          <img className='shop-card-img' src='./assets/product.jpg' alt='' />
          <h1>Title (5)</h1>{' '}
        </div>
        <div className='shop-card-div' onClick={() => navigate('/products')}>
          <img className='shop-card-img' src='./assets/product.jpg' alt='' />
          <h1>Title (5)</h1>{' '}
        </div>
        <div className='shop-card-div' onClick={() => navigate('/products')}>
          <img className='shop-card-img' src='./assets/product.jpg' alt='' />
          <h1>Title (5)</h1>{' '}
        </div>
        <div className='shop-card-div' onClick={() => navigate('/products')}>
          <img className='shop-card-img' src='./assets/product.jpg' alt='' />
          <h1>Title (5)</h1>{' '}
        </div>
        <div className='shop-card-div' onClick={() => navigate('/products')}>
          <img className='shop-card-img' src='./assets/product.jpg' alt='' />
          <h1>Title (5)</h1>{' '}
        </div>
        <div className='shop-card-div' onClick={() => navigate('/products')}>
          <img className='shop-card-img' src='./assets/product.jpg' alt='' />
          <h1>Title (5)</h1>{' '}
        </div>
        <div className='shop-card-div' onClick={() => navigate('/products')}>
          <img className='shop-card-img' src='./assets/product.jpg' alt='' />
          <h1>Title (5)</h1>{' '}
        </div>
      </div>
      <div className='shop-card-main-div-2'>
        <div className='shop-card-div' onClick={() => navigate('/products')}>
          <img className='shop-card-img' src='./assets/product.jpg' alt='' />
          <h1>Title (5)</h1>{' '}
        </div>
        <div className='shop-card-div' onClick={() => navigate('/products')}>
          <img className='shop-card-img' src='./assets/product.jpg' alt='' />
          <h1>Title (5)</h1>{' '}
        </div>
        <div className='shop-card-div' onClick={() => navigate('/products')}>
          <img className='shop-card-img' src='./assets/product.jpg' alt='' />
          <h1>Title (5)</h1>{' '}
        </div>
        <div className='shop-card-div' onClick={() => navigate('/products')}>
          <img className='shop-card-img' src='./assets/product.jpg' alt='' />
          <h1>Title (5)</h1>{' '}
        </div>
        <div className='shop-card-div' onClick={() => navigate('/products')}>
          <img className='shop-card-img' src='./assets/product.jpg' alt='' />
          <h1>Title (5)</h1>{' '}
        </div>
        <div className='shop-card-div' onClick={() => navigate('/products')}>
          <img className='shop-card-img' src='./assets/product.jpg' alt='' />
          <h1>Title (5)</h1>{' '}
        </div>
        <div className='shop-card-div' onClick={() => navigate('/products')}>
          <img className='shop-card-img' src='./assets/product.jpg' alt='' />
          <h1>Title (5)</h1>{' '}
        </div>
        <div className='shop-card-div' onClick={() => navigate('/products')}>
          <img className='shop-card-img' src='./assets/product.jpg' alt='' />
          <h1>Title (5)</h1>{' '}
        </div>
      </div>
    </div>
  );
};

export default Shop;
