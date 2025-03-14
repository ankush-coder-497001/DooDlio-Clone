import React from 'react'
import "../Team/Team.css"
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  Pages: ["Home"],
  Admin: ["Style Guide", "Licensing", "Change Log", "Password", "404"],
  Social: ["Instagram", "Facebook", "Youtube", "Linkedin", "X"],
  Contact: ["Email Me", "+67 24 24 12 45"],
}
function Footer() {

  const container = useRef();

  useGSAP(() => {
    var tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '.cta-section',
          // markers: true,
          start: "-5% center",
          end: "-5% center",
          scrub: 1,
        }
      }
    );


    tl.from('.cta-content h2', {
      opacity: 0,
      y: "-40%",
      duration: 1,
    }, "ab");

    tl.from('.cta-content p', {
      opacity: 0,
      y: "-40%",
      duration: 1,
      delay: 0.5,
    }, "ab");

    tl.from('.cta-buttons', {
      opacity: 0,
      y: "-50%",
      duration: 1,
      delay: 1,
    });

  }, { scope: container });

  return (
    <>

      <main ref={container}>
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
      </main>


    </>
  )
}

export default Footer