import React from 'react';
import './product-desc.css';

const ProductDesc = () => {
  return (
    <>
      <div className='shop-div'>
        <h1 id='shop-tag'>Product Description</h1>
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
          product name
        </p>
      </div>
      <div className='desc-main-div'>
        <div className='desc-div-1'>
          <div className='desc-sub-div-1'>
            <img className='desc-img' src='./assets/product.jpg' alt='' />
          </div>
          <div className='desc-sub-div-2'>
            <h1>Product Name</h1>
            <h2>$352.3</h2>
            <div className='add-to-cart-div'>
              <div className='counter'>
                <button id='counter-btn'>
                  <img src='/assets/minus.png' alt='' height={20} width={20} />
                </button>
                <p id='counter-number'>1</p>{' '}
                <button id='counter-btn'>
                  <img src='/assets/plus.png' alt='' height={20} width={20} />
                </button>
              </div>
              <div className='add-to-cart-btn-div'>
                <button className='product-button'>Add to cart</button>
              </div>
            </div>
            <div>
              <b>Category: </b>category name
            </div>
          </div>
        </div>
        <div className='desc-main-div-2'>
          <div className='desc-div-2'>
            <div className='desc-navbar'>
              <h4 className='desc-navbar-li'>Description</h4>
              <h4 className='desc-navbar-li'>Additional Information</h4>
            </div>
            <div className='desc'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto quia at nesciunt ullam facilis sit ipsum nemo enim
              quod? Assumenda dicta enim magnam consectetur, cumque placeat ut
              repudiandae fuga et excepturi eaque ad expedita tempore amet rem
              non impedit, officia modi. Tempora rerum recusandae non debitis
              explicabo nemo eveniet aliquid.s
            </div>
            <h2>Related Products</h2>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDesc;
