import React from 'react'
import "../Team/Team.css"

const footerLinks = {
  Pages: ["Home"],
  Admin: ["Style Guide", "Licensing", "Change Log", "Password", "404"],
  Social: ["Instagram", "Facebook", "Youtube", "Linkedin", "X"],
  Contact: ["Email Me", "+68 24 24 12 45"],
}
function Footer() {
  return (
<>

    <section className="cta-section">
    <div className="cta-content">
      <h2>Start shipping to customers today</h2>
      <p>We are ready to launch when you are, let's go!</p>
      <div className="cta-buttons">
        <button className="btn-primary">Sign Up Now</button>
        <button className="btn-secondary">Learn More</button>
      </div>
    </div>
  </section>

    <footer className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <p>© Doodlio</p>
        <p>
          Designed and developed by <a href="#">Zens Design</a> | Powered by <a href="#">Webflow</a>
        </p>
      </div>
      <div className="footer-links">
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="footer-column">
            <h3>{category}</h3>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </footer>
  </>
  )
}

export default Footer