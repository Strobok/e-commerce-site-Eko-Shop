import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import MainPage from './pages/MainPage.jsx';
import Category from './pages/Category.jsx';
import Cart from './pages/Cart.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import ShopContextProvider from "./context/ShopContextProvider";

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<MainPage />} />
            <Route path="category" element={<Category />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
        </Routes>
      </Router>
    </ShopContextProvider>
  )
}

export default App
