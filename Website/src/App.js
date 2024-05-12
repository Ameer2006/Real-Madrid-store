import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Componants/Navbar';
import Footer from './Componants/Footer';
import Products from './Componants/Products';
import ProductDetails from './Componants/ProductDetails';
import Contact from './Componants/Contact';
import Cart from './Componants/Cart';
import Login from './Componants/Login'
import SignUp from './Componants/Signup'
import PaymentCard from './Componants/PaymentCard';
import About from './Componants/About';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/pay' element={<PaymentCard />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}
