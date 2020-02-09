import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-wrapper">
      <header className="header-text">
          Reading Tracker
      </header>
      <div className='header-description'>
        This a small app designed to track how many minutes you've spent reading per day.
      </div>
    </div>
  );
}

export default Header;
