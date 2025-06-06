import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import NewProducts from './Components/NewProducts';
import DiscountSection from './Components/DiscountSection';
import FreeShipping from './Components/FreeShipping';
import UpparFooter from './Components/UpparFooter';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
import CartPage from './Components/CartPage';
import ShoppingCart from './Components/ShoppingCart';
import Demo from './Components/Demo';
import Shop from './Components/Shop';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';







function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />}/>
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/cartpage' element={<CartPage />} />
          <Route path='/shoppingcart' element={<ShoppingCart />} />
          <Route path='/productdescription' element={<Shop />} />
          <Route path='/discount' element={<DiscountSection />} />
          <Route path='/newproduct' element={<NewProducts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        
      </Routes>
      
      </BrowserRouter>
      
      {/* <Shop/> */}
      {/* <ProductList/> */}
      {/* <CartPage /> */}
      {/* <ShoppingCart/> */}
      {/* <Demo/> */}
    </>
  );
}

export default App;
