import React from 'react'
import "../../App.css"

function Hero() {
  return (
    <section className="hero-section">
        <div className="container">
          <div className="hero-details">
            <h1>Connect with your customers</h1>
            <p>Use our template to quickly and efficiently brand your growing business.</p>
            <div className="hero-buttons-wrap">
              <a href="/" className="button">Preview Template</a>
              <a href="/admin/licensing" className="button outline">Learn More</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d41e81b5bebfb7d648c79f_hero-illustration-v2.svg"
              alt="Hero Illustration"
              className="hero-image"
            />
          </div>
        </div>
      </section>
  )
}

export default Hero