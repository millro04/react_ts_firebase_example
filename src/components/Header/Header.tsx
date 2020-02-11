import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-wrapper">
      <header className="header-text">Reading Tracker</header>
      <div className="header-description">
        An app designed to track how many minutes I have spent reading books
      </div>
    </div>
  );
};

export default Header;
