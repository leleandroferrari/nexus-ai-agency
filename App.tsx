import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';
import { BackgroundVisuals } from './components/BackgroundVisuals';
import { AgencyCards } from './components/AgencyCards';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      <BackgroundVisuals />
      <Navbar />
      <main>
        <Hero />
        <AgencyCards />
        <About />
        <Services />
        <CaseStudies />
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default App;