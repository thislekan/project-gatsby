import React from 'react';
import WhiteLogo from '../assets/img/Logo-1.svg';

const Footer = () => (
  <div className="footer-section">
    <div className="footer-section__wrapper">
      <img src={WhiteLogo} alt="Logo icon" />
      <p>
        All rights reserved <span className="copyright">&#9400;</span>
      </p>
    </div>
  </div>
);

export default Footer;
