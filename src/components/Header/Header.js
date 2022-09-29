import React from "react";
import logo from "../../logo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <div className="container header-container">
        <img className="logo" src={logo} alt="" />
      </div>
    </nav>
  );
};

export default Header;
