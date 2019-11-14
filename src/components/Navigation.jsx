import React, { useState } from "react";
import { Link } from "gatsby";

import Logo from "../assets/img/Logo.svg";
import Cancel from "../assets/img/cancel.svg";
import Hamburger from "../assets/img/hamburger.svg";

const initialState = { showBottomNav: false };

export default () => {
  const [state, setState] = useState(initialState);
  const toggleNavbar = () => {
    setState({ ...state, showBottomNav: !state.showBottomNav });
  };

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__wrapper__top-div">
          {!state.showBottomNav ? (
            <img
              src={Hamburger}
              alt="hamburger icon"
              className="nav-btn"
              onClick={toggleNavbar}
            />
          ) : (
            <img
              src={Cancel}
              alt="icon to close navigation"
              className="nav-btn"
              onClick={toggleNavbar}
            />
          )}
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div
          className={`navbar__wrapper__bottom-div ${
            state.showBottomNav ? "navbar__wrapper__bottom-div--displayed" : ""
          }`}
        >
          <div className="link-div link-div--active">
            <span />
            <Link to="/">Home</Link>
          </div>
          <div className="link-div">
            <Link to="/products">Products</Link>
          </div>
          <div className="link-div link-div--logo">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
          <div className="link-div">
            <Link to="/blog">Blog</Link>
          </div>
          <div className="link-div">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
