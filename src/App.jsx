import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/cart';
import Contact from './components/contact';
import Home from './components/home';
import Layout from './components/layout';
import PrivacyPolicy from './components/privacy_policy';
import Return_Policy from './components/return-policy';
import Shop from './components/shop';
import Terms_Conditions from './components/terms-conditions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Shop />} />
          <Route path='/return_policy' element={<Return_Policy />}/>
          <Route path='/terms&conditions' element={<Terms_Conditions />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/privacy_policy' element={<PrivacyPolicy />}/>
          <Route path='/cart' element={<Cart />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
