import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/work/Portfolio';
// import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>

      <Header />
      <main className="flex flex-col gap-16 pt-20 bg-gradient-to-r from-slate-900 to-slate-800 min-h-screen">
        <section id="home" className="scroll-mt-20 " data-aos="fade-up">
          <Home />
        </section>

        <section id="about" className="scroll-mt-20 " data-aos="fade-up">
          <About />
        </section>

        <section id="skills" className="scroll-mt-20 " data-aos="fade-up">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-20" data-aos="fade-up">
          <Portfolio />
        </section>

        {/* <section id="contact" className="scroll-mt-20" data-aos="fade-up">
          <Contact />
        </section> */}
        <Footer />
      </main>


    </>
  );
}

export default App;
