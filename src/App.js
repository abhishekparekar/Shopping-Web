import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Shop from './pages/Shop';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Cart from './pages/Cart'; // adjust the path based on your file structure
import Login from './pages/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          {/* <Route path='/' element={<Login />} /> */}
          <Route path='/' element={<Shop/>}/>

          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />

          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />}/>
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/signup' element={<LoginSignup/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>


    </div>
  );
}

export default App;
