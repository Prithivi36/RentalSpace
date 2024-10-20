import './App.css'
import FAQ from './components/Faq'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import Navbar from './components/Navbar'
import WhatYouParking from './components/WhatYouParking'

function App() {


  return (
    <>
      <div className="app">
        <Navbar/>
        <HeroSection/>
        <WhatYouParking/>
        <HowItWorks/>
        <FAQ/>
        <Footer/>
      </div>
    </>
  )
}

export default App
