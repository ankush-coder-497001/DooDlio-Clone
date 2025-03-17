import React from 'react'
import "./Footer.css"
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import membershape from "./images/66d8250558f119dd651c5bfc_member-card-bg-shape-1.svg"

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  Pages: [{ first: "Home", sec: "Home" }],
  Admin: [{first:"Style Guide",sec:"Style Guide"}, {first:"Licensing",sec:"Licensing"}, {first:"Change Log",sec:"Change Log"}, {first:"Password",sec:"Password"}, {first:"404",sec:"404"}],
  Social: [{first:"Instagram",sec:"Instagram"}, {first:"Facebook",sec:"Facebook"}, {first:"Youtube",sec:"Youtube"}, {first:"Linkedin",sec:"Linkedin"}, {first:"X",sec:"X"}],
  Contact: [{first:"Email Me",sec:"Email Me"}, {first:"+67 24 24 12 45",sec:"+67 24 24 12 45"}],
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
            <img className='membershape' src={membershape} alt="" />
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
              <p>© Xudo</p>
              <p>
                Designed and developed by <a className='footer-left' href="#">Muhammad Talha</a> | Powered by <a className='footer-left' href="#">TechXudo</a>
              </p>
              <h1>Xudo</h1>
            </div>
            <div className="footer-links">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} className="footer-column">
                  <h3>{category}</h3>
                  <ul>
                    {links.map((link, index) => (
                      <li key={index}>
                        <div className='footer-link'>
                          <a id='fs' href="#">{link.first}</a>
                          <a id='fs' href="#">{link.sec}</a>
                        </div>
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