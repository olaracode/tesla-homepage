import React from "react";
import "./Header.css";
import teslaLogo from "../assets/teslaLogoSmall.svg";
function Header() {
  return (
    <div className="header">
      <div className="headerLogo">
        <img src={teslaLogo} alt="Tesla Logo" />
      </div>
      <div className="headerCenter">
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panel</p>
      </div>
      <div className="headerRight">
        <p>Shop</p>
        <p>Tesla Account</p>
      </div>
    </div>
  );
}

export default Header;
