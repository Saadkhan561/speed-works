import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/cart';
import Contact from './components/contact';
import Home from './components/home';
import Layout from './components/layout';
import MyAccount from './components/my-account';
import PrivacyPolicy from './components/privacy_policy';
import ProductDesc from './components/product-desc';
import Products from './components/products';
import Return_Policy from './components/return-policy';
import Shop from './components/shop';
import Terms_Conditions from './components/terms-conditions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/return_policy' element={<Return_Policy />} />
          <Route path='/terms&conditions' element={<Terms_Conditions />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy_policy' element={<PrivacyPolicy />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/my-account' element={<MyAccount />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product-desc' element={<ProductDesc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
