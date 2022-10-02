import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
const Footer = () => {
  return (
    <footer id="footer" className="footer-section">
      <div className="footer">
        <div className="logo">
          <h1>
            Stay<span>Fit</span>
          </h1>
          <h5>Get Fit with StayFit</h5>
        </div>
        <div className="menu">
          <ul>
            <span className="span-headers">Links</span>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#trainers">Trainers</a>
            </li>
            <li>
              <a href="#prices">Pricing</a>
            </li>
          </ul>
          <div className="products">
            <ul>
              <span className="span-headers">Products</span>
              <li>
                <a href="">Dumbbells</a>
              </li>
              <li>
                <a href="">Gym Equipments</a>
              </li>
              <li>
                <a href="">Protein Powder</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="credits">
        <div className="credits-section">
          <span>
            Made with ♥ by{' '}
            <a className="github" href="https://github.com/PrgVaibhav">
              Vaibhav
            </a>
          </span>
        </div>
        <div className="credits-social">
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <AiOutlineGithub />
          <AiOutlineLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
