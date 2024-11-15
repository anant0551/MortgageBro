import React from 'react'
import Header from './components/Header';
import About from './components/About';
import Lending from './components/Lending';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="background-gradient">
      <Header />
      <About/>
      <Lending/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App
