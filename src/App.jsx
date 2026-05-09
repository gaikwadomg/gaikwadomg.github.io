import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SkillsTech from './components/SkillsTech';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <SkillsTech />
        <Experience />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
