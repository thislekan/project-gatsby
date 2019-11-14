import React, { useState } from 'react';
import { Link } from 'gatsby';

import Logo from '../assets/img/Logo.svg';
import Cancel from '../assets/img/cancel.svg';
import Hamburger from '../assets/img/hamburger.svg';

const initialState = { showBottomNav: false };

export default (props) => {
  const [state, setState] = useState(initialState);

  const confirmPath = (path) => {
    if (path === props.path) return 'link-div--active';
    return '';
  };

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
            state.showBottomNav ? 'navbar__wrapper__bottom-div--displayed' : ''
          }`}
        >
          <div className={`link-div ${confirmPath('/')}`}>
            <span />
            <Link to="/">Home</Link>
          </div>
          <div className={`link-div ${confirmPath('/products')}`}>
            <span />
            <Link to="/products">Products</Link>
          </div>
          <div className="link-div link-div--logo">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
          <div className={`link-div ${confirmPath('/blog')}`}>
            <span />
            <Link to="/blog">Blog</Link>
          </div>
          <div className={`link-div ${confirmPath('/contact')}`}>
            <span />
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
