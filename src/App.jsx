import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Certificated from './components/Certificated';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <About />
            <Services />
            <Pricing />
            <Portfolio />
            <Testimonials />
            <Certificated />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
