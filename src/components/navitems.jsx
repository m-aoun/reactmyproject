import React, { useState } from 'react';

const Navitems = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const ShowMenu = () => {
    setMenuVisible(true);
  };

  const HideMenu = () => {
    setMenuVisible(false);
  };

  return (
    <nav className="navbar w-100 d-flex justify-content-between align-items-center z-2 " style={{ width: '90%' }} id="changeonscroll">
      <a href="/" style={{ textDecoration: 'none' }}>
        <h1 className="fa fa-graduation-cap " style={{ fontSize: '40px', color: '#f44336', display: 'block', top: '-43px' }}>
          <span className='size-small' style={{ color: 'white', fontFamily: 'Courier New', paddingLeft: '10px' }}>MAS Web</span>
        </h1>
      </a>

      <div className={`nav-links ${menuVisible ? 'show' : 'hide'}`}>
        <i className="fa fa-times" onClick={HideMenu}></i>

        <ul >
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/course">COURSE</a></li>
          <li><a href="/blog">BLOG</a></li>
          <li><a href="/contact">CONTACT</a></li>
        </ul>
      </div>
      <i className="fa fa-bars hide" onClick={ShowMenu}></i>
    </nav>
  );
};

export default Navitems;
