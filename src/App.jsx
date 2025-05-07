
import './App.css'
import About from './components/About'
import Footer2 from './components/footer'

import Hero1 from './components/hero'
import Layanan from './components/layanan'
import Navbar from './components/navbar'
import PartnersSection from './components/Partners'
import PhotoGallery from './components/portofolio'
import Team from './components/team'

function App() {
  return (
    <>
      <Navbar />
      <Hero1 />
      <About />
      <Team/>
      <PhotoGallery />
      <Layanan />
      <PartnersSection />
      <Footer2 />
     
      
    </>
  )
}

export default App
