import React, { useState } from 'react';
import "../../App.css";
import logo from "./images/logo.svg"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="navigation-wrapper">
          <div className="navigation">

            {/* Hamburger Icon for Mobile */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </div>

            <div className="navigation-left">
              <a href="#features" className="navigation-link">
                <span className="link-text link-text1">Features</span>
                <span className="link-text link-text2">Features</span>
              </a>
              <a href="#how-it-works" className="navigation-link">
                <span className="link-text link-text1">How it Works</span>
                <span className="link-text link-text2">How it Works</span>
              </a>
              <a href="#integrations" className="navigation-link">
                <span className="link-text link-text1">Integrations</span>
                <span className="link-text link-text2">Integrations</span>
              </a>
            </div>

            <div className="navigation-middle">
              <a href="/" className="logo-link">
                <img
                  src={logo}
                  alt="Logo"
                  className="xudo-logo"
                />
                <h2>Xudo</h2>
              </a>
            </div>

            <div className="navigation-right">
              <nav className="navigation-menu">
                {/* <a href="#faq" className="navigation-link">
                  <span className="link-text link-text1">FAQ</span>
                  <span className="link-text link-text2">FAQ</span>
                </a> */}
                <a href="#team" className="navigation-link">
                  <span className="link-text link-text1">Team</span>
                  <span className="link-text link-text2">Team</span>
                </a>
                <a href="#pricing" className="navigation-link">
                  <span className="link-text link-text1">Pricing</span>
                  <span className="link-text link-text2">Pricing</span>
                </a>
              </nav>
              {/* <a
                href="https://webflow.com/dashboard/marketplace-checkout?workspace=toms-design&p=6709fb0da04d688b7962788e"
                className="small-button light"
              >
                Login
              </a> */}
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="#features" className="mobile-link">Features</a>
          <a href="#how-it-works" className="mobile-link">How it Works</a>
          <a href="#integrations" className="mobile-link">Integrations</a>
          {/* <a href="#faq" className="mobile-link">FAQ</a> */}
          <a href="#team" className="mobile-link">Team</a>
          <a href="#pricing" className="mobile-link">Pricing</a>
          <a
            href="https://webflow.com/dashboard/marketplace-checkout?workspace=toms-design&p=6709fb0da04d688b7962788e"
            className="mobile-button"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
