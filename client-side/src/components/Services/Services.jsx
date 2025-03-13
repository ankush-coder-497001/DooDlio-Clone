import "./services.css"

const Services = () => {
  return (
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
            <svg className="icon" viewBox="0 0 24 24" width="24" height="24">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" fill="red" />
            </svg>
          </div>

          <div className="service-item copywriting">
            <span className="service-text">Copywriting</span>
            <svg className="icon" viewBox="0 0 24 24" width="24" height="24">
              <path d="M8 12h8M12 16V8" stroke="currentColor" strokeWidth="2" fill="none" />
              <path
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          <div className="service-item research">
            <span className="service-text">Research</span>
            <svg className="icon" viewBox="0 0 24 24" width="24" height="24">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div className="service-item design">
            <span className="service-text">Design</span>
            <svg className="icon" viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          <div className="service-item some">
            <span className="service-text">SoMe</span>
            <svg className="icon" viewBox="0 0 24 24" width="24" height="24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="9" cy="9" r="1" fill="currentColor" />
              <circle cx="15" cy="9" r="1" fill="currentColor" />
            </svg>
          </div>

          <div className="service-item qa">
            <span className="service-text">Q&A</span>
            <svg className="icon" viewBox="0 0 24 24" width="24" height="24">
              <path d="M9 11l3 3l6-6" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

