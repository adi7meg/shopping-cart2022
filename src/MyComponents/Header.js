import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="topnav">
        <Link to="/" className="active">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default Header;
