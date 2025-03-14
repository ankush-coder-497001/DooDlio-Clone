import React from 'react'
import "../../App.css"

function Hero() {
  return (
    <section className="hero-section">
        <div className="container">
        <div className="hero-details-wrap">
      <div className="hero-details">
        <h1 className="heading h1">Connect with your customers</h1>
      </div>
      <div className="text-box m">
        <p className="paragraph large">
          Use our template to quickly and efficiently brand your growing business.
        </p>
        <div className="spacer _2r"></div>
      </div>
      <div className="hero-buttons-wrap">
        <a href="/" className="button w-button w--current">
          Preview Template
        </a>
        <a href="/admin/licensing" className="button outline w-button">
          Learn More
        </a>
      </div>
      <div className="spacer _2r"></div>
      <p className="paragraph large">Our template used by</p>
      <div className="logos-wrapper">
        <div className="gradient-block-right"></div>
        <div className="gradient-block-left"></div>
        <div className="logos-grid-wrap">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="w-layout-grid _6-column-grid">
              {[...Array(6)].map((_, i) => (
                <img
                  key={i}
                  src={`https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66b87fa4300d381ca5846aec_placeholder-${i + 1}.svg`}
                  loading="lazy"
                  alt="Placeholder Logo"
                  className={`placeholder-logo ${i === 5 ? "nexus" : ""}`}
                />
              ))}
            </div>
          ))}
        </div>
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