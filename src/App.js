import React, {useEffect} from 'react';
import './css/style.min.css'
import Header from './components/Header'
import Skillbar from './components/Skillbar'
import './helper'
import Aos from 'aos'
import "aos/dist/aos.css"
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "leaflet/dist/leaflet.css";




function App() {

  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, [])

  return (
    <div className="app">

      <Header />

      <Aboutme />

      <Projects />

      <Skillbar />
  
      <Contact />
      
      <Footer />
      
    </div>
  );
}

export default App;
