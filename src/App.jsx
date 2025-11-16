import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl ">
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Projects />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;
