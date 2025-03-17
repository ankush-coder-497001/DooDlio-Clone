
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
              <h2 className="card-heading">Account analysis & management</h2>
              <p className="card-text">
                Standing out from the competition is crucial for any Startups success. Pinpointing core issues in your
                business marketing and sales processes is vital for businesses.
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
              Xudo social creative and production approach is designed with a dynamic and engaging style, optimized for all platforms. It’s flexible, easy to use, and includes a strategy guide to ensure brand consistency.
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
              With our social creative and production solutions, you can maximize engagement, grow your audience, and build a strong brand presence that drives revenue.
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

