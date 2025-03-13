import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
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
          />
          <FeatureCard
            icon="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d865e56357d6565e7bc63f_responsive.svg"
            title="Responsive"
            description="Use this template on any screen size as it's flexible and optimized."
          />
          <FeatureCard
            icon="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d861e996beff6a63c30e97_pricing-label.png"
            title="Affordable Pricing"
            description="Doodlio template comes with an affordable pricing that fits anyone."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <img src={icon} alt={title} className="feature-card-icon" />
      <h3 className="heading h6 card-heading">{title}</h3>
      <p className="paragraph large features-paragraph">{description}</p>
      <img
        src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66c7140403f4ce1c8aa304ad_flower.svg"
        alt=""
        className="flower-graphic"
      />
    </div>
  );
};

export default FeaturesSection;
