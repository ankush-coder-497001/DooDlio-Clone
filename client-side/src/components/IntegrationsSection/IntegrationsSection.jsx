import React from "react";
import "./IntegrationsSection.css";
import Oval from "./images/circled-oval.svg";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
gsap.registerPlugin(ScrollTrigger);

const integrations = [
  {
    name: "Cateract",
    description: "Design together, in real-time with version control for Sketch. Collaborate in the same file.",
    img: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d2dd08f58793c9a96a4f83_integration-1.svg",
  },
  {
    name: "Apode",
    description: "Apode is a code hosting platform for version control and collaboration and teamwork.",
    img: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d2dd08f58793c9a96a4f97_integration-2.svg",
  },
  {
    name: "Naxer",
    description: "Naxer is a multinational hardware and electronics corporation specializing in electronics.",
    img: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d2dd08f58793c9a96a4f9e_integration-3.svg",
  },
  {
    name: "Vacenture",
    description: "Vacenture is an Irish-American professional specializing in IT services and consulting.",
    img: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d2dd09f58793c9a96a4fb8_integration-4.svg",
  },
  {
    name: "Cateract",
    description: "Design together, in real-time with version control for Sketch. Collaborate in the same file.",
    img: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d2dd08f58793c9a96a4f83_integration-1.svg",
  },
  {
    name: "Apode",
    description: "Apode is a code hosting platform for version control and collaboration and teamwork.",
    img: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d2dd08f58793c9a96a4f97_integration-2.svg",
  },
  {
    name: "Naxer",
    description: "Naxer is a multinational hardware and electronics corporation specializing in electronics.",
    img: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d2dd08f58793c9a96a4f9e_integration-3.svg",
  },
  {
    name: "Vacenture",
    description: "Vacenture is an Irish-American professional specializing in IT services and consulting.",
    img: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d2dd09f58793c9a96a4fb8_integration-4.svg",
  },
  
];

const IntegrationsSection = () => {

  const container = useRef();

  useGSAP(() => {
    var tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '.text',
          // markers: true,
          start: "-40% center",
          end: "-40% center",
          scrub: 1,
        }
      }
    );

    tl.from('.heading', {
      opacity: 0,
      y: "-40%",
      duration: 1,
    }, "ab");

    tl.from('.paragraph1', {
      opacity: 0,
      y: "-40%",
      duration: 1,
      delay: 1,
    }, "ab");

  }, { scope: container });

  return (
    <main ref={container}>
      <section id="integrations" className="integrations-section">
        <div className="container-wrap">
          <div className="container integrations-container">
            <div className="text">
              <div className="text-box integrations-text-box">
                <h2 className="heading"><span className="heading1">Integrate Your</span> <span>Favorite Tools</span></h2>
                <img src={Oval} alt="Oval" className="oval" />
              </div>
              <p className="paragraph1">
              "The integrations section highlights how our social creative and production seamlessly connect with various platforms and tools."
              </p>
            </div>

            <div className="marquee-wrapper">
              <div className="marquee">
                {integrations.map((item, index) => (
                  <div key={index} className="marquee-card" style={{"--i": index}}>
                    <div className="card-header">
                      <img src={item.img} alt={item.name} className="integration-logo" />
                      <h3>{item.name}</h3>
                    </div>
                    <p className="card-description">{item.description}</p>
                    <a href="/" className="integration-link">{item.name} Integration</a>
                  </div>
                ))}
              </div>
            </div>

            <div className="bottom_text">
              <h1>wait, there's more..</h1>
              <img
                src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d2e8f737b0c44d92577c8a_arrow-down.svg"
                alt="arrow"
                className="arrow contact-sales"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IntegrationsSection;
