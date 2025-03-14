
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

import FeaturesSection from './components/FeaturesSection/FeaturesSection'

import HowItWorks from './components/How_It_Work/How_It_Work'
import Services from './components/Services/Services'
import Team from './components/Team/Team'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import IntegrationsSection from './components/IntegrationsSection/IntegrationsSection'
import Pricing from './components/Pricing/Pricing'
import FAQ from './components/FAQ/FAQ'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <FeaturesSection/>
    <HowItWorks/>
    <IntegrationsSection/>
    <Services/>
    <FAQ/>
    <Team/>
    <Pricing/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default App
