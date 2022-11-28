import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import "./Header.css";
import CartImage from "../images/shopping-cart.png";
import { contextState } from "../Context/Context";

const Header = ({}) => {
  const {cart, setCart} = useContext(contextState)
  return (
    <div>
      <div className="topnav">
        <Link to="/" className="active">Home</Link>
        <Link to="/cart"> Cart:{<img src={CartImage}/>} {cart.length}</Link>
      </div>
    </div>
  );
};

export default Header;
