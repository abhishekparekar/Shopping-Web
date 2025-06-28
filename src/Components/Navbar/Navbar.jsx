import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Shopper Logo" />
        <p>SHOPPER</p>
        <div className={`nav-hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li onClick={() => { setMenu('shop'); setIsMenuOpen(false); }}>
          <Link style={{ textDecoration: 'none' }} to="/">
            Shop
          </Link>
          {menu === 'shop' ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu('mens'); setIsMenuOpen(false); }}>
          <Link style={{ textDecoration: 'none' }} to="/mens">
            Men
          </Link>
          {menu === 'mens' ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu('womens'); setIsMenuOpen(false); }}>
          <Link style={{ textDecoration: 'none' }} to="/womens">
            Women
          </Link>
          {menu === 'womens' ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu('kids'); setIsMenuOpen(false); }}>
          <Link style={{ textDecoration: 'none' }} to="/kids">
            Kids
          </Link>
          {menu === 'kids' ? <hr /> : null}
        </li>
      </ul>
      <div className={`nav-login-cart ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/login" onClick={() => setIsMenuOpen(false)}>
          <button>Login</button>
        </Link>
        <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;