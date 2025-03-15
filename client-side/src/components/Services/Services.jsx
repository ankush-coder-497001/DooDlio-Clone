import "./services.css"
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
gsap.registerPlugin(ScrollTrigger);

const Services = () => {

  const container = useRef();
  const images = {
    Marketing :"https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d8482b48cd16dd6d585d40_arrow-swirl-2.svg",
    Design: "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d4332a6a1cec7559b4a1d0_design.svg",
    Copywriting : "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d4288c4e9253e85ddae587_chat-bubble.svg",
    Research :"https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d431343c10bbd36023dc2e_research.svg",
    SoMe : "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d847a3390f5103fa77fa9d_some-2.svg",
    "Q&A" : "https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d434299e923ea6703ad305_q-a.svg",
  }
  useGSAP(() => {
    var tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '.services-content',
          // markers: true,
          start: "-20% center",
          end: "-20% center",
          scrub: 1,
        }
      }
    );

    tl.from('.services-heading', {
      opacity: 0,
      y: "-40%",
      duration: 1,
    }, "ab");

    tl.from('.services-subtitle', {
      opacity: 0,
      y: "-40%",
      duration: 1,
      delay: 1,
    }, "ab");

    tl.from('.services-grid', {
      opacity: 0,
      y: "-50%",
      duration: 10,
      delay: 10,
    }, "ab");

  }, { scope: container });

  return (
    <main ref={container}>
      <div className="services-container">
        <div className="services-content">
          <div className="heading-wrapper">
            <h1 className="services-heading">Services</h1>
            <div className="yellow-blob"></div>
          </div>

          <p className="services-subtitle">Areas we can help you reach your business goals.</p>

          <div className="services-grid">
            <div className="service-item marketing">
              <span className="service-text">Marketing</span>
              <img src={images.Marketing} alt="Marketing" className="icon" width="24" height="24" />
            </div>

            <div className="service-item copywriting">
              <span className="service-text">Copywriting</span>
              <img src={images.Copywriting} alt="Copywriting" className="icon" width="24" height="24" />
            </div>

            <div className="service-item research">
              <span className="service-text">Research</span>
              <img src={images.Research} alt="Research" className="icon" width="24" height="24" />
            </div>

            <div className="service-item design">
              <span className="service-text">Design</span>
              <img src={images.Design} alt="Design" className="icon" width="24" height="24" />
            </div>

            <div className="service-item some">
              <span className="service-text">SoMe</span>
              <img src={images.SoMe} alt="SoMe" className="icon" width="24" height="24" />
            </div>

            <div className="service-item qa">
              <span className="service-text">Q&A</span>
              <img src={images["Q&A"]} alt="Q&A" className="icon" width="24" height="24" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Services

