import "./How_It_work.css"

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <div className="how-it-works-content">
        <h1 className="main-heading">How it Works</h1>
        <p className="subtitle">
          Learn how to use our template efficiently and get
          <br />
          your website launched in no time.
        </p>

        <div className="cards-container">
          <div className="card">
            <div className="stage-label">STAGE 1</div>
            <div className="illustration">
              <img src="/images/discover-problem.png" alt="Discover a Problem" />
            </div>
            <h2 className="card-heading">Discover a Problem</h2>
            <p className="card-text">
              Standing out from the competition is crucial for any Startups success. Pinpointing core issues in your
              business marketing and sales processes is vital for businesses.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>

          <div className="card">
            <div className="stage-label">STAGE 2</div>
            <div className="illustration">
              <img src="/images/purchase-template.png" alt="Purchase Template" />
            </div>
            <h2 className="card-heading">Purchase Template</h2>
            <p className="card-text">
              Doodlio Webflow template is made in playful and friendly style, and optimised for responsive devices. It's
              flexible to use and includes a style guide that creates consistency.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>

          <div className="card">
            <div className="stage-label">STAGE 3</div>
            <div className="illustration">
              <img src="/images/enjoy-results.png" alt="Enjoy Results" />
            </div>
            <h2 className="card-heading">Enjoy Results</h2>
            <p className="card-text">
              With our Startup Landing Page Template you will be able to see your sales sky rocket. Get noticed with
              your audience and create an everlasting brand image.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks

