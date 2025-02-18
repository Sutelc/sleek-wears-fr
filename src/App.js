
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategory from './pages/shopCategory';
import Products from './pages/products';
import Cart from './pages/cart';
import LoginSignUp from './pages/loginSignUp';
import Footer from './components/footer/footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>} />
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>} />
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>} />
      <Route path='/product' element={<Products/>}>
      <Route path=':productId' element={<Products/>} />
      </Route>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<LoginSignUp/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
