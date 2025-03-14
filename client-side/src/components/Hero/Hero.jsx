import styles from './Hero.module.css'

export default function Hero() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Connect with your customers</h1>
          <p className={styles.subheading}>
            Use our template to quickly and efficiently brand your growing business.
          </p>
          <div className={styles.buttons}>
            <button className={styles.previewButton}>Preview Template</button>
            <button className={styles.learnButton}>Learn More</button>
          </div>
          
          <div className={styles.usedBySection}>
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
        
        <div className={styles.illustration}>
          <img 
            src="https://cdn.prod.website-files.com/66b74339fc387196ca3341f8/66d41e81b5bebfb7d648c79f_hero-illustration-v2.svg" 
            alt="Hero Illustration" 
            className={styles.heroImage}
          />
        </div>
      </div>
    </main>
  )
}
