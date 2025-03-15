import React from "react";
import "./FeaturesSection.css";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {

  const container = useRef();

  useGSAP(() => {
    var tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '.features-heading',
          // markers: true,
          start: "top center",
          end: "0% center",
          scrub: 1,
        }
      }
    );

    tl.from('.features-heading', {
      opacity: 0,
      y: "-40%",
      duration: 1,
    }, "ab");

    tl.from('.features-paragraph', {
      opacity: 0,
      y: "-40%",
      duration: 1,
    }, "ab");
    tl.from('.underlines', {
      opacity: 0,
      x: "-40%",
      duration: 0.6,
    }, "ab");

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.features-grid',
        // markers: true,
        start: "10% center",
        end: "10% center",
        scrub: 1,
      }
    });

    tl2.from('.features-grid', {
      opacity: 0,
      y: "-40%",
      duration: 1,
    });
    tl2.to('.card-paragraph', {
      opacity: 1,
      y: 0,
      duration: 4,
      delay: 2,
    });
  }, { scope: container });

  return (
    <main ref={container}>
      <section id="features" className="section features-section">
        <div className="container features-container">
          <div className="features-header-wrap">
            <div className="text-box l">
              <h2 className="heading h2 features-heading">
                Including SVG Illustrations & Icons
              </h2>
              <img
                src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66cca8db8a533870de77b48b_underlines.svg"
                loading="lazy"
                alt=""
                className="underlines"
              />
            </div>
            <div className="text-box s">
              <p className="paragraph large features-paragraph">
                Our unique illustrations & icons will allow you to explain
                concepts relevant to the Tech industry in an engaging and fun way.
              </p>
            </div>
          </div>

          <div className="text-box l">
            <div className="spacer _2r"></div>
          </div>

          <div className="features-grid">
            <FeatureCard
              icon="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d868aa8ff33370b43d811b_support.svg"
              title="Support"
              description="Reach out and we will answer any questions on how to use the template."
              middle="false"
            />
            <FeatureCard
              icon="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d865e56357d6565e7bc63f_responsive.svg"
              title="Responsive"
              description="Use this template on any screen size as it's flexible and optimized."
              middle="true"
            />
            <FeatureCard
              icon="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d861e996beff6a63c30e97_pricing-label.png"
              title="Affordable Pricing"
              description="Doodlio template comes with an affordable pricing that fits anyone."
              middle="bottom"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const FeatureCard = ({ icon, title, description, middle }) => {
  return (
    <div className="feature-card">
      <img src={icon} alt={title} className="feature-card-icon" />
      <h3 className="heading h6 card-heading">{title}</h3>
      <p className="paragraph large features-paragraph card-paragraph">{description}</p>
      <img
        src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66c7140403f4ce1c8aa304ad_flower.svg"
        alt=""
        className={`flower-graphic ${middle === "true" ? "flower-graphic-middle" : middle === "bottom" ? "flower-graphic-bottom" : ""}`}
      />
    </div>
  );
};

export default FeaturesSection;
