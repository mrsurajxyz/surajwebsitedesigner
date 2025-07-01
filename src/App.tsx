import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black pointer-events-none" />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;