import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

import FeaturesSection from './components/FeaturesSection/FeaturesSection'


import Services from './components/Services/Services'
import Team from './components/Team/Team'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import IntegrationsSection from './components/IntegrationsSection/IntegrationsSection'
import Pricing from './components/Pricing/Pricing'
import HowItWorks from './components/How_It_Work/HIW'
import './responsive.css'
import CaseStudies from './components/CaseStudies/CaseStudies'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <FeaturesSection/>
    <HowItWorks/>
    <IntegrationsSection/>
    <Services/>
    <CaseStudies/>
    <Pricing/>
    <Team/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default App
