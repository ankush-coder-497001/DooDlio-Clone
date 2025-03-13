import React from 'react'
import "../../App.css"
const Navbar = () => {
  return (
    <header className="header">
    <div className="container">
      <nav className="navigation-wrapper">
        <div className="navigation">
          <div className="navigation-left">
            <a href="#features" className="navigation-link">
              <span className="link-text">Features</span>
            </a>
            <a href="#how-it-works" className="navigation-link">
              <span className="link-text">How it Works</span>
            </a>
            <a href="#integrations" className="navigation-link">
              <span className="link-text">Integrations</span>
            </a>
          </div>
          <div className="navigation-middle">
            <a href="/" className="logo-link">
              <img
                src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66b74696ae40a0a4ef3eabf2_Logo.svg"
                alt="Logo"
                className="doodlio-logo"
              />
            </a>
          </div>
          <div className="navigation-right">
            <nav className="navigation-menu">
              <a href="#faq" className="navigation-link">FAQ</a>
              <a href="#team" className="navigation-link">Team</a>
              <a href="#pricing" className="navigation-link">Pricing</a>
            </nav>
            <a
              href="https://webflow.com/dashboard/marketplace-checkout?workspace=toms-design&p=6709fb0da04d688b7962788e"
              className="small-button light"
            >
              Buy Template
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
  )
}

export default Navbar