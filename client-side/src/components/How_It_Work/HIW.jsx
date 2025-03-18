
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
gsap.registerPlugin(ScrollTrigger);

import "./HIW.css"


const HowItWorks = () => {

  const container = useRef();

  useGSAP(() => {
    var tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '.main-heading',
          // markers: true,
          start: "-100% center",
          end: "-100% center",
          scrub: 1,
        }
      }
    );

    tl.from('.main-heading', {
      opacity: 0,
      y: "-40%",
      duration: 1,
    }, "ab");

    tl.from('.subtitle', {
      opacity: 0,
      y: "-40%",
      duration: 1,
      delay: 0.5,
    }, "ab");

    var tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.cards-container',
          // markers: true,
          start: "0% center",
          end: "0% center",
          scrub: 1,
        }
    });

    tl2.from('.card', {
      opacity: 0,
      y: "-20%",
      duration: 0.5,
      stagger: 0.2,
    });
  }, { scope: container });

  return (
    <main ref={container}>
      <div id='how-it-works' className="how-it-works-container">
        <div className="how-it-works-content">
          <h1 className="main-heading">What we do?</h1>
          <p className="subtitle">
          Learn how to create high-performing social content efficiently <br /> and boost your brand’s online presence in no time.
          </p>

          <div className="cards-container">
            <div className="card">
              {/* <div className="stage-label">STAGE 1</div> */}
              <div className="illustration">
                <img src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d193262b0b25a14d66b5a0_problem.svg" alt="Discover a Problem" />
              </div>
              <h2 className="card-heading">Financial Management</h2>
              <p className="card-text">
              Accurate financial management is crucial for any business's success. Pinpointing core issues in your financial accounts and management processes is vital for making informed decisions, optimizing resources, and driving growth.
              </p>
              {/* <button className="learn-more-btn">Learn More</button> */}
            </div>

            <div className="card">
              {/* <div className="stage-label">STAGE 2</div> */}
              <div className="illustration">
                <img src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d18ee65730673e34f17109_payment.svg" alt="Purchase Template" />
              </div>
              <h2 className="card-heading">Content
              strategy</h2>
              <p className="card-text">
              Our content strategy approach is designed to deliver dynamic and engaging content experiences, optimized for all channels and audiences. It's flexible, easy to execute, and includes a comprehensive guide to ensure consistent messaging and brand storytelling across all platforms.
              </p>
              {/* <button className="learn-more-btn">Learn More</button> */}
            </div>

            <div className="card">
              {/* <div className="stage-label">STAGE 3</div> */}
              <div className="illustration">
                <img src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d18f87f3e440d19c822453_enjoy-results.svg" alt="Enjoy Results" />
              </div>
              <h2 className="card-heading">Monetization
              setup</h2>
              <p className="card-text">
              With our monetization setup solutions, you can optimize revenue streams. Maximize earnings and build a profitable business model. Drive growth and success with our expert solutions. Achieve long-term financial stability and prosperity.
              </p>
              {/* <button className="learn-more-btn">Learn More</button> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HowItWorks

