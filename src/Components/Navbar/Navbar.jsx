import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, Links } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to={"/"}>Shop</Link>
          {menu == "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="mens">Men</Link>
          {menu == "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="womens">Women</Link>
          {menu == "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="kids">Kids</Link>
          {menu == "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        
          <Link to="login"><button>Login</button></Link>
        
      <Link to='cart'> <img src={cart_icon} alt="" /></Link> 
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
