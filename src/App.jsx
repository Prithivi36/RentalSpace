// App.jsx
import './App.css';
import FAQ from './components/Faq';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';
import WhatYouParking from './components/WhatYouParking';
import Host from './components/Host/Host'; // Import Host component
import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom'; // Import routing tools
import HostMain from './components/Host/HostMain';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />
        <Routes>
          {/* Default Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <WhatYouParking />
                <HowItWorks />
                <FAQ />
                <Footer />
              </>
            }
          />

          {/* Host Page */}
          <Route path="/host" element={<Host />} />
          <Route path="/hostmain" element={<HostMain/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
