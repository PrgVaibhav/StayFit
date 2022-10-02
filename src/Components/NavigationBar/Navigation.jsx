import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
const Navigation = () => {
  const [fixedNavbar, setFixedNavbar] = useState(false);

  function checkNavScroll() {
    if (window.scrollY >= 300) {
      setFixedNavbar(true);
    }
  }

  window.addEventListener('scroll', checkNavScroll);
  function onToggle() {
    const navToggler = document.querySelector('.nav-toggler');
    navToggler.classList.toggle('active');
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('open');
    if (nav.classList.contains('open')) {
      nav.style.maxHeight = nav.scrollHeight + 'px';
    } else {
      nav.setAttribute('style', '');
    }
  }
  return (
    <header className={fixedNavbar ? 'header fixed ' : 'header'}>
      <div className="navbar-header">
        <div className="row">
          <div className="logo">
            <h1 href="#">
              <span className="title-first-name">Stay</span>
              <span className="title-second-name">Fit</span>
            </h1>
          </div>
          <button type="button" onClick={onToggle} className="nav-toggler">
            <span></span>
          </button>
          <nav className="navbar">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#trainers">Trainers</a>
              </li>
              <li>
                <a href="#prices">Pricing</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
              <li>
                <Button className="sign-in-btn" href="#">
                  Sign In
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
