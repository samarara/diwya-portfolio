import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const Navbar = () => {
  const [active, setIsactive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState('');

  useEffect(() => {
    active ? setNavBarActiveClass('is-active') : setNavBarActiveClass('');
  }, [active]);

  const toggleHamburger = () => {
    setIsactive(!active);
  };

  const handleOnClick = () => toggleHamburger();

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item nav-item-override" title="Logo">
            {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
            Diwya De Silva
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={handleOnClick}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
          <div className="navbar-start has-text-centered"></div>
          <div className="navbar-end has-text-centered">
            <Link className="navbar-item nav-item-override" to="/photography">
              Photography
            </Link>
            <Link className="navbar-item nav-item-override" to="/illustrations">
              Illustrations
            </Link>
            <Link className="navbar-item nav-item-override" to="/case-studies">
              Case Studies
            </Link>
            {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            <Link className="navbar-item nav-item-override" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
