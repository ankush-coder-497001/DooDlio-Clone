import styles from './Hero.module.css'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import blob from "./images/white-blob.svg";
export default function Hero() {

  gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
  const container = useRef();

  useGSAP(() => {
    var tl = gsap.timeline();

    tl.from('#hero_heading', {
      opacity: 0,
      y: "-40%",
      duration: 0.5,
    }, "ab");
    tl.from('#hero_paragraph', {
      opacity: 0,
      y: "-40%",
      duration: 0.5,
      delay: 0.5
    }, "ab");
    tl.from('#btn_group', {
      opacity: 0,
      y: "-40%",
      duration: 0.5,
      delay: 0.8
    }, "ab");
    tl.from('#hero_slider', {
      opacity: 0,
      y: "-40%",
      duration: 0.5,
      delay: 1
    }, "ab");
    tl.from('#illustration', {
      opacity: 0,
      y: "-40%",
      duration: 1,
    }, "ab");

  }, { scope: container });

  return (
    <main ref={container}>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <img src={blob} alt="blob" className={styles.blob} />
            <h1 id='hero_heading' className={styles.heading}>Connect with your customers</h1>
            <p id='hero_paragraph' className={styles.subheading}>
              Use our template to quickly and efficiently brand your growing business.
            </p>
            <div id='btn_group' className={styles.buttons}>
              <button className={styles.previewButton}>Preview Template</button>
              <button className={styles.learnButton}>Learn More</button>
            </div>

            <div id='hero_slider' className={styles.usedBySection}>
              <p className={styles.usedByText}>Our template used by</p>
              <div className={styles.logoContainer}>
                <div className={styles.logoScroll}>
                  <div className={styles.logos}>
                    <img
                      src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66b87fa4300d381ca5846aec_placeholder-1.svg"
                      alt="Nexus Wave"
                      className={styles.logo}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66b880343e22644cfecbde8f_placeholder-2.svg"
                      alt="DotSquare"
                      className={styles.logo}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66b88046f5f5d1125a975078_placeholder-3.svg"
                      alt="Pluto Delux"
                      className={styles.logo}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66b88049754fe5eef29b7e87_placeholder-4.svg"
                      alt="Wiggle"
                      className={styles.logo}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66b8804a38401814faaf7292_placeholder-5.svg"
                      alt="SeaLife"
                      className={styles.logo}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66b8875b02fecdf8d0ff2751_placeholder-6.svg"
                      alt="TriCols"
                      className={styles.logo}
                    />
                  </div>
                  <div className={styles.logos}>
                    <img
                      src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66b87fa4300d381ca5846aec_placeholder-1.svg"
                      alt="Nexus Wave"
                      className={styles.logo}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66b880343e22644cfecbde8f_placeholder-2.svg"
                      alt="DotSquare"
                      className={styles.logo}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66b88046f5f5d1125a975078_placeholder-3.svg"
                      alt="Pluto Delux"
                      className={styles.logo}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66b88049754fe5eef29b7e87_placeholder-4.svg"
                      alt="Wiggle"
                      className={styles.logo}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66b8804a38401814faaf7292_placeholder-5.svg"
                      alt="SeaLife"
                      className={styles.logo}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66b8875b02fecdf8d0ff2751_placeholder-6.svg"
                      alt="TriCols"
                      className={styles.logo}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id='illustration' className={styles.illustration}>
            <img
              src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d41e81b5bebfb7d648c79f_hero-illustration-v2.svg"
              alt="Hero Illustration"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
