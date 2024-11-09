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
// import HostMain from './components/Host/HostMain';
import HostDashboard from './components/Host/HostDashboard';
import User from './components/User/User';
import Login from './components/SigninLogin/Login';
import SignUp from './components/SigninLogin/SignUp';
import StorageForm from './components/Storage/StorageForm';
import Storage from './components/Storage/Storage';
import StorageDash from './components/Storage/StorageDash';


function App() {
  return (
    <HashRouter>
      <div className="app">
        <div className="nav-bg">
        <Navbar />
        </div>
        
        <Routes>
          {/* Default Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <div className="hr">
              
                </div>
                <WhatYouParking />
                <HowItWorks />
                <FAQ />
                <Footer />
                {/* <StorageForm/> */}
              </>
            }
          />

          {/* Host Page */}
          <Route path="/host" element={<Host />} />
          {/* <Route path="/hostmain" element={<HostMain/>} /> */}
          <Route path='/hostdash' element={<HostDashboard/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/storage' element={<Storage/>}/> 
          <Route path='/storagedash' element={<StorageDash/>}/> 




        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
